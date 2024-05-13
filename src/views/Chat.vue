<template>
  <div v-if="chatsNotFound">
    <div class="flex flex-col h-full justify-center items-center">
      <div class="flex flex-col justify-center items-center p-48">
        <div class="text-center mb-4">
          <h1 class="text-4xl font-bold mb-2">Nenhum Chat Encontrado</h1>
          <p class="text-lg text-gray-600">Desculpe, você não tem nenhum chat!.</p>
        </div>
        <router-link to="/" class="text-blue-500 underline">Voltar à Página Inicial</router-link>
      </div>
    </div>
  </div>
  <div v-else class="font-sans bg-gray-900 py-8">
    <div class="md:mx-20  flex h-screen relative">

      <!-- Menu -->
      <div
        class="absolute rounded-xl h-5/6 p-2 inset-y-0 left-0 z-10 bg-gray-900 w-3/5 md:w-2/12 sm:w-auto overflow-y-auto transition-transform duration-300 transform"
        :class="{ '-translate-x-full sm:translate-x-0': !showMenu, 'translate-x-0': showMenu }">
        <!-- Conteúdo do menu -->
        <button v-if="windowWidth <= 640" @click="toggleChatMenu"
          class="block sm:hidden p-3 text-lg text-white cursor-pointer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <p class=" text-white text-center text-lg"><strong>IA Chats</strong></p>


        <div class="overflow-y-auto h-5/6">
          <div>
            <RouterLink v-for="(item, index) in chatOptions" :key="index" :to="item.route"
              class="hover:cursor-pointer mt-2 bg-gray-900 text-white">
              <ChatLink :label="item.label" />
            </RouterLink>
          </div>
        </div>

      </div>

      <div class="flex-1 relative z-0">
        <div class="bg-gray-900  h-full">
          <div class="flex h-screen antialiased text-gray-800 justify-end">
            <div class=" flex-row h-full w-full md:w-4/5 overflow-x-hidden">
              <div class=" flex-col flex-auto h-full mx-6">
                <div class="flex flex-col  flex-shrink-0 rounded-2xl bg-gray-100 h-5/6 p-4 relative z-0">
                  <div class="h-14 mb-4 p-4 text-white bg-gray-900 rounded-2xl text-l flex justify-center items-center">
                    <button @click="toggleChatMenu" class="block sm:hidden p-3 text-lg text-white cursor-pointer">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16m-7 6h7"></path>
                      </svg>
                    </button>
                    <p v-if="isChatLoaded" class="ml-2"><strong>IA Chat -</strong> {{ chatsubject }}</p>
                    <p v-else class="ml-2 font-bold">Selecione um Chat</p>
                  </div>
                  <div v-if="isChatLoaded" class="flex flex-col h-full overflow-x-auto mb-4" ref="messageContainer">
                    <div class="flex flex-col h-full">
                      <div class="grid grid-cols-12 gap-y-2">

                        <ChatMessage v-for="(message, index) in messages" :key="index" :isUser="message.isUser"
                          :message="message.text" />

                      </div>
                    </div>
                  </div>
                  <div v-if="isChatLoaded" class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                    <div class="flex-grow ml-2">
                      <div class="relative w-full">
                        <input type="text" v-model="msg" @keyup.enter="sendMessage" id="message"
                          class="flex w-full border rounded-xl focus:outline-none focus:border-gray-900 pl-4 h-10"
                          placeholder="Escreva aqui..." />
                      </div>
                    </div>
                    <div class="ml-4">
                      <button @click="sendMessage"
                        class="flex items-center justify-center bg-gray-900 hover:bg-gray-500 rounded-xl text-white px-4 py-1 flex-shrink-0">

                        <svg class="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div v-if="!isChatLoaded && chatNotFound">
                    <div class="flex flex-col h-full justify-center items-center">
                      <p class="text-lg font-bold">Chat não encontrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import ChatMessage from '@/components/ChatMessage.vue';
import ChatLink from '@/components/ChatLink.vue';
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import userStore from '@/store/user.js'

const userSt = userStore(); // É onde esta armazenado os dados do usuário
const route = useRoute();
const isChatLoaded = ref(false);
const chatsNotFound = ref(true);
const chatNotFound = ref(false);
const showMenu = ref(false);
const windowWidth = ref(window.innerWidth);

const messageContainer = ref(null)

const msg = ref('')
const messages = ref([])
const chatOptions = ref()
const chatsubject = ref('')
const BASE_URL = "http://localhost:3001/api/";

await loadChats();

if (route.params.id) { // Se tiver um id de chat no URL, carrega as mensagens
  await loadMessages();
}

watch(() => route.params.id, async (id) => { // Quando o id do chat mudar no URL, carrega as mensagens
  chatNotFound.value = false
  if (id) {
    await loadMessages();
    scrollToBottom() // Da scroll no chat para a ultima mensagem
  }
})

async function loadMessages() {
  try {
    const response = await fetch(`${BASE_URL}chat/${route.params.id}`, { // Obtem as mensagens do chat :id na API
      headers: {
        'authorization': userSt.token
      }
    })
    if (!response.ok || response.status === 404) {
      return chatNotFound.value = true; // Se não encontrar o chat, mostra uma mensagem de erro
    }

    const data = (await response.json())
    messages.value = data.message; // Adiciona as mensagens ao array de mensagens
    chatsubject.value = data.subject; // Adiciona o assunto do chat
    isChatLoaded.value = true;
  } catch (error) {
    chatNotFound.value = true;
  }
}

async function loadChats() { // Obtem a lista de chats do usuário
  try {
    const response = await fetch(`${BASE_URL}chat/list`, { // Obtem a lista de chats do usuário pela API
      headers: {
        'authorization': userSt.token
      }
    })
    if (!response.ok || response.status === 404) {
      return
    }
    const data = (await response.json()).message
    chatOptions.value = data.map(chat => { // Mapeia os chats para o formato seguinte (label, route)
      const date = new Date(chat.createdAt)
      const formattedDate = date.toLocaleDateString('pt-PT', { // Formata a data para o formato dd/mm/aaaa
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      return {
        label: `${chat.subject} - ${formattedDate}` || 'Chat sem assunto',
        route: `/chat/${chat._id}`
      }
    })
    return chatsNotFound.value = false;
  } catch (error) {
  }
}

async function sendMessage() { // Função para enviar uma mensagem
  if (!msg.value) return; // Se a mensagem estiver vazia, não envia
  const message = {
    text: msg.value,
    isUser: true
  }
  messages.value.push(message) // Adiciona a mensagem ao array de mensagens
  msg.value = ''
  scrollToBottom() // Da scroll automaticamente ao adicionar a mensagem
  try {
    const response = await fetch(`${BASE_URL}chat/${route.params.id}/addMessage`, { // Envia a mensagem para a API e recebe a resposta da OpenAI
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': userSt.token
      },
      body: JSON.stringify({ message: message.text })
    })
    if (!response.ok) {
      return chatNotFound.value = true; // Se não encontrar o chat, mostra uma mensagem de erro
    }
    const data = await response.json()
    messages.value.push({
      text: data.answer,
      isUser: false
    }) // Adiciona a resposta da OpenAI ao array de mensagens
    scrollToBottom() // Da scroll automaticamente ao adicionar a mensagem
  } catch (error) {
    chatNotFound.value = true;
    console.log('error')
  }
}

const toggleChatMenu = () => { // Função para mostrar/esconder o menu (Utilizado em dispositivos móveis)
  showMenu.value = !showMenu.value;
};

const handleResize = () => { // Função para atualizar a largura da janela
  windowWidth.value = window.innerWidth;
  if (windowWidth.value > 640) {
    showMenu.value = false;
  }
};

function scrollToBottom() { // Função para dar scroll automaticamente ao fundo do chat
  if (messageContainer.value) {
    requestAnimationFrame(() => {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    });
  }
}

onMounted(() => {
  if (windowWidth.value > 640) {
    showMenu.value = false;
  }
  window.addEventListener('resize', handleResize);
  scrollToBottom() // Da scroll automaticamente ao fundo do chat
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped></style>

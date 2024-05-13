<template>
  <div class="mx-4 md:mx-8 lg:mx-48" style="font-family: Arial, sans-serif;">
    <h1 class="text-3xl md:text-4xl text-center mt-8 font-bold">Obter Ajuda</h1>

    <h2 class="text-xl md:text-2xl font-semibold mb-2 mt-8">Fale com a nossa assistente virtual</h2>

    <div class="shadow-md rounded-bl-lg rounded-lg ">
      <!-- Campo de entrada de mensagem -->
      <div class="bg-gray-300 p-4 flex flex-col md:flex-row md:items-center rounded-lg">
        <input class="flex-grow h-10 rounded px-3 text-sm mb-2 md:mb-0 md:mr-2" type="text"
          placeholder="Escreva a sua mensagem..." v-model="message" @keyup.enter="sendMessage">
          <!-- Botão de enviar mensagem -->
          <button @click="sendMessage"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
      </div>
    </div>

    <h2 class="text-xl md:text-2xl font-semibold mb-2 mt-8">Contacta-nos</h2>
    <div class="border-b-4 bg-gray-200 rounded-2xl mb-8"></div>

    <!-- Informações de contacto -->
    <div class="flex flex-wrap justify-center">
      <div class="inf mx-auto md:mr-4 lg:mr-0 mb-4 md:mb-0">
        <p class="text-white">E-mail</p>
        <p>skillswap@gmail.com</p>
      </div>
      <div class="inf mx-auto md:mr-4 lg:mr-0 mb-4 md:mb-0">
        <p class="text-white">Telefone</p>
        <p>291 718 291</p>
      </div>
      <div class="inf mx-auto md:mr-4 lg:mr-0 mb-4 md:mb-0">
        <p class="text-white">Telemóvel</p>
        <p>+351 924 174 690</p>
      </div>
      <div class="inf mx-auto">
        <p class="text-white">Whatsapp</p>
        <p>+351 964 041 246</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import userStore from '@/store/user.js';

const { token } = storeToRefs(userStore()); // Importa o token do store

const router = useRouter();
const message = ref('');

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


async function sendMessage() { // Função para enviar mensagem
  if (message.value === '') return; // Se a mensagem estiver vazia, retorna
  if (!token.value) { // Se nao tiver token, ou seja, dado login redereciona para a página de login
    router.push('/login');
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}chat/support`, { // Faz um pedido para o servidor para obter o chat de suporte
      method: 'GET',
      headers: {
        'authorization': token.value,
      }
    })
    const data = (await response.json()).message;

    await fetch(`${BASE_URL}chat/${data._id}/addMessage`, { // Adiciona uma mensagem ao chat
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token.value
      },
      body: JSON.stringify({ message: message.value })
    })

    setTimeout(() => {
      router.push(`/chat/${data._id}`); // Redireciona para o chat depois de 1segundos
    }, 1000);
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.inf {
  width: 200px;
  height: 100px;
  background-color: rgb(209 213 219);
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
}

.inf p {
  margin: 0;
}

.h-chat {
  height: 550px;
}
</style>

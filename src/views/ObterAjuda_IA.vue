<template>
  <div class="mx-4 md:mx-8 lg:mx-48" style="font-family: Arial, sans-serif;">
    <h1 class="text-3xl md:text-4xl text-center mt-8 font-bold">Obter Ajuda</h1>
      
    <h2 class="text-xl md:text-2xl font-semibold mb-2 mt-8">Fale com a nossa assistente virtual</h2>
    <div class="border-b-4 bg-gray-200 rounded-2xl"></div>

    <div class="shadow-md rounded-bl-lg rounded-lg ">
      <div class="mt-8 flex-col items-center justify-center h-chat text-gray-800 p-10 bg-gray-200 rounded-tl-lg rounded-tr-lg overflow-y-auto">
        <div v-for="(chat, index) in chats" :key="index">
          <ObterMessage :notIA="chat.notIA" :message="chat.message" :timestamp="chat.timestamp" />
        </div>
      </div>
      <div class="bg-gray-300 p-4 flex flex-col md:flex-row md:items-center rounded-bl-lg rounded-br-lg">
        <input class="flex-grow h-10 rounded px-3 text-sm mb-2 md:mb-0 md:mr-2" type="text" placeholder="Escreva a sua mensagem...">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
      </div>            
    </div>  

    <h2 class="text-xl md:text-2xl font-semibold mb-2 mt-8">Contacta-nos</h2>
    <div class="border-b-4 bg-gray-200 rounded-2xl mb-8"></div>

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

<script>
import ObterMessage from '@/components/ObterMessage.vue';

export default {
  components: {
    ObterMessage
  },
  data() {
    return {
      chats: [
        { notIA: false, message: "Como posso ajudar??", timestamp: "2 min ago" },
        { notIA: true, message: "Olá! Estou um pouco perdido sobre como começar como freelancer. Pode me dar algumas dicas?", timestamp: "2 min ago" },
        { notIA: false, message: "Claro, ficarei feliz em ajudar! Primeiramente, qual é a sua área de atuação? Escrita, tradução, programação, ou outra coisa?", timestamp: "2 min ago" },
        { notIA: true, message: "Sou programador", timestamp: "2 min ago" },
        { notIA: true, message: "E preciso da tua ajuda", timestamp: "2 min ago" },
        { notIA: false, message: "Ótimo! Iniciar com um portfólio online pode ser muito eficaz. Utilize plataformas como GitHub para compartilhar seus projetos e código-fonte. Isso permite que os potenciais clientes avaliem suas habilidades aqui na SKILLswap. Já possui um portfólio?", timestamp: "2 min ago" }
      ]
    };
  }
};
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

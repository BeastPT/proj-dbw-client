<template>
  <div class="font-sans bg-gray-900">
    
    <div class="md:mx-20  flex h-screen relative">
     
      <!-- Menu -->
      <div class="absolute rounded-xl h-full p-2 inset-y-0 left-0 z-10 bg-gray-900 w-3/5 md:w-2/12 sm:w-auto overflow-y-auto transition-transform duration-300 transform" :class="{ '-translate-x-full sm:translate-x-0': !showMenu, 'translate-x-0': showMenu }">
        <!-- Conteúdo do menu -->
        <button v-if="windowWidth <= 640" @click="toggleChatMenu" class="block sm:hidden p-3 text-lg text-white cursor-pointer">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <p class=" text-white text-center text-lg"><strong>IA Chats</strong></p>
        
        
        <div class="overflow-y-auto h-5/6"> 
          <div>
            <RouterLink to="/chat" class="hover:cursor-pointer mt-2 bg-gray-900 text-white">
              <div class="p-2 h-12 mt-2 mr-2 rounded-md bg-gray-700 flex items-center hover:bg-gray-800">
                <span>Inglês</span>
              </div>
            </RouterLink>
            <RouterLink to="/chat" class="hover:cursor-pointer bg-gray-900 text-white">
              <div class="p-2 h-12 mt-2 mr-2 rounded-md bg-gray-700 flex items-center hover:bg-gray-800">
                <span>Inglês</span>
              </div>
            </RouterLink>
          </div>
        </div>
        
      </div>
    
      <div class="flex-1 relative z-0">
        <div class="bg-gray-900  h-full">
          <div class="flex h-screen antialiased text-gray-800 justify-end">
            <div class=" flex-row h-full w-full md:w-4/5 overflow-x-hidden">
              <div class=" flex-col flex-auto h-full mx-6">
                <div class="flex flex-col  flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 relative z-0">
                  <div class="h-14 mb-4 p-4 text-white bg-gray-900 rounded-2xl text-l flex justify-center items-center">
                    <button @click="toggleChatMenu" class="block sm:hidden p-3 text-lg text-white cursor-pointer">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                      </svg>
                    </button>
                    <p class="ml-2"><strong>IA Chat -</strong> Inglês</p>
                  </div>
                    <div class="flex flex-col h-full overflow-x-auto mb-4">
                  <div class="flex flex-col h-full">
                    <div class="grid grid-cols-12 gap-y-2">
                      <div class="col-start-1 col-end-12 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full  bg-gray-800 text-white flex-shrink-0">I</div>
                          <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>Olá, estou aqui para ajudar!</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-start-1 col-end-12 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full  bg-gray-800 text-white flex-shrink-0">I</div>
                          <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>Por favor envie o que pertende traduzir. </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-start-3 col-end-13 p-3 rounded-lg">
                        <div class="flex items-center justify-start flex-row-reverse">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">Eu</div>
                          <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                            <div>Olá, preciso de ajuda para traduzir um texto do português para o inglês. O texto é o seguinte: "Gostaríamos de informar que haverá uma reunião geral da empresa na próxima sexta-feira, dia 20 de abril, às 14h. A reunião será realizada no auditório principal e abordará os resultados do último trimestre, bem como as metas para o próximo período. Contamos com a presença de todos para discutirmos estratégias e alinharmos nossos objetivos. Se você tiver alguma dúvida ou sugestão, por favor, envie-nos antes da reunião." </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-start-3 col-end-13 p-3 rounded-lg">
                        <div class="flex items-center justify-start flex-row-reverse">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">Eu</div>
                          <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                            <div>É possível traduzir esse texto para mim?</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-start-1 col-end-12 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full  bg-gray-800 text-white flex-shrink-0">I</div>
                          <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>Olá! Claro, estou aqui para ajudar. Aqui está a tradução do texto para o inglês: We would like to inform you that there will be a company-wide meeting next Friday, April 20th, at 2:00 PM. The meeting will take place in the main auditorium and will address the results of the last quarter, as well as the goals for the upcoming period. We count on everyone's presence to discuss strategies and align our objectives. If you have any questions or suggestions, please send them to us before the meeting.</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-start-3 col-end-13 p-3 rounded-lg">
                        <div class="flex items-center justify-start flex-row-reverse">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">Eu</div>
                          <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                            <div>Muito obrigado pela sua ajuda! Você está sendo muito útil com as traduções.</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-start-1 col-end-12 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full  bg-gray-800 text-white flex-shrink-0">I</div>
                          <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div> Fico feliz em poder ajudar! Se você tiver mais textos ou frases para traduzir, é só me enviar.</div>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
                  <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                    <div class="flex-grow ml-2">
                      <div class="relative w-full">
                        <input
                          type="text"
                          class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" placeholder="Escreva aqui..."
                        />
                      </div>
                    </div>
                    <div class="ml-4">
                      <button
                        class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">

                        <svg class="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                      </button>
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

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      showMenu: false,
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    
    if (this.windowWidth > 640) {
      this.showMenu = false;
    }
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleChatMenu() {
      this.showMenu = !this.showMenu;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 640) {
        this.showMenu = false;
      }
    }
  }
};
</script>

<style scoped>

</style>




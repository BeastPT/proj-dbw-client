<template>
  <div class="  font-sans bg-gray-900">
  <div class=" md:mx-12 flex h-screen ">
    <div id="chatMenu" class="hidden sm:flex flex-col w-1/5">
      <a class=" flex mt-6 mx-4 p-3 text-lg items-center justify-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer flex-shrink-0 border border-white/20">
        IA Chats
      </a>
      <div class=" overflow-y-auto h-5/6">
      <router-link to="/chat" class="hover:cursor-pointer mt-2 mx-4 bg-gray-900 text-white">
        <div class="px-4 h-12 rounded-md bg-gray-700 flex items-center ">
          <span>Inglês</span>
        </div>
      </router-link>
      <router-link to="/chat" class="hover:cursor-pointer mt-10 mx-4 bg-gray-900 text-white">
        <div class="px-4 h-12  rounded-md bg-gray-700 flex items-center">
          <span>Espanhol</span>
        </div>
      </router-link>
      <router-link to="/chat" class="hover:cursor-pointer mx-4 bg-gray-900 text-white">
        <div class="px-4 h-12  rounded-md bg-gray-700 flex items-center" >
          <span>Espanhol</span>
        </div>
      </router-link>
      <router-link to="/chat" class="hover:cursor-pointer mt-2 mx-4 bg-gray-900 text-white">
        <div class="px-4 h-12  rounded-md bg-gray-700 flex items-center ">
          <span>Espanhol</span>
        </div>
      </router-link>
      <router-link to="/chat" class="hover:cursor-pointer mt-2 mx-4 bg-gray-900 text-white">
        <div class="px-4 h-12 rounded-md bg-gray-700 flex items-center p-4">
          <span>Espanhol</span>
        </div>
      </router-link>
      <router-link to="/chat" class="hover:cursor-pointer mt-2 mx-4 bg-gray-900 text-white">
        <div class="px-4 h-12 rounded-md bg-gray-700 flex items-center p-4">
          <span>Espanhol</span>
        </div>
      </router-link>
     
  
    </div>
      <!-- Repeat for other chat links -->
    </div>
    
    <div class="flex-1 ">
      <div class="bg-gray-900 flex h-full">

          <div class="flex h-screen antialiased text-gray-800">
            <div class="flex flex-row h-full w-full overflow-x-hidden">
              <div class="flex flex-col flex-auto h-full p-6">
                <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                  <div class="h-14 mb-4 p-4 text-white bg-gray-900 rounded-2xl text-l flex justify-center items-center">
                    <button class="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full text-white px-4 py-1 mr-2">
                      <svg id="menuToggle" class="w-4 h-4 transform -rotate-90 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l-9-2 9-18 9 18-9 2zm0 0v-8"></path>
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

</script>


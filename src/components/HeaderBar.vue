<template>
    <div class="bg-gray-900">
      <nav class="container px-6 py-20 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between w-full"> <!-- Ajuste de largura -->
          <button class="text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400">
            <img src="" alt="Logo" class="h-6 w-6">
          </button>
          

          <div class="hidden md:flex items-center justify-end w-full md:w-auto">  
            <ul class="flex space-x-16">
              <li class="text-xl font-bold text-gray-100 hover:text-indigo-400">Home</li>
              <li class="text-xl font-bold text-gray-100 hover:text-indigo-400">About Us</li>
              <li class="text-xl font-bold text-gray-100 hover:text-indigo-400">Chat</li>
              <li class="text-xl font-bold text-gray-100 hover:text-indigo-400">Comunidade</li>
            </ul>
  
        
            <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400 ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              
            </button>
          </div>
          
            <div class="flex md:hidden justify-between"> <!-- Adicionado o estilo justify-between -->
              <button @click="toggleNav" type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400 mr-4">
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
  
  
        </div>
  
        <ul :class="showMenu ? 'flex flex-col items-center' : 'hidden md:flex md:flex-row md:items-center md:space-x-10 md:mt-0'" class="mt-8 space-y-4">
          <li class="text-xl font-bold text-gray-100 hover:text-indigo-400 md:hidden">Home</li>
          <li class="text-xl font-bold text-gray-100 hover:text-indigo-400 md:hidden">About Us</li>
          <li class="text-xl font-bold text-gray-100 hover:text-indigo-400 md:hidden">Chat</li>
          <li class="text-xl font-bold text-gray-100 hover:text-indigo-400 md:hidden">Comunidade</li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      let showMenu = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      return { showMenu, toggleNav };
    },
  };
  </script>
  
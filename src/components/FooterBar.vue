<template>
    <div class="bg-gray-900 w-full flex flex-col text-white">
      <div class="flex flex-col lg:flex-row justify-between mx-4 lg:mx-48 mt-8 lg:mt-12">
        <!-- Primeira coluna -->
        <div class="flex flex-col lg:mr-8">
          <h3 class="text-xl font-bold text-center lg:flex">Categorias<button @click="toggleShowCategories" class="text-zinc-400 ml-2 lg:hidden" :class="{ 'lg:hidden': showCategories }">{{ showCategories ? '⭡' : '↓' }}</button></h3>
          <nav class="mt-4 lg:mt-6 text-zinc-400 text-xl font-semibold">
            <ul>
              <li class="hidden lg:flex">Mercado Financeiro</li>
              <li class="hidden lg:flex">Programação</li>
              <li class="hidden lg:flex">Tradução</li>
              <li class="hidden lg:flex">Aprendizagem</li>
              <li class="hidden lg:flex">Fitness</li>
              <li v-if="showCategories" class="text-center lg:flex show-small">Mercado Financeiro</li>
              <li v-if="showCategories" class="text-center lg:flex show-small">Programação</li>
              <li v-if="showCategories" class="text-center lg:flex show-small">Tradução</li>
              <li v-if="showCategories" class="text-center lg:flex show-small">Aprendizagem</li>
              <li v-if="showCategories" class="text-center lg:flex show-small">Fitness</li>
              <li v-show="showCategories" class="hidden lg:flex">Outros itens...</li>
            </ul>
          </nav>
        </div>
        <!-- Segunda coluna -->
        <div class="flex flex-col mt-4 lg:mt-0 lg:mr-8">
          <h3 class="text-xl font-bold text-center lg:flex">Obter Ajuda<button @click="toggleShowHelp" class="text-zinc-400 ml-2 lg:hidden" :class="{ 'lg:hidden': showHelp }">{{ showHelp ? '⭡' : '↓' }}</button></h3>
          <nav class="mt-4 lg:mt-6 text-zinc-400 text-xl font-semibold">
            <ul>
              <li class="hidden lg:flex">Estado do pedido</li>
              <li class="hidden lg:flex">Devoluções</li>
              <li class="hidden lg:flex">Contacta-nos</li>
              <li class="hidden lg:flex">Livro de Reclamações</li>
              <li v-if="showHelp" class="text-center lg:flex show-small">Estado do pedido</li>
              <li v-if="showHelp" class="text-center lg:flex show-small">Devoluçõeso</li>
              <li v-if="showHelp" class="text-center lg:flex show-small">Contacta-nos</li>
              <li v-if="showHelp" class="text-center lg:flex show-small">Livro de Reclamações</li>
              <li v-show="showHelp" class="hidden lg:flex">Outros itens...</li>
            </ul>
          </nav>
        </div>
        <!-- Terceira coluna -->
        <div class="flex flex-col mt-4 lg:mt-0 lg:mr-8 ">
          <h3 class="text-xl font-bold text-center lg:flex">About Us<button @click="toggleShowAboutUs" class="text-zinc-400 ml-2 lg:hidden" :class="{ 'lg:hidden': showAboutUs }">{{ showAboutUs ? '⭡' : '↓' }}</button></h3>
          <nav class="mt-4 lg:mt-6 text-zinc-400 text-xl font-semibold">
            <ul>
              <li class="hidden lg:flex">Estado de Notícias</li>
              <li class="hidden lg:flex">Estilo de vida</li>
              <li v-if="showAboutUs" class="text-center lg:flex show-small">Estado de Notícias</li>
              <li v-if="showAboutUs" class="text-center lg:flex show-small">Estilo de vida</li>
              <li v-show="showAboutUs" class="hidden lg:flex">Outros itens...</li>
            </ul>
          </nav>
        </div>
        <!-- Quarta coluna -->
        <div class="flex flex-col mt-4 lg:mt-0 lg:mr-8">
          <h3 class="text-xl font-bold text-center lg:flex">Comunidade<button @click="toggleShowCommunity" class="text-zinc-400 ml-2 lg:hidden" :class="{ 'lg:hidden': showCommunity }">{{ showCommunity ? '⭡' : '↓' }}</button></h3>
          <nav class="mt-4 lg:mt-6 text-zinc-400 text-xl font-semibold">
            <ul>
              <li class="hidden lg:flex">Eventos</li>
              <li class="hidden lg:flex">Tornar-te vendedor</li>
              <li v-if="showCommunity" class="text-center lg:flex show-small">Eventos</li>
              <li v-if="showCommunity" class="text-center lg:flex show-small">Tornar-te vendedor</li>
              <li v-show="showCommunity" class="hidden lg:flex">Outros itens...</li>
            </ul>
          </nav>
        </div>
        <!-- Quinta coluna -->
        <div class="flex lg:items-center justify-center mt-4 lg:mt-0 lg:ml-8">
          <Socials />
        </div>
      </div>
      <!-- Footer -->
      <div class="flex flex-col lg:flex-row items-center mx-4 lg:mx-48 mt-8 lg:mt-32 border-t-4 border-t-white p-6">
        <span class="text-xl font-bold text-center lg:text-left lg:w-1/3">SkillSwapp Logo</span>
        <span class="text-xl font-bold mt-4 lg:mt-0 text-center lg:text-center lg:w-1/3">Madeira, Portugal</span>
        <span class="text-sm font-light mt-4 lg:mt-0 text-center lg:text-right lg:w-1/3">Política de Privacidade e Cookies</span>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import Socials from './Socials.vue';
  import { ref } from 'vue';
  
  const showCategories = ref(false);
  const showHelp = ref(false);
  const showAboutUs = ref(false);
  const showCommunity = ref(false);
  
  const toggleShowCategories = () => {
    showCategories.value = !showCategories.value;
    if (showCategories.value) {
      showAboutUs.value = false;
      showCommunity.value = false;
      showHelp.value = false;
    }
  }
  
  const toggleShowHelp = () => {
    showHelp.value = !showHelp.value;
    if (showHelp.value) {
      showCategories.value = false;
      showAboutUs.value = false;
      showCommunity.value = false;
    }
  }
  
  const toggleShowAboutUs = () => {
    showAboutUs.value = !showAboutUs.value;
    if (showAboutUs.value) {
      showCategories.value = false;
      showCommunity.value = false;
      showHelp.value = false;
    }
  }
  
  const toggleShowCommunity = () => {
    showCommunity.value = !showCommunity.value;
    if (showCommunity.value) {
      showCategories.value = false;
      showAboutUs.value = false;
      showHelp.value = false;
    }
  }
  </script>
  
  <style scoped>
  button {
    vertical-align: middle;
  }
  </style>
  
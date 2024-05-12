<template>
  <div class="text-center font-semibold mb-10 text-2xl p-4">
    <!-- Botões com texto reduzido em telas menores -->
    <div class="flex flex-wrap justify-center mx-auto">
      <button class="mr-6 py-2 px-2 md:px-4 text-base md:text-lg hover:underline">Perfil</button>
      <button class="mr-6 py-2 px-2 md:px-4 text-base md:text-lg hover:underline">Compras</button>
      <button class="py-2 px-2 md:px-4 text-base md:text-lg hover:underline">Favoritos</button>
    </div>
  </div>

  <!-- ######################  PERFIL ############################### -->

  <div class="font-semibold flex flex-col md:flex-row justify-between items-center mb-4 rounded-lg">
    <div class="flex items-center mb-4 md:mb-0">
      <img :src="imgUrl" class="w-16 h-16 rounded-full" alt="Imagem de perfil">
      <div class="ml-4">
        <h2 class="text-lg mb-1">{{fullnameh}}</h2>
        <p class="text-sm text-gray-500">Membro da SKILLswap desde {{yearjoined}}</p>
      </div>
    </div>
    <div class=" md:text-right md:mb-0 md:ml-auto md:mr-4">
      <Popup/>
    </div>
    <button @click="logout" class="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 mt-4 md:mt-0">Sair da Sessão</button>
  </div>

  <div class="bg-white p-8 rounded-lg border border-gray-900 mb-8">
    <form  class="flex flex-wrap -mx-2">
      <div class="w-full md:w-1/2 px-2 mb-4">
        <label for="fullname" class="block text-gray-700 font-semibold mb-2">Nome Completo:</label>
      </div>
    </form>
  </div>

  
</template>

<script>
import Popup from '@/components/Popup.vue';

export default {
  components: {
    Popup 
  }
}
</script>

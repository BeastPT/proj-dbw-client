<template>
  <div class="flex items-center justify-center">
    <button @click="isOpen = true" class="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Alterar Foto de Perfil
    </button>

    <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center">
        <div class="fixed inset-0 bg-black opacity-50"></div>
        
        <div class="z-20 bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full mx-auto p-6 text-left">
          <div class="mb-4 flex justify-between items-center">
            <span class="font-bold">Alterar Foto de Perfil</span>
            <button @click="closeModal" class="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
              Fechar
            </button>
          </div>

          <div class="mb-4 flex flex-col items-center md:flex-row md:items-start">
            <input v-model="imageUrl" type="text" class="mb-2 md:mb-0 md:mr-2 w-full" placeholder="Insira o link da imagem">
            <span v-if="!previewImage && !imageUrl" class="text-red-500"></span>
          </div>

          <button @click="handleImageLink" class="bg-gray-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Alterar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      imageUrl: '', 
      previewImage: null
    };
  },
  methods: {
    closeModal() {
      this.isOpen = false;
    },
    handleImageLink() {
      if (this.imageUrl.trim() !== '') {
        this.previewImage = this.imageUrl;
        this.isOpen = false; 
      }
    }
  }
};
</script>

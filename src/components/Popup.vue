<template>
    <div class="flex items-center justify-center h-screen">
      <button @click="isOpen = true" class="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Alterar Foto de Perfil
      </button>
  
      <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center h-full">
          <div class="fixed inset-0 bg-black opacity-50"></div>
          
          <div class="z-20 bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full mx-auto p-6">
            <div class="mb-4">
              <span class="font-bold">Alterar Foto de Perfil</span>
              <button @click="closeModal" class="float-right text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                Fechar
              </button>
            </div>
  
            <div class="mb-4 flex flex-col items-center md:flex-row md:items-start">
              <input type="file" @change="handleFileUpload" accept="image/*" class="mb-2 md:mb-0 md:mr-2 w-full">
              <span v-if="!previewImage && !selectedImages"></span>
            </div>
  
            <div v-if="previewImage" class="mb-4">
              <img :src="previewImage" alt="Preview" class="max-w-full h-auto">
            </div>
  
            <button @click="saveChanges" class="bg-gray-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Salvar Alterações
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
        selectedImage: null,
        previewImage: null
      };
    },
    methods: {
      closeModal() {
        this.isOpen = false;
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedImage = file;
          this.previewImage = URL.createObjectURL(file);
        }
      },
      saveChanges() {
        this.isOpen = false;
      }
    }
  };
  </script>
  
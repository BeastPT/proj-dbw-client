<template>
  <div class="w-full mt-2 space-x-3 max-w-xs flex" :class="{ 'ml-auto justify-end':notIA, 'justify-start': !notIA }">
    <div v-if="!notIA" class="flex-shrink-0 h-10 w-10 rounded-full image-IA"></div> 
    <div>
      <div :class="{ 'bg-gray-300': notIA, 'bg-blue-400 text-white': !notIA }" class="p-3 rounded-r-lg rounded-bl-lg">
        <p class="text-sm">{{ message }}</p>
      </div>
      <span class="text-xs text-gray-500 leading-none">{{ timestamp }}</span>
    </div>
    <div v-if="notIA" class="flex-shrink-0 h-10 w-10 rounded-full image-client"></div> 
  </div>
</template>

<script>
export default {
  props: {
    notIA: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
/* Estilos das imagens dos avatares */
.image-IA,
.image-client {
  background-size: cover;
  background-position: center;
  border: 2px solid #1b1d2d;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

/* Estilo específico do avatar da IA */
.image-IA {
  background-image: url('/src/assets/images/IA.jpg'); /* Substitua pelo caminho correto da imagem da IA */
}

/* Estilo específico do avatar do cliente */
.image-client {
  background-image: url('/src/assets/images/cliente.jpg'); /* Substitua pelo caminho correto da imagem do cliente */
}
</style>

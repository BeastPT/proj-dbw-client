<template>
    <div class="flex justify-between mx-4 md:mx-16">
      <div class="w-full sm:w-full md:w-5/6 lg:w-2/4 mb-8 bg-gray-300 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-6">{{ Title }}</h2>
        <div class="flex flex-wrap mb-4">
          <p class="w-full lg:text-left w-1/2">Freelancer: {{ Name }}</p>
          <p class="w-full lg:text-left ">Código do projeto: {{ ProjectCode }}</p>
          <p class="w-full lg:text-left w-1/6">Valor: {{ Value }}</p>
        </div>
        <div class="flex flex-wrap">
          <p class="w-full lg:text-left ">Data de pedido: {{ OrderDate }}</p>
        </div>
      </div>
  
      <div class="flex items-center">
        <img :src="imageSrc" :alt="imageAlt" class="w-10 h-10 md:max-w-none md:w-auto">
      </div>
  
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 mb-8 bg-gray-300 p-2 md:p-3 lg:p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-3">{{ rightTitle }}</h2>
        <p>Estado: {{ rightStatus }}</p>
        <p>Entrega final: {{ rightDeliveryDate }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      Title: String,
      Name: String,
      ProjectCode: String,
      Value: String,
      OrderDate: String,
      rightTitle: String,
      rightStatus: String,
      rightDeliveryDate: String,
      imageSrc: String,
      imageAlt: String
    }
  }
  </script>
  
  <style scoped>
  </style>
  
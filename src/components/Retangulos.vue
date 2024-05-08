<template>
    <div class="flex justify-between mx-4 md:mx-16"> 
      <div class="w-full sm:w-1/2 lg:w-1/3 mb-8 bg-gray-300 p-2 md:p-3 lg:p-4 rounded-lg"> 
        <h2 class="text-lg font-semibold mb-3">{{ leftTitle }}</h2> 
        <div class="flex flex-wrap mb-1 md:mb-2 lg:mb-3"> 
          <p class="w-full lg:text-left w-1/2">{{ leftFreelancer }}</p>
          <p class="w-full lg:text-left ">{{ leftProjectCode }}</p>
          <p class="w-full lg:text-left w-1/3">{{ leftValue }}</p> 
        </div>
        <div class="flex flex-wrap">
          <p class="w-full lg:text-left ">{{ leftOrderDate }}</p>
        </div>
      </div>
  
      <div class="flex items-center">
        <img :src="imageSrc" :alt="imageAlt" class="w-10 h-10 md:mx-2">
      </div>
  
      <div class="w-full sm:w-1/2 lg:w-1/3 mb-8 bg-gray-300 p-2 md:p-3 lg:p-4 rounded-lg"> 
        <h2 class="text-lg font-semibold mb-3">{{ rightTitle }}</h2> 
        <p>{{ rightStatus }}</p>
        <p>Entrega final: {{ rightDeliveryDate }}</p>
      </div>
    </div>
  </template>
  
  
  
  <script>
  export default {
    props: {
      leftTitle: String,
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
  
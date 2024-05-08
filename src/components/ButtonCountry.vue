<template>
    <button class="relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img :src="`/images/${image}`" :alt="altText" class="w-full h-auto rounded-lg">
      <p class="font-semibold text-left">{{ countryName }}</p>
    </button>
    
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      altText: String,
      countryName: String
    }
  };
  </script>
  
  <style scoped>

  </style>
  
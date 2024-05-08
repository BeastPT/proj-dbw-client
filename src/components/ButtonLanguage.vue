<template>
    <div class="flex flex-wrap justify-center text-center mb-10">
      <button class="btn bg-gray-900 text-white border border-gray-900 rounded-md py-4 px-8 mr-4 mb-4 hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">{{ button1Text }}</button>
      <button class="btn bg-gray-900 text-white border border-gray-900 rounded-md py-4 px-8 mr-4 mb-4 hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">{{ button2Text }}</button>
      <button class="btn bg-gray-900 text-white border border-gray-900 rounded-md py-4 px-8 mb-4 hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">{{ button3Text }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      button1Text: String,
      button2Text: String,
      button3Text: String
    }
  };
  </script>
  
  <style scoped>
  .button-container {
    margin-top: 20px; 
    margin-bottom: 20px; 
  }
  </style>
  
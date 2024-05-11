<template>
    <div :class="{ 'col-start-1 col-end-12': !isUser, 'col-start-3 col-end-13': isUser }" class="p-3 rounded-lg">
      <div v-if="!isUser" class="flex flex-row items-center">
        <div class="rounded-full overflow-hidden flex-shrink-0" style="width: 2.5rem; height: 2.5rem;">
          <img src="/src/assets/images/IA_icon.png" alt="Avatar da IA" class="h-full w-full">
        </div>
        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{{ message }}</div>
        </div>
      </div>
      <div v-else class="flex items-center justify-start flex-row-reverse">
        <div class="rounded-full overflow-hidden flex-shrink-0" style="width: 2.5rem; height: 2.5rem;">
          <img src="/src/assets/images/user_icon.png" alt="Avatar do usuário" class="h-full w-full">
        </div>
        <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>{{ message }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isUser: {
        type: Boolean,
        required: true
      },
      message: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  
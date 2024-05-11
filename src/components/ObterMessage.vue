<template>
  <div class="w-full mt-2 space-x-3 max-w-xs flex" :class="{ 'ml-auto justify-end':notIA, 'justify-start': !notIA }">
    <div v-if="!notIA" class="flex-shrink-0 h-10 w-10 rounded-full">
      <img src="/src/assets/images/IA_icon.png" alt="Avatar do usuário" class="h-full w-full">
    </div> 
    <div>
      <div :class="{ 'bg-gray-300': notIA, 'bg-blue-400 text-white': !notIA }" class="p-3 rounded-r-lg rounded-bl-lg">
        <p class="text-sm">{{ message }}</p>
      </div>
      <span class="text-xs text-gray-500 leading-none">{{ timestamp }}</span>
    </div>
    <div v-if="notIA" class="flex-shrink-0 h-10 w-10 rounded-full">
      <img src="/src/assets/images/user_icon.png" alt="Avatar do usuário" class="h-full w-full">
    </div> 
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

</style>

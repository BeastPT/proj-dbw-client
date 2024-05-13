<template>
  <div>
    <h1 class="font-bold text-center text-2xl mb-4">{{ title }}</h1>
    <div class="mx-auto max-w-screen-lg mb-4">
      <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
        <div @click="toggleAccordion(index)"
          class="flex justify-between items-center cursor-pointer bg-gray-200 rounded-md p-4">
          <h2 class="font-semibold">{{ faq.question }}</h2>
          <svg v-if="isActive !== index" class="w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M12 15.535L18.364 9h-3.258v-6h-8v6h-3.258z" />
          </svg>
          <svg v-else class="w-6 h-6 fill-current text-gray-500 transform rotate-180" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M12 15.535L18.364 9h-3.258v-6h-8v6h-3.258z" />
          </svg>
        </div>
        <div v-if="isActive === index" class="bg-white rounded-md p-4">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  faqs: Array
});

const isActive = ref(null);

const toggleAccordion = (index) => {
  isActive.value = (isActive.value === index) ? null : index;
};
</script>
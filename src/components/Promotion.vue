<template>
  <div class="bg-blue-300 p-4 rounded-lg mb-16 text-lg">
    <div class="flex flex-col md:flex-row mb-4">
      <p class="md:w-1/2 md:mr-8 mb-2 md:mb-0 font-semibold">{{ title1 }}</p>
      <p class="md:w-1/2">{{ content1 }}</p>
    </div>
    <div class="flex flex-col md:flex-row mb-4">
      <p class="md:w-1/2 md:mr-8 mb-2 md:mb-0 font-semibold">{{ title2 }}</p>
      <p class="md:w-1/2">
        <span v-for="(line, index) in content2" :key="index">
          {{ line }}<br>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title1: String,
    title2: String,
    content1: String,
    content2: Array
  }
};
</script>

<style scoped></style>
<template>
  <div class="p-2 h-12 mt-2 mr-2 rounded-md bg-gray-700 flex items-center hover:bg-gray-800">
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
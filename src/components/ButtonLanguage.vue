<template>
  <button
    class="btn bg-gray-900 text-white border border-gray-900 rounded-md py-4 px-8 mr-4 mb-4 hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  }
};
</script>

<style scoped></style>
<template>
  <button class="button-container">
    <img :src="`/images/${image}`" :alt="altText" class="image-container">
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
.button-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.button-container:hover {
  transform: scale(1.05);
}

.image-container {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  .image-container {
    width: 80%;
  }
}
</style>
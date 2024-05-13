<template>
  <div class="flex flex-col justify-center items-center p-48">
    <div class="text-center mb-4">
      <h1 class="text-4xl font-bold mb-2">Produto Indisponível</h1>
      <p class="text-lg text-gray-600">Desculpe, o produto que você está procurando não está disponível de momento.</p>
    </div>
    <router-link to="/" class="text-blue-500 underline">Voltar à Página Inicial</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductUnavailable' // Define o nome do componente
}
</script>

<style scoped></style>
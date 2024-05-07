<template>
  <div class="flex justify-center sm:flex-wrap p-4">
    <div class="text-center font-semibold mr-4 text-xl mb-4 sm:w-auto sm:flex-shrink-0 sm:mr-4 md:text-2xl md:mb-0">
      <button class="hover:underline text-gray-900 ml-2">Perfil</button>
    </div>
    <div class="text-center font-semibold text-xl mb-4 sm:w-auto sm:flex-shrink-0 md:text-2xl md:mb-0 sm:mr-4 sm:ml-4">
      <button class="hover:underline text-gray-900">Compras</button>
    </div>
    <div class="text-center font-semibold text-xl sm:w-auto sm:flex-shrink-0 md:text-2xl md:mb-0">
      <button class="hover:underline text-gray-900">Favoritos</button>
    </div>
  </div>
  
  <div class="message text-xl font-semibold mb-6 underline mx-8 md:mx-16"> 
    <p class="text-center">As minhas compras</p>
  </div>
  
  
  <div class="flex justify-between mx-4 md:mx-16"> 
    <div class="w-full sm:w-5/6 lg:w-2/4 mb-8 bg-gray-300 p-4 rounded-lg">
      <h2 class="text-lg font-semibold mb-6">Tradução de texto de inglês para português</h2>
      <div class="flex flex-wrap mb-4">
        <p class="w-full lg:text-left w-1/2">Freelancer: Margarida Ferreira</p>
        <p class="w-full lg:text-left ">Código do projeto:</p>
        <p class="w-full lg:text-left w-1/6">Valor: 75€</p>
      </div>
      <div class="flex flex-wrap">
        <p class="w-full lg:text-left ">Data de pedido: 12/02/2024</p>
      </div>
    </div>
  
    <div class="flex items-center">
      <img src="@/assets/images/image24.png" alt="Logo1" class="w-10 h-10 md:mx-2">
    </div>
  
   
    <div class="w-full sm:w-5/6 lg:w-2/4 mb-8 bg-gray-300 p-4 rounded-lg">
      <h2 class="text-lg font-semibold mb-6">Estado</h2>
      <p>Concluído</p>
      <p>Entrega final: 15/02/2024</p>
    </div>
  </div>

  <div class="flex justify-between mx-4 md:mx-16"> 
    <div class="w-full sm:w-5/6 lg:w-2/4 mb-8 bg-gray-300 p-4 rounded-lg">
      <h2 class="text-lg font-semibold mb-6">Tradução de texto de inglês para português</h2>
      <div class="flex flex-wrap mb-4">
        <p class="w-full lg:text-left w-1/2">Freelancer: Margarida Ferreira</p>
        <p class="w-full lg:text-left ">Código do projeto:</p>
        <p class="w-full lg:text-left w-1/6">Valor: 75€</p>
      </div>
      <div class="flex flex-wrap">
        <p class="w-full lg:text-left ">Data de pedido: 12/02/2024</p>
      </div>
    </div>
  
  
    <div class="flex items-center">
      <img src="@/assets/images/image24.png" alt="Logo1" class="w-10 h-10 md:mx-2">
    </div>
    <div class="w-full sm:w-5/6 lg:w-2/4 mb-8 bg-gray-300 p-4 rounded-lg">
      <h2 class="text-lg font-semibold mb-6">Estado</h2>
      <p>Concluído</p>
      <p>Entrega final: 15/02/2024</p>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1023px) {
  .flex {
    flex-direction: column;
    align-items: center;
  }
  .flex > div {
    margin-bottom: 1rem;
  }
}
</style>

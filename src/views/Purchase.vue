<template>
  <div class="flex justify-center flex-wrap p-4"> 
    <div class="text-center font-semibold text-xl mb-4 w-full sm:w-auto sm:flex-shrink-0 sm:mr-4 md:text-2xl md:mb-0"> 
      <button>Perfil</button>
    </div>
    <div class="text-center font-semibold text-xl mb-4 w-full sm:w-auto sm:flex-shrink-0 sm:mr-4 md:text-2xl md:mb-0">
      <button>Histórico de compras</button>
    </div>
    <div class="text-center font-semibold text-xl w-full sm:w-auto sm:flex-shrink-0 md:text-2xl">
      <button>Favoritos</button>
    </div>
  </div>

  <div class="message text-xl font-semibold mb-6 underline mx-4 md:mx-12"> 
    <p class="text-center">As minhas compras</p>
  </div>
  
  <div class="flex flex-wrap justify-center">
    <!-- #################3 Primeiro ####################### -->
    <div class="w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mb-8 mx-4 md:mx-2 sm:mx-auto"> 
      <div class="bg-gray-300 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-6">Tradução de texto de inglês para português</h2>
        <div class="flex flex-wrap mb-4">
          <p class="w-full sm:w-1/2">Freelancer: Margarida Ferreira</p>
          <p class="w-full sm:w-1/3">Código do projeto:</p>
          <p class="w-full sm:w-1/6">Valor: 75€</p>
        </div>
        <div class="flex flex-wrap">
          <p class="w-full sm:w-1/2">Data de pedido: 12/02/2024</p>
        </div>
      </div>
      <div class="flex items-center justify-center mt-4"> <!-- Centralizando a imagem -->
        <img src="@/assets/images/image24.png" alt="Logo1" class="w-10 h-10">
      </div>
      <div class="bg-gray-300 p-4 rounded-lg mt-4">
        <h2 class="text-lg font-semibold mb-6">Estado</h2>
        <p>Concluído</p>
        <p>Entrega final: 15/02/2024</p>
      </div>
    </div>
    
    <!-- ##################### Segundo ############# -->

    <div class="w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mb-8 mx-4 md:mx-2 sm:mx-auto"> 
      <div class="bg-gray-300 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-6">Consultoria de Dropshipping</h2>
        <div class="flex flex-wrap mb-4">
          <p class="w-full sm:w-1/2">Freelancer: Margarida Ferreira</p>
          <p class="w-full sm:w-1/3">Código do projeto:</p>
          <p class="w-full sm:w-1/6">Valor: 75€</p>
        </div>
        <div class="flex flex-wrap">
          <p class="w-full sm:w-1/2">Data de pedido: 12/02/2024</p>
          <p class="w-full sm:w-1/3 ml-4 sm:ml-8">261897761284</p>
        </div>
      </div>
      <div class="flex items-center justify-center mt-4"> <!-- Centralizando a imagem -->
        <img src="@/assets/images/image24.png" alt="Logo1" class="w-10 h-10">
      </div>
      <div class="bg-gray-300 p-4 rounded-lg mt-4">
        <h2 class="text-lg font-semibold mb-6">Estado</h2>
        <p>Em Espera</p>
        <p>Entrega final:</p>
      </div>
    </div>
    
    <!-- ################## Terceiro  ###########################-->

    <div class="w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mb-8 mx-4 md:mx-2 sm:mx-auto"> 
      <div class="bg-gray-300 p-4 rounded-lg">
        <h2 class="text-lg font-semibold mb-6">Tradução de texto de inglês para português</h2>
        <div class="flex flex-wrap mb-4">
          <p class="w-full sm:w-1/2">Freelancer: Margarida Ferreira</p>
          <p class="w-full sm:w-1/3">Código do projeto:</p>
          <p class="w-full sm:w-1/6">Valor: 75€</p>
        </div>
        <div class="flex flex-wrap">
          <p class="w-full sm:w-1/2">Data de pedido: 12/02/2024</p>
        </div>
      </div>
      <div class="flex items-center justify-center mt-4"> <!-- Centralizando a imagem -->
        <img src="@/assets/images/image24.png" alt="Logo1" class="w-10 h-10">
      </div>
      <div class="bg-gray-300 p-4 rounded-lg mt-4">
        <h2 class="text-lg font-semibold mb-6">Estado</h2>
        <p>Concluído</p>
        <p>Entrega final: 15/02/2024</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

@media (max-width: 767px) {
  .flex-wrap {
    flex-direction: column;
  }
}
</style>

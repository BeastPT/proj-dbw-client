<template> 
    <div class="ml-4 mr-4 md:ml-48 md:mr-48"> 
        <div class="text-center font-semibold text-3xl mb-12 mt-8">
            <p>Cliente</p>
        </div>

        <div class="text-2xl font-semibold mb-8 underline">
            <p>Meus Projetos</p>
        </div>

        <div class="flex mb-10"> 
            <div class="w-full bg-gray-300 p-4 rounded-lg">
                <div class="mb-4"> 
                    <h2 class="text-lg font-semibold mb-2">Consultoria de Dropshipping</h2>
                    <p>Data de pedido: 18/12/2023</p>
                    <p>Código do projeto: 621930198233</p>
                    <p>Dar avaliação:</p>
                </div>
            </div>
        </div>
        
        <div class="flex mb-10"> 
            <div class="w-full bg-gray-300 p-4 rounded-lg">
                <div class="mb-4"> 
                    <h2 class="text-lg font-semibold mb-2">Consultoria de Dropshipping</h2>
                    <p>Data de pedido: 18/12/2023</p>
                    <p>Código do projeto: 621930198233</p>
                    <p>Dar avaliação:</p>
                </div>
            </div>
        </div>

        <div class="flex mb-10"> 
            <div class="w-full bg-gray-300 p-4 rounded-lg">
                <div class="mb-4"> 
                    <h2 class="text-lg font-semibold mb-2">Consultoria de Dropshipping</h2>
                    <p>Data de pedido: 18/12/2023</p>
                    <p>Código do projeto: 621930198233</p>
                    <p>Dar avaliação:</p>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
/*  menores que 768px */
@media (max-width: 767px) {
  .ml-4,
  .mr-4 {
    margin-left: 0;
    margin-right: 0;
  }
  .flex {
    flex-direction: column; /* Muda a direção do flex container para vertical */
  }
  .w-full {
    width: 100%; /* Ocupa toda a largura disponível */
  }
  .text-lg {
    font-size: 1.25rem; 
  }
}

/*  maiores que 768px */
@media (min-width: 768px) {
  .md\:ml-48,
  .md\:mr-48 {
    margin-left: 2rem ;
    margin-right: 2rem ;
  }
}
</style>

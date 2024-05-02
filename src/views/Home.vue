<template>
  <div class="ml-4 mr-4 md:ml-8 md:mr-8 lg:ml-24 lg:mr-24 xl:ml-32 xl:mr-32 xxl:ml-48 xxl:mr-48">
    <div class="bg-gray-950 w-full p-10 mb-8">
      <div class="text-left">
        <h2 class="font-bold text-3xl text-white mb-5">Torna-te um Freelancer <br> de sucesso</h2>
        <p class="text-white">Conectando Talentos, Trocando Habilidades: <br> SKILLswap, onde as oportunidades se <br> encontram</p>
      </div>
    </div>

    <!-- ########## COLOCAR AS 3 IMAGENS PRINCIPAIS  ########## -->
    <div class="text-center">
      <h2 class="font-bold text-2xl text-darkgray mb-8">Serviços populares</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ml-auto mr-auto md:ml-28 md:mr-28 mb-10">
        <div class="group">
          <img src="@/assets/images/image9.jpg" class="w-60 h-auto mx-auto cursor-pointer transition duration-300 ease-in-out transform group-hover:scale-110 rounded-lg" alt="Imagem 9">
        </div>
        <div class="group">
          <img src="@/assets/images/image9.jpg" class="w-60 h-auto mx-auto cursor-pointer transition duration-300 ease-in-out transform group-hover:scale-110 rounded-lg" alt="Imagem 10">
        </div>
        <div class="group">
          <img src="@/assets/images/image9.jpg" class="w-60 h-auto mx-auto cursor-pointer transition duration-300 ease-in-out transform group-hover:scale-110 rounded-lg" alt="Imagem 11">
        </div>
      </div>
    </div>

    <!-- ########## TEXTO SOBRE QUAL A MELHOR PARTE DO SITE ########## -->
    <div class="bg-blue-300 w-full p-2 mb-8 flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2">
        <div class="mx-auto max-w-screen-lg ml-0 md:ml-48 mt-8">
          <h2 class="font-bold text-3xl text-gray-800 mb-4">Qual a melhor parte?</h2>
          <h3 class="font-semibold text-2xl text-gray-900 mb-4">Dentro do teu orçamento</h3>
          <p class="text-gray-700 mb-3">Encontre o serviço certo para cada faixa de preço. Sem taxas por hora, apenas preços baseados em projetos.</p>
          <h3 class="font-semibold text-2xl text-gray-900 mb-4">Pague quando estiver satisfeito</h3>
          <p class="text-gray-700 mb-3">Pode pagar o serviço apenas quando estiver satisfeito.</p>
          <h3 class="font-semibold text-2xl text-gray-900 mb-4">Contacte com suporte 24/7</h3>
          <p class="text-gray-700 mb-8">Nossa equipe de suporte está disponível o tempo todo para ajudar, a qualquer momento e em qualquer lugar.</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="mx-auto max-w-screen-lg">
          <img src="@/assets/images/image12.png" class="w-64 md:w-96 h-auto rounded-lg" alt="Imagem 12">
        </div>
      </div>
    </div>

    <!-- ########## CATEGORIAS DO SITE ########## -->
    <div class="mt-8 font-bold text-center text-3xl mb-10">Categorias</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ml-4 md:ml-0 md:mr-0 md:ml-auto md:mr-auto md:max-w-screen-lg">
      <button class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Mercado Financeiro</button>
      <button class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md"> Programação</button>
      <button class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Tradução de Línguas</button>
      <button class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Aprendizagem</button>
      <button class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Fitness</button>
      <button class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Escrita</button>
    </div>


    <!-- ########## TORNA-TE UM FREELANCER ########## -->
    <div>
      <h1 class="font-bold text-3xl text-center mb-10">Torna-te um Freelancer</h1>
      <div class="border-l-4 border-r-4 border-gray-500 rounded-lg p-6 mb-10">
        <p class="font-bold text-xl mb-4">Desperte seu Potencial: Torne-se um Freelancer de Sucesso!</p>
        <p class="mb-4">No universo do freelancing, as possibilidades são tão vastas quanto sua imaginação. Ao escolher este caminho, você não apenas assume o controle de sua carreira, mas também desencadeia uma jornada de descobertas e realizações. A liberdade de trabalhar de qualquer lugar, a flexibilidade de definir seus próprios horários e a oportunidade de mergulhar em projetos apaixonantes são apenas o começo.</p>
        <p class="mb-4">Cada tarefa é uma chance de expandir suas habilidades, enfrentar desafios inovadores e aprender continuamente. A independência financeira se torna uma realidade, permitindo que você estabeleça seu próprio valor e alcance novos patamares. Mas não é só isso; ao se tornar um freelancer, você ingressa em uma comunidade vibrante, conectando-se com mentes criativas, compartilhando experiências e construindo uma rede que impulsionará seu crescimento.</p>
        <p class="mb-4">O mundo do freelancing aguarda, repleto de oportunidades que só você pode explorar. Então, dê o primeiro passo rumo ao sucesso profissional e liberdade criativa. Abrace a jornada do freelancing – onde a paixão encontra a independência, e seu potencial é verdadeiramente ilimitado!</p>
        <div class="flex justify-center">
          <button class="btn bg-gray-900 text-white py-2 px-6 font-bold rounded-md">Torna-te um Comprador</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 767.98px) {
  .ml-4, .mr-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .ml-28, .ml-48 {
    margin-left: 0;
  }
  .mr-48 {
    margin-right: 0;
  }
}

@media only screen and (min-width: 768px) {
  .ml-8, .mr-8 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* Manter 3 colunas */
  }

  .md\:max-w-full {
    max-width: 100%;
    height:auto;
  }
}

@media only screen and (min-width: 1024px) {
  .ml-24, .mr-24 {
    margin-left: 6rem;
    margin-right: 6rem;
  }
}

/*  menores que 475px */
@media only screen and (max-width: 475px) {
  .ml-0 {
    margin-left: 0;
  }
}

/*  telas entre 768px e 1024px */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .ml-0 {
    margin-left: 0;
  }
  .ml-28, .mr-28 {
    margin-left: 4rem;
    margin-right: 4rem;
  }
}

/*  telas entre 1024px e 1280px */
@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  .ml-0 {
    margin-left: 0;
  }
  .ml-48, .mr-48 {
    margin-left: 4rem;
    margin-right: 4rem;
  }
}
/* telas maiores que 1280px */
@media only screen and (min-width: 1280px) {
  .lg\:ml-0 {
    margin-left: 0;
  }
}
</style>

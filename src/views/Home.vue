<template>
  <div class="ml-4 mr-4 md:ml-8 md:mr-8 lg:ml-24 lg:mr-24 xl:ml-32 xl:mr-32">
    <div class="bg-gradient-to-b from-gray-900 to-blue-900 w-full p-10 mb-8 rounded-b-lg shadow-lg">
      <div class="text-center lg:text-left">
        <h2 class="font-bold text-4xl text-white mb-4">Torna-te um Freelancer de sucesso</h2>
        <p class="text-white mb-6">Conectando Talentos, Trocando Habilidades: <br> SKILLswap, onde as oportunidades se
          encontram</p>
      </div>
    </div>

    <!-- ########## COLOCAR AS 3 IMAGENS PRINCIPAIS  ########## -->
    <div class="text-center">
      <h2 class="font-bold text-2xl text-darkgray mb-8">Serviços populares</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ml-auto mr-auto md:ml-28 md:mr-28 mb-10">
        <div class="group">
          <RouterLink to="/services/market">
            <img src="/images/image9.png" style="width: 200px; height: 250px;"
              class="mb-5 mx-auto cursor-pointer transition duration-300 ease-in-out transform group-hover:scale-105 rounded-lg"
              alt="Imagem 9">
          </RouterLink>
        </div>
        <div class="group">
          <RouterLink to="/services/fitness">
            <img src="/images/image26.png" style="width: 200px; height: 250px;"
              class="mb-5 mx-auto cursor-pointer transition duration-300 ease-in-out transform group-hover:scale-105 rounded-lg"
              alt="Imagem 10">
          </RouterLink>
        </div>
        <div class="group">
          <RouterLink to="/services/translation">
            <img src="/images/image27.png" style="width: 200px; height: 250px;"
              class="mb-5 mx-auto cursor-pointer transition duration-300 ease-in-out transform group-hover:scale-105 rounded-lg"
              alt="Imagem 11">
          </RouterLink>
        </div>
      </div>
    </div>


    <!-- ########## TEXTO SOBRE QUAL A MELHOR PARTE DO SITE ########## -->
    <div class="bg-blue-300 w-full p-2 mb-8 flex flex-col md:flex-row items-center rounded-lg">
      <div class="w-full md:w-1/2">
        <div class="mx-auto max-w-screen-lg ml-0 md:ml-48 mt-8">
          <h2 class="font-bold text-3xl text-gray-800 mb-4">Qual a melhor parte?</h2>
          <h3 class="font-semibold text-2xl text-gray-900 mb-4">Dentro do teu orçamento</h3>
          <p class="text-gray-700 mb-3">Encontre o serviço certo para cada faixa de preço. Sem taxas por hora, apenas
            preços baseados em projetos.</p>
          <h3 class="font-semibold text-2xl text-gray-900 mb-4">Pague quando estiver satisfeito</h3>
          <p class="text-gray-700 mb-3">Pode pagar o serviço apenas quando estiver satisfeito.</p>
          <h3 class="font-semibold text-2xl text-gray-900 mb-4">Contacte com suporte 24/7</h3>
          <p class="text-gray-700 mb-8">Nossa equipe de suporte está disponível o tempo todo para ajudar, a qualquer
            momento e em qualquer lugar.</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="mx-auto max-w-screen-lg">
          <img src="/images/image12.png" class="w-64 md:w-96 h-auto rounded-lg" alt="Imagem 12">
        </div>
      </div>
    </div>

    <!-- ########## CATEGORIAS DO SITE ########## -->

    <div>
      <div class="mt-8 font-bold text-center text-3xl mb-10">Categorias</div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 ml-4 md:ml-0 md:mr-0 md:ml-auto md:mr-auto md:max-w-screen-lg justify-center text-center">
        <router-link to="/services/market" class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Mercado
          Financeiro</router-link>
        <router-link to="/services/programming"
          class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Programação</router-link>
        <router-link to="/services/translation"
          class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Tradução de Línguas</router-link>
        <router-link to="/services/learning"
          class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Aprendizagem</router-link>
        <router-link to="/services/fitness"
          class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Fitness</router-link>
        <router-link to="/services/writing"
          class="btn bg-gray-900 text-white p-10 font-bold text-xl rounded-md">Escrita</router-link>
      </div>
    </div>



    <!-- ########## TORNA-TE UM FREELANCER ########## -->
    <div class="mt-12">
      <div class="border-l-4 border-r-4 border-gray-500 rounded-lg p-6 mb-10">
        <p class="font-bold text-xl mb-4">Liberta o teu Potencial com o nosso Freelancer IA!</p>
        <p>Você já sonhou em levar a sua carreira de freelancer para o próximo nível? Com nosso serviço de freelancer
          IA, essa visão pode tornar-se uma realidade!</p>
        <p>Ao integrar a inteligência artificial em cada etapa do processo de trabalho, oferecemos uma abordagem
          inovadora que não só aumenta sua produtividade, mas também amplifica sua criatividade e eficiência.</p>
        <p>A nossa plataforma de freelancer IA não apenas automatiza tarefas rotineiras, como também fornece insights
          inteligentes e sugestões perspicazes para aprimorar as suas habilidades e tomar decisões estratégicas.</p>
        <p>Imagine ter um assistente virtual sempre pronto para ajudar, fornecendo análises de mercado, identificando
          tendências emergentes e até mesmo sugerindo oportunidades de projetos que correspondam às suas habilidades e
          interesses.</p>
        <p>Com o nosso freelancer IA, você experimentará uma nova dimensão de liberdade criativa e sucesso profissional.
          Diga adeus às horas desperdiçadas em tarefas administrativas e dê as boas-vindas a uma jornada de trabalho
          mais eficiente, gratificante e lucrativa.</p>
        <p>Então, porquê se contentar com o ordinário quando você pode alcançar o extraordinário com nosso Freelancer
          IA? Liberte o seu potencial hoje mesmo e deixe a inteligência artificial impulsionar a sua carreira
          freelancing para novos patamares de sucesso!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 767.98px) {
/* Paginas repsonsivas */
  .ml-4,
  .mr-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .ml-28,
  .ml-48 {
    margin-left: 0;
  }

  .mr-48 {
    margin-right: 0;
  }
}

@media only screen and (min-width: 768px) {

  .ml-8,
  .mr-8 {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    /* Manter 3 colunas */
  }

  .md\:max-w-full {
    max-width: 100%;
    height: auto;
  }
}

@media only screen and (min-width: 1024px) {

  .ml-24,
  .mr-24 {
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

  .ml-28,
  .mr-28 {
    margin-left: 4rem;
    margin-right: 4rem;
  }
}

/*  telas entre 1024px e 1280px */
@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  .ml-0 {
    margin-left: 0;
  }

  .ml-48,
  .mr-48 {
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

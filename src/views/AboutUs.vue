<template>
  <div>
    <div class="p-4">
      <h1 class="text-center font-bold text-3xl p-4">About Us</h1>
      <br>

      <!-- ########## PRIMEIRA PESSOA  ########## -->
      <div class="flex justify-center items-center mb-8">
        <div class="bg-blue-300 p-6 rounded-lg flex items-center">
          <div>
            <strong class="text-2xl">Eduardo Cristiando Gomes</strong>
            <br><br>
            <p>
              Cristiano Gomes, estudante de Engenharia Informática na Universidade da Madeira, destaca-se como
              apaixonado pela Fórmula 1 e leal torcedor do Benfica. Seu envolvimento com a velocidade e tecnologia
              transcende as pistas, refletindo-se em sua jornada acadêmica.
              Além de demonstrar habilidades técnicas, Cristiano incorpora uma determinação firme para explorar a
              fronteira da inovação. Como torcedor fervoroso, ele une a paixão pelo esporte ao seu comprometimento
              acadêmico, buscando alcançar grandes objetivos.
              A visão clara de um futuro promissor é guiada pela fusão entre a emoção da Fórmula 1 e os desafios da
              Engenharia Informática. Projeta-se como um indivíduo destinado a conquistas extraordinárias, impulsionado
              por uma vontade inabalável de superar desafios e deixar sua marca em ambas as arenas.
            </p>
          </div>
          <img src="/images/cris.png" alt="Imagem 4" class="h-80 rounded ml-8 img-container">
        </div>
      </div>
      <br>

      <!-- ########## SEGUNDA PESSOA  ########## -->
      <div class="flex justify-center items-center mb-8">
        <div class="bg-red-300 p-6 rounded-lg flex items-center">
          <div>
            <strong class="text-2xl">João Henrique Serrão Gonçalves</strong>
            <br><br>
            <p>
              Tenho 19 anos e sou um empreendedor digital apaixonado por dropshipping. Desde os 16 anos, mergulhei neste
              universo, dominando técnicas de pesquisa de mercado, otimização de conversões e atendimento ao cliente.
              Estou determinado a expandir meus negócios e alcançar resultados ainda maiores no comércio eletrônico.
              Com uma vasta experiência em dropshipping e uma mente ávida por inovação, estou constantemente à busca de
              novas oportunidades para aumentar as minhas vendas e aprimorar minhas habilidades no mercado digital.
              O meu objetivo é criar um império de vendas digital, oferecendo produtos de alta qualidade e
              proporcionando uma experiência excepcional aos meus clientes.
            </p>
          </div>
          <img src="/images/henrigame.png" alt="Imagem 2" class="h-80 rounded ml-8 img-container">
        </div>
      </div>
      <br>

      <!-- ########## TERCEIRA PESSOA  ########## -->
      <div class="flex justify-center items-center mb-8">
        <div class="bg-green-300 p-6 rounded-lg flex items-center">
          <div>
            <strong class="text-2xl">Afonso Jesus Faria Abreu</strong>
            <br><br>
            <p>
              Também conhecido pelo apelido "Beast", sou uma força a ser reconhecida no mundo do Counter-Strike: Global
              Offensive (CS:GO).
              Aos 19 anos, já demonstrei habilidades excepcionais e uma mentalidade competitiva feroz que colocam-me
              entre os melhores jogadores profissionais do jogo.
              Desde tenra idade, mostrei um talento natural para os video jogos, mas foi no CS:GO que encontrei a minha
              verdadeira paixão.
              A minha abordagem agressiva e habilidade de precisão destacam-me em relação à competição acirrada,
              enquanto a minha capacidade de adaptação rápida e liderança no jogo tornam um jogador indispensável para
              qualquer equipa.
            </p>
          </div>
          <img src="/images/afonso.png" alt="Imagem 2" class="h-80 rounded ml-8 img-container">
        </div>
      </div>
      <br>

      <!-- ########## QUARTA PESSOA  ########## -->
      <div class="flex justify-center items-center mb-8">
        <div class="bg-yellow-300 p-6 rounded-lg flex items-center">
          <div>
            <strong class="text-2xl">Gonçalo Rodrigues Figueira</strong>
            <br><br>
            <p>
              Sou um entusiasta do fitness e um defensor de um estilo de vida saudável.
              Desde tenra idade, descobri a minha paixão pelo desporto e pelo bem-estar, dedicando-me incansavelmente a
              aprimorar meu físico e saúde.
              Com determinação inabalável e uma ética de trabalho admirável, transformei a minha paixão em uma missão
              para ajudar os outros a alcançarem seus objetivos de condicionamento físico.
              Através de anos de treinamento e pesquisa, desenvolvi um profundo conhecimento em nutrição e exercícios,
              tornando-me um especialista em elaborar planos de alimentação e rotinas de treinamento personalizadas. A
              minha abordagem holística para o bem-estar abrange não apenas o aspecto físico, mas também o mental e
              emocional, visando o equilíbrio completo do corpo e da mente.
            </p>
          </div>
          <img src="/images/Goncalo.png" alt="Imagem 3" class="h-80 rounded ml-8 img-container">
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  width: 100%;
  max-width: 300px;
  height: auto;
}


@media only screen and (max-width: 768px) {
  .flex {
    flex-direction: column;
  }

  .bg-blue-300,
  .bg-red-300,
  .bg-green-300,
  .bg-yellow-300 {
    width: 100%;
  }

  .bg-blue-300 img,
  .bg-yellow-300 img,
  .bg-red-300 img,
  .bg-green-300 img {
    width: 50%;
    max-width: 50%;
    height: auto;
    margin: 0 auto;
  }

  .bg-blue-300 p,
  .bg-red-300 p,
  .bg-green-300 p,
  .bg-yellow-300 p {
    margin-bottom: 1.5rem;
  }
}
</style>

<template>
  <div class="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
    <img src="@/assets/images/image13.jpg" alt="Translate" class="mb-4 mt-4 mx-auto rounded-lg">

    <h1 class="text-center font-bold text-3xl mb-4 md:text-2xl underline">Traduções Mais Populares</h1>

    <ButtonLanguage :button1Text="'Inglês'" :button2Text="'Espanhol'" :button3Text="'Francês'">
    </ButtonLanguage>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
      <ButtonCountry v-for="(country, index) in countries" :key="index" :image="country.image" :altText="country.altText" :countryName="country.name">
      </ButtonCountry>
    </div>
    <div>
      <Promotion
        title1="Você tem um documento importante que precisa ser traduzido com precisão e profissionalismo?"
        content1="Nossos talentosos freelancers de tradução estão prontos para oferecer seus serviços especializados e garantir que suas palavras sejam transmitidas com perfeição em qualquer idioma"
        title2="Por que escolher nossos freelancers de tradução?"
        :content2="[
          '→ Expertise Diversificada',
          '→ Qualidade Garantida',
          '→ Prazos Cumpridos',
          '→ Comunicação Transparente'
        ]"
      ></Promotion>
    </div>

    <div>
      <FAQ title="Negócios FAQs" :faqs="negociosFaqs">
      </FAQ>
    </div>

  </div>
</template>

<script setup>
import ButtonCountry from '@/components/ButtonCountry.vue';
import ButtonLanguage from '@/components/ButtonLanguage.vue';
import FAQ from '@/components/FAQ.vue'; 
import Promotion from '@/components/Promotion.vue';

const countries = [
  { image: 'image1.jpg', altText: 'Ingles', name: 'Inglês' },
  { image: 'image2.jpg', altText: 'Espanhol', name: 'Espanhol' },
  { image: 'image3.jpg', altText: 'Frances', name: 'Francês' },
  { image: 'image4.jpg', altText: 'Alemao', name: 'Alemão' },
  { image: 'image5.jpg', altText: 'Mandarim', name: 'Mandarim' },
  { image: 'image6.jpg', altText: 'Russo', name: 'Russo' },
  { image: 'image7.jpg', altText: 'Arabe', name: 'Árabe' },
  { image: 'image8.jpg', altText: 'Hindi', name: 'Hindi' }
];

const negociosFaqs = [
  { question: 'Como posso ter a certeza que o meu documento será bem traduzido?', answer: 'Para garantir uma tradução eficaz do seu documento, escolha um tradutor com boa reputação, experiência na área e amostras de trabalhos anteriores. Certifique-se de que utilizam processos de revisão e comunicação transparente. Prefira profissionais que empreguem ferramentas tecnológicas para maior eficiência. Estabeleça claramente os termos do projeto em um contrato, incluindo prazos e valores, com um acordo de confidencialidade. Mantenha um canal aberto para feedback contínuo. Essas diretrizes aumentam a probabilidade de obter uma tradução de alta qualidade que atenda às suas expectativas.' },
  { question: 'Pergunta 2', answer: 'Resposta 2' },
  { question: 'Pergunta 3', answer: 'Resposta 3' }
];

</script>

<style scoped>
</style>

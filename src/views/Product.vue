<template>
  <div class="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
    <img :src="`/images/${data.banner}`" :alt="name" class="banner mb-4 mt-4 mx-auto rounded-lg">

    <h1 class="text-center font-bold text-3xl mb-4 md:text-2xl underline">{{data.popular.title}}</h1>

    <ButtonLanguage :button1Text="data.popular.elements[0].name" :button2Text="data.popular.elements[1].name" :button3Text="data.popular.elements[2].name">
    </ButtonLanguage>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
      <ButtonCountry v-for="(element, index) in data.explore.elements" :key="index" :image="element.image" :altText="element.name" :countryName="element.name">
      </ButtonCountry>
    </div>
    <div>
      <Promotion
        :title1="resume.left.question"
        :content1="resume.left.answer"
        :title2="resume.right.question"
        :content2="resume.right.topics"
      ></Promotion>
    </div>
  </div>

  <div>
    <FAQ title="Perguntas Frequentes" :faqs="faq">
    </FAQ>
  </div>
</template>

<script setup>
import ButtonCountry from '@/components/ButtonCountry.vue';
import ButtonLanguage from '@/components/ButtonLanguage.vue';
import FAQ from '@/components/FAQ.vue'; 
import Promotion from '@/components/Promotion.vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRoute();
const router2 = useRouter();

const BASE_URL = "http://localhost:3001/api/";
const response = await fetch(`${BASE_URL}product/${router.params.id}`)

if (!response.ok) {
  await router2.push('/');
}
const dataObj = (await response.json()).message
const { name, data, resume, faq } = dataObj 

</script>

<style scoped>
.banner {
  width: 100%; 
  height: 250px; 
  object-fit: cover; 
}
</style>

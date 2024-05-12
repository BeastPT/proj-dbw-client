<template>
  <div v-if="!isLoaded || !data?.banner"></div>
  <div v-else class="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
    <img :src="`/images/${data.banner}`" :alt="name" class="banner mb-4 mt-4 mx-auto rounded-lg">

    <h1 class="text-center font-bold text-3xl mb-4 md:text-2xl underline">{{ data.popular.title }}</h1>
    <div class="flex flex-wrap justify-center text-center mb-10">
      <ButtonLanguage v-for="(e, i) in data.popular.elements" :key="i" :text="e.name" @click="createService(e.name)" /> 
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
      <ButtonCountry v-for="(element, index) in data.explore.elements" :key="index" :image="element.image"
        :altText="element.name" :countryName="element.name">
      </ButtonCountry>
    </div>
    <div>
      <Promotion :title1="resume.left.question" :content1="resume.left.answer" :title2="resume.right.question"
        :content2="resume.right.topics"></Promotion>
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
import { ref } from 'vue';
import userStore from '@/store/user.js';
import { storeToRefs } from 'pinia'

const { token, user } = storeToRefs(userStore());
const isLoaded = ref(false);
const router = useRoute();
const router2 = useRouter();
let name, data, resume, faq = {};

const BASE_URL = "http://localhost:3001/api/";
try {
  const response = await fetch(`${BASE_URL}product/${router.params.id}`)

  if (!response.ok || response.status === 404) {
    router2.push('/productunavailable');
  }
  const dataObj = (await response.json()).message
  name = dataObj.name;
  data = dataObj.data;
  resume = dataObj.resume;
  faq = dataObj.faq;
  isLoaded.value = true;
} catch (error) {
  router2.push('/productunavailable');
}

async function createService(sName) {
  if (user.value === null) {
    router2.push('/login');
  } else if (router.params.id == null) {
    router2.push('/productunavailable');
  } else {
    const response = await fetch(`${BASE_URL}service/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token.value,
      },
      body: JSON.stringify({
        type: router.params.id, //['translation', 'market', 'programming', 'learning', 'fitness', 'writing']
        subject: `${name} : ${sName}`

      })
    })
    const data = await response.json();
    setTimeout(() => {
      router2.push(`/chat/${data.message.chat._id}`);
    }, 2000);
  }
}

</script>

<style scoped>
.banner {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>

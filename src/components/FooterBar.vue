<template>
  <div class="bg-gray-900 w-full flex flex-col text-white">
    <div class="flex flex-col lg:flex-row justify-between mx-4 lg:mx-48 mt-8 lg:mt-12">
      <div v-for="(column, index) in columns" :key="index" class="flex flex-col mt-4 lg:mt-0 lg:mr-8">
        <button @click="navigateToColumn(column.route)" class="text-xl font-bold text-center lg:flex">{{ column.title }}<button @click="toggleShow(index)" class="text-zinc-400 ml-2 lg:hidden">{{ show[index] ? '⭡' : '↓' }}</button></button>
        <nav class="mt-4 lg:mt-6 text-zinc-400 text-xl font-semibold">
          <ul>
            <li v-for="(category, categoryIndex) in column.categories" :key="categoryIndex" :class="{ 'hidden lg:flex': !show[index], 'text-center lg:flex show-small': show[index] }">
              <button @click="navigateToCategory(column.route, category)">{{ category }}</button>
            </li>
            <li v-show="show[index]" class="hidden lg:flex">Outros itens...</li>
          </ul>
        </nav>
      </div>
    
      <div class="flex lg:items-center justify-center mt-4 lg:mt-0 lg:ml-8">
        <Socials />
      </div>
    </div>
   
    <div class="flex flex-col lg:flex-row items-center mx-4 lg:mx-48 mt-8 lg:mt-32 border-t-4 border-t-white p-6">
      <span class="text-xl font-bold text-center lg:text-left lg:w-1/3">SkillSwapp Logo</span>
      <span class="text-xl font-bold mt-4 lg:mt-0 text-center lg:text-center lg:w-1/3">Madeira, Portugal</span>
      <span class="text-sm font-light mt-4 lg:mt-0 text-center lg:text-right lg:w-1/3">Política de Privacidade e Cookies</span>
    </div>
  </div>
</template>

<script setup>
import Socials from './Socials.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

const router = useRouter();

const columns = ref([
  {
    title: 'Categorias',
    route: 'product',
    categories: ['Mercado Financeiro', 'Programação', 'Tradução', 'Aprendizagem', 'Fitness']
  },
  {
    title: 'Obter Ajuda',
    route: 'support',
    categories: ['Estado do pedido', 'Devoluções', 'Contacta-nos', 'Livro de Reclamações']
  },
  {
    title: 'About Us',
    route: 'about',
    categories: ['Estado de Notícias', 'Estilo de vida']
  },
  {
    title: 'Comunidade',
    route: 'community',
    categories: ['Eventos']
  }
]);

const show = ref([false, false, false, false]);

const toggleShow = (index) => {
  show.value[index] = !show.value[index];
  if (show.value[index]) {
    show.value.forEach((value, idx) => {
      if (idx !== index) show.value[idx] = false;
    });
  }
}

const navigateToCategory = (route, category) => {
  router.push(`/${route}/${category.replace(/\s+/g, '_').toLowerCase()}`);
}

const navigateToColumn = (route) => {
  router.push(`/${route}`);
}

</script>

<style scoped>
button {
  vertical-align: middle;
}
</style>

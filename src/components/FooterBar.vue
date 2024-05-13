<script setup>
import Socials from './Socials.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const columns = ref([
  {
    title: 'Categorias',
    categories: [
      { name: 'Mercado', path: '/services/market' },
      { name: 'Programação', path: '/services/programming' },
      { name: 'Tradução', path: '/services/translation' },
      { name: 'Aprendizagem', path: '/services/learning' },
      { name: 'Fitness', path: '/services/fitness' },
      { name: 'Escrever', path: '/services/writing' }
    ]
  },
  {
    title: 'Obter Ajuda',
    categories: [{ name: 'Estado', path: '/user/purchase' },
      { name: 'Contacta-nos', path: '/support' },
      { name: 'Reclamações', path: '/reclamacoes' },]
  },
  {
    title: 'About Us',   
    categories: [
      { name: 'Membros', path: '/about' },
      { name: 'Estilo de vida', path: '/lifestyle' },]
  },
  {
    title: 'Comunidade',
    categories: [{name: 'Eventos', path: '/community'}]
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

const navigate = (path) => {
  const router = useRouter();
  router.push(path);
}
</script>

<template>
  <div class="bg-gray-900 w-full flex flex-col text-white">
    <div class="flex flex-col lg:flex-row justify-between mx-4 lg:mx-48 mt-8 lg:mt-12">
      <div v-for="(column, index) in columns" :key="index" class="flex flex-col mt-4 lg:mt-0 lg:mr-8">
        <h3 class="text-xl font-bold text-center lg:flex">{{ column.title }}<button @click="toggleShow(index)" class="text-zinc-400 ml-2 lg:hidden">{{ show[index] ? '⭡' : '↓' }}</button></h3>
        <nav class="mt-4 lg:mt-6 text-zinc-400 text-xl font-semibold">
          <ul :class="{ 'justify-center': show[index], 'justify-start': !show[index] }">
            <router-link v-for="(category, categoryIndex) in column.categories" :key="categoryIndex" :to="category.path" :class="{ 'hidden lg:flex': !show[index], 'block lg:inline-block lg:flex show-small': show[index] }">
              <li>{{ category.name }}</li>
            </router-link>
          </ul>
        </nav>
      </div>
    
      <div class="flex  lg:items-center justify-center mb-8">
        <Socials />
      </div>
      
    </div>
   
    <div class="flex flex-col lg:flex-row items-center mx-4 lg:mx-48 mt-8 lg:mt-32 border-t-4 border-t-white p-6">
      <span class="text-xl font-bold text-center lg:text-left lg:w-1/3"><img src="/images/skillswap.png" alt="SkillSwapp Logo" class="h-14"></span>
      <span class="text-xl font-bold mt-4 lg:mt-0 text-center lg:text-center lg:w-1/3">Madeira, Portugal</span>
      <router-link to="/privacy" class="text-sm font-light mt-4 lg:mt-0 text-center lg:text-right lg:w-1/3">Política de Privacidade e Cookies</router-link>

    </div>
  </div>
</template>


<style scoped>
button {
  vertical-align: middle;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: inherit;
  color: inherit;
}

button:hover {
  text-decoration: underline;
}

li {
  text-align: left;
}

@media (max-width: 1024px) {
  li {
    text-align: center;
  }
}
</style>











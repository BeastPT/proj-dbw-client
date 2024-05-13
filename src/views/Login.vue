<script setup>
import Field from '@/components/Auth/Fields.vue'
import IPerson from '@/components/icons/IPerson.vue'
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import userStore from '@/store/user.js';
import IPassword from '@/components/icons/IPassword.vue';

const username = ref('');
const password = ref('');
const error = ref(null);
const router = useRouter()

async function login() {
  try {
    const userSt = userStore();
    await userSt.login(username.value, password.value);
    router.push('/');
  } catch (err) {
    console.error(err);
    error.value = err;
  }
}
</script>

<template>
  <div class="bg-gradient-to-b from-sky-300 to-slate-400 h-screen w-screen flex justify-center items-center">
    <div class="flex flex-col lg:flex-row w-[72rem] h-[46rem] rounded-xl overflow-hidden shadow relative">
      
      <!--  Register  -->
      <div class="hidden lg:flex w-5/12 bg-gray-900 text-white flex-col items-center">
        <div class="mt-11 ml-[-12rem]">
          <span><img src="/images/skillswap.png" alt="SkillSwapp Logo" class="h-14"></span>
        </div>
  
        <div class="mr-auto mt-44 ml-14 border-l-8 border-amber-300 pl-3 w-36">
          <h1 class="text-2xl font-bold text-start">Bem-vindo de volta!</h1>
        </div>
  
        <div class="text-center mx-14 mt-16 text-base font-normal">
          <p>Faça login na sua conta com o seu nome de utilizador e senha para explorar todas as funcionalidades disponiveis </p>
        </div>
  
        <div class="flex flex-col items-center mt-16">
          <RouterLink to="/register">
            <button class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-48 h-16 border-white border-2 mt-8">
              Criar Conta
            </button>
          </RouterLink>
        </div>
      </div>
            
      <!--  Login  -->
      <div class="w-full lg:w-[65%] bg-white flex flex-col items-center">
        <h1 class="text-gray-900 text-3xl font-poppins font-bold mt-20 sm:text-5xl text-center mx-auto">Entre com a sua conta</h1>
        <form @submit.prevent="login" class="flex flex-col items-center h-full mt-36">
          <Field class="w-full lg:w-[120%]" placeholder="Nome de utilizador" autocomplete="username" v-model="username">
            <template #icon>
              <IPerson/>
            </template>
          </Field>
          <Field class="w-full lg:w-[120%]" type="password" placeholder="Senha" autocomplete="current-password" v-model="password">
            <template #icon>
              <IPassword/>
            </template>
          </Field>
          
          <div class="flex mb-6 h-5 justify-between w-full lg:mb-28">
          </div>
          <input type="submit" value="Entrar" class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-56 h-16 mb-4">
          
          <div class="flex flex-col items-center mt-auto mb-40 lg:hidden"> 
            <RouterLink to="/register">
              <button class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-56 h-16  mt-auto">
                Criar Conta
              </button>
            </RouterLink>
          </div>
        </form>
        
  
        <div v-if="error" class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-900">{{ error }}</p>
            <button @click="error = null" class="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md mx-auto block">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

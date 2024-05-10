<script setup>
import Socials from '@/components/Socials.vue'
import Field from '@/components/Auth/Fields.vue'

import IPerson from '@/components/icons/IPerson.vue'

import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import userStore from '@/store/user.js';

const username = ref('');
const password = ref('');
const router = useRouter()

function login() {
  const userSt = userStore();
  return userSt.login(username.value, password.value)
    .then(() => {
      router.push('/');
    })
    .catch((error) => {
      console.error(error);
    })
}


</script>

<template>
    <div class="bg-gradient-to-b from-sky-300 to-slate-400 h-screen w-screen flex justify-center items-center">
        <div class="flex flex-col lg:flex-row w-[72rem] h-[46rem] rounded-xl overflow-hidden shadow relative">

        <!--  Register  -->
        <div class="hidden lg:flex w-5/12 bg-gray-900 text-white flex-col items-center">
            <div class="mt-11 ml-[-12rem]">
                <span>SKILLSWAPP Logo</span>
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
  
        <!--  Middle Icon  -->
        <!-- <div class="hidden lg:flex absolute top-1/2 left-[42rem] transform -translate-x-1/2 -translate-y-1/2">
        <button>
            <img class="rounded-full" src="https://via.placeholder.com/80" alt="SkillsWapp Logo" />
        </button>
        </div> -->

        <!--  Login  -->
        <div class="w-full lg:w-[65%] bg-white flex flex-col items-center">
          <h1 class="text-gray-900 text-3xl font-poppins font-bold mt-20 sm:text-5xl text-center mx-auto">Entre com a sua conta</h1>
          <div class="my-11">
            <Socials :color-symbols="'#000000'"/>
          </div>
          <form @submit.prevent="login" class="flex flex-col items-center h-full">
            <Field class="w-full lg:w-[120%]" :placeholder="'Nome de utilizador'" v-model="username">
              <template #icon>
                <IPerson/>
              </template>
            </Field>
            <Field class="w-full lg:w-[120%]" :placeholder="'Senha'" v-model="password">
              <template #icon>
              </template>
            </Field>
  
            <div class="flex mb-6 h-5 justify-between w-full lg:mb-28">
              <!--
              <div class="flex items-start">
                <div class="flex items-center">
                  <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-full bg-gray-50 focus:ring-2 focus:ring-amber-300 text-amber-300" required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lembrar</label>
              </div>
              -->
              <div class="text-sm">
                <span>Esqueceu a sua senha?</span>
              </div>
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
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  </style>
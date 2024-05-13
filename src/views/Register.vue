<script setup>
  import Field from '@/components/Auth/Fields.vue';
  import IPerson from '@/components/icons/IPerson.vue';
  import IMail from '@/components/icons/IMail.vue';
  import IPassword from '@/components/icons/IPassword.vue';
  import { ref } from 'vue';
  import { RouterLink, useRouter } from 'vue-router';
  import userStore from '@/store/user.js';
  
  const email = ref('');
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  const error = ref([]);
  
  async function register() {
    const userSt = userStore();
    error.value = []; 
  
    if (!email.value || !username.value || !password.value) {
      return error.value.push("Por favor, preencha todos os campos.");
    }
    // verifica se o email esta bem formatado
    if (!validateEmail(email.value)) {
      error.value.push("Por favor, insira um email válido.");
    }
  
    // verifica se o username é válido (letras, números, '-', '_', '.')
    if (!/^[a-zA-Z][a-zA-Z\d-_\.]+$/.test(username.value)) {
      error.value.push("Nome de usuário inválido. Use apenas letras, números, '-', '_', ou '.' e comece com uma letra.");
    }
  
    // Verifica se a senha é válida (letras, números, caracteres especiais)
    if (!isValidPassword(password.value)) {
      error.value.push("Senha inválida. Deve conter pelo menos 8 caracteres, incluindo letras, números e caracteres especiais.");
    }

    if (error.value.length > 0) {
      return;
    }
  
    return userSt.register(email.value, username.value, password.value)
      .then(() => {
        router.push('/');
      })
      .catch((err) => {
        console.error(err);
        return error.value.push(err);
      });
  }
  
  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  
  function isValidPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  }
  </script>


<template>
    <div class="bg-gradient-to-b from-sky-300 to-slate-400 h-screen w-screen flex justify-center items-center">
      <div class="flex flex-col lg:flex-row w-[72rem] h-[46rem] rounded-xl overflow-hidden shadow relative">
        <!--  Register  -->
        <div class="w-full lg:w-7/12 mx-auto bg-white flex flex-col items-center">
          <h1 class="text-gray-900 text-3xl font-poppins font-bold mt-10 lg:mt-20 text-center lg:text-left">Preencha os seus dados</h1>
          <form @submit.prevent="register" class="flex flex-col items-center h-full mt-24">
            <div class="w-full lg:w-[120%]"> 
              <Field placeholder='Nome de utilizador' autocomplete="username" class="w-full" v-model="username">
                <template #icon>
                  <IPerson/>
                </template>
              </Field>
              <Field placeholder='E-mail' autocomplete="email" class="w-full" v-model="email">
                <template #icon>
                  <IMail/>
                </template>
              </Field>
              <Field placeholder='Senha' type="password" autocomplete="new-password" class="w-full" v-model="password">
                <template #icon>
                  <IPassword/>
                </template>
              </Field>
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-full bg-gray-50 focus:ring-2 focus:ring-pink-600 text-pink-600" required />
              </div>
              <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Eu aceito os Termos e Condições.</label>
            </div>
            <div class="flex flex-col items-center space-y-4 mt-auto mb-32 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
              <input type="submit" value="Criar Conta" class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-56 h-16">
              <RouterLink to="/login">
                <button class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-56 h-16 lg:hidden">
                  Entrar
                </button>
              </RouterLink>
            </div>
          </form>
        </div>
        <div v-if="error.length > 0" class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-900" v-for="(text, i) in error" :key="i">{{ text }}</p>
            <button @click="error = []" class="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md mx-auto block">Fechar</button>
          </div>
        </div>
        <!--  Login  -->
        <div class="hidden lg:flex w-5/12 bg-gray-900 text-white flex-col items-center">
          <div class="ml-auto mt-11 mr-14">
            <span><img src="/images/skillswap.png" alt="SkillSwapp Logo" class="h-14"></span>
          </div>
          <div class="ml-auto mt-44 mr-14 border-r-8 border-pink-600 pr-3 w-32">
            <h1 class="text-2xl font-bold text-end">Crie já a sua conta</h1>
          </div>
          <div class="text-center mx-14 mt-14 text-base font-normal">
            <p>Preencha o seu nome de utilizador, e-mail e senha para explorar todas as funcionalidades disponiveis</p>
          </div>
          <div class="relative flex flex-col items-center mt-auto mb-32">
            <RouterLink to="/login">
              <button class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-48 h-16 border-white border-2 mt-auto">
                Entrar
              </button>
            </RouterLink>
            <span class="text-sm absolute top-16 pt-2">Já tem conta? Faça o login</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  </style>
  
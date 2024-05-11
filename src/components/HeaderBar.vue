<template>
    <div class="bg-gray-900">
      <nav class="container px-6 py-16 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between w-full">
          <button class="text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400">
            <img src="/images/skillswap.png" alt="Logo" class="h-16">
          </button>
          
          <div class="hidden md:flex items-center justify-end w-full md:w-auto"> 
            <ul class="flex space-x-12">
              <RouterLink to="/"><li class="text-xl font-bold text-gray-100 hover:text-indigo-400">Home</li></RouterLink>
              <RouterLink to="/about"><li class="text-xl font-bold text-gray-100 hover:text-indigo-400">About Us</li></RouterLink>
              <RouterLink to="/chat"><li class="text-xl font-bold text-gray-100 hover:text-indigo-400">Chat</li></RouterLink>
              <RouterLink to="/community"><li class="text-xl font-bold text-gray-100 hover:text-indigo-400">Comunidade</li></RouterLink>
            </ul>
  
            <template v-if="!loggedIn">
              <button @click="register" type="button" class="ml-6 text-lg md:text-xl font-semibold text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                Register
              </button>
              <button @click="login" type="button" class="login-btn ml-6">Login</button>
            </template>
  
            <template v-else>
              <RouterLink to="/user/profile" class="ml-20">
                <img :src="imgUrl" alt="Avatar" class="h-10 w-10 rounded-full">
              </RouterLink>
            </template>
  
          </div>
          <div class="flex md:hidden justify-between"> 
            <button @click="toggleNav" type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400 mr-4">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
            <template v-if="!loggedIn">
              <button @click="register" type="button" class="text-lg font-semibold text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                Register
              </button>
              <button @click="login" type="button" class="text-lg font-semibold text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400 ml-4">
                Login
              </button>
            </template>
            <template v-else>
              <RouterLink to="/user/profile" class="ml-4">
                <img :src="imgUrl" alt="Avatar" class="h-10 w-10 rounded-full">
              </RouterLink>
            </template>
          </div>
        </div>
        <ul :class="showMenu ? 'flex flex-col items-center' : 'hidden md:flex md:flex-row md:items-center md:space-x-10 md:mt-0'" class="mt-8 space-y-4">
          <RouterLink to="/"><li class="text-xl font-bold text-gray-100 hover:text-indigo-400 md:hidden">Home</li></RouterLink>
          <RouterLink to="/about"><li class="text-xl font-bold text-gray-100 hover:text-indigo-400 md:hidden">About Us</li></RouterLink>
          <RouterLink to="/chat"><li class="text-xl font-bold text-gray-100 hover:text-indigo-400 md:hidden">Chat</li></RouterLink>
          <RouterLink to="/community"><li class="text-xl font-bold text-gray-100 hover:text-indigo-400 md:hidden">Comunidade</li></RouterLink>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import userStore from '@/store/user.js';
  import { useRouter, RouterLink } from 'vue-router';
  
  export default {
    setup() {
      const userSt = userStore()
      const router = useRouter();
      let showMenu = ref(false);
      const { token: loggedIn, user} = storeToRefs(userSt)
      const imgUrl = ref(user.value?.image_url || '/images/img_avatar.png')

      const toggleNav = () => (showMenu.value = !showMenu.value);
  
      const login = () => {
        
        router.push('/login');
      };
  
      const register = () => {
       
        router.push('/register');
      };
  
      return { showMenu, toggleNav, loggedIn, login, register, imgUrl};
    },
  };
  </script>
  
  <style>
  .login-btn {
    border: 2px solid white;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
  }
  
  .login-btn:hover {
    background-color: lightblue;
  }
  </style>
  
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
import Socials from './components/Socials.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
</script>

<template>
    <!-- <nav>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
    
    <RouterView /> -->
    <HeaderBar />
      
    <FooterBar />
</template>

<style scoped>
</style>

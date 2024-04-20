<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
import Socials from './components/Socials.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import AboutUs from './views/AboutUs.vue';
import Fornecedor from './views/Fornecedor.vue';
import Home from './views/Home.vue'
import MyProjects from './views/MyProjects.vue';
import Profile from './views/Profile.vue';
import Purchase from './views/Purchase.vue';
import Traduction from './views/Traduction.vue';
</script>

<template>
    <!-- <nav>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
    
    <RouterView /> -->
    <HeaderBar />
      <Traduction />
    <FooterBar />
</template>

<style scoped>
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
import Socials from './components/Socials.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Obter_ajuda from './views/Obter_ajuda.vue';
import Comunidade from './views/Comunidade.vue';
import Estilo_vida from './views/Estilo_vida.vue';
import ObterAjuda_IA from './views/ObterAjuda_IA.vue';
import Chat from './views/Chat.vue';

import precoIA from './views/precoIA.vue';
import Header2 from './components/Header2.vue';

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

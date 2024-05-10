<script setup>
import FooterBar from '@/components/FooterBar.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <HeaderBar /> 
        <Suspense>
            <RouterView  />
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    <FooterBar />
</template>

<style scoped>
</style>

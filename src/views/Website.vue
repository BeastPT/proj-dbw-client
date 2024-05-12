<script setup>
import FooterBar from '@/components/FooterBar.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import { RouterView } from 'vue-router'
</script>

<template>
    <HeaderBar /> 
        <Suspense :timeout="2000">
            <RouterView  />
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    <FooterBar />
</template>

<style scoped>
</style>

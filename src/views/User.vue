<template>
    <div>
        <UserBar />
        <RouterView />
    </div>
</template>

<script setup>
    import UserBar from '@/components/UserBar.vue';
    import { RouterView } from 'vue-router';
</script>

<style scoped></style>
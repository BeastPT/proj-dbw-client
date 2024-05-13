<template>
    <div class="text-center font-semibold mb-10 mt-7 text-2xl text-white">
        <nav class="justify-between">
            <RouterLink v-for="(e, i) in links" :key="i" :to="e.path">
                <button class="px-4 py-2 bg-gray-900 hover:bg-blue-700 rounded mr-2"> {{ e.name }} </button>
            </RouterLink>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const links = ref([
    { name: 'Perfil', path: '/user/profile' },
    { name: 'Compras', path: '/user/purchase' }
])
</script>

<style scoped></style>
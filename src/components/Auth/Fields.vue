<script setup>
    import { defineProps } from 'vue';

    // Define props
    const props = defineProps({
        placeholder: String
    });
</script>

<template>
    <div class="relative w-96 rounded-xl mb-6 overflow-hidden">
        <input type="text" class="bg-zinc-300 text-gray-900 rounded-xl text-sm block w-full ps-10 p-2.5 placeholder-black placeholder-opacity-50 focus:border-black" :placeholder="placeholder" />
        
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-black text-opacity-50">
            <slot name="icon">
                <img src="https://via.placeholder.com/20" alt="Icon">
            </slot>
        </div>
    </div>
    
</template>

<style scoped>
</style>
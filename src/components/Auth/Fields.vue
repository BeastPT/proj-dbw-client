<script setup>
    import { defineModel, ref } from 'vue';

    // Define props
    const props = defineProps({
        placeholder: String,
        autocomplete: String,
        type: String,
    });

    const type = ref(props.type || 'text')

    const model = defineModel()
</script>

<template>
    <div class="relative w-96 h-14 rounded-xl mb-6 overflow-hidden">
        <input :type="type" class="bg-zinc-300 text-gray-900 rounded-xl text-sm block w-full h-full ps-12 p-2.5 placeholder-black border-none placeholder-opacity-50 focus:border-black" :placeholder="placeholder" v-model="model" :autocomplete="autocomplete"/>
        
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-black text-opacity-50">
            <slot name="icon">
                <img src="https://via.placeholder.com/20" alt="Icon">
            </slot>
        </div>
    </div>
    
</template>

<style scoped>
</style>
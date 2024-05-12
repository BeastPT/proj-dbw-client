<template>
  <div class="flex justify-between mx-4 md:mx-16">
    <div class="w-full sm:w-full md:w-5/6 lg:w-2/4 mb-8 bg-gray-300 p-4 rounded-lg">
      <h2 class="text-lg font-semibold mb-6">{{ Title }}</h2>
      <div class="flex flex-wrap mb-4">
        <!-- <p class="w-full lg:text-left w-1/2">Assunto: {{ Subject }}</p> -->
        <p class="w-full lg:text-left ">Código do projeto: {{ Id }}</p>
        <p class="w-full lg:text-left w-1/6">Valor: {{ Value }}</p>
      </div>
      <div class="flex flex-wrap">
        <p class="w-full lg:text-left ">Data de pedido: {{ OrderDate }}</p>
      </div>
    </div>

    <div class="flex items-center">
      <img :src="imageSrc" :alt="Status" class="w-10 h-10 md:max-w-none md:w-auto">
    </div>

    <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 mb-8 bg-gray-300 p-2 md:p-3 lg:p-4 rounded-lg">
      <h2 class="text-lg font-semibold mb-3">Estado</h2>
      <p>Estado: {{ rightStatus }}</p>
      <p>Entrega final: {{ rightDeliveryDate }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
const props = defineProps({
  Title: String,
  Id: String,
  Value: String,
  OrderDate: String,
  rightDeliveryDate: String,
  Status: String
})

const imageSrc = ref('')
const rightStatus = ref('')

// Status.value -> 'active', 'finished', 'cancelled'
switch (props.Status){
  case 'active':
    rightStatus.value = 'Ativo'
    imageSrc.value = '/images/yellow.png'
    break
  case 'finished':
    rightStatus.value = 'Concluído'
    imageSrc.value = '/images/green.png'
    break
  case 'cancelled':
    rightStatus.value = 'Cancelado'
    imageSrc.value = '/images/red.png'
    break
  default:
    rightStatus.value = 'Desconhecido'
    imageSrc.value = '/images/red.png'
    break
}

</script>

<style scoped></style>
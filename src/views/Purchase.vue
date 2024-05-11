<template>
  <div class="flex justify-center sm:flex-wrap p-4">
    <div class="text-center font-semibold mr-4 text-xl mb-4 sm:w-auto sm:flex-shrink-0 sm:mr-4 md:text-2xl md:mb-0">
      <button class="hover:underline text-gray-900 ml-2">Perfil</button>
    </div>
    <div class="text-center font-semibold text-xl mb-4 sm:w-auto sm:flex-shrink-0 md:text-2xl md:mb-0 sm:mr-4 sm:ml-4">
      <button class="hover:underline text-gray-900">Compras</button>
    </div>
    <div class="text-center font-semibold text-xl sm:w-auto sm:flex-shrink-0 md:text-2xl md:mb-0">
      <button class="hover:underline text-gray-900">Favoritos</button>
    </div>
  </div>

  <div class="message text-xl font-semibold mb-6 underline mx-8 md:mx-16"> 
    <p class="text-center">As minhas compras</p>
  </div>

  <div>
    <Retangulos
      v-for="(user, index) in users"
      :key="index"
      :Title="user.Title"
      :Name="user.Name"
      :ProjectCode="user.ProjectCode"
      :Value="user.Value"
      :OrderDate="user.OrderDate"
      :rightTitle="user.rightTitle"
      :rightStatus="user.rightStatus"
      :rightDeliveryDate="user.rightDeliveryDate"
      :imageSrc="user.imageSrc"
      :imageAlt="user.imageAlt"
    />
  </div>      
</template>


<script>
import Retangulos from '@/components/Retangulos.vue';

export default {
  components: {
    Retangulos
  },
  data() {
    return {
      users: [
        {
          Title: 'Tradução de texto de inglês para português',
          Name: 'Margarida Ferreira',
          ProjectCode: '123ABC',
          Value: '75€',
          OrderDate: '12/02/2024',
          rightTitle: 'Estado',
          rightStatus: 'Concluído',
          rightDeliveryDate: '15/02/2024',
          imageSrc: '/images/image24.png',
          imageAlt: 'Logo1'
        },
      ]
    };
  }
}
</script>

<style scoped>
@media (max-width: 1023px) {
.flex {
  flex-direction: column;
  align-items: center;
}
.flex > div {
  margin-bottom: 1rem;
}
}
</style>


<template>
  <template v-if="servicesnotfound">
    <div class="flex flex-col h-full justify-center items-center">
      <p class="text-lg font-bold">Serviços não encontrados</p>
    </div>
  </template>
  <template v-else>
    <div class="message text-xl font-semibold mb-6 underline mx-8 md:mx-16">
      <p class="text-center">As minhas compras</p>
    </div>

    <div>
      <PurchaseCard v-for="(user, index) in users" :key="index" :Title="user.Title" :Id="user.Id" :Value="user.Value"
        :OrderDate="user.OrderDate" :rightDeliveryDate="user.rightDeliveryDate" :Status="user.Status" />
    </div>
  </template>
</template>


<script setup>
import { ref } from 'vue';
import PurchaseCard from '@/components/PurchaseCard.vue';
import userStore from '@/store/user.js';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const { token } = storeToRefs(userStore());
const BASE_URL = "http://localhost:3001/api/";
const servicesnotfound = ref();

const users = ref([]);

try {
  const response = await fetch(`${BASE_URL}service/list`, {
    headers: {
      'authorization': token.value
    }
  })

  if (!response.ok) {
    servicesnotfound.value = true
  }

  const output = (await response.json()).message;
  users.value = output.map((e) => {
    console.log(e)
    return {
      Title: e.subject || 'Unknown', //falta


      Id: e._id,
      Value: e.price,
      OrderDate: formatDate(e.createdAt),
      rightDeliveryDate: formatDate(e.updatedAt),
      Status: e.state,
    }
  }
  )

} catch (error) {
  console.log(error)
  router.push('/user/profile')
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

</script>

<style scoped>
@media (max-width: 1023px) {
  .flex {
    flex-direction: column;
    align-items: center;
  }

  .flex>div {
    margin-bottom: 1rem;
  }
}
</style>

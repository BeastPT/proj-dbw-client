<template>
  <div v-if="!isLoaded || !user"></div>
  <div v-else class="mx-auto md:mx-4">
    <!-- ######################  PERFIL ############################### -->

    <div class="font-semibold flex flex-col md:flex-row justify-between items-center mb-4 rounded-lg">
      <div class="flex items-center mb-4 md:mb-0">
        <img :src="imgUrl" class="w-16 h-16 rounded-full" alt="Imagem de perfil">
        <div class="ml-4">
          <h2 class="text-lg mb-1">{{fullnameh}}</h2>
          <p class="text-sm text-gray-500">Membro da SKILLswap desde {{yearjoined}}</p>
        </div>
      </div>
      <div class=" md:text-right md:mb-0 md:ml-auto md:mr-4">
        <Popup/>
      </div>
      <button @click="logout" class="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 mt-4 md:mt-0">Sair da Sessão</button>
    </div>
    

    <div class="bg-white p-8 rounded-lg border border-gray-900 mb-8">
      <form @submit.prevent="changeData" class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="fullname" class="block text-gray-700 font-semibold mb-2">Nome Completo:</label>
          <input type="text" id="fullname" v-model="formdata.fullname" name="fullname" class="w-full px-3 py-2 border rounded-md bg-gray-200" :placeholder="userData.fullname || 'Escreva aqui'">
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="address" class="block text-gray-700 font-semibold mb-2">Morada:</label>
          <input type="text" id="address" v-model="formdata.address" name="address" class="w-full px-3 py-2 border rounded-md bg-gray-200" :placeholder="userData.address || 'Escreva aqui'">
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">E-mail:</label>
          <input type="text" id="email" v-model="formdata.email" name="email" class="w-full px-3 py-2 border rounded-md bg-gray-200" :placeholder="userData.email || 'Escreva aqui'">
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="door" class="block text-gray-700 font-semibold mb-2">Porta:</label>
          <input type="text" id="address_door" v-model="formdata.address_door" name="door" class="w-full px-3 py-2 border rounded-md bg-gray-200" :placeholder="userData.address_number || 'Escreva aqui'">
        </div>

        <div class="w-full md:w-1/4 px-2 mb-4">
          <label for="postal_code" class="block text-gray-700 font-semibold mb-2">Código Postal:</label>
          <input type="text" id="postal_code" v-model="formdata.postal_code" name="postal_code" class="w-full px-3 py-2 border rounded-md bg-gray-200" :placeholder="userData.postal_code || 'Escreva aqui'">
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <label for="country" class="block text-gray-700 font-semibold mb-2">País:</label>
          <input type="text" id="country" v-model="formdata.country" name="country" class="w-full px-3 py-2 border rounded-md bg-gray-200" :placeholder="userData.country || 'Escreva aqui'">
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <label for="city" class="block text-gray-700 font-semibold mb-2">Cidade:</label>
          <input type="text" id="city" v-model="formdata.city" name="city" class="w-full px-3 py-2 border rounded-md bg-gray-200" :placeholder="userData.city || 'Escreva aqui'">
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <label for="nacionality" class="block text-gray-700 font-semibold mb-2">Nacionalidade:</label>
          <input type="text" id="nacionality" v-model="formdata.nacionality" name="nacionality" class="w-full px-3 py-2 border rounded-md bg-gray-200" :placeholder="userData.nacionality || 'Escreva aqui'">
        </div>

        <!--################## Botaoo de envio #########################-->
        <div class="w-full px-2">
          <button type="submit" class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
        </div>
      </form>
    </div>

    <div class="my-8 border-t border-gray-300"></div>

    <div class="font-semibold mb-4 text-lg">
      <h1>Mudança de palavra-passe:</h1>
    </div>

    <!-- FORMULÁRIO DE MUDANCA DE PALAVRA-PASSE -->
    <div class="bg-white p-8 rounded-lg border border-gray-900 mb-8">
      <form @submit.prevent="changePassword">
        <!-- Campo da senha antiga -->
        <div class="input-container">
          <label for="old_password" class="block text-gray-700 font-semibold mb-2">Palavra-passe Antiga:</label>
          <input type="password" id="old_password" name="old_password" v-model="updatePasswordData.old" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui" autocomplete="current-password">
        </div>

        <!-- Campo da nova senha -->
        <div class="input-container">
          <label for="new_password" class="block text-gray-700 font-semibold mb-2">Nova Palavra-passe:</label>
          <input type="password" id="new_password" name="new_password" v-model="updatePasswordData.new" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui" autocomplete="new-password">
        </div>

        <!-- Campo de confirmcaoo  -->
        <div class="input-container">
          <label for="confirm_password" class="block text-gray-700 font-semibold mb-2">Confirmar Nova Palavra-passe:</label>
          <input type="password" id="confirm_password" name="confirm_password" v-model="updatePasswordData.confirm" class="mb-4 w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui" autocomplete="new-password">
        </div>

        <input type="hidden" id="username" name="username" :value="user.username">

        <!-- Botão de envio -->
        <div class="button-container">
          <button type="submit" class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">Alterar Palavra-passe</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import userStore from '@/store/user.js'
const userSt = userStore()
const { token, user } = storeToRefs(userSt)

import Popup from '@/components/PopupProfile.vue';
const router = useRouter()
const isLoaded = ref(false)
const fullnameh = ref()
const yearjoined = ref()
const userData = ref()

if (!token || !user) {
  router.push('/login')
}
const imgUrl = ref(user.value.image_url || '/images/img_avatar.png')

watch(()=> user, () => {
  imgUrl.value = user.value.image_url || '/images/img_avatar.png';
}, { deep: true });

const formdata = ref({
  fullname: '',
  address: '',
  email: '',
  address_door: '',
  postal_code: '',
  country: '',
  city: '',
  nacionality: ''
})

const updatePasswordData = ref({
  old: '',
  new: '',
  confirm: ''
})

let dataObj = {}

const BASE_URL = "http://localhost:3001/api/";
try {
  const response = await fetch(`${BASE_URL}user/${user.value._id}`, {
    headers: {
      'authorization': token.value
    }
  })
  if (!response.ok) {
    router.push('/');
  }

  dataObj = (await response.json()).message
  fullnameh.value = dataObj.fullname ? `${dataObj.fullname} (${dataObj.username})` : dataObj.username
  yearjoined.value = (new Date(dataObj.createdAt)).getFullYear()
  userData.value = dataObj
  isLoaded.value = true;
} catch (error) {
  console.log(error)
  router.push('/');
}

async function changeData() {
  try {
    const response = await fetch(`${BASE_URL}user/${user.value._id}/edit`, {
      method: 'POST',
      headers: {
        "authorization": token.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata.value),
    })

    const msg = (await response.json()).message
    if (!response.ok) {
      return console.log(msg)
    } else {
      dataObj = msg
      fullnameh.value = dataObj.fullname ? `${dataObj.fullname} (${dataObj.username})` : dataObj.username
      yearjoined.value = (new Date(dataObj.createdAt)).getFullYear()
      userData.value = dataObj
      for (let key in formdata.value) {
        formdata.value[key] = ''
      }
    }
  } catch (error) {
    console.log(error)
  }
}


async function changePassword() {
  const { old: oldpassowrd, new: newpassword, confirm } = updatePasswordData.value
  if (newpassword !== confirm) {
    return console.log('As novas palavras-passe não coincidem')
  }

  if (oldpassowrd === newpassword) {
    return console.log('A nova palavra-passe não pode ser igual à antiga')
  }

  userSt.updatePassword(oldpassowrd, newpassword)
    .then(() => {
      console.log('Password changed')
    })
    .catch((error) => {
      console.error(error)
    })
}


async function logout() {
  await userSt.logout()
  router.push('/logout')
}

</script>

<style scoped>
@media (max-width: 415px) {
  .w-full {
    width: 100%;
  }
}

@media (min-width: 416px) and (max-width: 767px) {
  .w-full {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .w-full {
    width: 100%; 
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="number"],
  input[type="tel"],
  textarea {
    width: calc(100% - 20px); 
    padding: 10px; 
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .w-full {
    width: 50%;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="number"],
  input[type="tel"],
  textarea {
    width: calc(100% - 20px); 
    padding: 10px; 
  }
}
</style>

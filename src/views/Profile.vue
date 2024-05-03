<template>
  <div class="mx-auto md:mx-4">
    <!-- #####################  PARTE DE CIMA ####################-->
    <div class="text-center font-semibold mb-10 text-2xl p-4">
      <!-- Botões com texto reduzido em telas menores -->
      <div class="flex flex-wrap justify-center mx-auto">
        <button class="mr-6 py-2 px-2 md:px-4 text-base md:text-lg hover:underline">Perfil</button>
        <button class="mr-6 py-2 px-2 md:px-4 text-base md:text-lg hover:underline">Compras</button>
        <button class="py-2 px-2 md:px-4 text-base md:text-lg hover:underline">Favoritos</button>
      </div>
      
      
    </div>

    <!-- ######################  PERFIL ############################### -->

    <div class="font-semibold flex flex-col md:flex-row justify-between items-center mb-4 rounded-lg">
      <div class="flex items-center mb-4 md:mb-0">
        <img src="@/assets/images/image12.png" class="w-16 h-16 rounded-full" alt="Imagem de perfil">
        <div class="ml-4">
          <h2 class="text-lg mb-1">Chico Moedas</h2>
          <p class="text-sm text-gray-500">Membro da SKILLswap desde 2024</p>
        </div>
      </div>
      <div class=" md:text-right md:mb-0 md:ml-auto md:mr-4">
        <button class="bg-gray-900 text-white px-3 py-2 rounded">Alterar foto de perfil</button>
      </div>
      <button class="bg-gray-900 text-white px-3 py-2 rounded hover:bg-gray-800 mt-4 md:mt-0">Sair da Sessão</button>
    </div>
    

    <div class="bg-white p-8 rounded-lg border border-gray-900 mb-8">
      <form class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="morada" class="block text-gray-700 font-semibold mb-2">Morada:</label>
          <input type="text" id="morada" name="morada" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
        </div>
        <div class="w-full md:w-1/2 px-2 mb-4">
          <label for="porta" class="block text-gray-700 font-semibold mb-2">Porta:</label>
          <input type="text" id="porta" name="porta" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
        </div>

        <div class="w-full md:w-1/4 px-2 mb-4">
          <label for="codigo_postal" class="block text-gray-700 font-semibold mb-2">Código Postal:</label>
          <input type="text" id="codigo_postal" name="codigo_postal" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <label for="pais" class="block text-gray-700 font-semibold mb-2">País:</label>
          <input type="text" id="pais" name="pais" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <label for="cidade" class="block text-gray-700 font-semibold mb-2">Cidade:</label>
          <input type="text" id="cidade" name="cidade" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
        </div>
        <div class="w-full md:w-1/4 px-2 mb-4">
          <label for="nacionalidade" class="block text-gray-700 font-semibold mb-2">Nacionalidade:</label>
          <input type="text" id="nacionalidade" name="nacionalidade" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
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
      <form>
        <!-- Campo da senha antiga -->
        <div class="input-container">
          <label for="senha_antiga" class="block text-gray-700 font-semibold mb-2">Palavra-passe Antiga:</label>
          <input type="password" id="senha_antiga" name="senha_antiga" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
        </div>

        <!-- Campo da nova senha -->
        <div class="input-container">
          <label for="nova_senha" class="block text-gray-700 font-semibold mb-2">Nova Palavra-passe:</label>
          <input type="password" id="nova_senha" name="nova_senha" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
        </div>

        <!-- Campo de confirmcaoo  -->
        <div class="input-container">
          <label for="confirmar_senha" class="block text-gray-700 font-semibold mb-2">Confirmar Nova Palavra-passe:</label>
          <input type="password" id="confirmar_senha" name="confirmar_senha" class="mb-4 w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
        </div>

        <!-- Botão de envio -->
        <div class="button-container">
          <button type="submit" class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">Alterar Palavra-passe</button>
        </div>
      </form>
    </div>
  </div>
</template>

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

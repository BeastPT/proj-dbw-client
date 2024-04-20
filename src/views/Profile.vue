<template>
    <div class="ml-48 mr-48">
        
        <!-- ########## PARTE DE CIMA  ########## -->

      <div class="text-center font-semibold flex justify-center mb-20 text-2xl p-4">
        <button class="mr-10 py-2 px-4">Perfil</button>
        <button class="mr-10 py-2 px-4">Histórico de Compra</button>
        <button class="py-2 px-4">Favoritos</button>
      </div>

      <!-- ############ FOTO DO PERFIL, NOME DA PESSOA, DESDE QUANDO É MEMBRO, SAIR DA SESSAO ####################### -->
      <div class="font-semibold flex justify-between items-center mb-4  rounded-lg">
        <div class="flex items-center">
          <img src="@/assets/images/image12.png" class="w-16 h-16 rounded-full" alt="Imagem de perfil">
          <div class="ml-4">
            <h2 class="text-lg mb-1">Chico Moedas</h2>
            <p class="text-sm text-gray-500">Membro da SKILLswap desde 2024</p>
          </div>
        </div>
        <button class="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">Sair da Sessão</button>
      </div>

      <div class="mb-16">
        <button class="bg-gray-900 text-white px-4 py-2 rounded">Alterar foto de perfil</button>
      </div>

      <!-- ############## TITULO DO PRIMEIRO FORUMLARIO ####################### -->
      <div class="font-semibold mb-4 text-lg">
        <h1>Seus dados:</h1>
      </div>

      <!-- ############### CAIXA DE TEXTO DO PRIMEIRO FORMULARIO ################# -->
      <div class="bg-white p-8 rounded-lg p-8 border border-gray-900 mb-8">
        <form>
          <div class="flex flex-wrap mb-4">
            <div class="w-full md:w-1/2 pr-2">
              <label for="nome" class="block text-gray-700 font-semibold mb-2">Nome:</label>
              <input type="text" id="nome" name="nome" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
            <div class="w-full md:w-1/2 pl-2">
              <label for="idade" class="block text-gray-700 font-semibold mb-2">Idade:</label>
              <input type="number" id="idade" name="idade" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
          </div>
          <div class="flex flex-wrap mb-4">
            <div class="w-full md:w-1/2 pr-2">
              <label for="email" class="block text-gray-700 font-semibold mb-2">E-mail:</label>
              <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
            <div class="w-full md:w-1/2 pl-2">
              <label for="telefone" class="block text-gray-700 font-semibold mb-2">Telefone:</label>
              <input type="tel" id="telefone" name="telefone" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
          </div>
          <div class="flex flex-wrap mb-4">
            <div class="w-full md:w-1/2 pr-2">
              <label for="morada" class="block text-gray-700 font-semibold mb-2">Morada:</label>
              <input type="text" id="morada" name="morada" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
            <div class="w-full md:w-1/2 pl-2">
              <label for="porta" class="block text-gray-700 font-semibold mb-2">Porta:</label>
              <input type="text" id="porta" name="porta" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
          </div>
          <div class="flex flex-wrap mb-4">
            <div class="w-full md:w-1/4 pr-2">
              <label for="codigo_postal" class="block text-gray-700 font-semibold mb-2">Código Postal:</label>
              <input type="text" id="codigo_postal" name="codigo_postal" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
            <div class="w-full md:w-1/4 pr-2">
              <label for="pais" class="block text-gray-700 font-semibold mb-2">País:</label>
              <input type="text" id="pais" name="pais" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
            <div class="w-full md:w-1/4 pr-2">
              <label for="cidade" class="block text-gray-700 font-semibold mb-2">Cidade:</label>
              <input type="text" id="cidade" name="cidade" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
            <div class="w-full md:w-1/4 pl-2">
              <label for="nacionalidade" class="block text-gray-700 font-semibold mb-2">Nacionalidade:</label>
              <input type="text" id="nacionalidade" name="nacionalidade" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
            </div>
          </div>
          <div>
            <button type="submit" class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
          </div>
        </form>
      </div>

    <!-- ############### COLOCAR UMA LINHA PARA SEPARAR FORMULARIOS ############# -->
    <div class="my-8 border-t border-gray-300"></div>


    <!-- ################## TITULO DO SEGUNDO FORMULARIO ################## -->
    <div class="font-semibold mb-4 text-lg">
        <h1>Mudança de palavra-passe:</h1>
      </div>


    <!-- ################## CAIXA DO SEGUNDO FORMULARIO ##################### -->
    <div class="bg-white p-8 rounded-lg p-8 border border-gray-900 mb-8">
      <form>
        <div class="flex flex-wrap mb-4">
          <div class="w-full md:w-1/2 pr-2">
            <label for="senha_antiga" class="block text-gray-700 font-semibold mb-2">Palavra-passe Antiga:</label>
            <input type="password" id="senha_antiga" name="senha_antiga" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
          </div>
          <div class="w-full md:w-1/2 pl-2">
            <label for="nova_senha" class="block text-gray-700 font-semibold mb-2">Nova Palavra-passe:</label>
            <input type="password" id="nova_senha" name="nova_senha" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
          </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="w-full md:w-1/2 pr-2"></div> <!-- Div vazia para ocupar a metade esquerda -->
          <div class="w-full md:w-1/2 pl-2">
            <label for="confirmar_senha" class="block text-gray-700 font-semibold mb-2">Confirmar Nova Palavra-passe:</label>
            <input type="password" id="confirmar_senha" name="confirmar_senha" class="w-full px-3 py-2 border rounded-md bg-gray-200" placeholder="Escreva aqui">
          </div>
        </div>
        <div>
          <button type="submit" class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">Alterar Palavra-passe</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <style>
  </style>
  
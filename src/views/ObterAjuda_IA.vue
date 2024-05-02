<template >
    <div class="mx-4 md:mx-8 lg:mx-48" style="font-family: Arial, sans-serif;">
        <h1 class="text-3xl md:text-4xl text-center mt-8 font-bold">Obter Ajuda</h1>
        
        <h2 class="text-xl md:text-2xl font-semibold mb-2 mt-8">Fale com a nossa assistente virtual</h2>
        <div class="border-b-4 bg-gray-200 rounded-2xl"></div>
    
        <div class="flex flex-col items-center justify-center min-h-screen text-gray-800 p-10">
            
            <div class="flex flex-col flex-grow w-full max-w-4xl bg-gray-200 shadow-xl rounded-lg overflow-hidden">
                <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
                <div class="flex w-full mt-2 space-x-3 max-w-xs">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full image-IA"></div>
                    <div>
                        <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                            <p class="text-sm">Como posso ajudar??</p>
                        </div>
                        <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                    </div>
                </div>
                <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                        <div class="bg-blue-400 text-white p-3 rounded-l-lg rounded-br-lg">
                            <p class="text-sm">Olá! Estou um pouco perdido sobre como começar como freelancer. Pode me dar algumas dicas?</p>
                        </div>
                        <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full image-client"></div>
                </div>
                <div class="flex w-full mt-2 space-x-3 max-w-xs">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full image-IA"></div>
                    <div>
                        <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                            <p class="text-sm">Claro, ficarei feliz em ajudar! Primeiramente, qual é a sua área de atuação? Escrita, tradução, programação, ou outra coisa?</p>
                        </div>
                        <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                    </div>
                </div>
                <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                        <div class="bg-blue-400 text-white p-3 rounded-l-lg rounded-br-lg">
                            <p class="text-sm">Sou programador </p>
                        </div>
                        <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full image-client"></div>
                </div>
                <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                        <div class="bg-blue-400 text-white p-3 rounded-l-lg rounded-br-lg">
                            <p class="text-sm">E preciso da tua ajuda</p>
                        </div>
                        <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full image-client"></div>
                </div>
                
                <div class="flex w-full mt-2 space-x-3 max-w-xs">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full image-IA"></div>
                    <div>
                        <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                            <p class="text-sm">Ótimo! Iniciar com um portfólio online pode ser muito eficaz. Utilize plataformas como GitHub para compartilhar seus projetos e código-fonte. Isso permite que os potenciais clientes avaliem suas habilidades aqui na SKILLswap. Já possui um portfólio? </p>
                        </div>
                        <span class="text-xs text-gray-500 leading-none">2 min ago</span>
                    </div>
                </div>
                
            </div>
            
            <div class="bg-gray-300 p-4">
                <input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Escreva a sua mensagem...">
            </div>
        </div>
    </div>



    <h2 class="text-xl md:text-2xl font-semibold mb-2 mt-8">Contacta-nos</h2>
    <div class="border-b-4 bg-gray-200 rounded-2xl mb-8"></div>

    <div class="flex flex-wrap justify-center md:justify-start lg:justify-between">
      <div class="inf mx-auto md:mr-4 lg:mr-0 mb-4 md:mb-0">
        <p class="text-white">E-mail</p>
        <p>skillswap@gmail.com</p>
      </div>
      <div class="inf mx-auto md:mr-4 lg:mr-0 mb-4 md:mb-0">
        <p class="text-white">Telefone</p>
        <p>291 718 291</p>
      </div>
      <div class="inf mx-auto md:mr-4 lg:mr-0 mb-4 md:mb-0">
        <p class="text-white">Telemóvel</p>
        <p>+351 924 174 690</p>
      </div>
      <div class="inf mx-auto">
        <p class="text-white">Whatsapp</p>
        <p>+351 964 041 246</p>
      </div>
    </div>
    
</div>

</template>


<script>

</script>

<style scoped>

.inf {
    width: 200px; /* Definindo uma largura fixa para manter os elementos do mesmo tamanho */
    height: 100px; /* Ajustando a altura para acomodar o conteúdo */
    background-color:rgb(209 213 219);
    border-radius: 15px;
    margin-bottom: 10px; /* Adicionando espaçamento inferior */
    padding: 10px; /* Adicionando espaçamento interno */
    text-align: center; /* Centralizando o texto */
}

.inf p {
    margin: 0; /* Removendo margens padrão dos parágrafos */
  }
                                 
  .image-IA, .image-client {
    background-size: cover;
    background-position: center;
    border: 2px solid #1B1D2D;
    border-radius: 50%; /* Alterado para um círculo para avatares */
    width: 40px; /* Definido um tamanho padrão para os avatares */
    height: 40px;
  }

  .image-IA {
    background-image: url('/src/assets/images/IA.jpg');
  }

  .image-client {
    background-image: url('/src/assets/images/cliente.jpg');
  }

</style>
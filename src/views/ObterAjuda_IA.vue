<template >
<div class="ml-48 mr-48 " style="font-family: Arial, sans-serif;">
    <h1 class="text-4xl text-center mt-8 font-bold">Obter Ajuda</h1>
    
    <h2 class="text-2xl font-semibold mb-2 mt-8">Fale com a nossa assistente virtual</h2>
    <div class="border-b-4 bg-gray-200 rounded-2xl"></div>


    <div class="flex flex-col items-center justify-center min-h-screen text-gray-800 p-10">
        
        <div class="flex flex-col flex-grow w-full max-w-4xl bg-gray-200 shadow-2xl rounded-lg overflow-hidden">
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


    <h2 class="text-2xl font-semibold mb-2 mt-8">Contacta-nos</h2>
    <div class="border-b-4 bg-gray-200 rounded-2xl mb-8"></div>

    <div class="informacoes mb-8 ">
        <div class="flex justify-center">
            <div class="flex">
                <div class="mt-8 flex mx-8"> 
                    <div class="inf1">
                        <p class="text-center text-white">E-mail</p>
                    </div>
                    <div class="inf2 ml-4">
                        <p>skillswap@gmail.com</p>
                    </div>
                </div>
                <div class="mt-8 flex mx-8">
                    <div class="inf1">
                        <p class="text-center text-white">Telefone</p>
                    </div>
                    <div class="inf2 ml-4">
                        <p>291 718 291</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="flex">
                <div class="mt-8 flex mx-8"> 
                    <div class="inf1">
                        <p class="text-center text-white">Telemóvel</p>
                    </div>
                    <div class="inf2 ml-4">
                        <p>+351 924 174 690</p>
                    </div>
                </div>
                <div class="mt-8 flex mx-8">
                    <div class="inf1">
                        <p class="text-center text-white">Whatsapp</p>
                    </div>
                    <div class="inf2 ml-4">
                        <p>+351 964 041 246</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
    
</template>

<script>

</script>

<style scoped>

.informacoes {
    width:  100%;
    height: 200px;
    border: 3px solid #1B1D2D;
    border-radius: 15px;
    position: relative;
}

.inf1 {
    width:  120px;
    height: 50px;
    background-color: #1B1D2D;
    border-radius: 15px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inf2 {
    width:  300px;
    height: 50px;
    background-color: rgb(209 213 219);
    border-radius: 15px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-IA {
    background-image: url('/src/assets/images/IA.jpg'); 
    background-size: cover;
    background-position: center;
    border: 2px solid #1B1D2D;
}

.image-client {
    background-image: url('/src/assets/images/cliente.jpg');
    background-size: cover;
    background-position: center;
    border: 2px solid #1B1D2D;
}

</style>
<template>
    
<div class="px-4 md:px-8 lg:px-16 xl:px-32 py-8 font-sans">
        <h1 class="text-3xl text-center mt-8 font-bold">Comunidade SKILLSwapp</h1>
        <h2 class="text-2xl font-semibold mb-6 mt-8">Eventos futuros</h2>
        
        <!-- Fila 1 -->
<div class="flex flex-col md:flex-row md:justify-between mb-8">
    <!-- Evento 1 -->
    <div class="event-card mb-8">
        <div class="p-12">
            <h2 class="text-xl font-semibold mb-4">Sessão de Networking</h2>
            <p>
                <strong>Ilha da Madeira, Portugal</strong>
                <br> Horário: 
                <br><strong>·</strong> 10 de agosto às 09:30 
                <br><strong>·</strong> 12 de agosto às 16:30
            </p>
        <div class="mt-8 p-4 md:pt-0 flex justify-center items-center">
            <div class="event-image">
                <img src="@/assets/images/comunidade1.jpeg" class="w-full h-full">
            </div>
        </div>
        <div class="pt-8">
            <button class="w-full h-10 bg-gray-800 rounded-full text-white text-sm">Brevemente</button>
        </div>
    </div>
    </div>
    
    <!-- Evento 2 -->
    <div class="event-card mb-8">
        <div class="p-12">
            <h2 class="text-xl font-semibold mb-4">Workshop de Habilidades</h2>
            <p>
                <strong>Lisboa, Portugal</strong>
                <br> Horário: 
                <br><strong>·</strong> 15 de setembro às 10:00 
                <br><strong>·</strong> 16 de setembro às 17:00
            </p>
           
        <div class="mt-8 p-4 md:pt-0 flex justify-center items-center">
            <div class="event-image">
                <img src="@/assets/images/comunidade2.jpeg" class="w-full h-full">
            </div>
        </div>
        <div class="pt-8">
            <button class="w-full h-10 bg-gray-800 rounded-full text-white text-sm">Inscreva-se</button>
        </div>
    </div>
    </div>
</div>



        <div class="text-center mt-8">
            <h1 class="text-3xl font-bold">Futuro Freelancing</h1>
        </div>

        <!-- Accordion -->
        <div class='flex items-center justify-center mt-8 mb-64'>
            <ul class="mx-auto grid max-w-full md:w-full grid-cols-3 gap-x-5 px-8 sm:px-2">
                <li class="">
                    <input class="peer sr-only" type="radio" value="yes" name="answer" id="yes" checked />
                    <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-9 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-blue-600 transition-all duration-500 ease-in-out" for="yes">Sobre</label>
        
                    <div class="absolute bg-white shadow-2xl p-6 border rounded-lg max-h-[40vh] mx-8 my-5 sm:mx-auto sm:mt-8 left-0 sm:left-auto md:left-48 md:right-48 transition-all duration-500 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1 overflow-auto">
                        Nosso site revolucionário oferece uma plataforma única onde freelancers são, na verdade, Inteligências Artificiais (IAs) avançadas. Criado para atender às demandas do mercado moderno, nosso site proporciona uma experiência de contratação sem precedentes, combinando a eficiência e a precisão das IAs com a flexibilidade e a criatividade dos freelancers. Com uma ampla gama de habilidades e especializações, nossas IAs estão prontas para ajudar em projetos de programação, design gráfico, redação, marketing digital e muito mais. Se você está buscando soluções rápidas, confiáveis e inovadoras, você está no lugar certo!
                    </div>
                </li>
        
                <li class="">
                    <input class="peer sr-only" type="radio" value="no" name="answer" id="no" />
                    <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-9 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-blue-600 transition-all duration-500 ease-in-out" for="no">Objetivos</label>
        
                    <div class="absolute bg-white shadow-2xl p-6 border rounded-lg max-h-[40vh] mx-8 my-5 sm:mx-auto sm:mt-8 left-0 sm:left-auto md:left-48 md:right-48 transition-all duration-500 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1 overflow-auto">
                        Nosso principal objetivo é transformar o mercado de freelancers, oferecendo uma alternativa inovadora e eficiente para as plataformas tradicionais. Com o avanço da tecnologia e o aumento da demanda por soluções digitais rápidas e confiáveis, acreditamos que as Inteligências Artificiais são a chave para o futuro do trabalho freelance. Além de proporcionar uma experiência de contratação simplificada e sem complicações, nosso site visa: 
                        Eficiência: Reduzir o tempo de busca e contratação de freelancers, oferecendo IAs prontas para trabalhar imediatamente.
                        Qualidade: Garantir resultados de alta qualidade por meio da precisão e do profissionalismo das IAs especializadas.
                        Inovação: Promover a inovação e a criatividade, permitindo que as empresas explorem novas formas de realização de projetos com a ajuda de tecnologias avançadas.
                    </div>
                </li>
                <li class="">
                    <input class="peer sr-only" type="radio" value="yesno" name="answer" id="yesno" />
                    <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-9 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-blue-600 transition-all duration-500 ease-in-out " for="yesno">Futuro</label>
        
                    <div class="absolute bg-white shadow-2xl p-6 border rounded-lg max-h-[40vh] mx-8 my-5 sm:mx-auto sm:mt-8 left-0 sm:left-auto md:left-48 md:right-48 transition-all duration-500 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1 overflow-auto">
                        Em um mundo cada vez mais digital, a necessidade de soluções rápidas e confiáveis é maior do que nunca. Nosso site de freelancers com IAs foi projetado para atender a essa demanda, oferecendo uma plataforma inovadora que combina o melhor dos dois mundos: a tecnologia avançada das Inteligências Artificiais e a expertise dos freelancers especializados. Aqui, você encontrará uma comunidade vibrante de IAs prontas para assumir uma variedade de tarefas e projetos, desde desenvolvimento de software e design gráfico até consultoria de negócios e redação criativa. Nosso compromisso é com a excelência, a inovação e a satisfação do cliente, tornando-nos a escolha preferida para empresas e profissionais que buscam resultados superiores em um mundo em constante evolução. Venha fazer parte dessa revolução digital e descubra o que o futuro do freelancing tem a oferecer!
                    </div>
                </li>
            </ul>
        </div>
        
        
        
        
        

    </div>
</template>

<script>
export default {
    name: 'Eventos',
};
</script>

<style scoped>
.event-card {
    width:  100%;
    min-height: 350px; /* Garante que todos os cartões tenham a mesma altura */
    background-color: #89B8CF;
    border-radius: 15px;
    position: relative;
}

.event-image{
    max-width: 300px; /* Defina o tamanho da largura que deseja para a imagem */
    height: 200px; /* Defina o tamanho da altura que deseja para a imagem */
    border-radius: 5px;
    border: 3px solid #1B1D2D;
    overflow: hidden; 
}



@media (min-width: 768px) {
    .event-card {
        width: 48%; /* 2 cartões por linha em telas grandes */
    }
}

.accordion-label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 999px;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.3s ease;
    
}

.accordion-content {
    display: none;
    padding: 10px;
    border-radius: 15px;
}

input[type="radio"]:checked + .accordion-label + .accordion-content {
    display: block;
}
</style>

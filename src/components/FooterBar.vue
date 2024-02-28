<script setup>
import Socials from './Socials.vue';

    
</script>

<template>
        <div class="bg-gray-900 w-full flex flex-col text-white">
            <div class="flex flex-row justify-between mx-64 mt-12">
                <div>
                    <h3 class="text-xl font-bold">Categorias</h3>

                    <nav class="mt-6 text-zinc-400 text-xl font-semibold">
                        <ul>
                            <li>Mercado Financeiro</li>
                            <li>Programação</li>
                            <li>Tradução</li>
                            <li>Aprendizagem</li>
                            <li>Fitness</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3 class="text-xl font-bold">Obter Ajuda</h3>

                    <nav class="mt-6 text-zinc-400 text-xl font-semibold">
                        <ul>
                            <li>Estado do pedido</li>
                            <li>Devoluções</li>
                            <li>Contacta-nos</li>
                            <li>Livro de Reclamações</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3 class="text-xl font-bold">About Us</h3>

                    <nav class="mt-6 text-zinc-400 text-xl font-semibold">
                        <ul>
                            <li>Estado de Notícias</li>
                            <li>Estilo de vida</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3 class="text-xl font-bold">Comunidade</h3>

                    <nav class="mt-6 text-zinc-400 text-xl font-semibold">
                        <ul>
                            <li>Eventos</li>
                            <li>Tornar-te vendedor</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <Socials />
                </div>
            </div>
            
            <div class="flex flex-row justify-between mx-48 mt-32 border-t-4 border-t-white p-6">
                <span>
                    SkillSwapp Logo
                </span>

                <span class="text-xl font-bold">
                    Madeira, Portugal
                </span>

                <span class="text-zinc-400 text-sm font-light">
                    Política de Privacidade e Cookies
                </span>
            </div>
        </div>
</template>

<style scoped>
</style>
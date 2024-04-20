<script setup>
    import Socials from '@/components/Socials.vue'
    import Field from '@/components/Auth/Fields.vue'

    import IPerson from '@/components/icons/IPerson.vue'
    import { RouterLink } from 'vue-router';
</script>


<template>
    <div class="bg-gradient-to-b from-sky-300 to-slate-400 h-screen w-screen flex justify-center items-center">
        <div class="flex columns-2 w-[72rem] h-[46rem] rounded-xl overflow-hidden shadow relative">
            <!--  Register  -->
            <div class="w-5/12 mx-auto bg-gray-900 text-white flex flex-col items-center">
                <div class="mr-auto mt-11 ml-14">
                    <span>SKILLSWAPP Logo</span>
                </div>

                <div class="mr-auto mt-44 ml-14 border-l-8 border-amber-300 pl-3 w-36">
                    <h1 class="text-2xl font-bold text-start">Bem-vindo de volta!</h1>
                </div>

                <div class="text-center mx-14 mt-14 text-base font-normal">
                    <p>Faça login na sua conta com o seu nome de utilizador e senha para explorar todas as funcionalidades disponiveis </p>
                </div>

                <div class="flex flex-col items-center mt-auto mb-32">
                    <button class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-48 h-16 border-white border-2 mt-auto">
                        Criar Conta
                    </button>
                </div>
            </div>

            <!--  Middle Icon  -->
            <div class="flex z-1 absolute top-1/2 left-[30rem] transform -translate-x-1/2 -translate-y-1/2">
                <RouterLink to="/register">
                    <button>
                        <img class="rounded-full" src="https://via.placeholder.com/80" alt="SkillsWapp Logo" />
                    </button>
                </RouterLink>
            </div>

            <!--  Login  -->
            <div class="w-7/12 bg-white flex flex-col items-center">
                <h1 class="text-gray-900 text-3xl font-poppins font-bold mt-20">Entre com a sua conta</h1>
                <div class="my-11">
                    <Socials :color-symbols="'#000000'"/>
                </div>
                <form action="" class="flex flex-col items-center h-full">
                    <Field :placeholder="'Nome de utilizador'">
                        <template #icon>
                            <IPerson/>
                        </template>
                    </Field>
                    <Field :placeholder="'Senha'">
                        <template #icon>
                        </template>
                    </Field>
                    <div class="flex mb-6 h-5 justify-between w-full">
                        <div class="flex items-start">
                            <div class="flex items-center">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-full bg-gray-50 focus:ring-2 focus:ring-amber-300 text-amber-300" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lembrar</label>
                        </div>
                            
                        <div class="text-sm">
                            <span>Esqueceu a sua senha?</span>
                        </div>
                    </div>
                    <input type="submit" value="Entrar" class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-56 h-16 mt-auto mb-32">
                    
                </form>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
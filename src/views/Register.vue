<script setup>
    import Field from '@/components/auth/Fields.vue'

    import IPerson from '@/components/icons/IPerson.vue'
    import IMail from '@/components/icons/IMail.vue'
</script>


<template>
    <div class="bg-gradient-to-b from-sky-300 to-slate-400 h-screen w-screen flex justify-center items-center">
        <div class="flex columns-2 w-[72rem] h-[46rem] rounded-xl overflow-hidden shadow relative">
            <!--  Register  -->
            <div class="w-4/6 mx-auto bg-white flex flex-col items-center">
                <h1 class="text-gray-900 text-3xl font-poppins font-bold mt-20">Preencha os seus dados</h1>
                <div class="my-11">
                    Socials
                </div>
                <form action="" class="flex flex-col items-center">
                    <Field :placeholder="'Nome de utilizador'">
                        <template #icon>
                            <IPerson/>
                        </template>
                    </Field>
                    <Field :placeholder="'E-mail'">
                        <template #icon>
                            <IMail/>
                        </template>
                    </Field>
                    <Field :placeholder="'Senha'">
                        <template #icon>
                        </template>
                    </Field>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-full bg-gray-50 focus:ring-2 focus:ring-green-600 text-green-600" required />
                        </div>
                        <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Eu aceito os Termos e Condições.</label>
                    </div>
                    <input type="submit" value="Criar Conta" class="text-white text-2xl font-semibold font-poppins bg-gray-900 rounded-full w-56 h-16 mt-10">
                </form>
            </div>

            <!--  Middle Icon  -->
            <div class="flex z-1 absolute top-1/2 left-[48rem] transform -translate-x-1/2 -translate-y-1/2">
                <button imag>
                    <img class="rounded-full" src="https://via.placeholder.com/80" alt="SkillsWapp Logo" />
                </button>
            </div>

            <!--  Login  -->
            <div class="w-2/6 bg-gray-900 text-white">
                <div>
                    SKILLSWAPP Logo
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>
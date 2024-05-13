import { defineStore } from "pinia";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Define uma store chamada 'user' com um estado inicial que contém o token e o usuário 
// (Serve para acessar o token e o usuário de "qualquer" lugar do código)
export default defineStore('user', {
    state: () => ({
        token: JSON.parse(localStorage.getItem('token')), // Tenta pegar o token do localStorage
        user: JSON.parse(localStorage.getItem('user')), // Tenta pegar o usuário do localStorage
    }),
    actions: {
        async login(username, password) { // Função para fazer login
            try {
                const user = await fetch(`${BASE_URL}auth/login`, { // Faz uma requisição na API para dar login
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                });
                if (user.status !== 200) {
                    throw new Error((await user.json()).message)
                }

                const data = await user.json();
                this.token = data.token;
                localStorage.setItem('token', JSON.stringify(this.token)); // Salva o token no localStorage
                this.user = data.user;
                localStorage.setItem('user', JSON.stringify(this.user)); // Salva o usuário no localStorage
            } catch (error) {
                throw error;
            }
        },
        async logout() { // Função para fazer logout
            this.user = null; 
            this.token = null;
            localStorage.removeItem('token'); // Remove o token do localStorage
            localStorage.removeItem('user'); // Remove o usuário do localStorage
        },
        async register(email, username, password) { // Função para registrar um usuário
            console.log(email, username, password)
            try {
                const user = await fetch(`${BASE_URL}auth/register`, { // Faz uma requisição na API para registrar um usuário
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, username, password }), // Passa os dados do usuário
                });
                if (user.status == 400) {
                    throw new Error((await user.json()).message) // Se der erro, lança um erro com a mensagem vinda da API
                }

                const data = await user.json();
                this.token = data.token;
                localStorage.setItem('token', JSON.stringify(this.token)); // Salva o token no localStorage
                this.user = data.user;
                localStorage.setItem('user', JSON.stringify(this.user)); // Salva o usuário no localStorage
            } catch (error) {
                throw error;
            }
        },
        async updatePassword(oldpassword, newpassword) { // Função para atualizar a senha
            try {
                const user = await fetch(`${BASE_URL}auth/updatepassword`, { // Faz uma requisição na API para atualizar a senha
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": this.token,
                    },
                    body: JSON.stringify({ oldpassword, newpassword }), // Passa as senhas
                });
                if (!user.ok) {
                    throw (await user.json()).message
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        async updateImage(image) {
            try {
                const response = await fetch(`${BASE_URL}user/${this.user._id}/edit`, { // Faz uma requisição na API para atualizar a imagem (Colocar dinâmica a alteracao da imagem no front-end)
                    method: 'POST',
                    headers: {
                        "authorization": this.token,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        image_url: image,
                    }),
                })
                if (!response.ok) {
                    return { error: (await response.json()).message } // Se der erro, retorna a mensagem vinda da API
                }
                this.user.image_url = image
                return { success: true } // Se der certo, retorna um objeto com a chave 'success' como true
            } catch (error) {
                return { error: (await response.json()).message } // Se der erro, retorna a mensagem vinda da API
            }
        }
    },
})
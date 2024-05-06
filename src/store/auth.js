import { defineStore } from "pinia";

const BASE_URL = "http://localhost:3001/api/";

export default defineStore({
    id: "auth",
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        loading: false,
    }),
    actions: {
        async login(username, password) {
            this.loading = true;
            try {
                const user = await fetch(`${BASE_URL}auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                });
                if (user.status !== 200) {
                    throw new Error("Invalid credentials");
                }

                this.user = await user.json();
                const token = this.user.token;
                localStorage.setItem('user', JSON.stringify(token));
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        async logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        },
        async register(email, username, password) {
            this.loading = true;
            try {
                const user = await fetch(`${BASE_URL}auth/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, username, password }),
                });
                if (user.status == 400) {
                    throw new Error("Wrong");
                }

                this.user = await user.json();
                const token = this.user.token;
                localStorage.setItem('user', token);
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    },
})
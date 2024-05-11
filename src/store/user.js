import { defineStore } from "pinia";

const BASE_URL = "http://localhost:3001/api/";

export default defineStore('user', {
    state: () => ({
        token: JSON.parse(localStorage.getItem('token')),
        user: JSON.parse(localStorage.getItem('user')),
    }),
    actions: {
        async login(username, password) {
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

                const data = await user.json();
                this.token = data.token;
                localStorage.setItem('token', JSON.stringify(this.token));
                this.user = data.user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        async logout() {
            this.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            router.push('/login');
        },
        async register(email, username, password) {
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

                const data = await user.json();
                this.token = data.token;
                localStorage.setItem('token', JSON.stringify(token));
                this.user = data.user;
                localStorage.setItem('user', JSON.stringify(user));
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        async updatePassword(oldpassword, newpassword) {
            try {
                const user = await fetch(`${BASE_URL}auth/updatepassword`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": this.token,
                    },
                    body: JSON.stringify({ oldpassword, newpassword }),
                });
                if (!user.ok) {
                    throw (await user.json()).message
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    },
})
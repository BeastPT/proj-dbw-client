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
                    throw new Error((await user.json()).message)
                }

                const data = await user.json();
                this.token = data.token;
                localStorage.setItem('token', JSON.stringify(this.token));
                this.user = data.user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } catch (error) {
                throw error;
            }
        },
        async logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        async register(email, username, password) {
            console.log(email, username, password)
            try {
                const user = await fetch(`${BASE_URL}auth/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, username, password }),
                });
                if (user.status == 400) {
                    throw new Error((await user.json()).message)
                }

                const data = await user.json();
                this.token = data.token;
                localStorage.setItem('token', JSON.stringify(this.token));
                this.user = data.user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } catch (error) {
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
        },
        async updateImage(image) {
            try {
                const response = await fetch(`${BASE_URL}user/${this.user._id}/edit`, {
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
                    return { error: (await response.json()).message }
                }
                this.user.image_url = image
                return { success: true }
            } catch (error) {
                return { error: (await response.json()).message }
            }
        }
    },
})
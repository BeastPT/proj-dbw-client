import { defineStore } from "pinia";
const BASE_URL = "http://localhost:3001/api/";

export default defineStore('products', {
   state: () => {
    return {
        products: {}
    }
   },
   getters: () => ({
   }),
   actions: {
    async fetchProducts() {
        const response = await fetch(`${BASE_URL}product/list`)
        console.log(response)
        if (!response.ok) {
            throw new Error("Error fetching products")
        }
        this.products = await response.json()
    }
   }
})
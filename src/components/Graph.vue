<template>
    <Bar :data="data" :options="options" />
</template>

<script setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

import { ref } from 'vue'
import userStore from '@/store/user.js'
const usrSt = userStore()

const reff = ref(null)


const date = new Date()
// Função para conseguir os ultimos 6 meses dinamicamente e colocar numa array
const months = Array.from({ length: 6 }, (_, i) => {
    const month = date.toLocaleString('pt-PT', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())
    date.setMonth(date.getMonth() - 1)
    return month
}).reverse()

try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + 'service/amount', {
        headers: {
            'authorization': usrSt.token,
        }
    })

    if (!response.ok) {
        console.log(response)
    } else {
        const data = await response.json()
        reff.value = data.message
    }
} catch (err) {
}
const data = {
    labels: months,
    datasets: [
        {
            label: 'Novos Serviços',
            backgroundColor: '#60a5fa',
            data: reff.value
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                precision: 0
            }
        }
    }
}
</script>
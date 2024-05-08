import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Website.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutUs.vue')
        },
        {
          path: 'user',
          //component: () => import('../views/Website.vue'),
          children: [
            {
              path: 'profile',
              name: 'profile',
              component: () => import('../views/Profile.vue')
            },
            {
              path: 'purchase',
              name: 'purchase',
              component: () => import('../views/Purchase.vue')
            },
          ]
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})

import authStore from '@/store/auth.js'
const needsAuth = ['profile', 'purchase', 'purchase']
router.beforeEach((to, from) => {
  const auth = authStore()
  if ( (to.name == 'login' || to.name == 'register') && auth.user) {
    return '/'
  }

  if (needsAuth.includes(to.name) && !auth.user) {
    return '/login'
  }
})

export default router

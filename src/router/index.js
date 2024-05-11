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
          path: '/test',
          name: 'test',
          component: () => import('../views/Product.vue')
        },
        {
          path: '/produto/:id',
          name: 'product',
          component: () => import('../views/Product.vue')
        },
        {
          path: 'support',
          name: 'support',
          component: () => import('../views/ObterAjuda_IA.vue')
        },
        {
          path: 'logout',
          name: 'logout',
          component: () => import('../views/Logout.vue')
        },
        {
          path: 'chat',
          name: 'chat',
          component: () => import('../views/Chat.vue')
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

import userStore from '@/store/user.js'
const needsAuth = ['profile', 'purchase', 'purchase']
router.beforeEach((to, from) => {
  const userSt = userStore()
  if ( (to.name == 'login' || to.name == 'register') && userSt.token) {
    return '/'
  }

  if (needsAuth.includes(to.name) && !userSt.token) {
    return '/login'
  }
})

export default router

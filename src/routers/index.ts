import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../pages/jobs.vue')
  },
  {
    path: '/my-network',
    name: 'MyNetwork',
    component: () => import('../pages/myNetwork.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../pages/messages.vue')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../pages/notifications.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../pages/profile.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../pages/settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

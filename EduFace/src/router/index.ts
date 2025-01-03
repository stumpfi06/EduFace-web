import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InterfaceView from '../views/InterfaceView.vue'
import LoginView from '../views/LoginView.vue'
import DokumentationView from '@/views/DokumentationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/interface',
      name: 'EduFace-Interface',
      component: InterfaceView,
    },
    {
      path: '/login',
      name: 'EduFace-Login',
      component: LoginView,
    },
    {
      path: '/Dokumentation',
      name: 'EduFace-Dokumenation',
      component: DokumentationView,
    },
  ],
})

export default router

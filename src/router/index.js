import { createRouter, createWebHistory } from 'vue-router'
import PortalView from '@/views/PortalView.vue'
import PowerPredict from '@/views/PowerPredict.vue'
import DataAnalysis from '@/views/DataAnalysis.vue'
import IndustryTrending from '@/views/IndustryTrending.vue'
import UserHome from '@/views/UserHome.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PortalView',
      component: PortalView
    },
    {
      path: '/PowerPredict',
      name: 'PowerPredict',
      component: PowerPredict
    },
    {
      path: '/DataAnalysis',
      name: 'DataAnalysis',
      component: DataAnalysis
    },
    {
      path: '/IndustryTrending',
      name: 'IndustryTrending',
      component: IndustryTrending
    },
    {
      path: '/UserHome',
      name: 'UserHome',
      component: UserHome
    }
  ]
})

export default router

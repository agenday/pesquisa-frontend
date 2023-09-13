import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundScreen from "@/components/Screen/NotFoundScreen.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:token',
      name: 'home',
      component: HomeView,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundScreen
    }
  ]
})

export default router

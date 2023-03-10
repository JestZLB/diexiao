import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home/index.vue'
import more from '@/views/more/index.vue'
import NotFound from '@/views/404/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/' , 
      redirect : '/home'
    },
    {
      path : '/home',
      component : home,
      name:'主页',
      meta : {
        title : '主页'
      }
    },
    {
      path : '/more',
      component : more,
      name:'更多',
      meta : {
        title : '更多'
      }
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound, 
      meta : {
        title : '404'
      }
    },
  ]
})

export default router

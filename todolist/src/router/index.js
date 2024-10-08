import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashbordView from '@/views/DashbordView.vue'
import EditView from '@/views/EditView.vue'
import NotFoundPageView from '@/views/NotFoundPageView.vue'
import ShowView from '@/views/ShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashbord',
      name: 'dashbord',
      component: DashbordView,
      /* meta: {authUser:true} */
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView,
      /* meta: {authUser:true} */
    },
    {
      path: '/show/:id',
      name: 'show',
      component: ShowView,
      /* meta: {authUser:true} */
    },
    { path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFoundPageView
    }
  ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
   	{
      path: '/',
      redirect: '/dashboard'
     },
    {
      path: '/',
      component: () => import('@/layouts/Basiclayout'),
      children:[
      {
      	path: '/dashboard',
      	component: () => import('@/components/dashboard')
      }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Accueil from '@/components/Accueil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/accueil',
      name: 'Accueil',
      component: Accueil
    }
  ]
})

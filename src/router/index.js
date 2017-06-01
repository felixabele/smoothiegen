import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Smoothie from '@/components/Smoothie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/smoothie',
      name: 'Smoothie',
      component: Smoothie
    }
  ]
})

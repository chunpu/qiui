import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Button from '@/pages/button'
import Cell from '@/pages/cell'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/cell',
      name: 'cell',
      component: Cell
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import InternMain from '@/components/InternMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InternMain',
      component: InternMain
    }
  ]
})

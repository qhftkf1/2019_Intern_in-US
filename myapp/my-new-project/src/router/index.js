import Vue from 'vue'
import Router from 'vue-router'

import InternMain from '@/components/InternMain'
import VueChartJS from '@/views/VueChartJS'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InternMain',
      component: InternMain
    },
    {
      path: '/chartjs',
      name: 'VueChartJS',
      component: VueChartJS
    }
  ]
})

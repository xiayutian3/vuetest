import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Store from '@/view/store.vue'
import Map from '@/view/map.vue'
const Mapjs = () => import('@/view/mapjs.vue')
const Mapjs2 = () => import('@/view/mapjs2.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/mapjs',
      name: 'Mapjs',
      component: Mapjs
    },
    {
      path: '/mapjs2',
      name: 'Mapjs2',
      component: Mapjs2
    },
  ]
})

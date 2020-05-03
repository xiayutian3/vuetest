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
    {
      path: '/happ-wrap',
      redirect:'/happ-wrap/happ',
      name: 'Happ-wrap',
      component: () => import('@/view/happ/happ-wrap.vue'),
      children:[
        {
          path: 'happ',
          name: 'happ',
          component: () => import('@/view/happ/happ.vue'),
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/view/happ/news.vue')
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import('@/view/happ/detail.vue'),
        },
        {
          path: 'my',
          name: 'my',
          component: () => import('@/view/happ/my.vue')
        }
      ]
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('@/view/reset.vue'),
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('@/view/vuex-two-way.vue'),
    },
    {
      path: '/sync',
      name: 'sync',
      component: () => import('@/view/sync.vue'),
    },
    {
      path: '/less',
      name: 'less',
      component: () => import('@/view/less.vue'),
    },
    {
      path: '/style',
      name: 'style',
      component: () => import('@/view/style.vue'),
    },
    {
      path: '/variable',
      name: 'variable',
      component: () => import('@/view/variable.vue'),
    },
    {
      path: '/out-variable',
      name: 'out-variable',
      component: () => import('@/view/out-variable.vue'),
    },
    {
      path: '/sha1',
      name: 'sha1',
      component: () => import('@/view/sha1.vue'),
    }
  ]
})

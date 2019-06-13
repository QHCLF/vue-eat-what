import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import goods from '@/components/Goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: () => import('@/components/ratings/ratings.vue')
    },
    {
      path: '/seller',
      name: 'seller',
      component: () => import('@/components/seller/seller.vue')
    }

  ]
})

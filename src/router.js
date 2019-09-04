import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BookMall from './views/BookMall'
import BookShelf from './views/BookShelf'
import Mine from './views/Mine'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',name: 'bookmall',component:BookMall
        },
        {
          path:'/bookshelf',name:'bookshelf',component:BookShelf
        },
        {
          path:'/mine',name:'mine',component:Mine
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/readdetail',
      name: 'readDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ReadDetail.vue')
    }
  ]
})

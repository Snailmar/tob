/*
 * @Author: vigorzhang
 * @Date: 2019-08-27 19:34:12
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-07 22:55:38
 * @Description: 
 */
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
    },
    {
      path:'/audioplayer',name:'audioplayer',component:() => import(/* webpackChunkName: "about" */ './views/AudioPlayer.vue')
    },
    ,
    {
      path:'/readpage',name:'readpage',component:() => import(/* webpackChunkName: "about" */ './views/ReaderPage.vue')
    }
    ,
    {
      path:'/searchlist',name:'searchlist',component:() => import(/* webpackChunkName: "about" */ './views/SearchList.vue')
    },
    {
      path:'/login',name:'login',component:() => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path:'/readerpage',name:'readerpage',component:() => import(/* webpackChunkName: "about" */ './views/ReaderPage.vue')
    }
  ]
})

/*
 * @Author: vigorzhang
 * @Date: 2019-09-05 21:38:51
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-11 11:21:17
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/axios.js'
import store from './store'
import 'swiper/dist/css/swiper.css'
import 'animate.css'
import FastClick from 'fastclick' //清除300毫秒延时
import storage from "./utils/storage";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import crypto from 'crypto'
const md5=crypto.createHash('md5')
const appid='10000001';
// const timestamp=new Date().getTime();
const timestamp=new Date().getTime();
const appsecret='7ac5b9611734'
md5.update(appid+appsecret+timestamp)
const sign=md5.digest('hex')
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}
Vue.config.productionTip = false
console.log(process.env.VUE_APP_URL)
Vue.use(VueAwesomeSwiper)
import {
  Checklist,
  Loadmore,
  Spinner,
  Field,
  InfiniteScroll
} from 'mint-ui';
Vue.component(Checklist.name, Checklist);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);
Vue.component(Field.name, Field);
Vue.use(InfiniteScroll);
// router.beforeEach((to, from, next) => {
//   let public_path = ['/login']; //公共访问的数据路径（不需要登录验证的路径）
//   var token = storage.getStorage('ACCESS_TOKEN'); //拿到token及登录信息
//   // console.log(to)
//   if (public_path.indexOf(to.path) == -1) { //当访问需要权限的页面时
//     if (token) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })
const vm= new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

vm.$axios.get('/tobservice/rest/app/auth/'+appid+'/'+timestamp+'/'+sign).then((result) => {
  console.log(result)
}).catch((err) => {
  
});
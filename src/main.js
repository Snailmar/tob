import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/axios.js'
import store from './store'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
console.log(process.env.VUE_APP_URL)
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper)
import {Checklist,Loadmore ,Spinner} from 'mint-ui';
Vue.component(Checklist.name, Checklist);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
 * @Author: vigorzhang
 * @Date: 2019-08-27 19:42:09
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-06 16:18:23
 * @Description: 
 */
import Vue from 'vue'
import axios from 'axios'
import {Toast,Indicator} from 'mint-ui'
// axios.defaults.baseURL='/api'//跨域配置项的baseURL,先设置vue.config.js中的代理地址
// axios.defaults.baseURL=process.env.VUE_APP_URL;
axios.defaults.baseURL='https://www.easy-mock.com/mock/5d2aaeeac03c984ca428b5dd/example'
axios.defaults.timeout=5000;
Vue.prototype.$axios=axios;

//请求拦截
axios.interceptors.request.use(config=>{
    Indicator.open({
        text:'Loading'
    })
    // console.log(config)
return config
},error=>{
    Toast('网络异常,稍后重试')
    Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use(
    response=>{
Indicator.close()
return response;
    },
    error=>{
        Indicator.close()
        Toast({
            message:'网络异常'
        })
        return Promise.reject(error)
    }
)
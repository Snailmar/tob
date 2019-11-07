/*
 * @Author: vigorzhang
 * @Date: 2019-09-06 22:14:01
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-06 16:57:56
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    readerContent:''//阅读内容
  },
  mutations: { 
    setReaderContent(state,res){
state.readerContent+=res
    }
  },
  actions: {
    setReaderContent({commit},res){
commit('setReaderContent',res)
    }
  },
  getters: {

  }

})
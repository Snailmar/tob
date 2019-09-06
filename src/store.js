import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSearchList: false,
    keywords: '',
    isShowSearchDom: true,
    searchListResult: null//保存搜索结果
  },
  mutations: {
    changeSearchList(state, flag) {
      state.showSearchList = flag
      if(!flag){
        state.searchListResult=''
      }
    },
    saveKeywords(state, keywords) {
      state.keywords = keywords
    },
    changeSeachDom(state, flag) {
      state.isShowSearchDom = flag
    },
    setSearchListResult(state, result) {
      state.searchListResult = result
    }
  },
  actions: {
    changeSearchList({
      commit
    }, flag) {
      commit('changeSearchList', flag)
    },
    saveKeywords({
      commit
    }, keywords) {
      commit('saveKeywords', keywords)
    },
    changeSeachDom({
      commit
    }, flag) {
      console.log(flag)
      commit('changeSeachDom', flag)
    },
    setSearchListResult({
      commit
    }, result) {
      console.log(result)
      commit('setSearchListResult',result)
    }
  },
  getters: {

  }

})
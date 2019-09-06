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
    },
    saveKeywords(state, keywords) {
      state.keywords = keywords
    },
    changeSeachDom(state, flag) {
      state.isShowSearchDom = flag
    },
    getSearchListResult(state, result) {
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
      commit('changeSeachDom', flag)
    },
    getSearchListResult({
      commit
    }, result) {
      console.log(result)
      commit('getSearchListResult',result)
    }
  },
  getters: {

  }

})
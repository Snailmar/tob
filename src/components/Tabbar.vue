<template>
  <div class="com-tabbar">
    <ul class="flex f-algin f-between" >
      <router-link tag="li" to="/" class="flex column f-algin bookmall" exact active-class="activeColor" ref="bookmall" @click.native="clickBookmall">
        <span class="icon iconfont iconshucheng"></span>
        <i>书城</i>
      </router-link>
      <router-link   tag="li" to="/bookshelf" class="flex column f-algin bookshelf" exact active-class="activeColor" ref='bookshelf'  @click.native="clickBookshelf">
        <span class="icon iconfont iconshujia"></span>
        <i>书架</i>
      </router-link>
      <router-link tag="li" to="/mine" class="flex column f-algin mine" exact active-class="activeColor" ref='mine'  @click.native="clickMine">
        <span class="icon iconfont iconwode"></span>
        <i>我的</i>
      </router-link>
    </ul>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
   clickBookmall(){
     this.changeSeachDom(true)

   },
   clickBookshelf(){
     this.changeSeachDom(false)
     this.changeSearchList(false)

   },
   clickMine(){
     this.changeSeachDom(false)
     this.changeSearchList(false)
   },
    ...mapActions(['changeSeachDom','changeSearchList'])
  },
  computed: {
    ...mapState(['isShowSearchDom'])
  },
};
</script>
<style lang="scss" scope>
.com-tabbar {
  width: 100%;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  ul {
    width: 100%;
    li {
      width: 33.3%;
      padding: 0.08rem 0 0.04rem;
      span {
        font-size: 0.42rem;
        margin-bottom: 1px;
      }
      i{
          font-size: .3rem;
      }
    }
  }
}
</style>
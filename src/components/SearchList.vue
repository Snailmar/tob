<template>
  <div class="com-searchlist flex1">
    <div class="search-nav flex f-between" v-if="showNav">
      <div class="nav-book" @click="navClick(1)" :class="{activeColor:navActive==1}">
        <p>书籍</p>
        <i class="icon iconfont icontabxuanzhong" v-if="navActive==1"></i>
      </div>
      <div class="nav-video"  @click="navClick(2)" :class="{activeColor:navActive==2}">
        <p>视频</p>
        <i class="icon iconfont icontabxuanzhong" v-if="navActive==2"></i>
      </div>
    </div>
    <div class="searchlist-total">共256个结果</div>
    <div class="searchlist">
      <BookDisplay :displayType="navActive==1?'narrow':'wide'" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookDisplay from "@/components/BookDisplay";
export default {
  data() {
    return {
      showNav: true,
      displayType: "wide", //"narrow",默认为wide
      navActive:1
    };
  },
  methods: {
    navClick(flag){
this.navActive=flag
    }
  },
  mounted() {
    console.log(this.searchListResult);
  },
  components: { BookDisplay },
  computed: {
    ...mapState(["searchListResult"])
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.com-searchlist {
  .search-nav {
    padding: 0 1.6rem;
    font-size: 0.28rem;
    color: #333333;
    .iconfont{
      display: block;
      font-size: .32rem;
      text-align: center;
    }
  }
}
.nav-book.activeColor{
color: #01813b;
}
.searchlist-total{
  padding-left: .3rem;
  font-size: .24rem;
  line-height: .36rem;
      color: #6d7278;
}
</style>
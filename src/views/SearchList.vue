<!--
 * @Author: vigorzhang
 * @Date: 2019-09-06 22:14:01
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-06 18:08:48
 * @Description: 搜索列表页
 -->
<template>
  <div class="com-searchlist">
    <Search :keywords="keywords"></Search>
    <div class="search-nav flex f-between" v-if="showNav">
      <div class="nav-book" @click="()=>navClick(1)" :class="{activeColor:navActive==1}">
        <p>书籍</p>
        <i class="icon iconfont icontabxuanzhong" v-if="navActive==1"></i>
      </div>
      <div class="nav-video" @click="()=>navClick(2)" :class="{activeColor:navActive==2}">
        <p>视频</p>
        <i class="icon iconfont icontabxuanzhong" v-if="navActive==2"></i>
      </div>
    </div>
    <div class="searchlist-total">共{{totalCount}}个结果</div>
    <div class="searchlist">
      <BookDisplay :displayType="navActive==1?'narrow':'wide'" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BookDisplay from "@/components/BookDisplay";
import Search from "@/components/Search";
export default {
  name: "searchlist",
  data() {
    return {
      showNav: true,
      displayType: "wide", //"narrow",默认为wide
      navActive: 1,
      totalCount: 0,
      searchList: [],
      keywords: ""
    };
  },
  created() {
    document.title = "搜索列表";
    this.keywords = this.$route.query.keywords;
    this.getSearchList()
    console.log(this.$route.query)
  },
  mounted() {},
  components: { BookDisplay, Search },
  methods: {
     navClick(flag) {
      this.navActive = flag;
    },
    getSearchList() {
      //获取搜索结果
    }
  },
  watch: {},
  deactivated() {}
};
</script>

<style lang="scss" scoped>
.com-searchlist {
  .search-nav {
    padding: 0 1.6rem;
    font-size: 0.28rem;
    color: #333333;
    .iconfont {
      display: block;
      font-size: 0.32rem;
      text-align: center;
    }
  }
}

.searchlist-total {
  padding-left: 0.3rem;
  font-size: 0.24rem;
  line-height: 0.36rem;
  color: #6d7278;
}
</style>
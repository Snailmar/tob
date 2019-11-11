<!--
 * @Author: vigorzhang
 * @Date: 2019-09-06 22:14:01
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-08 15:52:22
 * @Description: 书城页面
 -->
<template>
  <div class="view-bookmall flex1 flex column">
    <Search />
    <div class="overflow-y flex1 " >
        <Banner />
        <Nav />
        <!-- <div v-for="(item,ind) in list" :key="ind">{{item}}</div> -->
        <BookDisplay :displayType="'narrow'" />
        <RowDisplay />
        <Catalog :title="'书库'" />
        <ToTop />

       
        <div v-if="allLoaded" class="loadDone">没有更多数据了</div>
       
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import BookDisplay from "@/components/BookDisplay";
import RowDisplay from "@/components/RowDisplay";
import Catalog from "@/components/Catalog";
import ToTop from "@/components/ToTop";
import Search from "@/components/Search";
import {mapState,mapActions} from 'vuex'
export default {
  name: "bookmall",
  data() {
    return {
      list: [],
      topStatus: "",
      bottomStatus: "",
      allLoaded: false,
      pageNum: 1
    };
  },
  components: {
    Banner,
    Nav,
    BookDisplay,
    RowDisplay,
    Catalog,
    ToTop,
    Search
  },
  created() {
    document.title = "书城";
    // console.log(this.$route)
  },
  methods: {
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom() {
      this.handleBottomChange("loading"); //上拉时 改变状态码
      console.log(this.$refs.loadmore);
      this.pageNum += 1;
      setTimeout(() => {
        //上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
        if (this.pageNum <= 3) {
          //最多下拉三次
          this.list.push(2); //上拉加载 每次数值加12
        } else {
          this.allLoaded = true; //模拟数据加载完毕 禁用上拉加载
        }
        this.handleBottomChange("loadingEnd"); //数据加载完毕 修改状态码
        this.$refs.loadmore.onBottomLoaded();
      }, 5000);
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      //下拉刷新 模拟数据请求这里为了方便使用一次性定时器
      this.handleTopChange("loading"); //下拉时 改变状态码
      this.pageNum = 1;
      this.allLoaded = false; //下拉刷新时解除上拉加载的禁用
      setTimeout(() => {
        this.list.push(2); //下拉刷新 数据初始化
        this.handleTopChange("loadingEnd"); //数据加载完毕 修改状态码
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },
  },
  computed: {
  },
  activated() {
    document.title = "书城";
    
  },
  deactivated() {
  }
};
</script>

<style lang="scss" >
.view-bookmall {
  overflow: hidden;
}
.topSpinner {
  .mint-spinner-snake {
    width: 0.28rem !important;
    height: 0.28rem !important;
    border-width: 0.04rem !important;
  }
}
.is-rotate {
  transform: rotate(180deg);
  transition: all 0.2s;
}
.loadDone {
  text-align: center;
}
</style>
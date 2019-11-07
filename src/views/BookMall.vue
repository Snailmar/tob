<!--
 * @Author: vigorzhang
 * @Date: 2019-09-06 22:14:01
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-06 16:59:43
 * @Description: 书城页面
 -->
<template>
  <div class="view-bookmall flex1 flex column">
    <Search />
    <div class="overflow-y flex1 " >
      <mt-loadmore
        :top-method="loadTop"
        @top-status-change="handleTopChange"
        :bottom-method="loadBottom"
        @bottom-status-change="handleBottomChange"
        :bottom-all-loaded="allLoaded"
        :auto-fill="false"
        ref="loadmore"
      >
        <Banner />
        <Nav />
        <!-- <div v-for="(item,ind) in list" :key="ind">{{item}}</div> -->
        <BookDisplay :displayType="'narrow'" />
        <RowDisplay />
        <Catalog :title="'书库'" />
        <ToTop />

        <div slot="top" class="mint-loadmore-top flex f-center f-align">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus=='pull'">下拉更新</span>
          <span v-show="topStatus=='loading'">更新中...</span>
          <span v-show="topStatus=='drop'">释放更新</span>
          <mt-spinner v-show="topStatus == 'loading'" class="topSpinner" color="#01813b"></mt-spinner>
        </div>
        <div v-if="allLoaded" class="loadDone">没有更多数据了</div>
        <div slot="bottom" class="mint-loadmore-bottom flex f-center">
          <span
            v-show="bottomStatus !== 'loading'"
            :class="{ 'is-rotate': bottomStatus === 'drop' }"
          >↑</span>
          <span v-show="bottomStatus=='pull'">上拉加载更多</span>
          <span v-show="bottomStatus=='loading'">加载中</span>
          <span v-show="bottomStatus=='drop'">释放加载更多</span>
          <mt-spinner
            v-show="bottomStatus == 'loading'"
            class="bottomSpinner"
            color="#01813b"
            type="triple-bounce"
          ></mt-spinner>
        </div>
      </mt-loadmore>

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
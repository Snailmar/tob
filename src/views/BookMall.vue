<template>
  <div class="view-bookmall flex1 overflow-y">
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange"
                         :bottom-method="loadBottom" @bottom-status-change="handleBottomChange"
                         :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <Banner />
      <Nav />
      <div v-for="(item,ind) in list" :key="ind">{{item}}</div>
      <BookDisplay :displayType="'narrow'" />
      <ColumnDisplay />
      <Catalog :title="'书库'" />
      <CopyRight />
      <ToTop />
    </mt-loadmore>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import BookDisplay from "@/components/BookDisplay";
import ColumnDisplay from "@/components/ColumnDisplay";
import Catalog from "@/components/Catalog";
import CopyRight from "@/components/CopyRight";
import ToTop from "@/components/ToTop";
export default {
  name: "bookmall",
  data() {
    return {
      loading: false,
      list: [],
      topStatus: "",
      allLoaded: false
    };
  },
  components: {
    Banner,
    Nav,
    BookDisplay,
    ColumnDisplay,
    Catalog,
    CopyRight,
    ToTop
  },
  methods: {
    loadTop() {
      console.log(this.topStatus);
    },
    loadBottom() {},
    handleTopChange(s){
console.log(s)
    },
    handleBottomChange(s){
console.log(s)

    }
  },
  activated() {
    document.title = "书城";
  }
};
</script>

<style lang="scss" scoped>
.view-bookmall {
}
</style>
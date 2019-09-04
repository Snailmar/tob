<template>
  <div class="view-home flex column f-algin f-between">
    <Search v-if="isShowSearchDom" />
    <keep-alive >
      <router-view v-if="!showSearchList"></router-view>
    </keep-alive>

    <SearchList v-if="showSearchList" />

    <Tabbar ref="tabbar" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import Tabbar from "@/components/Tabbar";
import Search from "@/components/Search";
import SearchList from "@/components/SearchList";
import { mapState,mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      showSearch: false,
      routename: ""
    };
  },
  mounted() {
    this.showSearchDom();
    this.routename = this.$route.name;
    console.log(this.$route.name);
  },
  updated() {
    this.showSearchDom();
  },
  methods: {
    showSearchDom() {
      var tabbarDom = this.$refs.tabbar.$refs.bookmall;
      if (
        tabbarDom.$el.className.indexOf("activeColor") != -1 &&
        this.$route.name === "bookmall"
      ) {
        this.changeSeachDom(true)
      } else {
        this.changeSeachDom(false)        
      }
    },
    ...mapActions(['changeSeachDom'])
  },
  components: {
    HelloWorld,
    Tabbar,
    Search,
    SearchList
  },
  computed: {
    ...mapState(["showSearchList", "isShowSearchDom"])
  },
  activated() {
    console.log("acti");
  },
  deactivated() {
    console.log("deact");
  },
  watch: {
    routename(newVal, oldVal) {
      console.log(newVal);
    }
  }
};
</script>
<style lang="scss" scope>
.view-home {
  height: 100%;
}

</style>

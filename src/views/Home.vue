<!--
 * @Author: vigorzhang
 * @Date: 2019-09-06 22:14:01
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-07 14:15:20
 * @Description: 首页入口
 -->
<template>
  <div class="view-home flex column f-algin f-between">
    <!-- <keep-alive > -->
      <router-view ></router-view>
    <!-- </keep-alive> -->
    <Tabbar ref="tabbar" />
  </div>
</template>

<script>
// @ is an alias to /src
import Tabbar from "@/components/Tabbar";
export default {
  name: "home",
  data() {
    return {
    };
  },
  mounted() {
  },
  updated() {
  },
  methods: {
  },
  components: {
    Tabbar
  },
  computed: {
  },
  activated() {
  },
  deactivated() {
  },
  watch: {
  }
};
</script>
<style lang="scss" scope>
.view-home {
  height: 100%;
}

</style>

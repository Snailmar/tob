<template>
  <div class="view-home flex column f-algin f-between">

    <keep-alive >
      <router-view ></router-view>
    </keep-alive>

    

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
    
      routename: ""
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

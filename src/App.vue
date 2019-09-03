<template>
 <div id='app'>
<!-- <Search/> -->
<router-view></router-view>
 </div>
</template>
<script>
import Search from '@/components/Search';
export default {
  components:{Search}
}
</script>

<style lang="scss">
#app{
  height: 100%;
}
</style>

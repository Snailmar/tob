<template>
  <div class="com-chapterlist">
    <div class="ccl-mask" @click="hideMask"></div>

    <div class="ccl-wrap animated bounceInUp" >
      <div class="ccl-title">-选集-</div>
      <ul class="ccl-list flex">
        <li class="ccl-cell" v-for="(item,ind) of list" :key="ind"><div @click="cellClick(ind)" :class="{activeColor:index==ind}">1-50</div></li>
       
      </ul>
      <div class="ccl-close" @click="hideMask">关闭</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:['1-50','51-100','101-150','151-200'],
        index:''
    };
  },
  methods: {
      hideMask(){
          this.$parent.isShowChaperList=false;
      },
      cellClick(ind){
          this.index=ind
        
      }
  },
};
</script>

<style lang="scss" scoped>
.com-chapterlist {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.ccl-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 888;
}
.ccl-wrap {
  background: #fff;
  z-index: 999;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
  color: #333;
  padding-top: 0.56rem;
}
.ccl-title {
  font-size: 0.28rem;
  padding-bottom: 0.4rem;
}
.ccl-list{
    flex-wrap: wrap;
    padding:0 .96rem .6rem;
}
.ccl-cell {
    width: 33.33%;
    margin-bottom: .2rem;
    div{
        width: 80%;
        height: 0.54rem;
        line-height: .54rem;
        border-radius: .96rem;
        margin:0 auto;
        font-size: .24rem;
        border: 1px solid #f1f1f1;
        &.activeColor{
        border: 1px solid #01813b;
        color: #01813b
        }
    }
}
.ccl-close{
    padding: .38rem 0;
    font-size: .3rem;
    border-top: 1px solid #f1f1f1;
}
</style>
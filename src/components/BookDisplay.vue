<template>
  <div :class="displayType" class="com-book-display flex">
    <div class="cbd-left">
      <div class="img">
        <img src="../assets/banner/banner_ems_1.png" alt />
        <span class="iconfont  centerHV font_icon" :class="iconName"></span>
      </div>
    </div>
    <div class="cbd-right ">
        <p class="bookname txt-hide">我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲</p>
        <p class="bookdetail" :class="txtClass">我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲</p>
        <p class="bookauthor txt-hide">我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲我佛慈悲</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        txtClass:'txt-hide',
        iconName:'iconbofang'
    };
  },
  props: {
    displayType: {
      type: String,
      default: "wide"//组件传入narrow或者wide对应为宽窄展示,narrow为音频和读书,wide为视屏
    }
  },
  mounted() {
      console.log(this.displayType)
      if(this.displayType=='narrow'){
          this.txtClass='txt-hide2'
          this.iconName='icontingshu'
      }
  },
};
</script>

<style lang="scss" scoped>
.wide {
  height: 1.46rem;
  margin: 0 .16rem .2rem;
  .cbd-left {
    height: 100%;
    width: 2.6rem;
    margin-right: .2rem;
    flex-shrink: 0;
    .img {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span{
          font-size: .52rem;
          color: #fff;
      }
    }
  }
  .cbd-right {
    height: 100%;
    overflow: hidden;
  }
}
.narrow {
    height: 2.48rem;
  margin: 0 .16rem .2rem;
  .cbd-left {
    height: 100%;
    width: 1.84rem;
    margin-right: .2rem;
    flex-shrink: 0;
    .img {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span{
          font-size: .52rem;
          color: #fff;
      }
    }
  }
  .cbd-right {
    height: 100%;
    overflow: hidden;
  }
}
</style>
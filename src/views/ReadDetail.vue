<template>
  <div class="view-readDetail flex column">
    <div class="vr-top clearfix">
      <div class="vr-top-bg" :style="{'background-image':'url('+imgUrl+')'}"></div>
      <div class="vr-top-detail">
        <img :src="imgUrl" alt />
        <div class="vrtd-info">
          <p class="txt-hide2 vrtd-title">浮生六记</p>
          <p class="txt-hide vrtd-author">作者名字</p>
        </div>
      </div>
    </div>

    <IntroduceMenu/>
  </div>
</template>

<script>
import IntroduceMenu from "@/components/IntroduceMenu";
export default {
  data() {
    return {
      imgUrl: require("../assets/banner/bookshelf.jpg")
    };
  },
  components: { IntroduceMenu },
  created() {
    //   this.$axios.get('img1').then((result) => {
    //   }).catch((err) => {
    //   });
  }
};
</script>

<style lang="scss" scoped>
.view-readDetail {
    height:100%;
  .vr-top {
    padding: 0.32rem 0.94rem;
    position: relative;
        overflow: hidden;
    .vr-top-bg {
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      filter: blur(10px);
      overflow: hidden;
      opacity: 0.3;
    }
  }
}
.vr-top-detail {
  .vrtd-info {
    margin-left: 2.1rem;
  }
  .vrtd-title {
    font-size: 0.3rem;
    font-weight: 500;
    color: #000;
    line-height: 1.2;
  }
  .vrtd-author {
    font-size: 0.24rem;
    color: #666;
    padding-top: 0.24rem;
  }
  img {
    width: 1.82rem;
    height: 2.48rem;
    box-shadow: 2px 4px rgba(0, 0, 0, 0.2);
    float: left;
  }
}
</style>
<template>
  <div class="com-banner">
    <swiper :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide v-for="(item,ind) in imgURLs" :key="ind" @click.native='clickSwiper'>
        <img :src="item" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        // 　　autoplay: {
        // 　　　　delay: 3000,
        // 　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
        // 　　},
        // 　　loop: true,
        notNextTick: true
      },
      imgURLs: [],
      isShow: false
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
      this.$axios.get('/img').then(
          res=>{
    this.imgURLs =res.data.data.imgurls ;
          }
      )
  },
  methods: {
    clickSwiper(){
      console.log('swiper')
    }
  },
  mounted() {}
};
</script>

<style lang="scss" >
.com-banner {
  .swiper-container {
    margin: 0 0.16rem;
    border-radius: 0.2rem;
    height: 2.84rem;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination {
      text-align: right;
      padding-right: 0.28rem;
      .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.3);
        width: .12rem;
        height: .12rem;
      }
      .swiper-pagination-bullet-active {
        background: #fff;
      }
    }
  }
}
</style>
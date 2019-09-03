<template>
  <div class="com-nav">
    <swiper :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
 

      <swiper-slide class="flex " >
          <div v-for="(item,ind) in imgInfo" :key="ind" v-if='ind<5' class="info-wrap"> 
              <div class="img">
        <img :src="item.img" />
              </div>
        <p class="txt-hide2">{{item.name}}</p>
          </div>
      </swiper-slide>
         <swiper-slide  class="flex">
          <div v-for="(item,ind) in imgInfo" :key="ind" v-if='ind>4&&ind<10' class="info-wrap"> 
              <div class="img">
        <img :src="item.img" />
              </div>
        <p class="txt-hide2">{{item.name}}</p>
          </div>
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
        }
        // 　　autoplay: {
        // 　　　　delay: 3000,
        // 　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
        // 　　},
        // 　　loop: true,
      },
      imgInfo: [],
      isShow: false
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
      this.$axios.get('/nav').then(
          res=>{
              console.log(res.data.data.imginfo)
    this.imgInfo =res.data.data.imginfo ;
          }
      )
  },
  mounted() {}
};
</script>

<style lang="scss" >
.com-nav {
  .swiper-container {
    margin: 0 0.16rem;
    // height: 2.2rem;
    
    padding: .2rem 0 .56rem;
    .info-wrap{
        width: 20%;
        p{
            text-align: center;
font-size: .3rem;
margin-top: .14rem;
color: #666;
        }
    }
    .img{
        display: block;
        width: .8rem;
        height: .8rem;
            margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .swiper-pagination {
      .swiper-pagination-bullet {
        background: #f0f0f0;
        width: .12rem;
        height: .12rem;
      }
      .swiper-pagination-bullet-active {
        background: #666;
      }
    }
  }
}
</style>
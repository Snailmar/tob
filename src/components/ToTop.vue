<template>
<transition name="topFade">
    <div class="com-top" v-if="isShow" @click="clickTop" ref='topDom'>
      <div class="icon iconfont iconfanhui"></div>
      <span>TOP</span>
    </div>
</transition>

</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      scrollDom:null,
    };
  },
  mounted() {
var scrollDom = document.querySelector(".overflow-y");
      this.scrollDom=scrollDom;
    scrollDom.addEventListener("scroll", () => {
      var scrollT = scrollDom.scrollTop;
      var scrollDomH = scrollDom.offsetHeight;
      if (scrollT / scrollDomH >= 1.5) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    });
  },
  methods: {
    clickTop() {
      this.scrollDom.scrollTo(0, 0);
          this.isShow=false;
    }
  }
};
</script>

<style lang="scss" scoped>
.com-top {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 100%;
  color: #01813b;
  background: rgba(1, 129, 59, 0.6);
  border: 1px solid #01813b;
  position: fixed;
  bottom: 1.5rem;
  right: 5%;
  z-index: 99999;
  .iconfanhui {
    &::before {
      display: block;
      position: absolute;
      transform: translateX(-50%) rotate(90deg);
      left: 49%;
      font-size: 0.48rem;
    }
  }

  span {
    display: block;
    text-align: center;
    font-size: 0.28rem;
    padding-top: 0.38rem;
  }
}

.topFade-enter-active, .topFade-leave-active {
  transition: opacity .5s;
}
.topFade-enter, .topFade-leave-to {
  opacity: 0;
}
</style>
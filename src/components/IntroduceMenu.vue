<template>
  <div class="com-introduceMenu flex1 flex column f-between">
    <div class="cim-nav flex f-between">
      <div @click="navClick(1)" :class="{navActive:showIcon}">
        <p>简介</p>
        <span class="icon iconfont icontabxuanzhong" v-show="showIcon"></span>
      </div>
      <div @click="navClick(2)" :class="{navActive:!showIcon}">
        <p>目录</p>
        <span class="icon iconfont icontabxuanzhong" v-show="!showIcon"></span>
      </div>
    </div>
    <div class="cim-introduce-wrap flex1" v-if="tabFlag==1">
      <div class="cim-introduce">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
      <div class="copyright">
        <p class="cim-copytitle">版权声明</p>
        <p class="cim-copydetail">版权声明：本书由“天翼阅读文化传播有限公司”提供，若书中含有不良信息，请书友拨打4006022088反馈。</p>
      </div>
    </div>
    <div class="cimi-bottom flex" v-if="tabFlag==1">
        <div>加入书架</div>
        <div>接上次读</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIcon: true,
      tabFlag:1//1代表简介 2代表目录
    };
  },
  methods: {
    navClick(flag) {
      this.showIcon = !this.showIcon;
      this.tabFlag=flag;
    }
  }
};
</script>

<style lang="scss" scoped>
.cim-nav {
  padding: 0.26rem 1.48rem 0.23rem;
  border-bottom: #bbb solid 1px;
  font-size: 0.32rem;
  div {
    position: relative;
    &.navActive {
      color: #01813b;
    }
    span {
      position: absolute;
      top: 0.26rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.5rem;
    }
  }
}
.cim-introduce {
  border-bottom: 1px solid #ededed;
  padding: 0.3rem 0.22rem;
  font-size: 0.26rem;
  color: #666;
  line-height: 0.42rem;
}
.copyright {
  padding-top: 0.3rem;
}
.cim-introduce-wrap{
    overflow-y: auto;
}
</style>
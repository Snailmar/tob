<template>
  <div class="com-introduceMenu flex1 flex column f-between">
    <div class="cim-nav flex f-between">
      <div @click="navClick(1)" :class="{navActive:tabFlag==1}">
        <p>简介</p>
        <span class="icon iconfont icontabxuanzhong" v-show="tabFlag==1"></span>
      </div>
      <div @click="navClick(2)" :class="{navActive:tabFlag==2}">
        <p>目录</p>
        <span class="icon iconfont icontabxuanzhong" v-show="tabFlag==2"></span>
      </div>
    </div>
    <div class="cim-introduce-wrap flex1" v-if="tabFlag==1">
      <div class="cim-introduce">简介简简介简介介简介简介介简介简介介简介简介介简介简介简</div>
      <div class="copyright">
        <p class="cim-copytitle">版权声明</p>
        <p class="cim-copydetail">版权声明：本书由“天翼阅读文化传播有限公司”提供，若书中含有不良信息，请书友拨打4006022088反馈。</p>
      </div>
      <div class="cim-copyright">&copy; 2012-2019 联通沃悦读 版权所有</div>
    </div>
    <div class="cimi-bottom flex" v-if="tabFlag==1">
      <div class="addToshelf">加入书架</div>
      <div class="continueReading flex1">接上次读</div>
    </div>

    <div class="flex f-between chapterTitle" v-if="tabFlag==2">
      <div class="totalChapter">共12章</div>
      <div class="chooseChapter icon iconfont iconfanhui" @click="showChaperList">1-525</div>
    </div>
    <div class="cim-menuList flex1" v-if="tabFlag==2">
      <p class="cimm-cell txt-hide">01 只有改变才能看见未来</p>
    </div>
    <ChapterList v-if="isShowChaperList" />
  </div>
</template>

<script>
import ChapterList from '@/components/ChapterList'
export default {
  data() {
    return {
      showIcon: true,
      tabFlag: 1 ,//1代表简介 2代表目录
      isShowChaperList:false
    };
  },
  components:{ChapterList},
  methods: {
    navClick(flag) {
      this.showIcon = !this.showIcon;
      this.tabFlag = flag;
    },
    showChaperList(){
this.isShowChaperList=true
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
.cim-introduce-wrap {
overflow-y: auto;
  .copyright {
    padding-top: 0.3rem;
  }
}
.cim-copytitle {
  color: #030303;
  font-size: 0.32rem;
  font-weight: 500;
  padding: 0 0.3rem 0.12rem;
}
.cim-copydetail {
  font-size: 0.26rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 0.44rem;
  padding: 0 0.3rem;
}
.cim-copyright {
  text-align: center;
  margin-top: 0.6rem;
  font-size: 0.24rem;
  color: #999;
  margin-bottom: 0.3rem;
}
.cimi-bottom {
  height: 1rem;
  line-height: 1rem;
  background: #fff;
  border-top: 1px solid #e8e8e8;
  padding-top: 0.1px;
  color: #333;
  font-size: 0.3rem;
  text-align: center;
  .addToshelf {
    width: 35%;
  }
  .continueReading {
    background: #01813b;
    color: #fff;
  }
}
.chapterTitle {
  padding:0.42rem 0.38rem .22rem;
  .totalChapter {
    font-size: 0.32rem;
    color: #333;
  }
  .chooseChapter {
    border: 2px solid #01813b;
    font-size: 0.24rem;
    padding: 0.1rem 0.5rem 0.1rem 0.1rem;
    border-radius: .06rem;
    position: relative;
    &::before {
      position: absolute;
      transform: rotate(-90deg);
      right: 0.14rem;
    }
  }
}
.cim-menuList {
  overflow-y: auto;
  padding: 0 0.38rem .5rem;
  .cimm-cell {
    border-bottom: 1px solid #f0f0f0;
    padding: 0.2rem 0;
    font-size: 0.3rem;
    color: #4a4a4a;
    &:first-of-type {
      border-top: 1px solid #f0f0f0;
    }
  }
}
</style>
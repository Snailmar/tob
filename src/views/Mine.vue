<!--
 * @Author: vigorzhang
 * @Date: 2019-09-06 22:14:01
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-06 16:16:17
 * @Description: 我的页面
 -->
<template>
  <div class="flex1 view-mine overflow-y">
    <div class="mine-top flex f-align">
      <img src="../assets/banner/pink.jpg" alt class="mine-bg" />
      <img src="../assets/banner/bookshelf.jpg" alt class="user-img" />
      <div class="mine-info">
        <p class="mine-name txt-hide">超级管理员</p>
        <p class="mine-motto txt-hide">大家好才是真的好</p>
      </div>
    </div>
    <div class="mine-menu">
      <div class="mine-cell flex f-align">
        <span class="icon iconfont iconlishi"></span>
        <span class="flex1 mine-celltitle">阅读历史</span>
        <span class="icon iconfont icongengduo"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "mine",
  data() {
    return {};
  },
  created() {
    document.title = "我的";
  },
  methods: {
      },
  activated() {
      document.title = "我的";
  }
};
</script>

<style lang="scss" scoped>
.view-mine{
    background: #EDEDED;
}
.mine-top {
  height: 2.44rem;
  position: relative;
  overflow: hidden;
  .mine-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .user-img {
    width: 1.44rem;
    height: 1.44rem;
    border-radius: 100%;
    margin-left: 0.3rem;
    z-index: 10;
  }
  .mine-info {
        margin: 0 0.2rem;
        z-index: 10;
        color: #fff;
        width: 5rem;
        .mine-name {
          font-size: 0.36rem;
          font-weight: 500;
        }
        .mine-motto {
          font-size: 0.24rem;
          margin-top: 0.1rem;
        }
      }
}
      .mine-menu {
        border-top: 0.15rem solid #ededed;
        background: #fff;
        padding: 0 0.15rem;
        font-size: 0.32rem;
        color: #666;
        .mine-cell{
            padding: .3rem 0;
            &+.mine-cell{
                border-top: 1px solid #f0f0f0;
            }
            .mine-celltitle{
                margin-left: .2rem;
            }
            .icon{
                font-size: .38rem;
            }
        }
      }
      
</style>
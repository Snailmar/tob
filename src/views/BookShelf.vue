<!--
 * @Author: vigorzhang
 * @Date: 2019-09-06 22:14:01
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-11 09:15:12
 * @Description: 书架页面
 -->
<template>
  <div class="flex1 view-bookshelf overflow-y">
    <div
      class="book-wrap"
      v-for="item of bookList"
      :key="item.id"
      :chapterid="item.id"
      @touchstart="getStart($event,item.id)"
      @touchmove="getMove"
      @touchend="getEnd"
      :ref="item.id"
    >
      <img src="../assets/banner/bookshelf.jpg" alt class="bookimg" />
      <!-- icon判断切换 -->
      <!-- 
      <span class="iconfont icontingshu"></span>
      <span class="iconfont iconbofang"></span>
      -->
      <!-- <img :src="item.img" alt=""> -->
      <div class="bookname txt-hide2">{{item.name}}</div>
      <label class="checkWrap" v-if="showCheckbox">
        <input
          type="checkbox"
          class="checkme"
          name="selectedBook"
          :checked="checkList.indexOf(item.id)>=0"
          @click="handleSelect($event,item.id)"
          style="visibility:hidden"
        />
        <span
          class="iconfont iconziyuan1 selectedIcon"
          :class="{sltCur:checkList.indexOf(item.id)>=0}"
        ></span>
      </label>
    </div>
    <div class="clearfix"></div>

    <div v-if="allLoaded" class="loadDone">没有更多数据了</div>
    <div
      class="delSelected"
      v-if="showCheckbox"
      @click="handleDel"
    >{{checkList.length==0?"完成":"删除"}}</div>
  </div>
</template>

<script>
var timer = null;
const delayTime = 700;
import { MessageBox } from "mint-ui";
import { mapActions } from "vuex";
export default {
  name: "boookshelf",
  data() {
    return {
      bookList: [],
      checkList: [],
      checked: true,
      showCheckbox: false,
      topStatus: "",
      bottomStatus: "",
      allLoaded: false,
      pageNum: 1
    };
  },
  created() {
    document.title = "书架";
    this.$axios
      .get("/bookshelf")
      .then(result => {
        var res = result.data.data.imginfo;
        this.bookList = res;
        console.log(res);
      })
      .catch(err => {});
  },
  methods: {
    getStart(e, id) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        //长按事件
        this.showCheckbox = true;
        //将第一个选中的id推入数组
        this.checkList.push(id);
        document.querySelector(".com-tabbar").style.display = "none"; //兼容ios的布局bug
      }, delayTime);
    },
    getMove() {
      clearTimeout(timer);
    },
    getEnd() {
      clearTimeout(timer);
    },
    handleSelect(e, id) {
      var isChecked = e.target.checked;
      if (isChecked) {
        this.checkList.push(id); //如果被选中则将选中id推入数组
      } else if (this.checkList.indexOf(id) >= 0 && !isChecked) {
        //取消选中则删除元素
        this.checkList.splice(this.checkList.indexOf(id), 1);
      }
    },
    handleDel() {
      if (this.checkList.length == 0) {
        this.showCheckbox = false;
        document.querySelector(".com-tabbar").style.display = "block"; //兼容ios的布局bug
        return;
      }
      //删除按钮
      MessageBox.confirm("确定删除?")
        .then(result => {
          var len = this.bookList.length;
          while (len--) {
            if (this.checkList.indexOf(this.bookList[len].id) != -1) {
              this.bookList.splice(len, 1);
            }
          }
          //发送请求到后端将数据删除
          this.checkList = [];
          this.showCheckbox = false;
          document.querySelector(".com-tabbar").style.display = "block"; //兼容ios的布局bug
        })
        .catch(err => {
          this.checkList = [];
          this.showCheckbox = false;
          document.querySelector(".com-tabbar").style.display = "block"; //兼容ios的布局bug
        });
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom() {
      this.handleBottomChange("loading"); //上拉时 改变状态码
      console.log(this.$refs.loadmore);
      this.pageNum += 1;
      //上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
      setTimeout(() => {
        if (this.pageNum <= 2) {
          this.$axios
            .get("/bookshelf1")
            .then(result => {
              var res = result.data.data.imginfo;
              this.bookList = this.bookList.concat(res);
              this.handleBottomChange("loadingEnd"); //数据加载完毕 修改状态码
              this.$refs.loadmore.onBottomLoaded();
            })
            .catch(err => {});
        } else {
          this.allLoaded = true; //模拟数据加载完毕 禁用上拉加载
        }
      }, 1000);
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      //下拉刷新 模拟数据请求这里为了方便使用一次性定时器
      this.handleTopChange("loading"); //下拉时 改变状态码
      this.pageNum = 1;
      this.allLoaded = false; //下拉刷新时解除上拉加载的禁用
      setTimeout(() => {
        this.handleTopChange("loadingEnd"); //数据加载完毕 修改状态码
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    }
  },
  activated() {
    document.title = "书架";
  },
  deactivated() {
    this.checkList = [];
    this.showCheckbox = false;
    document.querySelector(".com-tabbar").style.display = "block"; //兼容ios的布局bug
  }
};
</script>

<style lang="scss" scoped>
.view-bookshelf {
  position: relative;
  padding: 0.4rem 0.4rem 0 0.4rem;

  .book-wrap {
    float: left;
    width: 33.33%;
    // margin-bottom: 0.2rem;
    position: relative;
    height: 3.8rem;
    &:first-child::before {
      content: "最近在看";
      display: block;
      width: 1.2rem;
      height: .42rem;
      line-height: .42rem;
      border-radius: .42rem 0 0 .42rem;
      color: #fff;
      font-size: .2rem;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      position: absolute;
      top:1.96rem;
      left: 50%;
      transform: translateX(-.32rem)
    }
    .bookimg {
      display: block;
      width: 1.76rem;
      height: 2.48rem;
      margin: 0 auto;
      box-shadow: 0px 2px 8px rgba(197, 197, 197, 0.35);
    }
    .iconfont{
      font-size: .6rem;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 1.1rem;
      transform: translateX(-50%)
    }
    .bookname {
      font-size: 0.28rem;
      color: #333;
      line-height: 0.44rem;
      margin: 0 auto;
      width: 1.7rem;
      padding-top: .24rem;
    }
  }
}

.checkWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  input {
    -webkit-appearance: checkbox;
  }
  .iconziyuan1:before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.delSelected {
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background: #fff;
  z-index: 2;
}
.selectedIcon {
  width: 0.36rem;
  height: 0.36rem;
  background: #6f6f6f;
  border-radius: 100%;
  position: absolute;
  top: 2rem;
  right: 0.4rem;
  color: #fff;
  font-size: 0.32rem;
}
.sltCur {
  background: #01813b !important;
  animation: zoom 0.5s;
}

@keyframes zoom {
  0% {
    width: 0.36rem;
    height: 0.36rem;
  }
  50% {
    width: 0.5rem;
    height: 0.5rem;
    font-size: 0.38rem;
  }
  100% {
    width: 0.36rem;
    height: 0.36rem;
  }
}
</style>
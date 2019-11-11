<!--
 * @Author: vigorzhang
 * @Date: 2019-09-11 08:35:06
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-11 10:24:32
 * @Description: 阅读页面
 -->
<template>
  <div class="view-readerPage" :style="{background:colorConfig[bgNum]}">
    <div
      v-show="showBotTools"
      class="chapterTitle"
      :style="ndMode=='night'?{background:'#232323',borderBottom:'none',color:'#aaa'}:''"
    >章节名称</div>
    <div
      v-show="showUpTools"
      class="upTools"
      :style="ndMode=='night'?{background:'#232323',borderTop:'none',color:'#aaa'}:''"
    >
      <div class="colorSpan flex f-between">
        <div @click="selectBG(0)" :class="{bgActive:bgNum==0}">
          <span class="bg0 centerHV"></span>
        </div>
        <div @click="selectBG(1)" :class="{bgActive:bgNum==1}">
          <span class="bg1 centerHV"></span>
        </div>
        <div @click="selectBG(2)" :class="{bgActive:bgNum==2}">
          <span class="bg2 centerHV"></span>
        </div>
        <div @click="selectBG(3)" :class="{bgActive:bgNum==3}">
          <span class="bg3 centerHV"></span>
        </div>
        <div @click="selectBG(4)" :class="{bgActive:bgNum==4}">
          <span class="bg4 centerHV"></span>
        </div>
      </div>
      <div class="fontSpan flex f-between f-align">
        <span class="flex1" style="font-size:.24rem" @click="handleSize('-')">A-</span>
        <span class="lineV"></span>
        <span class="flex1" style="font-size:.32rem" @click="handleSize('+')">A+</span>
      </div>
    </div>
    <div
      class="readerContent"
      :style="{...fontConfig[fontInd],color:bgNum==5?'#aaa':'#333'}"
      @click="readerContentClick($event)"
      ref="readerContent"
    >{{readerContent}}</div>
    <div
      v-show="showBotTools"
      class="botTools flex f-between f-align"
      :style="ndMode=='night'?{background:'#232323',borderTop:'none',color:'#aaa'}:''"
    >
      <div @click="handleBot(1)">
        <span class="icon iconfont iconyueduye-mulu"></span>
        <span>目录</span>
      </div>
      <div @click="selectBG(5,'night')" v-if="ndMode=='day'">
        <span class="icon iconfont iconyueliang"></span>
        <span>黑夜</span>
      </div>
      <div @click="selectBG(1,'day')" v-if="ndMode=='night'">
        <span class="icon iconfont iconrijianmoshixhdpi"></span>
        <span>白天</span>
      </div>
      <div @click="handleBot(3)">
        <span class="icon iconfont iconyueduye-shezhi"></span>
        <span>设置</span>
      </div>
      <div @click="handleBot(4)">
        <span class="icon iconfont iconshangyizhang"></span>
        <span>上章</span>
      </div>
      <div @click="handleBot(5)">
        <span class="icon iconfont iconshangyizhang" style="transform: rotate(180deg)"></span>
        <span>下章</span>
      </div>
    </div>

    <div
      class="sideMenu flex column animated"
      :class="showChapterList?'slideInLeft':chapterListOut?'slideOutLeft':''"
      ref="sideMenu"
    >
      <div class="smTop flex" :style="ndMode=='night'?{background:'#202020',color:'#aaa'}:''" >
        <span class="icon iconfont iconyueduye-mulu" style="margin-right:1rem"></span>
        <span
          class="icon iconfont iconzhengxu"
          @click="handleSort"
          :class="sortFlag?'rotate180':''"
        ></span>
      </div>
      <ul
        v-infinite-scroll="loadChapter"
        infinite-scroll-disabled="loadingChapter"
        infinite-scroll-distance="20"
        class="flex1 chapterList"
        :style="ndMode=='night'?{background:'#181818',color:'#aaa'}:''"
      >
        <li class="txt-hide" v-for="(item,ind) in chapterList" :key="ind">{{ item }}</li>
        <li v-show="loadingChapter" class="flex" style="border-bottom:none">
          正在加载
          <mt-spinner type="triple-bounce" color="#00ccff" :size="20"></mt-spinner>
        </li>
        <span v-show="loadingChapterAll" style="border-bottom:none">已全部加载</span>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Toast } from "mint-ui";
import storage from "../utils/storage";
export default {
  data() {
    return {
      bgNum: 0, //默认选中颜色索引值
      toastInstance: null,
      fontConfig: [
        { fontSize: ".24rem", lineHeight: "2" },
        { fontSize: ".28rem", lineHeight: "2" },
        { fontSize: ".32rem", lineHeight: "2" },
        { fontSize: ".36rem", lineHeight: "2" },
        { fontSize: ".4rem", lineHeight: "2" },
        { fontSize: ".44rem", lineHeight: "2" }
      ],
      colorConfig: [
        "url(/images/readerpage/niupizhi.png)",
        "#f3f3f3",
        "#f8efd4",
        "#ffdee4",
        "#c9e5cc",
        "#333333"
      ], //背景色配置
      fontInd: 3, //默认字体索引值
      ndMode: "day", //白天黑夜切换,默认白天
      readerContent:
        "读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书读书好多读书",
      chapterList: [1, 2, 3, 4, 5, 7],
      loadingChapter: false, //无限加载章节列表
      loadingChapterAll: false, //标识是否加载完章节列表
      showChapterList: false, //展示章节列表页
      chapterListOut: false, //控制章节列表页滑出效果
      showUpTools: false, //控制上工具栏显示
      showBotTools: false, //控制下工具栏显示
      screenHeight: "", //屏幕高度
      sortFlag: false //正逆序标记
    };
  },
  computed: {},
  created() {
    var fontInd = storage.getStorage("fontInd");
    var bgNum = storage.getStorage("bgNum");
    var ndMode = storage.getStorage("ndMode");
    if (fontInd) {
      this.fontInd = fontInd;
    }
    if (bgNum) {
      this.bgNum = bgNum;
    }
    if (ndMode) {
      this.ndMode = ndMode;
    }
    this.screenHeight = document.body.clientHeight || window.screen.height;
  },
  methods: {
    getReaderContent() {
      this.$axios
        .get("/readercontent")
        .then(result => {})
        .catch(err => {});
    },
    selectBG(ind, ndMode) {
      //切换颜色
      if (ndMode) {
        //黑白模式切换
        this.ndMode = ndMode;
        storage.setStorage("ndMode", ndMode);
      }
      this.bgNum = ind;
      storage.setStorage("bgNum", this.bgNum);
    },
    handleBot(e) {
      //底部工具栏切换
      switch (e) {
        case 1: //呼出章节列表
          this.showSideMenu();
          break;
        case 3: //设置
          this.showUpTools = !this.showUpTools;
          break;
        case 4: //上章
          break;
        case 5: //下章
          break;

        default:
          break;
      }
    },
    //切换字体大小
    handleSize(e) {
      //字体减小
      if (e == "-") {
        this.fontInd--;
        if (this.fontInd <= 0) {
          if (this.toastInstance) {
            this.toastInstance.close();
          }
          this.toastInstance = Toast("当前已经是最小字体了");
          this.fontInd = 0;
        }
        storage.setStorage("fontInd", this.fontInd);
      }
      //字体增大
      if (e == "+") {
        this.fontInd++;
        if (this.fontInd >= this.fontConfig.length) {
          if (this.toastInstance) {
            this.toastInstance.close();
          }
          this.toastInstance = Toast("当前已经是最大字体了");
          this.fontInd = this.fontConfig.length - 1;
        }
        storage.setStorage("fontInd", this.fontInd);
      }
    },
    //无限加载章节目录
    loadChapter() {
      this.loadingChapter = true; //加载前要置为true
      if(this.chapterList[this.chapterList.length - 1]>100)return;
      setTimeout(() => {
        let last = this.chapterList[this.chapterList.length - 1];
        for (let i = 1; i <= 40; i++) {
          this.chapterList.push(last + i);
        }
        this.loadingChapter = false;
      }, 2500);
    },
    readerContentClick(e) {
      var e = e || window.event;
      var clickY = e.clientY;
      switch (true) {
        case clickY < this.screenHeight / 3: //点击屏幕上半部分
          if (this.showChapterList) {
            this.hideSideMenu();
          }
          if (this.showBotTools) {
            this.showBotTools = false;
          }
          console.log("up");
          break;
        case clickY < (this.screenHeight * 2) / 3 &&
          clickY >= this.screenHeight / 3: //点击屏幕中间部分呼出工具栏和title栏
          console.log(this.showChapterList);
          if (this.showChapterList) {
            this.hideSideMenu();
          } else {
            this.showBotTools = !this.showBotTools;
            if (this.showUpTools) {
              this.showUpTools = false;
            }
          }
          break;
        case clickY >= (this.screenHeight * 2) / 3 &&
          clickY <= this.screenHeight: //点击屏幕下半部分
          console.log("down");
          if (this.showChapterList) {
            this.hideSideMenu();
          }
          if (this.showBotTools) {
            this.showBotTools = false;
          }
          break;
        default:
          break;
      }
    },
    //隐藏侧边章节栏
    hideSideMenu() {
      this.$refs.readerContent.removeEventListener("touchmove", this.stopMove);
      this.showChapterList = false;
      this.chapterListOut = true;
      setTimeout(() => {
        this.$refs.sideMenu.style.display = "none";
      }, 600);
    },
    //显示侧边章节栏
    showSideMenu() {
      this.$refs.sideMenu.style.display = "block";
      this.showChapterList = true;
      this.chapterListOut = false;
      this.showUpTools = false;
      this.showBotTools = false;
      this.$refs.readerContent.addEventListener("touchmove", this.stopMove);
    },
    // 禁止阅读页面滑动
    stopMove(e) {
      e.preventDefault();
    },
    //上一章下一章切换
    handleChapter(flag) {},
    //正序逆序章节
    handleSort(){
      this.sortFlag =! this.sortFlag;
      this.sortChapterList()
    },
    sortChapterList() {
      
    }
  }
};
</script>

<style lang="scss" scoped>
.view-readerPage {
  background: url(/images/readerpage/niupizhi.png);
  background-size: 100%;
  transition: background-color 0.5s;
  min-height: 100%;
  padding: 0 0.3rem;
}
.chapterTitle {
  background-color: #fcfcfc;
  border-bottom: 1px solid #ccc;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  font-size: 0.32rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.5s;
}
.upTools {
  background-color: #fcfcfc;
  position: fixed;
  top: 0.86rem;
  left: 0;
  width: 100%;
  padding-bottom: 0.3rem;
  transition: background-color 0.5s;
}
.readerContent {
  min-height: 100%;
  color: #333;
}
.bgActive {
  background: transparent;
  border: 1px solid #b40f13;
  border-radius: 50%;
}
.bg0 {
  background: url("/images/readerpage/niupizhi.png");
  background-size: cover;
}
.bg1 {
  background: #f3f3f3;
}
.bg2 {
  background: #f8efd4;
}
.bg3 {
  background: #ffdee4;
}
.bg4 {
  background: #c9e5cc;
}

.colorSpan {
  padding: 0.3rem 0.5rem;
}
.colorSpan > div {
  height: 0.6rem;
  width: 0.6rem;
  position: relative;
}
.colorSpan > div > span {
  border: #ccc solid 1px;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.fontSpan {
  width: 76%;
  border: #aaa solid 1px;
  margin: 0 auto;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  border-radius: 3px;
}
.lineV {
  width: 1px;
  height: 80%;
  background: #d5d5d5;
}
.botTools {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #333;
  padding: 0.1rem 0.2rem;
  border-top: 1px solid #ccc;
  background: #fcfcfc;
  transition: background-color 0.5s;
  & > div {
    flex: 1;
    text-align: center;
    .icon {
      font-size: 0.4rem;
    }
    span {
      display: block;
      font-size: 0.22rem;
    }
  }
}
.sideMenu {
  display: none;
  position: fixed;
  background: #fff;
  width: 5.1rem;
  height: 100%;
  top: 0;
  left: 0;
  .smTop {
    background: #f3f3f3;
    height: 0.9rem;
    line-height: 0.9rem;
    padding: 0 0.5rem;
    span {
      font-size: 0.44rem;
    }
  }
}
.chapterList {
  overflow-y: auto;
  height: 100%;
  padding-right: 0.2rem;
  padding-bottom: 1rem;
  li {
    padding: 0 0.2rem 0 0.4rem;
    line-height: 0.7rem;
      border-bottom: 1px dashed #ccc;
    color: #999;
    font-size: 0.28rem;
  }
}
.rotate180 {
  transform: rotateX(180deg);
}
</style>

<template>
  <div class="flex1  view-bookshelf overflow-y">
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
        <span class="iconfont iconziyuan1 selectedIcon"  :class="{sltCur:checkList.indexOf(item.id)>=0}"></span>
      </label>
    </div>
    <div class="delSelected" v-if="showCheckbox" @click="handleDel">删除</div>
  </div>
</template>

<script>
var timer = null;
const delayTime = 700;
import { MessageBox } from "mint-ui";
export default {
  name: "boookshelf",
  data() {
    return {
      bookList: [],
      checkList: [],
      checked: true,
      showCheckbox: false
    };
  },
  created() {
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
      }, delayTime);
    },
    getMove() {
      clearTimeout(timer);
    },
    getEnd() {
      clearTimeout(timer);
    },
    handleSelect(e, id) {
      console.log(e.target.checked);
      console.log(e.target.nextSibling)
      var isChecked = e.target.checked;
      var nextNode=e.target.nextSibling
      if (isChecked) {
        this.checkList.push(id); //如果被选中则将选中id推入数组
      } else if (this.checkList.indexOf(id) >= 0 && !isChecked) {
        //取消选中则删除元素
        this.checkList.splice(this.checkList.indexOf(id), 1);
      }
    },
    handleDel() {
      //删除按钮
      MessageBox.confirm("确定删除?")
        .then(result => {
         var len=this.bookList.length
         while(len--){
             if(this.checkList.indexOf(this.bookList[len].id)!=-1){
                 this.bookList.splice(len,1)
             }
         }
          //发送请求到后端将数据删除
          this.checkList = [];
          this.showCheckbox = false;
        })
        .catch(err => {
          this.checkList = [];
          this.showCheckbox = false;
        });
    }
  },
  activated() {
    document.title = "书架";
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
    margin-bottom: 0.2rem;
    position: relative;
    max-height: 3.52rem;
    .bookimg {
      display: block;
      width: 1.76rem;
      height: 2.48rem;
      margin: 0 auto;
    }
    .bookname {
      font-size: 0.28rem;
      color: #333;
      line-height: 0.44rem;
      margin: 0 auto;
      width: 1.7rem;
      padding-top: 0.16rem;
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
  .iconziyuan1:before{
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
  height: 0.84rem;
  background: #fff;
}
.selectedIcon{
    width: .36rem;height: .36rem;background: #6f6f6f;
    border-radius: 100%;
    position: absolute;
    top: 2rem;
    right: .4rem;
    color: #fff;
    font-size: .32rem;
}
.sltCur{
    background: #01813b!important;
    animation: zoom .5s;
}

@keyframes zoom{
0%{ 
    width: .36rem;
    height: .36rem;
    }
50%{
    width: .5rem;
    height: .5rem;
    font-size: .38rem;
    }
100%{ 
    width: .36rem;
    height: .36rem;
    }
}
</style>
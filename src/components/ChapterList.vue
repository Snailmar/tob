<!--
 * @Author: vigorzhang
 * @Date: 2019-09-05 21:38:51
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-11 08:19:09
 * @Description: 选集列表
 -->
<template>
  <div class="com-chapterlist">
    <div class="ccl-mask" @click="hideMask" ref="mask"></div>
    <div class="ccl-wrap animated slideInUp" ref="cclWrap">
      <div class="ccl-title">-选集-</div>
      <ul class="ccl-list flex">
        <li class="ccl-cell" v-for="(item,ind) of list" :key="ind"><div @click="cellClick(ind)" :class="{activeColor:index==ind}">{{item}}</div></li>
       
      </ul>
      <div class="ccl-close" @click="hideMask">关闭</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[],
        index:''
    };
  },
  mounted() {
    this.$refs.mask.ontouchmove=(e)=>{
      e.preventDefault();
    };
    this.getList();
  },
  props:[
    'totalChapter'
  ],
  methods: {
      hideMask(){
        this.$refs.cclWrap.classList.remove('slideInUp')
          this.$refs.cclWrap.classList.add('fadeOutDown')
            setTimeout(()=>{
              this.$parent.isShowChaperList=false;
            },500)
      },
      cellClick(ind){
          this.index=ind
      },
      getList(){
        console.log(this.totalChapter)
        var mod=this.totalChapter%50
        var mul=parseInt(this.totalChapter/50)
        if(mul>=1){
          for(let i=1;i<=mul;i++){
            if(i==mul){
              this.list.push(1+50*(i-1)+'-'+this.totalChapter)
              return;
            }
            this.list.push(1+50*(i-1)+'-'+i*50)
          }
        }else{
          this.list.push('1-'+this.totalChapter)
        }
       
      
      }
  },
};
</script>

<style lang="scss" scoped>
.com-chapterlist {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.ccl-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 888;
}
.ccl-wrap {
  background: #fff;
  z-index: 999;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
  color: #333;
  padding-top: 0.56rem;
}
.ccl-title {
  font-size: 0.28rem;
  padding-bottom: 0.4rem;
}
.ccl-list{
    flex-wrap: wrap;
    padding:0 .96rem .6rem;
    max-height: 6rem;
    overflow-y: auto;
}
.ccl-cell {
    width: 33.33%;
    margin-bottom: .2rem;
    div{
        width: 80%;
        height: 0.54rem;
        line-height: .54rem;
        border-radius: .96rem;
        margin:0 auto;
        font-size: .24rem;
        border: 1px solid #f1f1f1;
        &.activeColor{
        border: 1px solid #01813b;
        color: #01813b
        }
    }
}
.ccl-close{
    padding: .38rem 0;
    font-size: .3rem;
    border-top: 1px solid #f1f1f1;
}
</style>
<!--
 * @Author: vigorzhang
 * @Date: 2019-09-05 21:38:51
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-06 17:49:44
 * @Description: 搜索栏
 -->
<template>
  <div class="flex f-align search-com">
    <div class="com-search flex f-align flex1" id="com">
      <span class="icon iconfont iconchazhao" @click="handleSearch"></span>
      <input
        type="text"
        placeholder="请输入作者或书名"
        class="flex1 " id="inputKeywords"
        v-model="keyWords"
        @keyup.enter="handleSearch"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span class="icon iconfont iconsousuoguanbi" v-if="!!keyWords" @click.stop="clearSearch"></span>
    </div>
    <div  @click.stop="cancleSearch" class="cancleBtn" v-if="keyWords.trim()==''?false:true">取消</div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name:'search',
  data() {
    return {
      keyWords:''
    };
  },
  props: {
    keywords:{
      default:''
    }
  },
  mounted() {
    this.keyWords=this.keywords
    },
updated() {

},
  methods: {
    handleSearch() {
      if (!this.keyWords.trim()) return;
      // if(document.title=='书城'){
        this.$router.push('/searchlist?keywords='+this.keyWords)
      // }
    },
    handleFocus() {
    },
    handleBlur() {
    },
    cancleSearch() {
      this.keyWords = "";
    },
    clearSearch() {
      this.keyWords = "";
    }
  },
  computed: {
  },
  deactivated() {
    this.keywords=''
  },
};
</script>
<style lang="scss" scoped>
.com-search {
  margin: 0.28rem 0.3rem 0.1rem;
  border: 2px solid #979797;
  border-radius: 0.2rem;
  padding: 0 0.23rem;
  font-size: 0.28rem;
  height: 0.64rem;
  span {
    font-size: 0.28rem;
    color: #979797;
  }
  input {
    height: 80%;
    margin: 0 0.2rem 0 0.05rem;
    border-radius: unset;
  }
  .bd-right {
    border-right: 1px solid #979797;
  }
  input::-webkit-input-placeholder {
    color: #979797;
    font-size: 0.22rem;
    line-height: 1.2;
  }
}
.cancleBtn {
  margin: 0.15rem 0.3rem 0 0;
  font-size: 0.3rem;
}
</style>
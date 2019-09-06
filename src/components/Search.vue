<template>
  <div class="flex f-align search-com">
    <div class="com-search flex f-align flex1">
      <span class="icon iconfont iconchazhao"></span>
      <input
        type="text"
        placeholder="请输入作者或书名"
        class="flex1"
        v-model="keywords"
        @keyup.enter="handleSearch"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span class="icon iconfont iconsousuoguanbi" v-if="!!keywords" @click.stop="clearSearch"></span>
    </div>
    <div v-if="showSearchList" @click.stop="cancleSearch" class="cancleBtn">取消</div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      keywords: ""
    };
  },
  props: {},
  mounted() {},

  methods: {
    handleSearch() {
      if (!this.keywords) return;
      this.$axios
        .get("/nav")
        .then(result => {
          this.getSearchListResult(result);
        })
        .catch(err => {});
      this.saveKeywords(this.keywords);
    },
    handleFocus() {
      this.changeSearchList(true);
    },
    handleBlur() {
      if (!this.keywords) {
        this.changeSearchList(false);
      }
    },
    cancleSearch() {
      this.changeSearchList(false);
      this.keywords = "";
      this.saveKeywords("");
    },
    clearSearch() {
      this.keywords = "";
      this.saveKeywords("");
    },
    ...mapActions(["changeSearchList", "saveKeywords", "getSearchListResult"])
  },
  computed: {
    ...mapState(["showSearchList"])
  }
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
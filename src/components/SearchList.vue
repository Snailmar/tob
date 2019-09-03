<template>
  <div class="com-searchlist flex1">
    <div class="search-nav flex f-between " v-if="showNav">
      <div class="nav-book">书籍</div>
      <div class="nav-video">视频</div>
    </div>
    <div class="searchlist">
      <BookDisplay :displayType="displayType" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookDisplay from "@/components/BookDisplay";
export default {
  data() {
    return {
      showNav: true,
      displayType: "wide" //"narrow",默认为wide
    };
  },
  methods: {},
  mounted() {
    console.log(this.searchListResult);
  },
  components: { BookDisplay },
  computed: {
    ...mapState(["searchListResult"])
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.com-searchlist {
  .search-nav {
      padding: 0 1.6rem;
      font-size: .28rem;
      color: #333333;
  }
}
</style>
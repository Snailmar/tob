<template>
  <div class="com-catalog">
    <div class="title-wrap flex f-align">
      <span class="line flex1"></span>
      <span class="title">{{title}}</span>
      <span class="line flex1" ></span>
    </div>
    <div class="sub-catalog flex f-between">
        <span class="sub-title">经管励志</span>
        <span class="sub-title">经管励志</span>
        <span class="sub-title">经管励志</span>
        <span class="sub-title">经管励志</span>
        <span class="sub-title">经管励志</span>
        <span class="sub-title">经管励志</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.com-catalog {
  margin: 0 0.16rem 0.2rem;
  .title-wrap{
      .line{
          height: 2px;
          background: #f00;
      }
      .title{
          margin: 0 .2rem;
          font-size: .32rem;
      }
  }
  .sub-catalog{
      flex-wrap: wrap;
      .sub-title{
          width: 30%;
          height: .5rem;
          line-height: .5rem;
          text-align: center;
          background: #ccc;
          border-radius: .5rem;
          margin-bottom: .1rem;
      }
  }
}
</style>
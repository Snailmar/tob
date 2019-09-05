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
  margin: 0 0.3rem 0.2rem;
  padding-top: .28rem;
  .title-wrap{
    margin-bottom: .3rem;
      .line{
          height: 1px;
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
          height: .74rem;
          line-height: .74rem;
          text-align: center;
          background: rgba(242, 242, 242, 1);
          border-radius: .38rem;
          margin-bottom: .2rem;
          color: #000;
          font-size: .28rem;
      }
  }
}
</style>
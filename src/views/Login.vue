<!--
 * @Author: vigorzhang
 * @Date: 2019-11-07 14:10:59
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-07 15:15:25
 * @Description: 登录页面
 -->
<template>
  <div class="view-login">
    <input type="tel" class="phoneNum border" v-model="phoneNum" placeholder="手机号码" maxlength="11" />
    <div class="border flex">
      <input type="tel" class="validNum" placeholder="验证码" maxlength="6" v-model="validNum" />
      <span class="getCode" @click="getCode">{{code}}</span>
    </div>
    <div class="loginBtn" @click="handleLogin">立刻登录</div>
  </div>
</template>

<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      phoneNum: "",
      validNum: "",
      code: "获取验证码",
      getCodeFlag: false,
      timer: null
    };
  },
  methods: {
    getCode() {
      if (this.getCodeFlag) {
        return;
      }
      this.getCodeFlag = true;
      this.code = 10; //设置倒计时时间
      this.timer = setInterval(() => {
        this.code -= 1;
        if (this.code == 0) {
          clearInterval(this.timer);
          this.code = "获取验证码";
          this.getCodeFlag = false;
        }
      }, 1000);
      this.getCodeFromServe();
    },
    getCodeFromServe() {
      //发送请求获取验证码
      this.$axios
        .post("", { userPhone: this.phoneNum })
        .then(result => {
          Toast("获取验证码成功");
        })
        .catch(err => {
          //获取验证码失败时
          clearInterval(this.timer);
          this.code = "获取验证码";
        });
    },

    handleLogin() {}
  }
};
</script>

<style lang="scss" scoped>
input {
  background: transparent;
  font-size: 0.32rem;
}

.border {
  width: 100%;
  height: 0.82rem;
  /* box-shadow: 0px 1px .4rem 0px rgba(0, 0, 0, 0.5); */
  border-radius: 0.4rem;
  border: 2px solid #979797;
  color: #323232;
}

.view-login {
  margin-top: 2.34rem;
  width: 100%;
  position: relative;
}

.phoneNum {
  margin-bottom: 0.3rem;
  padding: 0 0.32rem;
  line-height: 0.42rem;
}

.validNum {
  padding: 0 0.32rem;
  width: 3.2rem;
  height: 0.82rem;
  line-height: 0.42rem;
}

.getCode {
  color: #0091ff;
  height: 0.62rem;
  line-height: 0.62rem;
  text-align: center;
  width: 1.8rem;
  border-left: #d8d8d8 solid 2px;
}

.loginBtn {
  background: #01813b;
  color: #fff;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  border-radius: 0.44rem;
  text-align: center;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.grey {
  color: #9b9b9b;
}

.showMessage {
  color: #ef4f4f;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
}

input::-webkit-input-placeholder {
  color: #9b9b9b;
  font-size: 0.28rem;
}
.p_message {
  position: absolute;
  top: 4.54rem !important;
  left: 50% !important;
  transform: translateX(-50%);
  color: #ef4f4f;
}
</style>
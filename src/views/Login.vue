<!--
 * @Author: vigorzhang
 * @Date: 2019-11-07 14:10:59
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-10 22:01:33
 * @Description: 登录页面
 -->
<template>
  <div class="view-login">
    <input
      type="tel"
      class="phoneNum border"
      v-model="phoneNum"
      placeholder="手机号码"
      maxlength="11"
      @blur="handleBlur(1,phoneNum)"
    />
    <div class="border flex" style="margin-bottom:.3rem">
      <input
        type="tel"
        class="validNum"
        placeholder="验证码"
        maxlength="6"
        v-model="validNum"
        @blur="handleBlur(2,validNum)"
      />
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
      getCodeFlag: false, //获取验证码防抖
      loginFlag: false, //登录防抖
      timer: null,
      toastInstance:null
    };
  },
  methods: {
    getCode() {
      if (!this.checkPhone(this.phoneNum)) {
        //获取验证码之前验证手机号
        return;
      }
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
          this.Message("获取验证码成功")
          setTimeout(() => {
            this.getCodeFlag = false;
          }, 500);
        })
        .catch(err => {
          //获取验证码失败时
          clearInterval(this.timer);
          this.code = "获取验证码";
          this.getCodeFlag = false;
        });
    },

    handleLogin() {
      if (!this.checkPhone(this.phoneNum) || !this.checkValid(this.validNum)) {
        return;
      }
      if (this.loginFlag) {
        return;
      }
      this.loginFlag = true;
      this.$axios
        .post("", {})
        .then(result => {
          //登录成功逻辑
          this.loginFlag = false;
        })
        .catch(err => {
          this.Message("登录失败,请稍后再试")
          this.loginFlag = false;
        });
    },
    handleBlur(flag, e) {
      if (flag == 1) {
        //手机号
        this.checkPhone(this.phoneNum);
      }
      if (flag == 2) {
        //验证码
        this.checkValid(this.validNum);
      }
    },
    checkPhone(phoneNum) {
      if (!phoneNum.trim()) {
          this.Message("请输入手机号码")
        return false;
      } else if (!/^1[3456789]\d{9}$/.test(phoneNum)) {
          this.Message("手机号码错误,请重新输入")
        return false;
      }
      return true;
    },
    checkValid(validNum) {
      if (!validNum.trim()) {
          this.Message("请输入验证码")
        return false;
      } else if (!/\d{6}$/.test(validNum)) {
          this.Message("无效的验证码,请重新输入")
        return false;
      }
      return true;
    },
    Message(message){
        if(this.toastInstance){
            this.toastInstance.close();
        }
        this.toastInstance=Toast(message)
    }
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
  padding: 2.34rem 0.8rem;
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
  width: 2.4rem;
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
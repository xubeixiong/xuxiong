<template>
  <div class="account-login">
    <div class="tab-login-box">
      <div class="tab-first-child">
        <span
          @click="toTabLogin(0)"
          :class="tabLoginIndex == 0 ? 'tab-active' : ''"
          >账号密码登录</span
        >
      </div>
      <div>
        <span
          @click="toTabLogin(1)"
          :class="tabLoginIndex == 1 ? 'tab-active' : ''"
          >验证码登录</span
        >
      </div>
    </div>
    <div
      class="account-password-form"
      style="margin-bottom: 80px"
      v-if="tabLoginIndex == 0"
    >
      <i-form ref="loginRef">
        <Form-item prop="username">
          <i-input
            type="text"
            maxlength="30"
            placeholder="请输入用户名"
            @on-enter="login"
          >
          </i-input>
          <i class="userIcon" slot></i>
        </Form-item>
        <Form-item prop="password">
          <i-input type="password" placeholder="请输入密码" @on-enter="login">
          </i-input>
          <i class="passwardIcon" slot></i>
        </Form-item>
      </i-form>
    </div>
    <!-- 验证码登录 -->
    <div
      class="account-password-form"
      style="margin-bottom: 20px"
      v-if="tabLoginIndex == 1"
    >
      <i-form ref="loginRef">
        <Form-item prop="username">
          <i-input
            type="text"
            maxlength="30"
            placeholder="请输入手机号"
            @on-enter="login"
          >
          </i-input>
          <i class="phoneIcon" slot></i>
        </Form-item>
        <div class="split-input">
          <Form-item prop="imageCode">
            <i-input
              type="text"
              placeholder="请输入验证码"
              style="width: 160px; padding-left: 0 !important"
            >
            </i-input>
          </Form-item>
          <div
            class="resCord_img"
            @click="getCode"
            style="width: 80px !important; margin-top: 3px"
          >
            <img :src="resCodeImg" alt="" style="width: 80px; height: 30px" />
          </div>
        </div>
        <div class="split-input">
          <Form-item prop="imageCode">
            <i-input
              type="text"
              placeholder="请输入6位动态密码"
              style="width: 160px; padding-left: 0 !important"
            >
            </i-input>
          </Form-item>
          <div
            class="get-rescode"
            @click="getCode"
            style="width: 80px !important; margin-top: 2px"
          >
            获取验证码
          </div>
        </div>
      </i-form>
    </div>
    <div class="jump-btn">
      <span @click="toRegist">立即注册</span>
      <span @click="toForgetPassword">忘记密码?</span>
    </div>
    <div class="login-btn">登录</div>
    <div class="radio-text">
      <Radio>勾选即同意《用户投诉信息授权协议》</Radio>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      tabLoginIndex: 0,
      resCodeImg: "http://complaint.auto.cqn.com.cn/imgcaptcha?r=11616507714",
    };
  },
  methods: {
    toTab(index) {
      this.tabIndex = index;
    },
    toTabLogin(index) {
      this.tabLoginIndex = index;
    },
    toRegist() {
      this.$parent.activecomponet = "regist";
    },
    toForgetPassword() {
      this.$parent.activecomponet = "forgetPassward";
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
// 账号密码登录
.account-login {
  padding: 0 70px;
  .tab-login-box {
    display: flex;
    flex-direction: row;
    margin: 30px 0 0;
    span {
      margin: 0 15px;
      padding: 3px 0;
    }
    .tab-first-child {
      border-right: 1px solid #c6cacb;
      padding-right: 0px;
    }
    .tab-active {
      border-bottom: 2px solid #3ba9de;
    }
  }
  .account-password-form {
    margin-top: 40px;
    .get-rescode {
      width: 100px;
      height: 30px;
      border: 1px solid #2e9cd1;
      color: #2e9cd1;
      font-size: 12px;
      text-align: center;
      line-height: 30px;
      background: #dff4ff;
      border-radius: 5px;
    }
    .split-input {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /deep/.ivu-input {
        padding-left: 5px !important;
      }
    }
  }
  .jump-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
    span:first-child {
      color: #074c83;
    }
  }
  .login-btn {
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: #2e9cd1;
    margin: 5px auto 10px;
    color: #ffffff;
    border-radius: 5px;
  }
  .radio-text {
    font-size: 15px;
    color: #777777;
  }
  .phoneIcon {
    width: 12px;
    height: 17px;
    background: url("../assets/img/login/phoneIcon.png") no-repeat;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
  }
  .userIcon {
    width: 16px;
    height: 16px;
    background: url("../assets/img/login/phonenumberIcon.png") no-repeat;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
  }
  .passwardIcon {
    width: 16px;
    height: 16px;
    background: url("../assets/img/login/passwordIcon.png") no-repeat;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
  }
}
</style>
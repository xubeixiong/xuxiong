<template>
     <div class="account-login">
                  <div class="account-password-form">
                     <i-form ref="loginRef">
                        <Form-item prop="username">
                          <i-input type="text"  maxlength="30" placeholder="手机号" @on-enter="login">
                          </i-input>
                          <i class="phoneIcon" slot></i>
                        </Form-item>
                        <Form-item prop="password">
                          <i-input type="password" placeholder="密码" @on-enter="login">
                          </i-input>
                          <i class="passwardIcon" slot></i>
                        </Form-item>
                        <Form-item prop="password">
                          <i-input type="password" placeholder="确认密码" @on-enter="login">
                          </i-input>
                          <i class="passwardIcon" slot></i>
                        </Form-item>
                         <div class="split-input">
                          <Form-item prop="imageCode">
                            <i-input type="text" placeholder="请输入验证码" style="width:160px;padding-left:0 !important">
                            </i-input>
                          </Form-item>
                          <div class="resCord_img"  style="width:80px!important;margin-top:3px">
                            <img :src="resCodeImg" alt="" style="width:80px;height:30px"> 
                          </div>
                        </div>
                        <div class="split-input">
                          <Form-item prop="imageCode">
                            <i-input type="text" placeholder="请输入6位动态密码" style="width:160px;padding-left:0 !important">
                            </i-input>
                          </Form-item>
                          <div class="get-rescode" style="width:80px!important;margin-top:2px">
                            获取验证码
                          </div>
                        </div>
                      </i-form>
                  </div>
                   <div class="jump-btn">
                        <span @click="tologin">立即登录</span>
                        <span @click="toForgetPassword">忘记密码?</span>
                   </div>
                   <div class="login-btn">注册</div>
                   <div class="radio-text"> <Radio>勾选即同意《用户投诉信息授权协议》</Radio> </div>
            </div> 
</template>
<script>
export default {
    data () {
      return {
        resCodeImg:'http://complaint.auto.cqn.com.cn/imgcaptcha?r=11616507714'
      }
    },
    methods:{
     tologin () {
         this.$parent.activecomponet = 'loginChild'
     },
     toForgetPassword(){
         this.$parent.activecomponet = 'forgetPassward' 
     }
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
 // 账号密码登录
.account-login{
        padding:0 70px;
            .account-password-form{
            margin-top:30px;
            .get-rescode{
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
            .split-input{
                display: flex;
                flex-direction: row; 
                justify-content: space-between;
                /deep/.ivu-input{
            
                padding-left: 5px !important;
                }
            }
            }
            .jump-btn{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 15px;
                span:first-child{
                    color: #074c83;
                }
            }
.login-btn{
  height:35px;
  line-height: 35px;
  text-align: center;
  background-color: #2e9cd1;
  margin: 5px auto 10px;
  color: #ffffff;
  border-radius: 5px;
}
.radio-text{
  font-size: 15px;
  color: #777777;
}
.phoneIcon{
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
  .passwardIcon{
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
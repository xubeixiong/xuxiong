<template>
  <div id="login">
    <div class="header-img">
      <img class="logo-img" src="@/assets/img/login/logo.png" alt="">
     <div class="logo-text"><img  src="@/assets/img/login/logo_text.png" alt=""></div>
    </div>
    <div class="main-content">
       <div class="login-box">
         <div class="login-tab">
           <span :class="tabIndex == 0?  'users-active':'users-icon'" @click="toTab(0)">车辆用户</span>
           <span :class="tabIndex == 1? 'agent-active':'agent-icon' " @click="toTab(1)">经销商</span>
         </div>
         <div class="login-back">
           <!-- 忘记密码 -->
            <component :is="activecomponet"></component>	
         </div>
       </div>
    </div>
    <div class="footer">
      <span> 中国质量报刊社 中国质量新闻网 版权所有，未经许可不得转载。</span>
      <span>Copyright(c) 1998-2021 All Rights Reserved.</span>
      <span>中华人民共和国互联网新闻信息服务许可证编号：10120170032</span>
      <span>网站备案号：京ICP备09084810号-1 广播电视节目制作经营许可证编号：（京）字第09421号</span>
      <span>公安机关网站备案号：京公网安备 11010502031058号</span>
      <span>违法和不良信息举报电话：(010) 84639548/84648459 邮箱：lxwm@cqn.com.cn</span>
      <span>技术支持：上海乐意行智能科技发展有限公司</span>
    </div>
  </div>
</template>
<script>
  import regist from '../../components/regist'
  import forgetPassward from '../../components/forgetPassword'
  import loginChild from '../../components/loginChild'
  export default {
    components:{regist,forgetPassward, loginChild},
    data () {
      return {
        activecomponet:'loginChild',
        tabIndex:0,
      }
    },
    methods:{
      toTab (index){
        this.tabIndex = index
      }
      },
    mounted() {
    }
  }
</script>
<style lang="less" scoped>
#login{
  height: 100vh;
}
.header-img{
  height: 90px;
  display: flex;
  flex-direction: row;
  width: 900px;
  margin:0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  .logo-img{
    width: 183px;
    height: 69px;
  }
  .logo-text{
    border-left: 1px solid #cecece;
     margin-left: 22px;
     margin-top: 20px;
    img{
      margin-left: 22px;
      width: 547px;
      height: 36px;
    }
  }
  
}
.main-content{
  height:405px;
  background: url("../../assets/img/login/new_bg.jpg") no-repeat;
  background-size: cover;
  position: relative;
  .login-box{
    background-size: cover;
    position: absolute;
    right: 15%;
    top:30px;
    display: flex;
    flex-direction: row;
    .login-tab{
      width: 35px;
      display: flex;
      flex-direction: column;
      position: relative;
      position: absolute;
      top:0;
      left:-23px;
      span{
        height:135px;
        text-align: center;
        padding:0 10px;
        color: #777777;
      }
      span:first-child{
        padding-top: 30px;
      }
      span:last-child{
        padding-top:55px;
      }
      .users-icon{
        width: 35px;
        height: 168px;
        background: url("../../assets/img/login/user_an.png") no-repeat;
        background-size:cover;
      }
      .users-active{
        width: 35px;
        height: 168px;
        background: url("../../assets/img/login/user_liang.png") no-repeat;
        background-size:cover;
        color: #323232 !important;
      }
      .agent-icon{
        width: 35px;
        height: 204px;
        position: absolute;
        top:135px;
        left:0;
        background: url("../../assets/img/login/jing_an.png") no-repeat;
        background-size:cover;
      }
      .agent-active{
         width: 35px;
        height: 204px;
        position: absolute;
        top:135px;
        left:0;
        background: url("../../assets/img/login/jing_liang.png") no-repeat;
        background-size:cover;
        color: #323232 !important;
      }
    }
    .login-back{
      width:408px;
      height: 439px;
      background: url("../../assets/img/login/login_box.png") no-repeat;
      background-size:contain;
      padding: 0 10px;
      cursor: pointer;
      
  }
}
}
.footer{
    width: 900px;
    margin:60px auto;
    display: flex;
    flex-direction: column;
    span{
      font-size: 12px;
      height: 24px;
      line-height: 24px;
      color: #999;
      text-align: center;
    }
}


/deep/.ivu-input{
  background: #ffffff !important;
  padding-left: 25px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #cccccc !important;
}
</style>
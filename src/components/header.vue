<template>
  <div class="header">
    <div class="header_name">
      <i class="return_btn" @click="jump(isRouter)"></i>
      贵阳国家大数据安全靶场-测评服务平台
    </div>
    <div class="header_opa">
      <span>{{username}}</span>
      <span @click="loginOut(isRouter)">退出</span>
    </div>
  </div>
</template>
<script>
  export default {
    props:['url', 'isRouter'],
    data () {
      return {
        username:''
      }
    },
    methods:{
      jump (bool) {
        if(bool) {
          this.$router.replace(this.url)
        }else {
          window.location.href = this.url
        }
      },
      loginOut(isRouter){
        this.$Modal.confirm({
          title: '是否退出登录',
          onOk: () => {
            this.$req().post(this.Api().loginOut,{
              access_token: localStorage.token
            }, function(res) {
              if(res.data.code == 200){
                if(isRouter){
                  this.$router.replace('/login')
                }else {
                  window.location.href = '/test/login.html'
                }
                localStorage.clear()
              }else {
                this.$Message.error(res.data.msg)
              }
            })
          }
        });
      },
      getUserInfo () {
        this.$req().get(this.Api().getUserInfo, function(res) {
          this.username = res.data.username
        })
      }
    },
    mounted () {
      this.getUserInfo()
    }
  }
</script>
<style lang="less">
  .header{
    min-height:77px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #0f1923;
    .header_name{
      position: relative;
      .return_btn{
        width:185px;
        height:77px;
        background: url("../assets/img/fanhui.png") no-repeat;
        background-size: cover;
        position: absolute;
        top:0;
        left: 0;
        cursor: pointer;
      }
      display: flex;
      align-items: center;
      padding-left: 180px;
      color: #ffffff;
      font-weight: bold;
      font-style: italic;
      font-size: 26px;
    }
   .header_opa{
      padding:13px 0 0;
     display: flex;
     align-items: center;
     span{
       color: #9eb5de;
       cursor: pointer;
     }
     span:first-child{
       display: inline-block;
       width:188px;
       height:50px;
       line-height: 50px;
       text-align: center;
       background: url("../assets/img/admin.png") no-repeat;
       background-size: cover;

     }
     span:last-child{
       margin-left: 10px;
       display: inline-block;
       width:188px;
       height:50px;
       line-height: 50px;
       text-align: center;
       background: url("../assets/img/quit.png") no-repeat;
       background-size: cover;
     }
   }
  }
</style>

<template>
    <div>
        <div class="personal-source-tab">
            <span @click="toTabPersonal(0)" :class="tabPersonalIndex == 0?'personal-active':''">基本信息</span>
            <span @click="toTabPersonal(1)" :class="tabPersonalIndex == 1?'personal-active':''">安全信息</span>
        </div>
        <div v-if="tabPersonalIndex == 0">
         <div class="base-info">
             <span>登录密码</span>
             <span> 安全强度高的登录密码可以使账号更安全。</span>
             <span>修改</span>
         </div>
         <div class="base-info">
             <span>更改手机号</span>
             <span>您认证的手机号：186****5459</span>
             <span>修改</span>
         </div>
        </div>
         <div v-if="tabPersonalIndex == 1">
           <div class="safe-info">
  <Form :model="formItem" :label-width="90">
        <FormItem label="真实姓名:">
            <Input v-model="formItem.input" style="width:122px"></Input>
        </FormItem>
        <FormItem label="性别:">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
         <FormItem label="生日:">
            <DatePicker type="date" style="width:122px"  v-model="formItem.date"></DatePicker>
         </FormItem>
         <div class="phone-number-item">
            <FormItem label="手机号:">
                <div><span>137***34543</span>  <span style="color:#015c95;margin-left:20px">已认证</span></div>
            </FormItem>
         </div>
         
         <FormItem label="头像:">
             <div class="add-header-pic"><img src="@/assets/img/users/add-img.png" alt=""></div>
         </FormItem>
    </Form>
         <div class="save-btn">保存</div>
    </div>          
    </div>
    <div class="small-text">主管：国家市场监督管理总局 中国质量报刊社  技术支持：上海乐意行智能科技发展有限公司 </div>
    </div>
</template>
<script>
export default{
    data () {
        return{
            tabPersonalIndex:0,
            formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    date: '',
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
        }
    },
    methods:{
        toTabPersonal (index){
            this.tabPersonalIndex = index
        }
    }
}
</script>  
<style lang="less" scoped>
.personal-source-tab{
     height: 75px;
     line-height: 75px;
     border-bottom: 2px solid #cccccc;
     margin: 0 30px;
     width:704px;
     span:first-child{
         border-right:1px solid #c6c4c5;
     }
     span{
         padding: 0 30px;
         font-size: 22px;
         font-weight: bold;
         cursor: pointer;
     }
     .personal-active{
         color:#015c95 !important;
     }
}
.base-info{
    height: 69px;
    border-bottom:2px solid #ececea;
    margin:0 30px;
    padding:0 34px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span:first-child{
        font-size:18px;
        font-weight: bold;
        color: #313131;
    }
    span:nth-child(2){
        font-size:18px;
        color: #313131;
        text-align: left;
        width: 60%;
    }
    span:last-child{
        font-size: 18px;
        color: #e51523;
    }
}
.safe-info{
    margin:30px 30px 0;
    padding:0 30px;
    .phone-number-item{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .add-header-pic{
    img{
        width:95px;
       height:95px;
    }
}
}
.save-btn{
    width:217px;
    height:48px;
    line-height:48px;
    background-color: #015c95;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin-left:144px;
}
/deep/.ivu-input{
    background: #ffffff !important;
    height: 40px;
    border:1px solid #cccccc !important;
}
/deep/.ivu-form-item{
    margin-bottom: 15px !important;
}
/deep/.ivu-form-item-label{
    font-size: 18px !important;
}
/deep/.ivu-radio-wrapper{
    font-size:18px !important;
}
 .phone-number-item{
    /deep/.ivu-form-item{
            display: flex;
            flex-direction: row;
            align-items: center;
    }
    /deep/.ivu-form-item-content{
    margin-left:0  !important;
    }
}
.small-text{
    color: #999999;
    font-size: 12px;
    text-align: center;
    position: fixed;
    bottom:20px;
    left:50%;
    transform: translate(-50%,0);
}
</style>
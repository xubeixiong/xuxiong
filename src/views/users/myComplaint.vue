<template>
    <div>
       <div class="personal-source-tab">
            <span @click="toTabPersonal(0)" :class="tabPersonalIndex == 0?'personal-active':''">申请中</span>
            <span @click="toTabPersonal(1)" :class="tabPersonalIndex == 1?'personal-active':''">受理中</span>
            <span @click="toTabPersonal(2)" :class="tabPersonalIndex == 2?'personal-active':''">已驳回</span>
            <span @click="toTabPersonal(3)" :class="tabPersonalIndex == 3?'personal-active':''">待确认</span>
            <span @click="toTabPersonal(4)" :class="tabPersonalIndex == 4?'personal-active':''">已完成</span>
        </div>
        <div v-if="tabPersonalIndex == 0" class="complaint-list">
          <div v-for="(i,j) in 2" :key=j class="complaint-list-content">
              <div>
                  <span>投诉类型:</span>
                  <span>投诉时间:</span>
              </div>
              <div>
                  <span>服务类</span>
                  <span>2021-01-02 12:09:09</span>
              </div>
              <div>
                  查看
              </div>
          </div>
        </div>
        <div v-if="tabPersonalIndex == 1" class="complaint-list">
           <div v-for="(i,j) in 2" :key=j class="complaint-list-content">
              <div>
                  <span>投诉类型:</span>
                  <span>投诉时间:</span>
                  <span>受理时间:</span>
              </div>
              <div>
                  <span>服务类</span>
                  <span>2021-02-02 12:09:09</span>
                  <span>2021-02-02 12:09:09</span>
              </div>
              <div>
                  查看
              </div>
          </div>
        </div>
        <div v-if="tabPersonalIndex == 2" class="complaint-list">
<div v-for="(i,j) in 2" :key=j class="complaint-list-content">
              <div>
                  <span>投诉类型:</span>
                  <span>投诉时间:</span>
                  <span>受理时间:</span>
                  <span>驳回时间:</span>
                  <span>驳回理由:</span>
              </div>
              <div>
                  <span>服务类</span>
                  <span>2021-02-02 12:09:09</span>
                  <span>2021-02-02 12:09:09</span>
                  <span>2021-02-02 12:09:09</span>
                  <span>服务信息不全</span>
              </div>
              <div>
                  查看
              </div>
          </div>


        </div>
        <div v-if="tabPersonalIndex == 3" class="complaint-list">

            <div v-for="(i,j) in 2" :key=j class="complaint-list-content">
              <div>
                  <span>投诉类型:</span>
                  <span>投诉时间:</span>
                  <span>受理时间:</span>
              </div>
              <div>
                  <span>服务类</span>
                  <span>2021-02-02 12:09:09</span>
                  <span>2021-02-02 12:09:09</span>
              </div>
              <div>
                  查看
              </div>
          </div>

        </div>
        <div v-if="tabPersonalIndex == 4" class="complaint-list">

<div v-for="(i,j) in 2" :key=j class="complaint-list-content">
              <div>
                  <span>投诉类型:</span>
                  <span>投诉时间:</span>
                  <span>受理时间:</span>
                  <span>关闭时间:</span>
              </div>
              <div>
                  <span>服务类</span>
                  <span>2021-02-02 12:09:09</span>
                  <span>2021-02-02 12:09:09</span>
                  <span>2021-02-02 12:09:09</span>
              </div>
              <div>
                  查看
              </div>
          </div>

        </div>
        <div v-if="tabPersonalIndex == 5" class="complaint-list">
<div v-for="(i,j) in 2" :key=j class="complaint-list-content">
              <div>
                  <span>投诉类型:</span>
                  <span>投诉时间:</span>
                  <span>受理时间:</span>
              </div>
              <div>
                  <span>服务类</span>
                  <span>2021-02-02 12:09:09</span>
                  <span>2021-02-02 12:09:09</span>
              </div>
              <div>
                  查看
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return{
            tabPersonalIndex:0
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
     span{
         padding: 0 35px;
         font-size: 22px;
         font-weight: bold;
         cursor: pointer;
         border-right:1px solid #c6c4c5;
     }
      span:last-child{
         border-right:none;
     }
     .personal-active{
         color:#015c95 !important;
     }
}
.complaint-list{
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .complaint-list-content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;  
        align-items: center;
        padding:20px; 
        border-bottom:2px solid #ececea;    
        div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        } 
        div:first-child{
            font-size:18px;
            font-weight: bold;
        }
        div:nth-child(2){
            width:70%;
            font-size: 18px;
        }
        div:last-child{
            width:68px;
            height:33px;
            line-height: 33px;
            background-color: #015c95;
            border-radius: 4px;
            text-align: center;
            font-size: 18px;
            color: #ffffff;
        }
    }

}
</style>
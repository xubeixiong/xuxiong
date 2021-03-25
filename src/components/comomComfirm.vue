<template>
  <div>
    <Modal
      v-model="modal"
      :title="titleName"
      :footer-hide="Boolean(true)"
      :width="modalWidth?modalWidth:509"
      :class="{'isHeight':isHeight?false:true}"
    >
      <slot></slot>
    </Modal>
  </div>
</template>
<script>
  export default {
    props:['titleName','isHeight','modalWidth'],
    data () {
      return {
        modal: false
      }
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    }
  }
</script>
<style lang="less" scoped>
 /deep/ .ivu-modal-header{
    border: none;
  }
 @media screen and (min-width:1366px) and (max-width:1980px){
   .isHeight /deep/ .ivu-modal-body{
     max-height:760px !important;
     overflow-y: auto;
     overflow-x: hidden;
   }
 }
 @media screen and (min-width:768px) and (max-width:1466px){
   .isHeight /deep/ .ivu-modal-body{
     max-height:600px !important;
     overflow-y: auto;
     overflow-x: hidden;
   }
   /deep/ .ivu-modal{
     max-width:1080px !important;
   }
 }
</style>


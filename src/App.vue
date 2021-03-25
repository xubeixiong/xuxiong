<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		mounted() {
		}
	}
</script>
<style lang="less">
  @import "assets/css/commom";
  .commom_style{
    padding:20px 29px 20px 29px;
  }
  .table_btn{
    font-size: 14px;
    color: #157AF7;
    cursor: pointer;
    display:inline-block;
  }
  .grey_btn{
    color: #999999;
    cursor: not-allowed;
  }
  .back_btn{
    width:180px;
    height:40px;
    line-height: 40px;
    display: block;
  }
  .commom_back_btn{
    width:180px;
    height:40px;
    line-height: 40px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    background: #57a3f3;
    margin:30px auto !important;
    cursor: pointer;
  }
  .form_btn{
    margin:60px auto 0 !important;
  }
  .ivu-table td, .ivu-table th{
   border-bottom: none;
  }
  .ivu-table-wrapper{
    .comborder
  }
  .ivu-table:before{
    display: none !important;
  }
  .ivu-page-options-elevator input{
    background: #F1F1F1;
    border:none;
  }
  .ivu-select-small.ivu-select-single .ivu-select-selection .ivu-select-placeholder,
  .ivu-select-small.ivu-select-single .ivu-select-selection .ivu-select-selected-value{
    background: #F1F1F1 !important;
  }
  .ivu-select-selection{
    border:none;
    background: #F1F1F1;
  }
  .ivu-form-item-error-tip{
    font-size: 13px;
  }
  .ivu-input{
    background: #F1F1F1 !important;
    border-radius: 4px;
    border:none !important;
  }
  .ivu-form-item{
    margin-bottom: 20px !important;
  }
  .ivu-select-selection{
    background: #F1F1F1 !important;
    border-radius: 4px;
    border:none !important;
  }
  //弹出层
  .ivu-modal {
    top: 0 !important;
  }
  .ivu-modal-wrap {
    display: flex;
    align-items: center;
  }
  .commom_input{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 10px;
    label{
      min-width: 70px;
      font-size: 14px;
    }
  }
  .vue-directive-image-previewer{
    z-index: 9999 !important;
  }
</style>

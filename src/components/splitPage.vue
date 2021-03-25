<template>
  <div class="split_page">
    <div>
      共{{total?total:0}}条
    </div>
    <div>
      <Page :total="total?total:0"
            @on-page-size-change="psizeChange"
            @on-change="pageChange"
            show-elevator show-sizer />
    </div>
  </div>
</template>
<script>
  export default {
    props:['total','page','rows'],
    methods:{
      psizeChange(val) {
        this.$emit("psizeChange",val)
      },
      pageChange(val) {
        this.$emit("pageChange",val)
      }
    }
  }
</script>
<style lang="less" scoped>
  .split_page{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0;
    font-size: 14px;
    color: #ADADAD;
  }
</style>

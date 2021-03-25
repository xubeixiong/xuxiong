<template>
  <div class="title_name">{{name1}} > <span style="  color: #157AF7;">{{name2}}</span></div>
</template>
<script>
  export default {
    props:['name1','name2']
  }

</script>
<style lang="less" scoped>
  .title_name{
    font-size: 14px;
    margin-bottom: 20px;
  }

</style>

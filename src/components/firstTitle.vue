<template>
  <div class="title_name">{{name}}</div>
</template>
<script>
  export default {
    props:['name']
  }

</script>
<style lang="less" scoped>
  .title_name{
    font-size: 14px;
    color: #157AF7;
    margin-bottom: 20px;
  }

</style>

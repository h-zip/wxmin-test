<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <img mode="widthFix" :src="src" style="width: 100%;padding-left: 40rpx;"/>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: {
    },
    data: function () {
      return {
        title: '宝贝爱蓝天合作伙伴',
        src: '/../../../../static/images/partner.png'
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../styles/index";
  .container{
    background-color: @color-white-0;
    min-height: 100vh;
    h1{
      font-size: 20px;
      line-height: 60px;
      color: lighten(#000, 20%);
      text-align: center;
      font-weight: bold;
    }
  }
</style>


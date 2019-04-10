<template>
  <div class="container">
    <div class="title">{{ '联系人：' + cell.contact }}</div>
    <div class="title">{{ '联系电话：' + cell.phone }}</div>
    <div class="title">{{ '收件地址：' + cell.receiver }}</div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'cell'
    ],
    methods: {
      onClick1: function () {
        this.$emit('on-click1')
      },
      onClick2: function () {
        this.$emit('on-click2')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    padding: 20rpx;
    background-color: @color-white-0;
    .title {
      font-size: @font-m;
      padding: 10rpx;
    }
  }

</style>


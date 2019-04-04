<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="btn" @click="onClick">{{ btnTitle }}</div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'title',
      'btnTitle'
    ],
    methods: {
      onClick: function () {
        this.$emit('on-click')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: @color-white-0;
    padding: 20rpx;
    .title {
      display: flex;
      align-items: center;
      font-size: @font-m;
      padding-left: 30rpx;
      /*line-height: 40rpx;*/
    }
    .btn {
      display: flex;
      align-items: center;
      font-size: @font-m;
      background: @color-green-1;
      color: @color-white-0;
      padding: 10rpx 40rpx;
      border-radius: 10rpx;
    }
  }

</style>


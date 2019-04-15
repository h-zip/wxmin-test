<template>
  <div class="container">
    <div class="btn1">
      <div class="t1">{{ point }}</div>
      <div class="t2">{{ '积分' }}</div>
    </div>
    <div class="line"></div>
    <div class="btn2">
      <div class="t1">{{ level }}</div>
      <div class="t2">{{ '等级' }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'point',
      'level'
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
    width: 100%;
    border-radius: 6rpx;
    display: flex;
    align-items: center;
    align-content: space-around;
    background-color: @color-white-0;
    box-sizing: border-box;
    box-shadow:0px 0px 24rpx 0px rgba(0, 0, 0, 0.1);
    .btn1 {
      width: 50%;
      height: 160rpx;
      text-align: center;
      box-sizing: border-box;
      padding: 33rpx;
    }
    .btn2 {
      width: 50%;
      height: 160rpx;
      text-align: center;
      box-sizing: border-box;
      padding: 33rpx;
    }
    .t1 {
      font-size: @font-m + 4rpx;
      padding-bottom: 16rpx;
    }
    .t2 {
      font-size: @font-m - 2rpx;
      color: @color-gray-2;
    }
    .line {
      width: 2rpx;
      height: 94rpx;
      background-color: @color-gray-3;

    }
  }

</style>


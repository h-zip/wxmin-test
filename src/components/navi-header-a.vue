<template>
  <div class="container">
    <div class="main">{{ titles.main }}</div>
    <div class="sub">{{ titles.sub }}</div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'titles'
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
    box-sizing: border-box;
    padding: 0 30rpx;
    display: flex;
    display: -ms-inline-flexbox;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    background-color: white;
    width: 100%;
    .main {
      font-size: @font-m + 2rpx;
      font-weight: bold;
      &:before {
        content: ' ';
        border-right: 6rpx solid @color-red-2;
        margin-right: 10rpx;
      }
    }
    .sub {
      font-size: @font-m - 2rpx;
      color: @color-gray-2;
    }
  }

</style>

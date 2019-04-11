<template>
  <div class="container">
    <div class="btn1" @click="onClick(0)">{{ titles[0] }}</div>
    <div class="btn2" @click="onClick(1)">{{ titles[1] }}</div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'titles'
    ],
    methods: {
      onClick: function (i) {
        this.$emit('on-click', i)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    background-color: @color-white-0;
    border-bottom: 2rpx solid @color-gray-4;
    .btn1 {
      box-sizing: border-box;
      border-right: 2rpx solid @color-gray-4;
      font-size: @font-m;
      color: @color-black-2;
      text-align: center;
      padding: 20rpx;
      width: 50%;

    }
    .btn2 {
      box-sizing: border-box;
      font-size: @font-m;
      color: @color-black-2;
      text-align: center;
      padding: 20rpx;
      width: 50%;
    }
  }

</style>


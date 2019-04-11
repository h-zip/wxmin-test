<template>
  <div class="container">
    <div class="title"><div>{{ '参与捐赠人' }}</div></div>
    <div class="content">
      <div class="img-box" v-for="(img, index) in imgs" :key="index">
        <img class="img" :src="img" mode="widthFix" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'imgs'
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
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: @color-white-0;
    .title {
      font-size: @font-m + 2rpx;
      padding: 40rpx 0 0 20rpx;
      font-weight: bold;
    }
    .content {
      width: 100%;
      display: inline-block;
      white-space:nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      .img-box {
        box-sizing: border-box;
        width: 20%;
        padding: 20rpx;
        display: inline-block;
        .img {
          background-color: @color-gray-0;
          border-radius: 50%;
          width:100%;
          border-bottom: 2rpx solid @color-gray-0;
        }
      }
    }
  }

</style>


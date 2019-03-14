<template>
  <div class="container">
    <van-row custom-class="row">
      <van-col span="12" custom-class="col-1">
        <van-button type="default" custom-class="btn1" @click="onClick1">{{ btnTitle1 }}</van-button>
      </van-col>
      <van-col span="12" custom-class="col-2">
        <van-button type="default" custom-class="btn2" @click="onClick2">{{ btnTitle2 }}</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'btnTitle1',
      'btnTitle2'
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
    .title{
      font-size: 28rpx;
      padding-left: 30rpx;
      width: 180rpx;
      /*line-height: 40rpx;*/
    }
    /deep/ .row{
      background: transparent;
    }
    /deep/ .col-1{
      /*padding-top: 34rpx;*/
      padding: 30rpx;
    }
    /deep/ .col-2{
      /*padding: 34rpx 0rpx 34rpx 30rpx;*/
      padding: 30rpx;
    }
    /deep/ .btn1{
      background: @color-white-0;
      color: @color-black-1;
      width: 100%;
    }
    /deep/ .btn2{
      background: @color-green-1;
      color: @color-white-0;
      width: 100%;
    }
  }

</style>


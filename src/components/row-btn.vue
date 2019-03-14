<template>
  <div class="container">
    <van-row custom-class="row">
      <van-col span="6" custom-class="col-t">
        <div class="title">{{ title }}</div>
      </van-col>
      <van-col span="18" custom-class="col-b">
        <van-button type="default" custom-class="btn" @click="onClick">{{ btnTitle }}</van-button>
      </van-col>
    </van-row>
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
    .title{
      font-size: 28rpx;
      padding-left: 30rpx;
      width: 180rpx;
      /*line-height: 40rpx;*/
    }
    /deep/ .row{
      background: @color-white-0;
      border-bottom: 1px solid @color-gray-0;
    }
    /deep/ .col-t{
      padding-top: 34rpx;
    }
    /deep/ .col-b{
      padding: 34rpx 0rpx 34rpx 30rpx;
    }
    /deep/ .btn{
      background: @color-green-1;
      color: @color-white-0;
    }
  }

</style>


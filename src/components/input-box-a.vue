<template>
  <div class="container">
    <van-row custom-class="row">
      <van-col span="6" custom-class="col col1">
        {{ title }}
      </van-col>
      <van-col span="18" custom-class="col">
        <van-field :value="value" :placeholder="placeholder" @blur="onChange" input-class="i1" custom-style="padding:0 30rpx;height:100rpx;line-height:100rpx;" ></van-field>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'title',
      'placeholder',
      'value'
    ],
    methods: {
      onChange: function (v) {
        this.$emit('on-change', v)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    padding: 16rpx 40rpx;
    /deep/ .i1 {
      font-size: @font-m;
      height: 100rpx;
    }
    /deep/ .row {
      height: 100rpx;
      border: @color-gray-0 2rpx solid;
      border-radius: 10rpx;
      background-color: @color-white-0;
      font-size: @font-m;
      color: @color-gray-2;
    }
    /deep/ .col {
      height: 100%;
      line-height: 100rpx;
    }
    /deep/ .col1 {
      background-color: @color-gray-1;
      text-align: center;
    }
  }

</style>


<template>
  <div class="container">
    <van-row custom-class="">
      <van-col span="12" custom-class="col2">
        <van-checkbox :value="value" @change="onChange" shape="square" :checked-color="checkColor" wrap-class="checkbox-icon" label-class="checkbox-label">{{ label1 }}</van-checkbox>
      </van-col>
      <van-col span="12" custom-class="col3">
        <div style="color: #FFFFFF;font-size: 28rpx;padding-top: 4rpx;" @click="onClick">{{ label2 }}</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'label1',
      'label2',
      'checkColor',
      'value'
    ],
    methods: {
      onChange: function (v) {
        this.$emit('on-change', v)
      },
      onClick: function () {
        this.$emit('on-click')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    padding: 16rpx 40rpx;
    /deep/ .col2 {
      height: 100%;
      line-height: 60rpx;
    }
    /deep/ .col3 {
      height: 100%;
      line-height: 60rpx;
      margin-left: -20rpx;
    }
    /deep/ .checkbox-label {
      font-size: @font-m;
      color: @color-white-0;
    }
    /deep/ .checkbox-icon {
      background: @color-white-0;
    }
  }

</style>


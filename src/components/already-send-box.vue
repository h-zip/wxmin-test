<template>
  <div class="container">
    <div class="row">
      <div class="text">
        {{ '我已寄出' }}
      </div>
      <div class="box">
        <van-field
          :value="data.count"
          customStyle="width: 48rpx;padding: 0 0 0 16rpx;"
          maxlength="1"
          type="number"
          @blur="onCountChange"/>
      </div>
      <div class="text">
        {{ '个包裹' }}
      </div>
    </div>
    <div class="row">
      <div class="text-2">{{ '快递单号填写' }}</div>
    </div>
    <div class="row" v-for="(send, index) in data.list" :key="index">
      <van-field
        :name="index"
        :label="index +1"
        :border="false"
        placeholder="请输入快递单号"
        :value="send"
        customStyle="border:2rpx solid #dedede;padding: 10rpx 30rpx;"
        type="number"
        @blur="onOrderChange"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    components: {
    },
    props: [
      'data'
    ],
    computed: {
    },
    data: function () {
      return {
      }
    },
    methods: {
      onClick: function (i) {
        this.$emit('on-click', i)
      },
      onCountChange: function (v) {
        this.$emit('on-count-change', v)
      },
      onOrderChange: function (v) {
        this.$emit('on-order-change', v)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    border-radius: 12rpx;
    box-sizing: border-box;
    margin-bottom: 40rpx;
    padding: 30rpx;
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        font-size: @font-m;
        color: @color-black-2;
      }
      .text-2 {
        font-size: @font-m + 2rpx;
        color: @color-black-1;
        padding: 20rpx 0;
      }
      .box {
        border:2rpx solid @color-gray-2;
        margin: 0 10rpx;
      }
    }
  }
</style>


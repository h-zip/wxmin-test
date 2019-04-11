<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <div class="icon-r">{{ '收' }}</div>
        <div class="l1">{{ '收件人：' }}</div>
        <div class="l2">{{ '宝贝爱蓝天小助手' }}</div>
        <div class="l3">{{ '15021414581' }}</div>
      </div>
    </div>
    <div class="row2">{{ '上海市长宁区镇宁路465弄184号103室' }}</div>
  </div>
</template>

<script>
  import donateOrderCell from '@/components/donate-order-cell'
  export default {
    name: 'textarea-a',
    components: {
      'donate-order-cell': donateOrderCell
    },
    props: [
    ],
    computed: {
    },
    data: function () {
      return {
        iconSrc: '/static/images/info.png'
      }
    },
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
    width: 100%;
    background-color: @color-white-0;
    border-radius: 12rpx;
    box-sizing: border-box;
    margin-bottom: 40rpx;
    padding: 30rpx;
    .title {
      font-size: @font-m;
      padding: 20rpx 0 0 0;
      color: @color-black-2;
      .title-g {
        color: @color-green-0;
        padding: 0 20rpx;
      }
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-r {
        width: 40rpx;
        height: 40rox;
        border-radius: 50%;
        border:4rpx solid @color-gray-1;
        font-size: @font-m;
        text-align: center;
        padding: 6rpx;

      }
      .l1 {
        color: @color-black-2;
        font-size: @font-m;
        padding-left: 20rpx;
      }
      .l2 {
        color: @color-black-2;
        font-weight: bold;
        font-size: @font-m;
      }
      .l3 {
        color: @color-gray-2;
        font-size: @font-m;
        padding-left: 20rpx;
      }
    }
    .row2 {
      text-align: center;
      color: @color-black-2;
      font-size: @font-m;
    }
  }
</style>


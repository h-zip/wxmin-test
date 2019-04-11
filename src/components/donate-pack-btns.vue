<template>
  <div class="container">
    <div class="title"><div>{{ '确认衣物已经消毒清洗' }}</div></div>
    <div class="row">
      <div class="btn1" @click="onClick(0)">{{ '暂不发货' }}</div>
      <div class="btn2" @click="onClick(1)">{{ '一起发货' }}</div>
    </div>
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
    .title {
      font-size: @font-m;
      padding: 20rpx 0 0 80rpx;
      color: @color-black-2;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx;
      .btn1 {
        font-size: @font-m;
        color: @color-white-0;
        width: 50%;
        background-color: @color-green-0;
        padding: 10rpx;
        margin-right: 40rpx;
        text-align: center;
        border-radius: 6rpx;
      }
      .btn2 {
        font-size: @font-m;
        color: @color-white-0;
        width: 50%;
        background-color: @color-red-2;
        padding: 10rpx;
        text-align: center;
        border-radius: 6rpx;
      }
    }
  }
</style>


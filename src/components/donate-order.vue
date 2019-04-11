<template>
  <div class="container">
    <div class="title"><div>{{ '认捐订单' + (row + 1) }}</div></div>
    <div class="title"><div>{{ data.title }}</div></div>
    <donate-order-cell :cell="cell" :row="index" v-for="(cell, index) in data.donateList" :key="index"></donate-order-cell>
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
      'row',
      'data'
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
    padding-bottom: 20rpx;
    .title {
      font-size: @font-m;
      padding: 20rpx 0 0 80rpx;
    }
  }
</style>


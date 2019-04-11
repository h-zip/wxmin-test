<template>
  <div class="container">
    <div class="title"><div>{{ '衣物缺口' }}</div></div>
    <donate-demand-cell :cell="cell" :row="index" v-for="(cell, index) in data.demandList" :key="index" @on-change="onChange" ></donate-demand-cell>
    <div class="row">
      <div class="btn1" @click="onClick(0)">{{ '放入购物车' }}</div>
      <div class="btn2" @click="onClick(1)">{{ '立即捐赠' }}</div>
    </div>
  </div>
</template>

<script>
  import donateDemandCell from '@/components/donate-demand-cell'
  export default {
    name: 'textarea-a',
    components: {
      'donate-demand-cell': donateDemandCell
    },
    props: [
      'data'
    ],
    computed: {
    },
    methods: {
      onChange: function (index, e) {
        this.$emit('on-change', index, e)
      },
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
    .title {
      font-size: @font-m + 2rpx;
      padding: 40rpx 0 0 20rpx;
      font-weight: bold;
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


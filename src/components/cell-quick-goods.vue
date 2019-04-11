<template>
  <div class="container" :class="{border: row === 0}">
    <div class="content">
      <div class="l1">{{ '类别：' + cell.category }}</div>
      <div class="l2">{{ '名称：' + cell.name }}</div>
    </div>
    <div class="count_title">{{ '数量：' }}</div>
    <div class="count_input">
      <van-input-number :value="cell.donate" :max="99" :min="0" @change="onChange"></van-input-number>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'cell',
      'row'
    ],
    computed: {
    },
    methods: {
      onChange: function (e) {
        this.$emit('on-change', e, this.row)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    font-size: @font-m;
    background-color: @color-white-0;
    border-bottom: 2rpx solid @color-gray-0;
    padding: 20rpx;
    .l1 {
      padding: 10rpx 0;
    }
    .l2 {
      padding: 10rpx 0;
    }
    .count_title {
      display: inline-block;
    }
    .count_input {
      display: inline-block;
    }
  }
  .border {
    border-top: 2rpx solid @color-gray-0;
  }
</style>


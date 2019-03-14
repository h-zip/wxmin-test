<template>
  <div class="container">
    <div class="row">性别:<div class="col">{{ item.a }}</div></div>
    <div class="row">季节:<div class="col">{{ item.b }}</div></div>
    <div class="row">身高:<div class="col">{{ item.c }}</div></div>
    <div class="row">
      数量:
      <div class="col">
        <van-input-number :value="item.d" :max="99" :min="1" @change="onChange"></van-input-number>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'item-card',
    props: [
      'item',
      'index'
    ],
    methods: {
      onChange: function (v) {
        this.$emit('on-change', v, this.index)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    background: @color-white-0;
    padding-left: 30rpx;
    font-size: @font-m;
    border-bottom: 1px solid @color-gray-0;
  }
  .row{
    padding: 10rpx 0;
  }
  .col{
    display: inline-block;
    padding-left: 30rpx;
  }

</style>

<template>
  <div class="container">
    <div class="title"><div>{{ '捐衣反馈' }}</div></div>
    <img class="img" mode="widthFix" :src="data.feedback"/>
    <div class="poster">{{ '生成海报' }}</div>
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
      onClick2: function () {
        this.$emit('on-click2')
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
      font-weight: bold;
      padding: 40rpx 0 0 20rpx;
    }
    .img {
      padding: 40rpx 40rpx 20rpx 40rpx;
      width: calc(~"(100% - 80rpx)");
    }
    .poster {
      text-align: center;
      font-size: @font-m;
      color: @color-black-2;
      padding-bottom: 40rpx;
    }
  }

</style>


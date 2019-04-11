<template>
  <div class="container">
    <div class="row">
      <img class="icon-i" mode="widthFix" :src="iconSrc" />
      <div class="title">{{ '打包须知：' }}</div>
    </div>
    <div class="title">{{ '1   请按照' }}<span class="title-g">{{ '捐赠编号' }}</span>{{ '分别包装衣物' }}</div>
    <div class="title">{{ '2   请在包裹内放置你的电话号码信息。' }}</div>
    <div class="title">{{ '你的用心能帮助爱心志愿者更快完成质检，并把衣服送到受理人手里' }}</div>
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
      justify-content: flex-start;
      align-items: center;
      .icon-i {
        width: 30rpx;
        padding-top: 20rpx;
        padding-right: 20rpx;
      }
    }
  }
</style>


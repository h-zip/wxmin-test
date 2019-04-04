<template>
  <div class="container">
    <div class="img-box">
      <img class="img" mode="widthFix" :src="src" />
    </div>
    <div class="content" @click="onContent">
      <div class="l1">{{ text1 }}</div>
      <div class="l2">{{ text2 }}</div>
    </div>
    <div class="btn" @click="onBtn">{{ btnText }}</div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'count'
    ],
    computed: {
      src: function () {
        return this.count ? this.src2 : this.src1
      },
      text1: function () {
        return this.count ? '已选中 ' + this.count + ' 件衣物' : '快选想捐的衣服吧'
      },
      text2: function () {
        return this.count ? '戳我查看/修改选中的衣物' : '已捐满的类型不在此显示'
      },
      btnText: function () {
        return this.count ? '去捐赠' : '怎么选'
      }
    },
    data: function () {
      return {
        src1: '/static/images/hudie.png',
        src2: '/static/images/hudie_baise.png'
      }
    },
    methods: {
      onClear: function () {
        this.$emit('on-clear')
      },
      onBtn: function () {
        this.$emit('on-btn')
      },
      onContent: function () {
        this.$emit('on-content')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    z-index: 100;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: @color-green-0;
    font-size: @font-m;
    color: @color-white-0;
    .img-box {
      position: relative;
      padding: 14rpx;
      background-color: @color-green-1;
      border-radius: 50%;
      margin: 0 20rpx;
      top: -10rpx;
      .img {
        width: 60rpx;
        margin: auto;
        display: block;
      }
    }
    .content {
      flex: auto;
      font-size: @font-m - 2rpx;
    }
    .btn {
      background-color: @color-green-1;
      color: @color-white-0;
      font-size: @font-m;
      padding: 0 40rpx;
      line-height: 88rpx;
      height: 100%;
    }
  }

</style>


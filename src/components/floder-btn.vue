<template>
  <div class="container" @click="onClick">
    <div class="floder">
      <van-icon :custom-class="flodered ? 'iconfont icon-arrowdown' : 'iconfont icon-arrowup'" />
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'title',
      'flodered'
    ],
    methods: {
      onClick: function () {
        this.$emit('on-click')
      },
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
    box-sizing: border-box;
    .floder {
      box-sizing: border-box;
      width: 100%;
      padding: 20rpx;
      text-align: center;
      font-size: @font-m;
      color: @color-gray-2;
    }
  }

</style>


<template>
  <div class="container">
    <div class="clear" @click="onClear">
      <van-icon custom-class="iconfont icon-delete" />
      {{ btnTitle }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'btnTitle'
    ],
    methods: {
      onClear: function () {
        this.$emit('on-clear')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: @color-green-0;
    font-size: @font-m;
    color: @color-white-0;
    .clear {
      padding: 10rpx 20rpx 10rpx 0;
    }
  }

</style>


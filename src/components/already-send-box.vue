<template>
  <div class="container">
    <div class="row">
      <div class="text">
        {{ '我已寄出' }}
      </div>
      <div class="box">
        <van-field
          :value="data.count"
          customStyle="width: 48rpx;padding: 0;"
          maxlength="2"
          type="number"/>
      </div>
      <div class="text">
        {{ '个包裹' }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    components: {
    },
    props: [
      'data'
    ],
    computed: {
    },
    data: function () {
      return {
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
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        font-size: @font-m;
        color: @color-black-2;
      }
      .box {
        border:4rpx solid @color-gray-2;
        margin: 0 10rpx;
      }
    }
  }
</style>


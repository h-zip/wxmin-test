<template>
  <div class="container">
    <div class="num" v-for="(num, index) in nums" :key="index">
      {{ num }}
    </div>
    <div class="words">
      {{ words }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'nums',
      'words'
    ],
    methods: {
      onClick1: function () {
        this.$emit('on-click1')
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
    text-align: center;
    .num {
      display: inline-block;
      border:2rpx solid @color-red-1;
      color: @color-red-2;
      font-weight: bold;
      font-size: @font-l;
      padding: 0 6rpx 0 6rpx;
      margin-right: 6rpx;
    }
    .words {
      display: inline-block;
      font-size: @font-m;
      color: @color-gray-2;
    }
  }

</style>


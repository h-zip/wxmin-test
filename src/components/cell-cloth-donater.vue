<template>
  <div class="container">
    <div class="p1">
      <img v-if="row < 3" class="icon" mode="widthFix" :src="iconSrc"/>
      <div v-else class="icon">{{ row + 1 }}</div>
      <img class="header" mode="widthFix" :src="cell.header"/>
      <div class="name">{{ cell.name }}</div>
    </div>
    <div class="point">{{ cell.point + '分' }}</div>
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
      iconSrc: function () {
        let c = ''
        if (this.row === 0) {
          c = '/static/images/au.png'
        } else if (this.row === 1) {
          c = '/static/images/ag.png'
        } else {
          c = '/static/images/cu.png'
        }
        return c
      }
    },
    methods: {
      onChange: function (e) {
        this.$emit('on-change', e, this.section, this.row)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10rpx 0;
    background-color: @color-white-0;
    font-size: @font-m;
    // border-bottom: 2rpx solid @color-gray-0;
    .p1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon {
        margin: 0 20rpx 0 20rpx;
        width: 60rpx;
        height: 60rpx;
        text-align: center;
        line-height: 60rpx;
        color: @color-green-0;
      }
      .header {
        margin: 0 20rpx 0 0;
        border-radius: 50%;
        width: 100rpx;
        height: 100rpx;
        background-color: @color-gray-0;
      }
      .name {
        margin: 0 20rpx 0 0;
      }
    }
    .point {
      padding-right: 40rpx;
    }
  }

</style>



<template>
  <div class="text" :style="{lineHeight: lineHeight}">
    <div class="row">
      这些年
    </div>
    <div class="row">
      <span v-if="info.realname" style="margin-left: -20rpx;">{{info.realname}}</span><span v-else>你</span>精准捐赠了<span class="b">{{ info.donateNumber }}</span>件衣物
    </div>
    <div class="row">
      帮助了<span class="b">{{ info.matchCount }}</span>位受助人
    </div>
    <div class="row">
      你的爱心覆盖了<span class="b">{{ info.areaCount }}</span>个受助地
    </div>
    <div class="row">
      雁过长空 不留痕迹
    </div>
    <div class="row">
      爱心的种子定在远方生根发芽
    </div>
  </div>
</template>

<script>
export default {
  name: 'summary-txt',
  props: {
    info: Object,
    lineHeight: {
      type: String,
      default: '52rpx'
    }
  }
}
</script>

<style lang="less" scoped>
.text {
  position: relative;
  top: 20rpx;
  margin: 0 60rpx;
  line-height: 52rpx;
  .row {
    position: relative;
    font-size: 28rpx;
    text-align: left;
    color: #636363;
    .b {
      color: #fe74af;
      padding: 0 20rpx;
      font-weight: bold;
    }
  }
}
</style>

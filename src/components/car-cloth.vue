<template>
  <div class="container">
    <van-popup
      :show="show"
      position="bottom"
      :overlay="true"
      @close="onDrawer"
      custom-class="pop"
      @click-overlay="onDrawer">
      <car-cloth-header btn-title="清空" @on-clear="onClear"></car-cloth-header>
      <car-cloth-cell :row="index" :cell="item" v-for="(item, index) in items" :key="index" @on-change="onPopCount"></car-cloth-cell>
    </van-popup>
  </div>
</template>

<script>
  import carClothHeader from '@/components/car-cloth-header'
  import carClothCell from '@/components/car-cloth-cell'
  export default {
    name: 'textarea-a',
    components: {
      'car-cloth-header': carClothHeader,
      'car-cloth-cell': carClothCell
    },
    props: [
      'show',
      'items'
    ],
    methods: {
      onDrawer: function () {
        this.$emit('on-drawer')
      },
      onClear: function () {
        this.$emit('on-clear')
      },
      onPopCount: function (e, index) {
        this.$emit('on-pop-count', e, index)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    /deep/ .pop{
      width: 100%;
      max-height: 50%;
    }
    .pop-t{
      font-size: @font-m + 4rpx;
      padding: 10rpx 0 10rpx 40rpx;
      background-color: @color-gray-1;
    }
    .pop-c{
      padding: 40rpx 0 40rpx 40rpx;
    }
  }
</style>


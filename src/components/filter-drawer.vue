<template>
  <div class="container">
    <van-popup
      :show="show"
      position="right"
      :overlay="true"
      @close="onDrawer"
      custom-class="pop"
      @click-overlay="onDrawer"
    >
      <div>
        <div class="pop-t">衣物</div>
        <flex-item :items="items1"></flex-item>
        <div class="pop-t">季节</div>
        <flex-item :items="items2"></flex-item>
        <div class="pop-t">身高</div>
        <flex-item :items="items3"></flex-item>
        <div class="pop-t">数量</div>
        <div class="pop-c">
          <van-input-number :value="popCount" :max="99" :min="1" @change="onPopCount"></van-input-number>
        </div>
        <btn-two btn-title1="取消" btn-title2="确认" @on-click1="onDrawer" @on-click2="onDrawer"></btn-two>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import flexItem from '@/components/flex-item'
  import btnTwo from '@/components/btn-two'
  export default {
    name: 'textarea-a',
    components: {
      'flex-item': flexItem,
      'btn-two': btnTwo
    },
    props: [
      'show',
      'items1',
      'items2',
      'items3',
      'popCount'
    ],
    methods: {
      onDrawer: function () {
        this.$emit('on-drawer')
      },
      onClick1: function () {
        console.log(11111)
      },
      onPopCount: function (e) {
        this.$emit('on-pop-count', e)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    /deep/ .pop{
      width: 85%;
      min-height: 100%;
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


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
        <div v-for="(item, index) in items" :key="index">
          <div class="pop-t">{{ item.title }}</div>
          <flex-item :items="item.opts" :index="index" :selected-index="optIndexs[index]" @on-selected="onSelected"></flex-item>
        </div>
        <div v-if="needCount">
          <div class="pop-t">数量</div>
          <div class="pop-c">
            <van-input-number :value="popCount" :max="99" :min="1" @change="onPopCount"></van-input-number>
          </div>
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
      'items',
      'popCount',
      'needCount',
      'optIndexs'
    ],
    methods: {
      onDrawer: function () {
        this.$emit('on-drawer')
      },
      onSelected: function (section, index) {
        this.$emit('on-selected', section, index)
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


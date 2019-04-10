<template>
  <div class="container">
    <div class="btn-box">
      <div :class="btnClasses[index]"
           :style="index !== filterIndex ? {width: 'calc((100% - 50rpx)/' + optIndexs.length + ')',color: unSelectedColor} : {width: 'calc((100% - 50rpx)/' + optIndexs.length + ')',color: selectedColor}"
           v-for="(item, index) in opts" :key="index" @click="onFilter(index, item)">
        {{ opts[index].title }}
        <van-icon :custom-class="index !== filterIndex ? 'iconfont icon-arrowdown' : 'iconfont icon-arrowup'" />
      </div>
      <img :src="filterSrc" mode='widthFix' class="filter" @click="onMultiple" />
    </div>
    <div class="opt-box" v-if="filterIndex !== -1">
      <div class="opt-l" :style="{color: selectedColor}">
        <div class="opt-l-opt">
          {{ opts[filterIndex].title }}
        </div>
      </div>
      <div class="opt-r">
        <div class="opt" :style="{color: optIndexs[filterIndex] !== index ?  unSelectedColor : selectedColor}"
             v-for="(item, index) in opts[filterIndex].opts" :key="index" @click="onOpt(index, item)">
          {{ item.name }}
        </div>
      </div>
      <div class="opt-lb">
        <div class="opt-btn-l" @click="onReset" :style="{color: unSelectedColor}">
          {{ '清空' }}
        </div>
      </div>
      <div class="opt-rb">
        <div class="opt-btn-r" @click="onConfirm">
          {{ '确认' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'titles',
      'selectedColor',
      'unSelectedColor',
      'filterIndex',
      'opts',
      'optIndexs'
    ],
    watch: {
      filterIndex: function (v, o) {
        this.btnClasses[o] = 'btn'
        this.btnClasses[v] = 'btn btn_selected'
      }
    },
    computed: {
    },
    data: function () {
      return {
        btnClasses: [],
        filterSrc: '/static/images/filter.png'
      }
    },
    mounted: function () {
      let a = []
      this.opts.forEach((v, i) => {
        if (i === this.filterIndex) {
          a.push('btn btn_selected')
        } else {
          a.push('btn')
        }
      })
      this.btnClasses = a
    },
    methods: {
      onFilter: function (index, item) {
        this.$emit('on-filter', index)
      },
      onOpt: function (index, item) {
        this.$emit('on-opt', this.filterIndex, index)
      },
      onMultiple: function () {
        this.$emit('on-multiple')
      },
      onReset: function () {
        this.$emit('on-reset', this.filterIndex)
      },
      onConfirm: function () {
        this.$emit('on-confirm')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    box-sizing: border-box;
    position: sticky;
    position: -webkit-sticky;
    top: 112rpx;
    z-index: 99;
    .btn-box {
      display: flex;
      display: -ms-inline-flexbox;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      background-color: white;
      width: 100%;
      .btn {
        font-size: @font-m;
        text-align: center;
        padding-top: 16rpx;
        padding-bottom: 16rpx;
        &_selected {
        }
      }
      .filter {
        width: 40rpx;
      }
    }
    .opt-box {
      position: absolute;
      z-index: 99;
      width: 100%;
      display: flex;
      display: -ms-inline-flexbox;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-content: flex-start;
      background-color: @color-white-0;
      border-bottom: 2rpx solid @color-gray-4;
      .opt-r {
        box-sizing: border-box;
        width: 70%;
        height: 400rpx;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        border-bottom: 2rpx solid @color-gray-4;
        background: @color-gray-1;
        .opt {
          box-sizing: border-box;
          width: 100%;
          font-size: @font-m;
          padding: 10rpx  0rpx  10rpx  20rpx;
          border-bottom: 2rpx solid @color-gray-4;
        }
      }
      .opt-l {
        box-sizing: border-box;
        width: 30%;
        height: 400rpx;
        border-bottom: 2rpx solid @color-gray-4;
        .opt-l-opt {
          box-sizing: border-box;
          width: 100%;
          padding: 10rpx  0rpx  10rpx  20rpx;
          font-size: @font-m;
          border-bottom: 2rpx solid @color-gray-4;
        }
      }
      .opt-lb {
        box-sizing: border-box;
        width: 50%;
        font-size: @font-m;
        padding: 20rpx 15rpx 20rpx 30rpx;
        .opt-btn-l {
          text-align: center;
          padding: 15rpx;
          background-color: @color-white-0;
          border-radius: 12rpx;
          border:  2rpx solid @color-gray-0;

        }
      }
      .opt-rb {
        box-sizing: border-box;
        width: 50%;
        font-size: @font-m;
        padding: 20rpx 30rpx 20rpx 15rpx;
        .opt-btn-r {
          text-align: center;
          padding: 15rpx;
          background-color: @color-green-1;
          color: @color-white-0;
          border-radius: 12rpx;
          border:  2rpx solid @color-green-1;
        }
      }
    }
  }

</style>



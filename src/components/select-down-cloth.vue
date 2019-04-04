<template>
  <div class="container">
    <div :class="filterClass0" @click="onFilter(0)">
      {{ titles[0] }}
      <div class="line" v-if="filterIndex === 0"></div>
    </div>
    <div :class="filterClass1" @click="onFilter(1)">
      {{ titles[1] }}
      <van-icon :custom-class="filterIndex === 0 || !optShow ? 'iconfont icon-arrowdown' : 'iconfont icon-arrowup'" />
      <div class="line" v-if="filterIndex === 1"></div>
    </div>
    <div class="mask" v-if="filterIndex === 1 && optShow" @click="onMask"></div>
    <div class="opt" v-if="filterIndex === 1 && optShow">
      <div class="opt_header">性别</div>
      <div :class="!optIndexs[0][0] ? 'opt_cell' : 'opt_cell opt_cell_selected'" @click="onOpt(0,0)">
        <van-icon custom-class="opt_icon iconfont icon-boy color_boy" />
        <div class="opt_text">男</div>
        <van-icon v-if="optIndexs[0][0]" custom-class="opt_icon iconfont icon-right" />
      </div>
      <div :class="!optIndexs[0][1] ? 'opt_cell' : 'opt_cell opt_cell_selected'" @click="onOpt(0,1)">
        <van-icon custom-class="opt_icon iconfont icon-girl color_girl" />
        <div class="opt_text">女</div>
        <van-icon v-if="optIndexs[0][1]" custom-class="opt_icon iconfont icon-right" />
      </div>
      <div class="opt_header">季节</div>
      <div :class="!optIndexs[1][0] ? 'opt_cell' : 'opt_cell opt_cell_selected'" @click="onOpt(1,0)">
        <van-icon custom-class="opt_icon iconfont icon-sun color_sun" />
        <div class="opt_text">夏</div>
        <van-icon v-if="optIndexs[1][0]" custom-class="opt_icon iconfont icon-right" />
      </div>
      <div :class="!optIndexs[1][1] ? 'opt_cell' : 'opt_cell opt_cell_selected'" @click="onOpt(1,1)">
        <van-icon custom-class="opt_icon iconfont icon-cloud color_cloud" />
        <div class="opt_text">春秋</div>
        <van-icon v-if="optIndexs[1][1]" custom-class="opt_icon iconfont icon-right" />
      </div>
      <div :class="!optIndexs[1][2] ? 'opt_cell' : 'opt_cell opt_cell_selected'" @click="onOpt(1,2)">
        <van-icon custom-class="opt_icon iconfont icon-snow color_snow" />
        <div class="opt_text">冬</div>
        <van-icon v-if="optIndexs[1][2]" custom-class="opt_icon iconfont icon-right" />
      </div>
      <div class="opt_btns">
        <div class="opt_btn1" @click="onReset">重选</div>
        <div class="opt_btn2" @click="onOK">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'filterIndex',
      'opts',
      'optIndexs'
    ],
    watch: {
      filterIndex: function (v, o) {
        if (v === 0) {
          this.filterClass0 = 'all f_selected'
          this.filterClass1 = 'filter'
        } else {
          this.filterClass0 = 'all'
          this.filterClass1 = 'filter f_selected'
        }
      }
    },
    computed: {
    },
    data: function () {
      return {
        filterClass0: 'all f_selected',
        filterClass1: 'filter',
        titles: ['全部', '筛选'],
        optShow: false
      }
    },
    mounted: function () {
    },
    methods: {
      onFilter: function (index, item) {
        if (index === 1) {
          this.optShow = !this.optShow
        } else {
          this.optShow = false
        }
        this.$emit('on-filter', index)
      },
      onOpt: function (section, row) {
        this.$emit('on-opt', section, row)
      },
      onReset: function () {
        this.$emit('on-reset')
      },
      onOK: function () {
        this.optShow = false
        this.$emit('on-ok')
      },
      onMask: function () {
        this.optShow = !this.optShow
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    position: relative;
    width: 100%;
    box-sizing: border-box;
    font-size: 0;
    background-color: @color-white-0;
    .mask {
      position: absolute;
      height: calc(~"(100vh - 80rpx)");
      top: 80rpx;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,.4);
      z-index: 19;
    }
    .line {
      position: absolute;
      height: 4rpx;
      background-color: @color-green-1;
      left: 80rpx;
      right: 80rpx;
      bottom: 4rpx;
    }
    .all {
      position: relative;
      box-sizing: border-box;
      text-align: center;
      font-size: @font-m;
      display: inline-block;
      width: 50%;
      border-right: 2rpx solid @color-gray-0;
      padding: 20rpx 0;
      color: @color-black-1;
      border-bottom: 2rpx solid @color-gray-0;
    }
    .filter {
      position: relative;
      box-sizing: border-box;
      text-align: center;
      font-size: @font-m;
      display: inline-block;
      width: 50%;
      padding: 20rpx 0;
      color: @color-black-1;
      border-bottom: 2rpx solid @color-gray-0;
    }
    .f_selected {
      color: @color-green-1;
    }
    .opt {
      position: absolute;
      width: 50%;
      right: 0;
      background-color: @color-white-0;
      z-index: 20;
      .opt_header {
        text-align: center;
        font-size: @font-m + 2rpx;
        color: @color-gray-2;
        padding: 20rpx 0;
      }
      .opt_cell {
        font-size: @font-m + 2rpx;
        color: @color-black-1;
        padding: 20rpx 60rpx;
        .opt_text {
          display: inline-block;
          padding-left: 60rpx;
          color: inherit;
        }
        /deep/.opt_icon {
          vertical-align: inherit !important;
        }
        /deep/.color_sun {
          color: @color-sun;
        }
        /deep/.color_cloud {
          color: @color-cloud;
        }
        /deep/.color_snow {
          color: @color-snow;
        }
        /deep/.color_boy {
          color: @color-boy;
        }
        /deep/.color_girl {
          color: @color-girl;
        }
      }
      .opt_cell_selected {
        color: @color-green-1;
      }
      .opt_btns {
        font-size: 0;
        .opt_btn1 {
          text-align: center;
          box-sizing: border-box;
          width: calc(~"(100% - 90rpx) / 2");
          display: inline-block;
          margin: 20rpx 15rpx 20rpx 30rpx;
          font-size: @font-m;
          color: @color-green-1;
          background-color: @color-white-0;
          border-radius: 10rpx;
          border:4rpx solid @color-green-1;
        }
        .opt_btn2 {
          text-align: center;
          box-sizing: border-box;
          width: calc(~"(100% - 90rpx) / 2");
          display: inline-block;
          margin: 20rpx 30rpx 20rpx 15rpx;
          font-size: @font-m;
          color: @color-white-0;
          background-color: @color-green-1;
          border-radius: 10rpx;
          border:4rpx solid @color-green-1;
        }
      }
    }
  }

</style>

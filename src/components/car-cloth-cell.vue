<template>
  <div class="container">
    <van-icon :custom-class="iconClass" size="50rpx" />
    <div class="content">
      <div class="l1">{{ cell.sizeHeight + '      ' + sexName + '      ' + seasonName }}</div>
    </div>
    <div class="count">
      <van-input-number :value="cell.donate" :max="cell.needs" :min="0" @change="onChange"></van-input-number>
    </div>
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
      iconClass: function () {
        let c = ''
        if (this.cell.season === '0') {
          c = 'iconfont icon-sun cell_icon color_sun'
        } else if (this.cell.season === '1') {
          c = 'iconfont icon-cloud cell_icon color_cloud'
        } else {
          c = 'iconfont icon-snow cell_icon color_snow'
        }
        return c
      },
      seasonName: function () {
        let c = ''
        if (this.cell.season === '0') {
          c = '夏装'
        } else if (this.cell.season === '1') {
          c = '冬装'
        } else {
          c = '春秋装'
        }
        return c
      },
      sexName: function () {
        let c = ''
        if (this.cell.sex === '0') {
          c = '男'
        } else {
          c = '女'
        }
        return c
      }
    },
    methods: {
      onChange: function (e) {
        this.$emit('on-change', e, this.row)
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
    border-bottom: 2rpx solid @color-gray-0;
    /deep/.cell_icon {
      display: flex;
      align-items: center;
      margin: 0 20rpx 0 40rpx;
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
    .content {
      font-size: @font-m;
      flex: auto;
      .l1 {
        color: @color-black-3;
      }
      .l2 {
        color: @color-gray-2;
      }
    }
    .count {
      display: flex;
      align-items: center;
      padding-right: 40rpx;
    }
  }

</style>


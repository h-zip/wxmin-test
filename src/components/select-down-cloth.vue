<template>
  <div class="container">
    <div :class="filterClass0" @click="onFilter(0)">
      {{ titles[0] }}
      <div class="line" v-if="filterIndex === 0"></div>
    </div>
    <div :class="filterClass1" @click="onFilter(1)">
      {{ titles[1] }}
      <div class="line" v-if="filterIndex === 1"></div>
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
        titles: ['全部', '筛选']
      }
    },
    mounted: function () {
    },
    methods: {
      onFilter: function (index, item) {
        console.log(123)
        this.$emit('on-filter', index)
      },
      onOpt: function (index, item) {
        this.$emit('on-opt', index)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    box-sizing: border-box;
    font-size: 0;
    background-color: @color-white-0;
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
    }
    .f_selected {
      color: @color-green-1;
    }
  }

</style>

<template>
  <div class="container">
    <div class="btn-box">
      <div :class="btnClasses[index]"
           :style="index !== filterIndex ? {width: 100 / titles.length + '%',color: unSelectedColor} : {width: 100 / titles.length + '%',color: selectedColor}"
           v-for="(item, index) in titles" :key="index" @click="onFilter(index, item)">
        {{ titles[index] }}
        <van-icon :custom-class="index !== filterIndex ? 'iconfont icon-arrowdown' : 'iconfont icon-arrowup'" />
      </div>
    </div>
    <div class="opt-box" :style="{color: unSelectedColor}" v-if="filterIndex !== -1"
         v-for="(item, index) in opts" :key="index" @click="onOpt(index, item)">
      {{ item }}
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
      'optIndex'
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
        btnClasses: []
      }
    },
    mounted: function () {
      let a = []
      this.titles.forEach((v, i) => {
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
        /*border:2rpx solid #DFDFDF;*/
        &_selected {
        }
      }
    }
    .opt-box {
      width: 100%;
      font-size: @font-m;
      padding: 10rpx  0rpx  10rpx  30rpx;
      background: @color-white-0;
      border-bottom: 2rpx solid #DFDFDF;
    }
  }

</style>



<template>
  <div class="row">
    <div :class="classes[0]" @click="onSelected(0)">
      <img :src=imgs[0] class="img" mode="widthFix"/>
      <div class="box">
        <div class="title">{{ titles[0] }}</div>
      </div>
    </div>
    <div class="line"></div>
    <div :class="classes[1]" @click="onSelected(1)">
      <img :src=imgs[1] class="img" mode="widthFix"/>
      <div class="box">
        <div class="title">{{ titles[1] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    props: {
      titles: Array,
      imgs: Array
    },
    data: function () {
      return {
        selectedIndex: -1
      }
    },
    computed: {
      classes: function () {
        let classes = []
        this.titles.forEach((v, i) => {
          this.selectedIndex === i ? classes[i] = 'col col_selected' : classes[i] = 'col'
        })
        return classes
      }
    },
    methods: {
      onSelected: function (val) {
        this.selectedIndex = val
        this.$emit('on-selected', val)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .row {
    background-color: white;
    border-radius: 20rpx;
    padding: 20rpx 0;
    height: calc(~"(100% - 40rpx)");
    font-size: 0;
    color: #333333;
    .col {
      display: inline-block;
      vertical-align:top;
      height: calc(~"(100%)");
      width: calc(~"(100% - 2rpx) / 2");
      &_selected {
        color: @color-green-1;
      }
      img {
        display: block;
        margin: 0 auto;
        width: 25%;
      }
      .box {
        height: calc(~"(33%)");
        font-size: 28rpx;
        .title {
          position: relative;
          top: calc(~"(100% - 32rpx) / 2");
        }
      }
    }
    .line {
      display: inline-block;
      width: 2rpx;
      height: 100%;
      background-color: #bdbdbf;
    }
  }

</style>

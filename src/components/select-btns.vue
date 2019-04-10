<template>
  <div class="container" :style="{backgroundColor: bgColor}">
    <div class="btn-box">
      <div class="btn"
           :style="index !== selectedIndex ? {width: 100 / titles.length + '%',backgroundColor: unSelectedColor,color: '#999999'} : {width: 100 / titles.length + '%',backgroundColor: selectedColor,color: '#FFFFFF'}"
           v-for="(item, index) in titles" :key="index" @click="onSelected(index, item)">
        {{ titles[index] }}
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
      'bgColor',
      'selectedIndex'
    ],
    watch: {
    },
    computed: {
    },
    data: function () {
      return {
      }
    },
    mounted: function () {
    },
    methods: {
      onSelected: function (index, item) {
        this.$emit('on-selected', index)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 99;
    height: 112rpx;
    padding: 20rpx;
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
        /*border:2rpx solid @color-gray-4;*/
      }
    }
  }

</style>



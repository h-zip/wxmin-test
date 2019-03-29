<template>
  <div class="container">
    <div class="btn-box">
      <div :class="btnClasses[index]"
           :style="index !== selectedIndex ? {width: 100 / titles.length + '%',color: unSelectedColor} : {width: 100 / titles.length + '%',color: selectedColor}"
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
      'selectedIndex',
      'opts'
    ],
    watch: {
      selectedIndex: function (v, o) {
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
        if (i === this.selectedIndex) {
          a.push('btn btn_selected')
        } else {
          a.push('btn')
        }
      })
      this.btnClasses = a
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
  }

</style>



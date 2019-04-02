<template>
  <div class="container">
    <select-btns :titles="titles" :selectedIndex="typeIndex" selectedColor="#00a392" unSelectedColor="#FFFFFF" bgColor="#7ecbc3"
                 @on-selected="typeSelected"></select-btns>
    <select-down :titles="filters" :opts="opts" :filterIndex="filterIndex" :optIndex="optIndex" selectedColor="#00a392" unSelectedColor="#999999"
                 @on-filter="filterSelected" @on-opt="optSelected"></select-down>
  </div>
</template>

<script>
  // import _ from 'lodash'
  import selectBtns from '@/components/select-btns'
  import selectDown from '@/components/select-down'
  export default {
    components: {
      'select-btns': selectBtns,
      'select-down': selectDown
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        titles: ['捐衣', '快捷捐衣', '捐物', '快捷捐物'],
        filters: ['区域', '性别', '身高', '季节', '状态'],
        typeIndex: 0,
        filterIndex: -1,
        optIndex: -1,
        opts: [
          '全部', '0', '1', '2', '3', '4'
        ]
      }
    },
    watch: {},
    methods: {
      typeSelected: function (index) {
        this.typeIndex = index
      },
      filterSelected: function (index) {
        this.filterIndex = index
      },
      optSelected: function (index) {
        this.optIndex = index
        this.filterIndex = -1
      }
    },
    onLoad: function () {
      // console.log(wx)
      console.log('onLoad')
    },
    onShow: function () {
    },
    onUnload: function () {
      console.log('onUnload')
    }
  }
</script>

<style scoped lang="less">
  @import "../../../styles/index";
  .container{
    background-color: @color-white-1;
    min-height: 100vh;
    width: 100%;
  }
</style>

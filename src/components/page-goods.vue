<template>
  <div class="container">
    <select-down :titles="filters" :opts="opts" :filterIndex="filterIndex" :optIndex="optIndex" selectedColor="#00a392" unSelectedColor="#999999"
                 @on-filter="filterSelected" @on-opt="optSelected"></select-down>
  </div>
</template>

<script>
  // import _ from 'lodash'
  import selectDown from '@/components/select-down'
  export default {
    components: {
      'select-down': selectDown
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        filters: ['区域', '类别', '物品', '状态'],
        filterIndex: -1,
        optIndex: -1,
        opts: [
          '全部', '0', '1', '2', '3', '4'
        ]
      }
    },
    watch: {},
    methods: {
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
  @import "../styles/index";
  .container{
    background-color: @color-white-1;
    width: 100%;
  }
</style>


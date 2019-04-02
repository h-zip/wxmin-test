<template>
  <div class="container">
    <select-down-cloth :filterIndex="filterIndex" @on-filter="filterSelected"></select-down-cloth>
  </div>
</template>

<script>
  // import _ from 'lodash'
  import selectDownCloth from '@/components/select-down-cloth'
  export default {
    components: {
      'select-down-cloth': selectDownCloth
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        filterIndex: 0,
        optIndex: -1,
        opts: [
          '全部', '0', '1', '2', '3', '4'
        ]
      }
    },
    watch: {},
    methods: {
      filterSelected: function (index) {
        console.log(index)
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

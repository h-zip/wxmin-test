<template>
  <div class="container">
    <select-btns :titles="titles" :selectedIndex="typeIndex" selectedColor="#00a392" unSelectedColor="#FFFFFF" bgColor="#7ecbc3" @on-selected="typeSelected"></select-btns>
  </div>
</template>

<script>
  // import _ from 'lodash'
  import selectBtns from '@/components/select-btns'
  export default {
    components: {
      'select-btns': selectBtns
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        titles: ['捐衣', '快捷捐衣', '捐物', '快捷捐物'],
        typeIndex: 0
      }
    },
    watch: {},
    methods: {
      typeSelected: function (index) {
        this.typeIndex = index
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

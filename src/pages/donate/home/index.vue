<template>
  <div class="container">
    <select-btns :titles="titles" :selectedIndex="typeIndex" selectedColor="#00a392" unSelectedColor="#FFFFFF" bgColor="#7ecbc3"
                 @on-selected="typeSelected"></select-btns>
    <page-cloth v-if="typeIndex === 0" />
    <page-quick-cloth v-if="typeIndex === 1" />
    <page-goods v-if="typeIndex === 2" />
    <page-quick-goods v-if="typeIndex === 3"/>
  </div>
</template>

<script>
  // import _ from 'lodash'
  import selectBtns from '@/components/select-btns'
  import pageQuickCloth from '@/components/page-quick-cloth'
  import pageQuickGoods from '@/components/page-quick-goods'
  import pageCloth from '@/components/page-cloth'
  import pageGoods from '@/components/page-goods'
  export default {
    components: {
      'select-btns': selectBtns,
      'page-quick-cloth': pageQuickCloth,
      'page-quick-goods': pageQuickGoods,
      'page-cloth': pageCloth,
      'page-goods': pageGoods
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

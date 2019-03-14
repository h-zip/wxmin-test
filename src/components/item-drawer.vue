<template>
  <div class="container">
    <van-popup
      :show="show"
      position="right"
      :overlay="true"
      @close="onDrawer"
      custom-class="pop"
      @click-overlay="onDrawer"
    >
      <div>
        <!--<van-button type="default" @click="onClick1">{{ 123 }}</van-button>-->
        <flex-item :items="items1"></flex-item>
        <!--<flex-item :items="items2"></flex-item>-->
        <!--<flex-item :items="items3"></flex-item>-->
      </div>

    </van-popup>
  </div>
</template>

<script>
  import flexItem from '@/components/flex-item'
  export default {
    name: 'textarea-a',
    components: {
      'flex-item': flexItem
    },
    props: [
      'show',
      'items1',
      'items2',
      'items3'
    ],
    methods: {
      onDrawer: function () {
        this.$emit('on-drawer')
      },
      onClick1: function () {
        console.log(11111)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    /deep/ .pop{
      width: 75vw;
      min-height: 100%;
    }
  }

</style>


<template>
  <div class="container">
    <div class="box">
      <div class='item' v-for="(item, index) in items" :key="index" @click="onClick(index, item)">
        <img :src="item.icon" style="width: 50rpx; height: 50rpx; margin: auto;padding-bottom: 10rpx;display: block;"/>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'items'
    ],
    computed: {
    },
    watch: {
    },
    data: function () {
      return {
      }
    },
    mounted: function () {
    },
    methods: {
      onClick: function (index, item) {
        this.$emit('on-click', item)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    .box {
      display: flex;
      display: -ms-inline-flexbox;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      background-color: white;
      width: 100%;

      /*:not(:first-child) {*/
      /*}*/
    }
    .item {
      /*flex: 0 0 calc(~"(100% - 172px) / 3");*/
      /*40*3 + 2*4 / 2*/
      /*40*4 + 2*6 /3*/
      font-size: @font-m;
      text-align: center;
      /*border:2rpx solid #DFDFDF;*/
      /*margin-left: 40rpx;*/
      margin: 40rpx 0;
      /*padding: 10rpx 0;*/
      width: calc(~"100% / 4");
    }
  }

</style>



<template>
  <div class="container">
    <div class="box">
      <div class='item' v-for="(item, index) in items" :key="index" @click="onClick(index, item)">
        <img :src="item.icon" style="width: 60rpx; height: 60rpx; vertical-align: middle;"/>
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
      /*border:2rpx solid @color-gray-4;*/
      /*margin-left: 40rpx;*/
      margin-top: 40rpx;
      /*padding: 10rpx 0;*/
      width: 50%;
    }
  }

</style>



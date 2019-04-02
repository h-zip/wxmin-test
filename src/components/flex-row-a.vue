<template>
  <div class="container">
    <van-row custom-class="row">
      <van-col v-for="(item, index) in items" :key="index" :span="span" custom-class="col-1" @click="onClick">
        <div class="count">{{ item.count }}</div>
        <div class="name">{{ item.name }}</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'items'
    ],
    computed: {
      span: function () {
        return 24 / this.items.length
      }
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
      onClick () {
        this.$emit('on-click')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    background: @color-white-0;
    /deep/ .row{
      width: 100%;
    }
    .count{
      text-align: center;
      font-size: @font-m + 16rpx;
      color: @color-red-0;
      padding: 30rpx 0 0 0;
    }
    .name{
      text-align: center;
      font-size: @font-m;
      color: @color-black-2;
      padding: 0 0 30rpx 0;

    }
  }

</style>

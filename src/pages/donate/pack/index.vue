<template>
  <div class="container">
    <div class="header">
      {{ '你的捐赠衣物将被捐赠给以下受助人：' }}
    </div>
    <div class="orders">
      <donate-order :data="order" :row="index" v-for="(order, index) in orderList" :key="index"></donate-order>
      <div class="btns">
        <donate-pack-btns @on-click="onDelivery"></donate-pack-btns>
        <donate-pack-knows></donate-pack-knows>
      </div>
    </div>
  </div>
</template>

<script>
  // import _ from 'lodash'
  import donateOrder from '@/components/donate-order'
  import donatePackBtns from '@/components/donate-pack-btns'
  import donatePackKnows from '@/components/donate-pack-knows'
  export default {
    components: {
      'donate-order': donateOrder,
      'donate-pack-btns': donatePackBtns,
      'donate-pack-knows': donatePackKnows
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        orderList: [
          {
            orderNum: 'AXCV2',
            title: '昆仑下的暖冬',
            donateList: [
              {
                name: '张大伟',
                sex: '0',
                season: '0',
                sizeHeight: '140cm',
                donate: 1
              },
              {
                name: '张大伟',
                sex: '0',
                season: '0',
                sizeHeight: '140cm',
                donate: 1
              },
              {
                name: '张大伟',
                sex: '0',
                season: '0',
                sizeHeight: '140cm',
                donate: 1
              }
            ]
          },
          {
            orderNum: 'CX3EX',
            title: '铁汉柔情',
            donateList: [
              {
                name: '张大伟',
                sex: '0',
                season: '0',
                sizeHeight: '140cm',
                donate: 1
              },
              {
                name: '张大伟',
                sex: '0',
                season: '0',
                sizeHeight: '140cm',
                donate: 1
              },
              {
                name: '张大伟',
                sex: '0',
                season: '0',
                sizeHeight: '140cm',
                donate: 1
              }
            ]
          }
        ]
      }
    },
    watch: {},
    methods: {
      onDelivery: function (i) {
        if (i === 1) {
          wx.router.push(wx.router.routes.donate.delivery)
        }
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
    background-color: @color-gray-3;
    min-height: 100vh;
    width: 100%;
    .header {
      background-color: @color-green-0;
      color: @color-white-0;
      font-size: @font-m;
      height: 200rpx;
      padding: 40rpx;
    }
    .orders {
      position: relative;
      top: -200rpx;
      padding: 40rpx;
      .btns {
      }
    }
  }
</style>

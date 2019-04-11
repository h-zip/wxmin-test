<template>
  <div class="container">
    <div class="h1">{{ '你的认捐已成功，为了让受助人尽早收到衣物，请尽快打包发认捐衣物。' }}</div>
    <div class="reciever">
      <donate-reciever-card></donate-reciever-card>
    </div>
    <div class="btns">
      <div class="insert">
        <div class="btn1">{{ '我要寄件' }}</div>
      </div>
      <div class="insert">
        <div class="btn2">{{ '我已寄出' }}</div>
        <already-send-box :data="sendData"></already-send-box>
      </div>
      <div class="insert">
        <div class="btn3">{{ '送货上门' }}</div>
      </div>
      <div class="insert">
        <div class="btn4">{{ '暂不发货' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  // import _ from 'lodash'
  import donateRecieverCard from '@/components/donate-reciever-card'
  import alreadySendBox from '@/components/already-send-box'
  export default {
    components: {
      'donate-reciever-card': donateRecieverCard,
      'already-send-box': alreadySendBox
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        sendData: {
          count: ''
        }
      }
    },
    watch: {},
    methods: {
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
    background-color: @color-gray-5;
    min-height: 100vh;
    width: 100%;
    padding: 30rpx;
    box-sizing: border-box;
    .h1 {
      font-size: @font-m;
      color: @color-black-2;
      margin-bottom: 20rpx;
    }
    .reciever {

    }
    .btns {
      width: 100%;
      .insert {
        padding: 20rpx;
        .btn1 {
          background-color: @color-green-0;
          color: @color-white-0;
          font-size: @font-m;
          text-align: center;
          width: 30%;
          margin: auto;
          padding: 20rpx;
          border-radius: 12rpx;
        }
        .btn2 {
          background-color: @color-red-2;
          color: @color-white-0;
          font-size: @font-m;
          text-align: center;
          width: 30%;
          margin: auto;
          padding: 20rpx;
          border-radius: 12rpx;
        }
        .btn3 {
          background-color: @color-blue-0;
          color: @color-white-0;
          font-size: @font-m;
          text-align: center;
          width: 30%;
          margin: auto;
          padding: 20rpx;
          border-radius: 12rpx;
        }
        .btn4 {
          background-color:@color-yellow-0;
          color: @color-white-0;
          font-size: @font-m;
          text-align: center;
          width: 30%;
          margin: auto;
          padding: 20rpx;
          border-radius: 12rpx;
        }
      }
    }
  }
</style>

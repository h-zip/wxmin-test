<template>
  <div class="container">
    <div class="box1">
      <summary-txt :info="info" line-height="72rpx" />
    </div>
    <div class="box2">
      <img :src=ewmImgSrc class="erweima"/>
      <div class="right">
        <div class="btn" @click="goMap">{{ '查看我的足迹' }}</div>
        <!--<div class="bottom">-->
        <!--数据统计时间-->
        <!--<div class="time">{{ time }}</div>-->
        <!--</div>-->
      </div>
    </div>
    <div class="logos">
      <flex-logos></flex-logos>
    </div>
  </div>
</template>

<script>
  import summaryTxt from '@/components/summary-txt'
  import flexLogos from '@/components/flex-logos'
  export default {
    name: 't_summary',
    components: {
      'summary-txt': summaryTxt,
      'flex-logos': flexLogos
    },
    data: function () {
      return {
        mapPage: '/member/tracks/map',
        contentBgImgSrc: 'http://bbaltcdn.hanspro.cn/sys/icon_index_7.png',
        ewmImgSrc: 'http://bbaltcdn.hanspro.cn/sys/erweima.png',
        time: '2017/08/01-2018/07/31',
        info: {
          donateNumber: '0',
          matchCount: '0',
          areaCount: '0',
          name: ''
        }
      }
    },
    mounted: function () {
    },
    methods: {
      goMap: function () {
        wx.router.push(wx.router.routes.member.track.map)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../styles/index";
  .container {
    padding-top: 40rpx;
    /*padding-bottom: 54px;*/
    background-color: @color-white-1;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .box1 {
    background-image: url("http://bbaltcdn.hanspro.cn/sys/icon_index_7.png");
    background-size: 100% 100%;
    height: 600rpx;
    padding-top: 60rpx;
  }
  .box2 {
    height: 200rpx;
    margin-top: 40rpx;
    padding-bottom: 14rpx;
    .erweima {
      margin-left: 60rpx;
      float: left;
      width: 200rpx;
      height: 200rpx;
    }
    .right {
      margin-right: 60rpx;
      float: right;
      height: 200rpx;
      width: 280rpx;
      text-align: center;
      .btn {
        text-align: center;
        color: @color-white-1;
        background-color: @color-red-2;
        font-size: @font-m;
        border-radius: 6rpx;
        padding: 16rpx 30rpx;
      }
      .bottom {
        padding-top: 20rpx;
        color: #bcbdbf;
        line-height: 40rpx;
        font-size: 24rpx;
      }
    }
  }
</style>

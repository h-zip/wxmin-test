<template>
  <div class="container">
    <map id="map" :longitude="longitude" :latitude="latitude" :scale="scale" :subkey="subkey" :markers="markers"></map>
    <div class="content">
      <div class="row1 row-height">
        <div class="track-box">
          <tracks-select
            :imgs="trackData.imgs"
            :titles="trackData.titles"
            @on-selected="trackOnSelected"
          ></tracks-select>
        </div>
        <div class="des">缩放地图，点击图标查看详情</div>
      </div>
      <div class="row2 row-height">
        <div class="row">
          <div class="btn1" @click="onClick(0)">{{ '支持宝贝爱蓝天' }}</div>
          <div class="btn2" @click="onClick(1)">{{ '分享我的足迹' }}</div>
        </div>
      </div>
    </div>
    <div class="logos">
      <flex-logos></flex-logos>
    </div>
  </div>
</template>

<script>
  import tracksSelect from '@/components/tracks-select'
  import flexLogos from '@/components/flex-logos'
  const img0 = '/static/images/map_pointer_l0.png'
  const img1 = '/static/images/map_pointer_l1.png'
  export default {
    name: 'index',
    components: {
      'tracks-select': tracksSelect,
      'flex-logos': flexLogos
    },
    mounted: function () {
    },
    data: function () {
      return {
        longitude: '103.83417',
        latitude: '36.06138',
        scale: '5',
        subkey: 'LJJBZ-5DZCG-X2YQ4-IBJWZ-42TH2-Y7BYO',
        markers: [
          {
            id: 0,
            iconPath: img0,
            longitude: '99.83417',
            latitude: '38.06138',
            width: 21,
            height: 28,
            callout: {
              content: '12333',
              display: 'BYCLICK'
            }
          },
          {
            id: 1,
            iconPath: img1,
            longitude: '103.83417',
            latitude: '36.06138',
            width: 21,
            height: 28,
            callout: {
              content: '12333',
              display: 'BYCLICK'
            }
          }
        ],
        trackData: {
          imgs: [
            img0,
            img1
          ],
          titles: ['显示所有足迹', '显示我的足迹']
        }
      }
    },
    methods: {
      trackOnSelected: function (i) {

      },
      onClick: function () {

      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../styles/index";
  .container{
    background-color: @color-white-1;
    min-height: 100vh;
    #map {
      width: 100%;
      height: 600rpx;
    }
    .content {
      text-align: center;
      .row-height {
        height: 40%;
      }
      .row1 {
        color: #bbbcbe;
        line-height: 40rpx;
        font-size: 28rpx;
        .track-box {
          position: relative;
          /*top: 20rpx;*/
          height: 180rpx;
          padding: 20rpx 10%;
        }
        .des {
          position: relative;
          padding: 20rpx 0;
          /*top: -50rpx;*/
        }
      }
      .row2 {
        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40rpx;
          .btn1 {
            font-size: @font-m;
            color: @color-white-0;
            width: 50%;
            background-color: @color-green-0;
            padding: 10rpx;
            margin-right: 40rpx;
            text-align: center;
            border-radius: 6rpx;
          }
          .btn2 {
            font-size: @font-m;
            color: @color-white-0;
            width: 50%;
            background-color: @color-red-2;
            padding: 10rpx;
            text-align: center;
            border-radius: 6rpx;
          }
        }
      }
    }
  }
</style>

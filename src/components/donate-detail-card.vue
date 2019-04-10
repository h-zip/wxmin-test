<template>
  <div class="container" @click="onDetail">
    <div class="swiper">
      <swiper :items="swipers" :auto="false" :width="swiperStyle.width" :height="swiperStyle.height"></swiper>
    </div>
    <div class="content">
      <div class="row">
        <div class="title">{{ cell.title }}</div>
        <div class="size">{{ cell.size }}</div>
      </div>
      <div class="detail">
        {{ flodered? cell.detail : cell.detailFull }}
      </div>
      <floder-btn :title="floderTitle" :flodered="flodered" @on-click="onFloder"></floder-btn>
      <div class="row">
        <div class="process">
          <div class="process-inner" :style="{width: cell.process + '%'}"></div>
          <div class="p-donated">{{ '已捐' + cell.donated + '件' }}</div>
          <div class="p-demand">{{ '缺少' + cell.demand + '件' }}</div>
        </div>
        <div class="date">
          <img class="icon-d" :src="dateSrc" />
          <div class="title-d">{{ '募集天数：' + cell.date + '天' }}</div>
        </div>
      </div>
      <div class="row">
        <div class="btn1">{{ '生成海报' }}</div>
        <div class="btn2">{{ '我要月捐' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import swiper from '@/components/swiper'
  import floderBtn from '@/components/floder-btn'
  export default {
    name: 'textarea-a',
    props: [
      'cell'
    ],
    components: {
      'swiper': swiper,
      'floder-btn': floderBtn
    },
    computed: {
      floderTitle: function () {
        return this.flodered ? '展开全文' : '收起全文'
      }
    },
    data: function () {
      return {
        locationSrc: '/static/images/location.png',
        dateSrc: '/static/images/date.png',
        swipers: [
          {
            url: '/donation/detail/290?t=0',
            src: 'http://bbaltcdn.hanspro.cn/demand290.jpg',
            title: '牵手回城-冬装'
          }, {
            url: '/donation/detail/262?t=0',
            src: 'http://bbaltcdn.hanspro.cn/demand262.jpg',
            title: '昆仑山下的暖冬'
          }
        ],
        swiperStyle: {
          width: 'calc((100vw))',
          height: 'calc((100vw) / 750 * 360)'
        },
        flodered: true
      }
    },
    methods: {
      onDetail: function () {
        this.$emit('on-detail')
      },

      onFloder: function () {
        this.flodered = !this.flodered
        this.$emit('on-floder')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    background-color: @color-white-0;
    .swiper {
    }
    .content {
      padding: 20rpx;
      .detail {
        font-size: @font-m - 2rpx;
        color: @color-black-2;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10rpx;
        .title {
          font-size: @font-m;
        }
        .size {
          font-size: @font-m;
          color: @color-green-0;
        }
        .location {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-right: 40rpx;
          .icon-l {
            height: 40rpx;
            width: 40rpx;
            padding-right: 20rpx;
          }
          .title-l {
            font-size: @font-m;
          }
        }
        .process {
          height: 30rpx;
          border-radius: 6rpx;
          flex: auto;
          background-color: @color-gray-3;
          position: relative;
          .process-inner {
            height: 100%;
            background-color: @color-green-0;
          }
          .p-donated {
            position: absolute;
            font-size: @font-m - 4rpx;
            line-height: 30rpx;
            text-align: center;
            left: 0;
            top: 0;
            bottom: 0;
            width: 50%;
          }
          .p-demand {
            position: absolute;
            font-size: @font-m - 4rpx;
            line-height: 30rpx;
            text-align: center;
            right: 0;
            top: 0;
            bottom: 0;
            width: 50%;
          }
        }
        .date {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon-d {
            height: 40rpx;
            width: 40rpx;
            padding: 0 20rpx;
          }
          .title-d {
            font-size: @font-m;
          }
        }
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

</style>


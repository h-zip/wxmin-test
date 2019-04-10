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
      <div class="row">
        <div class="location">
          <img class="icon-l" :src="locationSrc" />
          <div class="title-l">{{ cell.location }}</div>
        </div>
        <div class="process">
          <div class="process-inner" :style="{width: cell.process + '%'}"></div>
        </div>
      </div>
      <div class="row">
        <div class="date">
          <img class="icon-d" :src="dateSrc" />
          <div class="title-d">{{ '募集天数：' + cell.date + '天' }}</div>
        </div>
        <div class="donated">{{ '已捐：' }}<span class="donated-t">{{ cell.donated }}</span></div>
        <div class="demand">{{ '还缺：' }}<span class="demand-t">{{ cell.demand }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import swiper from '@/components/swiper'
  export default {
    name: 'textarea-a',
    props: [
      'cell'
    ],
    components: {
      'swiper': swiper
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
        }
      }
    },
    methods: {
      onDetail: function () {
        this.$emit('on-detail')
      },
      onClick2: function () {
        this.$emit('on-click2')
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
          .process-inner {
            height: 100%;
            background-color: @color-green-0;
          }
        }
        .date {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon-d {
            height: 40rpx;
            width: 40rpx;
            padding-right: 20rpx;
          }
          .title-d {
            font-size: @font-m;
          }
        }
        .donated {
          font-size: @font-m;
          .donated-t {
            color: @color-green-0;
          }
        }
        .demand {
          font-size: @font-m;
          .demand-t {
            color: @color-red-2;
          }
        }
      }
    }
  }

</style>


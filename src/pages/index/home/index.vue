<template>
  <div class="container">
    <div class="title">
      {{ title }}
    </div>
    <div class="swiper">
      <swiper :items="swipers" :auto="true" :width="swiperStyle.width" :height="swiperStyle.height"></swiper>
    </div>
    <div class="nums">
      <nums-box :nums="nums" :words="words"></nums-box>
    </div>
    <line height="2rpx" space="40rpx" color="#dedede"></line>
    <div class="navis">
      <navi-box :items="navis" @on-click=""></navi-box>
    </div>
    <line height="2rpx" space="40rpx" color="#dedede"></line>
    <div class="cols">
      <flex-row-b :items="cols"></flex-row-b>
    </div>
    <line height="2rpx" space="40rpx" color="#dedede"></line>
    <div class="swiper">
      <swiper :items="swipers" :auto="true" :width="swiperStyle.width" :height="swiperStyle.height"></swiper>
    </div>
    <div class="header">
      <navi-header-a :titles="header1" @on-click="onNaviRank"></navi-header-a>
    </div>
    <div class="donater">
      <cell-cloth-donater :cell="donater" :row="index" v-for="(donater, index) in donaters" :key="index"></cell-cloth-donater>
    </div>
    <line height="2rpx" space="40rpx" color="#dedede"></line>
    <div class="header">
      <navi-header-a :titles="header2"></navi-header-a>
    </div>
    <div class="imgs">
      <imgs-a :items="imgs"></imgs-a>
    </div>
  </div>
</template>

<script>
import api from '@/service'
import swiper from '@/components/swiper'
import numsBox from '@/components/nums-box'
import naviBox from '@/components/navi-box'
import flexRowB from '@/components/flex-row-b'
import naviHeaderA from '@/components/navi-header-a'
import imgsA from '@/components/imgs-a'
import line from '@/components/line'
import cellClothDonater from '@/components/cell-cloth-donater'
export default {
  data () {
    return {
      title: '宝贝爱蓝天精准捐衣',
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
        width: 'calc((100vw - 80rpx))',
        height: 'calc((100vw - 80rpx) / 3 * 2)'
      },
      nums: ['6', '3', '2', '5', '2'],
      words: '份爱心被精准认领',
      navis: [
        {
          title: '我要捐衣',
          icon: '/static/images/nav_cloth.png'
        },
        {
          title: '我要捐物',
          icon: '/static/images/nav_goods.png'
        },
        {
          title: '我要月捐',
          icon: '/static/images/nav_heart.png'
        },
        {
          title: '申领物资',
          icon: '/static/images/nav_req.png'
        }
      ],
      cols: [
        {
          title: '合作',
          icon: '/static/images/col_co.png'
        },
        {
          title: '志愿者',
          icon: '/static/images/col_volt.png'
        },
        {
          title: '客服',
          icon: '/static/images/col_service.png'
        },
        {
          title: '我的',
          icon: '/static/images/col_mine.png'
        }
      ],
      header2: {
        main: '我们 & 资助伙伴',
        sub: '了解我们 >>'
      },
      header1: {
        main: '优秀捐衣人',
        sub: '查看更多 >>'
      },
      donaters: [
        {
          name: 'zhangsan',
          point: '1234'
        },
        {
          name: 'lisi',
          point: '939'
        },
        {
          name: 'wangwu',
          point: '455'
        }
      ],
      imgs: [
        '/static/images/logo3.png',
        '/static/images/logo1.png',
        '/static/images/logo2.png'
      ]
    }
  },
  components: {
    'swiper': swiper,
    'nums-box': numsBox,
    'navi-box': naviBox,
    'flex-row-b': flexRowB,
    'navi-header-a': naviHeaderA,
    'imgs-a': imgsA,
    'line': line,
    'cell-cloth-donater': cellClothDonater
  },
  methods: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      this.user()
    },
    user () {
      console.log(api)
      api.temlete.user.post({})
        .then((res) => {
          console.log(res)
        })
        .catch()
    },
    onNaviRank () {
      wx.router.push(wx.router.routes.point.rank)
    }
  },
  mounted () {
    // wx.router.redirect(wx.router.routes.login.home)
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="less">
  @import "../../../styles/index";
  .container{
    background-color: @color-white-0;
    min-height: 100vh;
    width: 100%;
    .title {
      text-align: center;
      padding: 20rpx 0 0 0;
      font-size: @font-m;
      color: @color-gray-2;
    }
    .swiper {
      padding: 20rpx 40rpx;
    }
    .nums {
      padding: 20rpx 0 40rpx 0;
    }
    .navis {
      padding: 20rpx 40rpx 60rpx 40rpx;
    }
    .cols {
      padding: 20rpx 0 20rpx 0rpx;
    }
    .header {
      padding: 20rpx 0;
    }
    .imgs {
      padding: 20rpx 40rpx;
    }
  }
</style>

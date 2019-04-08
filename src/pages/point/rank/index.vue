<template>
  <div class="container">
    <div class="donater">
      <cell-cloth-donater :cell="donater" :row="index" v-for="(donater, index) in donaters" :key="index"></cell-cloth-donater>
    </div>
  </div>
</template>

<script>
import cellClothDonater from '@/components/cell-cloth-donater'
export default {
  data () {
    return {
      title: '宝贝爱蓝天精准捐衣',
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
        },
        {
          name: 'zhaoliu',
          point: '323'
        },
        {
          name: 'qianqi',
          point: '273'
        },
        {
          name: 'sunba',
          point: '239'
        },
        {
          name: 'gujiu',
          point: '129'
        },
        {
          name: 'tanshi',
          point: '99'
        }
      ]
    }
  },
  components: {
    'cell-cloth-donater': cellClothDonater
  },
  methods: {
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
    box-sizing: border-box;
    padding: 20rpx;
    .donater {
      box-shadow:0 0 40rpx 0 rgba(0, 0, 0, 0.12);
      border-radius:24rpx;
    }
  }
</style>

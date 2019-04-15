<template>
  <div class="container">
    <header-box :header-src="headerSrc" bg-color="#7ecbc3" :name="name" :phone="phone"></header-box>
    <div class="content">
      <btn-two-float :point="point" :level="level"></btn-two-float>
    </div>
  </div>
</template>

<script>
  import headerBox from '@/components/header-box'
  import btnTwoFloat from '@/components/btn-two-float'
  export default {
    name: 'index',
    components: {
      'header-box': headerBox,
      'btn-two-float': btnTwoFloat
    },
    data: function () {
      return {
        headerSrc: '/static/images/default_avatar.jpg',
        bg: '-webkit-gradient(linear, left top, left bottom, color-stop(0, #adebcb), color-stop(1, #5fd9cb))',
        name: '宝贝爱蓝天小助手',
        phone: '1590112394',
        point: '1456',
        level: '二级志愿者',
        items: [
          {
            count: '0',
            name: '我的捐赠'
          },
          {
            count: '0',
            name: '我发布的需求'
          },
          {
            count: '0',
            name: '购买记录'
          },
          {
            count: '0',
            name: '我的积分'
          }
        ],
        cells: [
          {
            icon: 'iconfont icon-zuji',
            title: '捐赠足迹',
            url: wx.router.routes.member.track.home,
            color: '#E8659B'
          },
          {
            icon: 'iconfont icon-address',
            title: '常用收货地址',
            url: '',
            color: '#81CBC3'
          },
          {
            icon: 'iconfont icon-clothes',
            title: '捐衣须知',
            url: '',
            color: '#9BC744'
          },
          {
            icon: 'iconfont icon-table-tennis',
            title: '捐物须知',
            url: '',
            color: '#FDB4AF'
          },
          {
            icon: 'iconfont icon-kefunv',
            title: '常见问题+客服',
            url: '',
            color: '#FEC476'
          },
          {
            icon: 'iconfont icon-setting',
            title: '完善个人信息',
            url: '',
            color: '#DBB0E5'
          },
          {
            icon: 'iconfont icon-setting',
            title: '退出登录',
            url: '',
            color: '#DBB0E5',
            notLink: true
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../styles/index";
  .container{
    background-color: @color-white-1;
    min-height: 100vh;
    .content {
      position: relative;
      top: -80rpx;
      padding: 0 40rpx;
    }
  }
</style>

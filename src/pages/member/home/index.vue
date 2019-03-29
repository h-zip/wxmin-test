<template>
  <div class="container">
    <header-box :header-src="headerSrc" :bg="bg" :name="name"></header-box>
    <flex-row :items="items"></flex-row>
    <van-cell-group>
      <van-cell :title="cell.title" :is-link="!cell.notLink" v-for="(cell, index) in cells" :key="index" :url="cell.url" title-class="cell-title">
        <van-icon slot="icon" size="32rpx" :color="cell.color" :custom-class="cell.icon"  />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  import headerBox from '@/components/header-box'
  import flexRow from '@/components/flex-row'
  export default {
    name: 'index',
    components: {
      'header-box': headerBox,
      'flex-row': flexRow
    },
    data: function () {
      return {
        headerSrc: '/../../../../static/images/default_avatar.jpg',
        bg: '-webkit-gradient(linear, left top, left bottom, color-stop(0, #adebcb), color-stop(1, #5fd9cb))',
        name: '1233333',
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
            url: '',
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
    /deep/ .cell-title{
      padding-left: 20rpx;
    }
  }
</style>

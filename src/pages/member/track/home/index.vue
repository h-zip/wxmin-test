<template>
  <div class="container">
    <img :src="img1" mode="widthFix" class="img1" />
    <img :src="img2" mode="widthFix" class="img2" />
    <div class="box3">
      <div class="btn" @click="goSummaryPage">点击查看</div>
    </div>
  </div>
</template>

<script>
  import headerBox from '@/components/header-box'
  export default {
    name: 'index',
    components: {
      'header-box': headerBox
    },
    data: function () {
      return {
        img1: '/static/images/icon_index_1.png',
        img2: '/static/images/icon_index_2.png',
        img3: '/static/images/icon_index_3.png'
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../styles/index";
  .container{
    background-color: @color-white-1;
    min-height: 100vh;
    .img1 {
      padding: 80rpx 0;
      display: block;
      width: 50%;
      margin: auto;
    }
    .img2 {
      padding: 80rpx 0;
      display: block;
      width: 40%;
      margin: auto;
    }
    .box3 {
      padding: 25px 0;
      .btn {
        position: relative;
        text-align: center;
        line-height: 58px;
        font-size: 20px;
        color: white;
        width: 150px;
        height: 62px;
        margin: 0 auto;
        background-image: url("../../../../../static/images/icon_index_3.png");
        background-size: 100% 100%;
      }
    }
  }
</style>

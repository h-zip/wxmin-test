<template>
  <div class="logos">
    <img :src=imgLogoSrc1 mode="widthFix" class="logo"/>
    <img :src=imgLogoSrc3 mode="widthFix" class="logo"/>
    <img :src=imgLogoSrc2 mode="widthFix" class="logo"/>
  </div>
</template>

<script>
  export default {
    name: 'logos',
    data: function () {
      return {
        imgLogoSrc1: 'http://bbalt.hanspro.cn/Content/weixin/images/logo1.png',
        imgLogoSrc2: 'http://bbalt.hanspro.cn/Content/weixin/images/logo2.png',
        imgLogoSrc3: 'http://bbalt.hanspro.cn/Content/weixin/images/logo3.png'
      }
    }
  }
</script>

<style scoped lang="less">
  .logos {
    position: fixed;
    bottom: 80rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 80px;
    }
  }
</style>


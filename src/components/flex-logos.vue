<template>
  <div class="logos">
    <img :src=imgLogoSrc1 class="logo"/>
    <img :src=imgLogoSrc3 class="logo"/>
    <img :src=imgLogoSrc2 class="logo"/>
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
    position: relative;
    width: auto;
    padding: 15px 0;
    text-align: center;
    .logo {
      display: inline-block;
      width: 80px;
      height: auto;
    }
  }
</style>


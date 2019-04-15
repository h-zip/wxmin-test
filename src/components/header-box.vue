<template>
  <div class="container">
    <div class="bg" :style="{backgroundColor: bgColor}">
      <div class="content">
        <img class="header" :src="headerSrc" @click="onClick" />
        <div class="name">{{ name }}</div>
        <div class="phone">{{ phone }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'bg',
      'headerSrc',
      'name',
      'bgColor',
      'phone'
    ],
    methods: {
      onClick: function () {
        this.$emit('on-click')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    .bg{
      padding: 40rpx 0 120rpx 0;
      .content{
        .header{
          width: 20vw;
          height: 20vw;
          border-radius: 10vh;
          margin: auto;
          display: block;
        }
        .name{
          padding: 40rpx 0 0 0;
          width: 80%;
          margin: auto;
          text-align: center;
          font-size: @font-m;
          color: @color-white-0;
        }
        .phone{
          padding: 10rpx 0 0 0;
          width: 80%;
          margin: auto;
          text-align: center;
          font-size: @font-m;
          color: @color-white-0;
        }
      }
    }
  }

</style>



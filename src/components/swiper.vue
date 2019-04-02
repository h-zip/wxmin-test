<template>
  <div class="container">
    <swiper
      :indicator-dots="true"
      indicator-color="#EA639B"
      :autoplay="auto"
      :circular="true"
      :style="{width: width, height: height}"
    >
      <div v-for="(item, index) in items" :key="index" @click="onClick">
        <swiper-item class="item">
          <img mode="widthFix" :src="item.src" :style="{width: width, height: height}"/>
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'items',
      'auto',
      'width',
      'height'
    ],
    methods: {
      onClick: function (item) {
        this.$emit('on-click', item)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    .item {
      border-radius: 10rpx;
    }
  }
</style>


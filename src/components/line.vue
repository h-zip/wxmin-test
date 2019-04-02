<template>
  <div class="container">
    <div :style="{height: height, backgroundColor:color, marginLeft:space, marginRight:space}"></div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'height',
      'color',
      'space'
    ],
    methods: {
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{

  }

</style>


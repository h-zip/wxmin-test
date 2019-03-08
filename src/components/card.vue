<template>
  <div>
    <p class="card">
      {{text}}
    </p>
    <van-button>默认2按钮</van-button>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>

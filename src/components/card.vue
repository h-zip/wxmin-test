<template>
  <div>
    <p class="card">
      {{text}}
    </p>
    <i-button>默认2按钮</i-button>
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

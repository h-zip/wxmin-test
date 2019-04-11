<template>
  <div class="container">
    <div class="cell-box">
      <div class="text">{{ cell.name }}</div>
      <div class="text">{{ cell.sex === '0' ? '男' : '女' }}</div>
      <div class="text">{{ seasonName }}</div>
      <div class="text">{{ cell.sizeHeight }}</div>
      <div class="text">{{ cell.donate }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'cell',
      'row'
    ],
    computed: {
      seasonName: function () {
        let c = ''
        if (this.cell.season === '0') {
          c = '夏装'
        } else if (this.cell.season === '1') {
          c = '冬装'
        } else {
          c = '春秋装'
        }
        return c
      }
    },
    methods: {
      onChange: function (e) {
        this.$emit('on-change', this.row, e)
      },
      onClick2: function () {
        this.$emit('on-click2')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    background-color: @color-white-0;
    border-radius: 12rpx;
    .cell-box {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10rpx 80rpx;
      .text {
        font-size: @font-m;
        color: @color-black-2;
      }
      .count {
      }
    }
  }

</style>

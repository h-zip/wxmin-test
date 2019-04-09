<template>
  <div class="container">
      <div class="box">
        <div :class=classes[index] v-for="(item, index) in items" :key="item.code" @click="onSelected(index, item)">{{ item.name }}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'textarea-a',
    props: [
      'items',
      'selectedIndex',
      'index'
    ],
    computed: {
    },
    watch: {
      items: function (newValue, oldValue) {
        if (newValue === oldValue) return
        this.selectedIndex = -1
        let a = []
        newValue.forEach((v, i) => {
          a.push('item')
        })
        this.classes = a
      },
      selectedIndex: function (newValue, oldValue) {
        if (newValue === oldValue) return
        if (oldValue !== -1) this.classes[oldValue] = 'item'
        this.classes[newValue] = 'item item_selected'
      }
    },
    data: function () {
      return {
        classes: []
      }
    },
    mounted: function () {
      let a = []
      this.items.forEach((v, i) => {
        a.push('item')
      })
      this.classes = a
    },
    methods: {
      onSelected: function (index, item) {
        // this.selectedIndex = index
        // this.$emit('input', item)
        this.$emit('on-selected', this.index, index)
      },
      configInitIndex: function (index) {
        this.selectedIndex = index
        // this.$emit('onSelected', this._items[index])
        // this.$emit('input', this._items[index])
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    width: 100%;
    .box {
      display: flex;
      display: -ms-inline-flexbox;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      padding-bottom: 40rpx;
      background-color: white;
      width: 100%;

      /*:not(:first-child) {*/
      /*}*/
    }
    .item {
      /*flex: 0 0 calc(~"(100% - 172px) / 3");*/
      /*40*3 + 2*4 / 2*/
      /*40*4 + 2*6 /3*/
      font-size: @font-m;
      text-align: center;
      border:2rpx solid @color-gray-1;
      background-color: @color-gray-1;
      color: @color-black-1;
      margin-left: 40rpx;
      margin-top: 40rpx;
      padding: 10rpx 0;
      width: calc(~"(100% - 172rpx) / 3");
      &_selected {
        color: @color-white-0;
        background-color: @color-green-1;
        /*background-image: url("http://bbalt.hanspro.cn/Content/weixin/images/bg_menuhover.png");*/
        /*background-size: 100% 100%;*/
        border:2rpx solid @color-green-1;
      }
    }
  }

</style>



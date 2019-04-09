<template>
  <div class="container">
    <div class="add">
      <row-btn-add title="捐赠列表" btn-title="添加信息" @on-click="onDrawer"></row-btn-add>
    </div>
    <div class="cell">
      <cell-quick-goods :cell="cell" :row="index" v-for="(cell, index) in goods" :key="index" @on-change="onCount"></cell-quick-goods>
    </div>
    <div class="btn" @click="onMatch">立即匹配</div>
    <item-drawer :show="tagShow" :items="items" @on-drawer="onDrawer" :opt-indexs="optIndexs" :pop-count="popCount"
                 @on-selected="onDrawerSelected" :need-count="true" @on-pop-count="onPopCount"></item-drawer>
  </div>
</template>

<script>
  import _ from 'lodash'
  import rowBtnAdd from '@/components/row-btn-add'
  import cellQuickGoods from '@/components/cell-quick-goods'
  import itemDrawer from '@/components/item-drawer'
  export default {
    components: {
      'row-btn-add': rowBtnAdd,
      'cell-quick-goods': cellQuickGoods,
      'item-drawer': itemDrawer
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        goods: [
          {
            category: '文具',
            name: '橡皮',
            donate: 5
          },
          {
            category: '文具',
            name: '本子',
            donate: 7
          },
          {
            category: '体育用品',
            name: '足球',
            donate: 5
          }
        ],
        popCount: 1,
        optIndexs: [-1, -1],
        items: [
          {
            title: '类别',
            opts: [
              {
                code: '0',
                name: '体育用品'
              },
              {
                code: '1',
                name: '文具'
              }
            ]
          },
          {
            title: '物品',
            opts: [
              {
                code: '0',
                name: '本子'
              },
              {
                code: '1',
                name: '铅笔'
              },
              {
                code: '2',
                name: '橡皮'
              }
            ]
          }
        ],
        tagShow: false
      }
    },
    watch: {},
    methods: {
      filterSelected: function (index) {
        this.filterIndex = index
      },
      optSelected: function (index) {
        this.optIndex = index
        this.filterIndex = -1
      },
      onMatch: function () {

      },
      onCount: function (e, index) {
        let c = _.cloneDeep(this.goods)
        c[index].donate = e.mp.detail.value
        this.goods = c
      },
      onPopCount (v) {
        this.popCount = v.mp.detail.value
      },
      onDrawer () {
        let self = this
        if (!self.tagShow) {
          this.popShow = !this.popShow
          setTimeout(function () {
            self.tagShow = !self.tagShow
          }, 200)
        } else {
          this.tagShow = !this.tagShow
          setTimeout(function () {
            self.popShow = !self.popShow
          }, 200)
        }
      },
      onDrawerSelected (section, index) {
        let c = _.cloneDeep(this.optIndexs)
        c[section] = index
        this.optIndexs = c
        console.log(this.optIndexs)
      }
    },
    onLoad: function () {
      // console.log(wx)
      console.log('onLoad')
    },
    onShow: function () {
    },
    onUnload: function () {
      console.log('onUnload')
    }
  }
</script>

<style scoped lang="less">
  @import "../styles/index";
  .container{
    background-color: @color-white-1;
    width: 100%;
    .add {
      padding-bottom: 20rpx;
    }
    .btn {
      text-align: center;
      font-size: @font-m;
      background: @color-green-1;
      color: @color-white-0;
      padding: 10rpx 0;
      margin: 40rpx;
      border-radius: 10rpx;
    }
  }
</style>


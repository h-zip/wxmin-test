<template>
  <div class="container">
    <div class="add">
      <row-btn-add title="捐赠列表" btn-title="添加信息" @on-click="onDrawer"></row-btn-add>
    </div>
    <div class="cell">
      <cell-quick-goods :cell="cell" :row="index" v-for="(cell, index) in goods" :key="index" @on-change="onCount"></cell-quick-goods>
    </div>
    <div class="btn" @click="onMatch">立即匹配</div>
    <item-drawer :show="tagShow" :items1="items1" :items2="items2" :items3="items3" :pop-count="popCount"
                 @on-drawer="onDrawer" @on-pop-count="onPopCount">
    </item-drawer>
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
        tagShow: false,
        popCount: 1,
        items1: [
          {
            code: '0',
            name: '夏装'
          },
          {
            code: '1',
            name: '东装'
          },
          {
            code: '2',
            name: '秋天装'
          },
          {
            code: '3',
            name: '早春装书'
          }
        ],
        items2: [
          {
            code: '0',
            name: '夏装'
          },
          {
            code: '1',
            name: '东装'
          },
          {
            code: '2',
            name: '秋天装'
          },
          {
            code: '3',
            name: '早春装书'
          }
        ],
        items3: [
          {
            code: '0',
            name: '夏装'
          },
          {
            code: '1',
            name: '东装'
          },
          {
            code: '2',
            name: '秋天装'
          },
          {
            code: '3',
            name: '早春装书'
          }
        ]
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


<template>
  <div class="container">
    <select-down :opts="items" :filterIndex="filterIndex" :optIndexs="optIndexs" selectedColor="#00a392" unSelectedColor="#999999"
                 @on-filter="filterSelected" @on-opt="optSelected" @on-reset="optReset" @on-confirm="optConfirm" @on-multiple="onDrawer"></select-down>
    <item-drawer :show="tagShow" :items="items" @on-drawer="onDrawer" :opt-indexs="optIndexs" @on-selected="onDrawerSelected"></item-drawer>
  </div>
</template>

<script>
  import _ from 'lodash'
  import selectDown from '@/components/select-down'
  import itemDrawer from '@/components/item-drawer'
  export default {
    components: {
      'select-down': selectDown,
      'item-drawer': itemDrawer
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        filterIndex: -1,
        optIndexs: [-1, -1, -1, -1, -1],
        items: [
          {
            title: '区域',
            opts: [
              {
                code: '0',
                name: '全国'
              },
              {
                code: '1',
                name: '北京市'
              },
              {
                code: '2',
                name: '上海市'
              },
              {
                code: '3',
                name: '广州市'
              },
              {
                code: '4',
                name: '深圳市'
              },
              {
                code: '5',
                name: '重庆市'
              },
              {
                code: '6',
                name: '山东市'
              },
              {
                code: '7',
                name: '台湾省'
              }
            ]
          },
          {
            title: '性别',
            opts: [
              {
                code: '0',
                name: '全部'
              },
              {
                code: '1',
                name: '男'
              },
              {
                code: '2',
                name: '女'
              }
            ]
          },
          {
            title: '身高',
            opts: [
              {
                code: '0',
                name: '100cm'
              },
              {
                code: '1',
                name: '110cm'
              },
              {
                code: '2',
                name: '120cm'
              },
              {
                code: '3',
                name: '130cm'
              },
              {
                code: '4',
                name: '140cm'
              },
              {
                code: '5',
                name: '150cm'
              }
            ]
          },
          {
            title: '季节',
            opts: [
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
              }
            ]
          },
          {
            title: '状态',
            opts: [
              {
                code: '0',
                name: '全部'
              },
              {
                code: '1',
                name: '未捐'
              },
              {
                code: '2',
                name: '已捐'
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
      optSelected: function (filterIndex, index) {
        let c = _.cloneDeep(this.optIndexs)
        c[filterIndex] = index
        this.optIndexs = c
      },
      optReset: function (filterIndex) {
        let c = _.cloneDeep(this.optIndexs)
        c[filterIndex] = -1
        this.optIndexs = c
      },
      optConfirm: function () {
        this.filterIndex = -1
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
  }
</style>


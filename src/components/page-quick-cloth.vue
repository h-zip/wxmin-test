<template>
  <div class="container">
    <select-down-cloth :filterIndex="filterIndex" :optIndexs="optIndexs"
                       @on-filter="filterSelected" @on-opt="optSelected"
                       @on-reset="optReset" @on-ok="optOK">
    </select-down-cloth>
    <div style="background-color: #ffffff;" v-for="(cloth, index_1) in clothes" :key="index_1">
      <div class="header">
        {{ cloth.header }}
      </div>
      <cell-quick-cloth :cell="cell" :section="index_1" :row="index_2"
                        v-for="(cell, index_2) in cloth.cells" :key="index_2"
                        @on-change="countChange">
      </cell-quick-cloth>
    </div>
    <car-cloth-footer :count="carCount"></car-cloth-footer>
    <car-cloth :show="tagShow" :items="carlist"
               @on-drawer="onDrawer" @on-pop-count="onPopCount">
    </car-cloth>
  </div>
</template>

<script>
  import _ from 'lodash'
  import selectDownCloth from '@/components/select-down-cloth'
  import cellQuickCloth from '@/components/cell-quick-cloth'
  import carCloth from '@/components/car-cloth'
  import carClothFooter from '@/components/car-cloth-footer'
  export default {
    components: {
      'select-down-cloth': selectDownCloth,
      'cell-quick-cloth': cellQuickCloth,
      'car-cloth': carCloth,
      'car-cloth-footer': carClothFooter
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        filterIndex: 0,
        optIndexs: [
          [
            false, false
          ],
          [
            false, false, false
          ]
        ],
        clothes: [
          {
            header: '100cm',
            cells: [
              {
                sizeHeight: '100cm',
                sex: '0',
                season: '0',
                needs: '66',
                donate: 0
              },
              {
                sizeHeight: '100cm',
                sex: '0',
                season: '1',
                needs: '66',
                donate: 0
              },
              {
                sizeHeight: '100cm',
                sex: '1',
                season: '2',
                needs: '66',
                donate: 0
              }
            ]
          },
          {
            header: '110cm',
            cells: [
              {
                sizeHeight: '110cm',
                sex: '0',
                season: '0',
                needs: '66',
                donate: 0
              },
              {
                sizeHeight: '110cm',
                sex: '0',
                season: '1',
                needs: '66',
                donate: 0
              },
              {
                sizeHeight: '110cm',
                sex: '1',
                season: '2',
                needs: '66',
                donate: 0
              }
            ]
          },
          {
            header: '120cm',
            cells: [
              {
                sizeHeight: '120cm',
                sex: '0',
                season: '0',
                needs: '66',
                donate: 0
              },
              {
                sizeHeight: '120cm',
                sex: '0',
                season: '2',
                needs: '66',
                donate: 0
              },
              {
                sizeHeight: '120cm',
                sex: '1',
                season: '1',
                needs: '66',
                donate: 0
              }
            ]
          }
        ],
        tagShow: true,
        carlist: [
          {
            sizeHeight: '100cm',
            sex: '0',
            season: '0',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '0',
            season: '1',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          },
          {
            sizeHeight: '100cm',
            sex: '1',
            season: '2',
            needs: '66',
            donate: 0
          }
        ],
        carCount: 10
      }
    },
    watch: {},
    methods: {
      filterSelected: function (index) {
        if (index === 0) this.optIndexs = [[false, false], [false, false, false]]
        this.filterIndex = index
      },
      optSelected: function (section, row) {
        let c = _.cloneDeep(this.optIndexs)
        c[section][row] = !c[section][row]
        this.optIndexs = c
      },
      optReset: function () {
        this.optIndexs = [[false, false], [false, false, false]]
      },
      optOK: function () {
      },
      countChange: function (e, section, row) {
        let c = _.cloneDeep(this.clothes)
        c[section].cells[row].donate = e.mp.detail.value
        this.clothes = c
      },
      onPopCount (e, index) {
        let c = _.cloneDeep(this.carlist)
        c[index].donate = e.mp.detail.value
        this.carlist = c
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
    padding-bottom: 100rpx;
    .header {
      padding: 10rpx 0 10rpx 40rpx;
      border-bottom: 2rpx solid @color-gray-0;
      font-size: @font-m + 2rpx;
      color: @color-black-3;
    }
  }
</style>

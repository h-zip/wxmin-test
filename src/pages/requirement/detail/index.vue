<template>
  <div class="container">
    <textarea-a title="需求主题" placeholder="请输入需求主题" :value="value1" @on-change="onTitleChange" :pop-show="popShow"></textarea-a>
    <textarea-b title="收货地址" placeholder="请选择收货地址" :value="value2" :icon="icon" @on-click="onAddress" @on-change="onAddressChange" :pop-show="popShow"></textarea-b>
    <textarea-a title="需求描述" placeholder="请输入文字描述一下实际情况，使需求更加精准" :value="value3"@on-change="onDemandChange" :pop-show="popShow"></textarea-a>
    <img-select title="描述图片" :srcs="srcs" @choose-success="chooseImg" @on-delete="deleteImg"></img-select>
    <row-btn title="所需衣物" btn-title="添加衣物标签" @on-click="onDrawer"></row-btn>
    <item-card v-for="(item, index) in items" :key="index" :item="item" :index="index" @on-change="onCount"></item-card>
    <btn-two btn-title1="上一步" btn-title2="确认登记" @on-click1="onLast" @on-click2="onNext"></btn-two>
    <van-popup
      :show="tagShow"
      position="right"
      :overlay="true"
      @close="onDrawer"
      custom-class="pop"
      @click-overlay="onDrawer"
    >
      <div>
        <div class="pop-t">衣物</div>
        <flex-item :items="items1"></flex-item>
        <div class="pop-t">季节</div>
        <flex-item :items="items2"></flex-item>
        <div class="pop-t">身高</div>
        <flex-item :items="items3"></flex-item>
        <div class="pop-t">数量</div>
        <div class="pop-c">
          <van-input-number :value="popCount" :max="99" :min="1" @change="onPopCount"></van-input-number>
        </div>
        <btn-two btn-title1="取消" btn-title2="确认" @on-click1="onDrawer" @on-click2="onDrawer"></btn-two>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import _ from 'lodash'
  import textareaA from '@/components/textarea-a'
  import textareaB from '@/components/textarea-b'
  import imgSelect from '@/components/img-select'
  import rowBtn from '@/components/row-btn'
  import btnTwo from '@/components/btn-two'
  import itemCard from '@/components/item-card'
  import flexItem from '@/components/flex-item'
  export default {
    components: {
      'textarea-a': textareaA,
      'textarea-b': textareaB,
      'img-select': imgSelect,
      'row-btn': rowBtn,
      'btn-two': btnTwo,
      'item-card': itemCard,
      'flex-item': flexItem
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        icon: {
          name: '../../../../static/images/jia.png',
          size: '22px'
        },
        value1: '',
        value2: '添加衣物标签',
        region: [],
        requireType: '0',
        donateType: '0',
        value3: '',
        agree: false,
        srcs: [],
        tagShow: false,
        popShow: false,
        popCount: 1,
        items: [
          {
            a: '女',
            b: '夏装',
            c: '60cm',
            d: 12
          },
          {
            a: '男',
            b: '东装',
            c: '45cm',
            d: 27
          }
        ],
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
      onTitleChange (v) {
        console.log(v)
        this.value1 = v.mp.detail.value
      },
      onAddressChange (v) {
        console.log(v)
        this.value2 = v.mp.detail.value
      },
      onDemandChange (v) {
        console.log(v)
        this.value3 = v.mp.detail.value
      },
      onClick1 () {

      },
      chooseImg (p) {
        this.srcs = this.srcs.concat(p)
      },
      deleteImg (index) {
        this.srcs.splice(index, 1)
      },
      onLast () {
        wx.router.pop()
      },
      onNext () {
        console.log('onNext')
      },
      onAddress () {
        console.log('onAddress')
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
      onCount (v, index) {
        let items = _.cloneDeep(this.items)
        items[index].d = v.mp.detail.value
        this.items = items
      },
      onPopCount (v) {
        this.popCount = v.mp.detail.value
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
  @import "../../../styles/index";
  .container{
    background-color: @color-white-1;
    min-height: 100vh;
    width: 100%;
    /deep/ .pop{
      width: 85%;
      min-height: 100%;
    }
    .pop-t{
      font-size: @font-m + 4rpx;
      padding: 10rpx 0 10rpx 40rpx;
      background-color: @color-gray-1;
    }
    .pop-c{
      padding: 40rpx 0 40rpx 40rpx;
    }
  }
</style>

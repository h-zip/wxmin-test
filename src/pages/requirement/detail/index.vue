<template>
  <div class="container">
    <textarea-a title="需求主题" placeholder="请输入需求主题" :value="value1" @on-change="onTitleChange" :pop-show="popShow"></textarea-a>
    <textarea-b title="收货地址" placeholder="请选择收货地址" :value="value2" :icon="icon" @on-click="onAddress" @on-change="onAddressChange" :pop-show="popShow"></textarea-b>
    <textarea-a title="需求描述" placeholder="请输入文字描述一下实际情况，使需求更加精准" :value="value3"@on-change="onDemandChange" :pop-show="popShow"></textarea-a>
    <img-select title="描述图片" :srcs="srcs" @choose-success="chooseImg" @on-delete="deleteImg"></img-select>
    <row-btn title="所需衣物" btn-title="添加衣物标签" @on-click="onDrawer"></row-btn>
    <item-card v-for="(item, index) in items1" :key="index" :item="item" :index="index" @on-change="onCount"></item-card>
    <btn-two btn-title1="上一步" btn-title2="确认登记" @on-click1="onLast" @on-click2="onNext"></btn-two>
    <item-drawer :show="tagShow" :items="items2" @on-drawer="onDrawer" :opt-indexs="optIndexs" :pop-count="popCount"
                 @on-selected="onDrawerSelected" :need-count="true" @on-pop-count="onPopCount"></item-drawer>
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
  import itemDrawer from '@/components/item-drawer'
  export default {
    components: {
      'textarea-a': textareaA,
      'textarea-b': textareaB,
      'img-select': imgSelect,
      'row-btn': rowBtn,
      'btn-two': btnTwo,
      'item-card': itemCard,
      'item-drawer': itemDrawer
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
        items1: [
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
        items2: [
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
        optIndexs: [-1, -1]
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
  @import "../../../styles/index";
  .container{
    background-color: @color-white-1;
    min-height: 100vh;
    width: 100%;
  }
</style>

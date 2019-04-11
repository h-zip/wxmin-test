<template>
  <div class="container">
    <select-btn-two :titles="titles" @on-click="headerClick"></select-btn-two>
    <div class="p">
      <donate-detail-card :cell="detail"></donate-detail-card>
      <div class="contact">
        <donate-contact :cell="detail"></donate-contact>
      </div>
      <div class="donater">
        <overflow-row :imgs="imgs"></overflow-row>
      </div>
    </div>
    <div class="demand">
      <donate-demand :data="detail" @on-change="onDemandChange" @on-click="onDemandClick"></donate-demand>
    </div>
    <div class="feedback">
      <donate-feedback ref="feedback" :data="detail"></donate-feedback>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import selectBtnTwo from '@/components/select-btn-two'
  import donateDetailCard from '@/components/donate-detail-card'
  import donateContact from '@/components/donate-contact'
  import overflowRow from '@/components/overflow-row'
  import donateDemand from '@/components/donate-demand'
  import donateFeedback from '@/components/donate-feedback'
  export default {
    components: {
      'select-btn-two': selectBtnTwo,
      'donate-detail-card': donateDetailCard,
      'donate-contact': donateContact,
      'overflow-row': overflowRow,
      'donate-demand': donateDemand,
      'donate-feedback': donateFeedback
    },
    props: {
    },
    computed: {},
    data: function () {
      return {
        titles: ['需求', '反馈'],
        detail: {
          title: '为雨花斋的家人们送去关爱（老人衣物）',
          size: '160-180cm',
          location: '上海市',
          date: '56',
          donated: '120',
          demand: '40',
          process: '85',
          detail: '雨花斋是上海的一个专门为公众提供免费素食的公益食堂，同事也有不少经济困难的 群总来此就餐，也是贝蓝...',
          detailFull: '雨花斋是上海的一个专门为公众提供免费素食的公益食堂，同事也有不少经济困难的 群总来此就餐，也是贝蓝,雨花斋是上海的一个专门为公众提供免费素食的公益食堂，同事也有不少经济困难的 群总来此就餐，也是贝蓝',
          contact: '吴XX',
          phone: '130XXXX1234',
          receiver: '上海市静安区XXXX',
          feedback: 'http://bbaltcdn.hanspro.cn/demand290.jpg',
          demandList: [
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
              sex: '0',
              season: '1',
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
              sex: '0',
              season: '1',
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
              sex: '0',
              season: '1',
              needs: '66',
              donate: 0
            },
            {
              sizeHeight: '100cm',
              sex: '0',
              season: '1',
              needs: '66',
              donate: 0
            }
          ]
        },
        imgs: [
          '/static/images/default_avatar.jpg',
          '/static/images/default_avatar.jpg',
          '/static/images/default_avatar.jpg',
          '/static/images/default_avatar.jpg',
          '/static/images/default_avatar.jpg',
          '/static/images/default_avatar.jpg',
          '/static/images/default_avatar.jpg',
          '/static/images/default_avatar.jpg'
        ]
      }
    },
    watch: {},
    methods: {
      headerClick: function (i) {
        let c = i ? '.container' : '.p'
        wx.createSelectorQuery().select(c).boundingClientRect(function (rect) {
          wx.pageScrollTo({
            scrollTop: rect.height
          })
        }).exec()
      },
      onDemandChange: function (i, e) {
        let c = _.cloneDeep(this.detail)
        c.demandList[i].donate = e.mp.detail.value
        this.detail = c
      },
      onDemandClick: function (i) {
        if (i === 1) {
          wx.router.push(wx.router.routes.donate.pack)
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
  @import "../../../styles/index";
  .container{
    background-color: @color-gray-1;
    min-height: 100vh;
    width: 100%;
    .contact {
      padding-top: 20rpx;
    }
    .donater {
      padding-top: 20rpx;
    }
    .demand {
      padding-top: 20rpx;
    }
    .feedback {
      padding-top: 20rpx;
    }
  }
</style>

<template>
  <div class="container">
    <img mode="widthFix" src="../../../../static/images/bg.png" style="width: 100%"/>
    <img mode="widthFix" src="../../../../static/images/logo.png" style="display: block;width: 50%;margin: auto;"/>
    <input-box-a title="联系人" placeholder="请输入联系人" :value="value1" @on-change="change1"></input-box-a>
    <input-box-a title="手机号" placeholder="请输入手机号" :value="value2" @on-change="change2"></input-box-a>
    <input-box-b title="区域" placeholder="请输入区域" :value="region" @on-change="bindRegionChange"></input-box-b>
    <radio-box-a title="需求类型" :value="requireType" :radios="radios1" check-color="#00a392" :icon-colors="iconColors" @on-change="requireChange" @on-icon="requireDetail"></radio-box-a>
    <radio-box-b title="捐赠类型" :value="donateType" :radios="radios2" check-color="#00a392" @on-change="donateChange"></radio-box-b>
    <input-box-a v-if="requireType === '1'" title="邮箱地址" placeholder="请输入邮箱地址" :value="value3" @on-change="change3"></input-box-a>
    <check-box-a label1="阅读并同意需求方" label2="《需知协议》" :value="agree" check-color="#00a392" @on-change="agreeChange" @on-click="needknownClick"></check-box-a>
    <div class="area" style="padding-bottom: 60rpx">
      <van-button size="large" custom-class="btn" @click="btnClick">下一步完善需求</van-button>
    </div>
  </div>
</template>

<script>
  import inputBoxA from '@/components/input-box-a'
  import inputBoxB from '@/components/input-box-b'
  import radioBoxA from '@/components/radio-box-a'
  import radioBoxB from '@/components/radio-box-b'
  import checkBoxA from '@/components/checkbox-a'
  export default {
    components: {
      'input-box-a': inputBoxA,
      'input-box-b': inputBoxB,
      'radio-box-a': radioBoxA,
      'radio-box-b': radioBoxB,
      'check-box-a': checkBoxA
    },
    props: {
    },
    computed: {
      regionText: function () {
        let t = this.region.length ? this.region[0] + this.region[1] + this.region[2] : '请选择城市'
        return t
      }
    },
    data: function () {
      return {
        value1: '程序员',
        value2: '123456789012',
        region: [],
        requireType: '0',
        donateType: '0',
        value3: 'xxxx@163.com',
        agree: false,
        radios1: [
          '个人',
          '集体'
        ],
        radios2: [
          '衣物',
          '物品'
        ],
        iconColors: [
          '#0099C9',
          '#00a392'

        ]

      }
    },
    watch: {},
    methods: {
      change1 (v) {
        this.value1 = v.mp.detail.value
        console.log(this.value1)
      },
      change2 (v) {
        this.value2 = v.mp.detail.value
        console.log(this.value2)
      },
      change3 (v) {
        this.value3 = v.mp.detail.value
        console.log(this.value3)
      },
      bindRegionChange (v) {
        this.region = v.mp.detail.value
        console.log(this.region)
      },
      requireChange (v) {
        this.requireType = v.mp.detail
        console.log(v)
      },
      requireDetail () {
      },
      donateChange (v) {
        this.donateType = v.mp.detail
        console.log(v)
      },
      agreeChange (v) {
        this.agree = v.mp.detail
        console.log(v)
      },
      needknownClick () {

      },
      btnClick () {
        wx.router.push(wx.router.routes.requirement.detail)
      }
    },
    onLoad: function () {
      // console.log(wx.router)
    },
    onShow: function () {
    }
  }
</script>

<style scoped lang="less">
  @import "../../../styles/index";
  .container{
    background-color: @color-green-0;
    min-height: 100vh;
    .area{
      padding: 16rpx 40rpx;
    }
    /deep/ .btn {
      background: @color-green-1;
      border-width: 0;
      color: @color-white-0;
      height: 80rpx;
      line-height: 76rpx;
      font-size: @font-m;
    }
  }
</style>


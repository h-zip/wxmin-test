<template>
  <div style="background-color: #7ecbc3;min-height: 100vh;">
    <img mode="widthFix" src="../../../../static/images/bg.png" style="width: 100%"/>
    <img mode="widthFix" src="../../../../static/images/logo.png" style="display: block;width: 50%;margin: auto;"/>
    <div class="area">
      <vant-row custom-class="row">
        <vant-col span="6" custom-class="col col1">
          联系人
        </vant-col>
        <vant-col span="18" custom-class="col">
          <van-field :value="value1" placeholder="请输入联系人" @change="change1" input-class="i1" custom-style="padding:0px 15px;height:100rpx;line-height:100rpx;" ></van-field>
        </vant-col>
      </vant-row>
    </div>
    <div class="area">
      <vant-row custom-class="row">
        <vant-col span="6" custom-class="col col1">
          手机号
        </vant-col>
        <vant-col span="18" custom-class="col">
          <van-field :value="value2" placeholder="请输入手机号" @change="change2" input-class="i1" custom-style="padding:0px 15px;height:100rpx;line-height:100rpx;"></van-field>
        </vant-col>
      </vant-row>
    </div>
    <div class="area">
      <vant-row custom-class="row">
        <vant-col span="6" custom-class="col col1">
          区域
        </vant-col>
        <vant-col span="18" custom-class="col">
          <picker
            mode="region"
            @change="bindRegionChange"
            :value="region">
            <div style="padding-left: 30rpx;color: #495060;">{{ regionText }}</div>
          </picker>
        </vant-col>
      </vant-row>
    </div>
    <div class="area">
      <vant-row custom-class="row">
        <vant-col span="6" custom-class="col col1">
          需求类型
        </vant-col>
        <van-radio-group :value="requireType" @change="requireChange" checked-color="#00d0cc" custom-class="col">
          <vant-col span="5" offset="1" custom-class="col">
            <van-radio name="0" checked-color="#00a392" custom-class="col" label-class="radio-label">个人</van-radio>
          </vant-col>
          <vant-col span="1" offset="0" custom-class="col">
            <van-icon size="40rpx" color="#0099C9" custom-class="iconfont icon-tip"/>
          </vant-col>
          <vant-col span="5" offset="1" custom-class="col">
            <van-radio name="1" checked-color="#00a392" custom-class="col" label-class="radio-label">集体</van-radio>
          </vant-col>
          <vant-col span="1" offset="0" custom-class="col">
            <van-icon size="40rpx" color="#00a392" custom-class="iconfont icon-tip" />
          </vant-col>
        </van-radio-group>
      </vant-row>
    </div>
    <div class="area">
      <vant-row custom-class="row">
        <vant-col span="6" custom-class="col col1">
          捐赠类型
        </vant-col>
        <van-radio-group :value="donateType" @change="donateChange" checked-color="#00d0cc" custom-class="col">
          <vant-col span="5" offset="1" custom-class="col">
            <van-radio name="0" checked-color="#00a392" custom-class="col" label-class="radio-label">衣物</van-radio>
          </vant-col>

          <vant-col span="5" offset="1" custom-class="col">
            <van-radio name="1" checked-color="#00a392" custom-class="col" label-class="radio-label">物品</van-radio>
          </vant-col>

        </van-radio-group>
      </vant-row>
    </div>
    <div class="area" v-if="requireType === '1'">
      <vant-row custom-class="row">
        <vant-col span="6" custom-class="col col1">
          邮箱地址
        </vant-col>
        <vant-col span="18" custom-class="col">
          <van-field :value="value3" placeholder="请输入邮箱地址" @change="change3" input-class="i1" custom-style="padding:0px 15px; height:100rpx;line-height:100rpx;"></van-field>
        </vant-col>
      </vant-row>
    </div>
    <div class="area">
      <vant-row custom-class="">
        <vant-col span="12" custom-class="col2">
          <van-checkbox :value="agree" @change="agreeChange" shape="square" checked-color="#00a392" wrap-class="checkbox-icon" label-class="checkbox-label">阅读并同意需求方</van-checkbox>
        </vant-col>
        <vant-col span="12" custom-class="col3">
          <div style="color: #FFFFFF;font-size: 32rpx;padding-top: 4rpx;">《需知协议》</div>
        </vant-col>
      </vant-row>
    </div>
  </div>
</template>

<script>
  export default {
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
        agree: false

      }
    },
    watch: {},
    methods: {
      change1 (v) {
        this.value1 = v.mp.detail
        console.log(this.value1)
      },
      change2 (v) {
        this.value2 = v.mp.detail
        console.log(this.value2)
      },
      change3 (v) {
        this.value3 = v.mp.detail
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
      donateChange (v) {
        this.donateType = v.mp.detail
        console.log(v)
      },
      agreeChange (v) {
        this.agree = v.mp.detail
        console.log(v)
      }
    },
    onLoad: function () {
      // console.log(wx)
    },
    onShow: function () {
    }
  }
</script>

<style scoped lang="less">
  @import "../../../styles/index";
  .area{
    padding: 16rpx 40rpx;
  }
  div{
    /deep/ .i1 {
      font-size: 32rpx;
      height: 100rpx;
    }
    /deep/ .row {
      height: 100rpx;
      border: #dedede 1px solid;
      border-radius: 5px;
      background-color: #FFFFFF;
      font-size: 32rpx;
      color: #999;
    }
    /deep/ .col {
      height: 100%;
      line-height: 100rpx;
    }
    /deep/ .col1 {
      background-color: #f9f9f9;
      text-align: center;
    }
    /deep/ .col2 {
      height: 100%;
      line-height: 60rpx;
    }
    /deep/ .col3 {
      height: 100%;
      line-height: 60rpx;
      margin-left: -20rpx;
    }
    /deep/ .checkbox-label {
      font-size: 32rpx;
      color: #FFFFFF;
    }
    /deep/ .checkbox-icon {
      background: #FFFFFF;
    }
    /deep/ .radio-label {
      font-size: 32rpx;
    }
  }
</style>


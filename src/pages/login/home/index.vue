<template>
  <div class="container">
    <img mode="widthFix" src="../../../../static/images/logo.svg" class="logo"/>
    <div class="header-box">
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <div class="nick-box">
      <open-data type="userNickName"></open-data>
    </div>
    <div class="btn-box">
      <van-button size="large" custom-class="btn" @click="btnClick" open-type="getUserInfo" @getuserinfo="onUserInfo">用户信息授权</van-button>
    </div>
    <div class="btn-box">
      <van-button size="large" custom-class="btn" @click="btnClick" open-type="getPhoneNumber" @getphonenumber="onPhoneNumber">用户手机号授权</van-button>
    </div>
  </div>
</template>

<script>
import api from '@/service'
export default {
  data () {
    return {
      code: ''
    }
  },
  components: {
  },
  methods: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      this.user()
    },
    user () {
      console.log(api)
      api.temlete.user.post({})
        .then((res) => {
          console.log(res)
        })
        .catch()
    },
    onUserInfo (detail) {
      console.log(detail)
    },
    onPhoneNumber (detail) {
      console.log(detail)
    }
  },
  created () {
    // let app = getApp()
  },
  onShow () {
    let self = this
    // console.log(wx.store)
    wx.checkSession({
      success () {
        // session_key 未过期，并且在本生命周期一直有效
        let code = wx.store.state.code
        console.log('success:' + code)
        self.code = code
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        wx.login({
          success (res) {
            if (res.code) {
              wx.store.commit('setCode', res.code)
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
  }
}
</script>

<style scoped lang="less">
  @import "../../../styles/index";
  .container{
    background-color: @color-green-0;
    min-height: 100vh;
    width: 100%;
    .logo {
      display: block;
      width: 50%;
      margin: auto;
    }
    .header-box {
      padding-top: 80rpx;
      width: 30%;
      margin: auto;
    }
    .nick-box {
      padding-top: 40rpx;
      text-align: center;
      color: @color-white-0;
    }
    .btn-box {
      padding: 100rpx 80rpx 80rpx 80rpx;
      /deep/ .btn {
        background: @color-green-1;
        border-width: 0;
        color: @color-white-0;
        height: 80rpx;
        line-height: 76rpx;
        font-size: @font-m;
      }
    }
  }
</style>

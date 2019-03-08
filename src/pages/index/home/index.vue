<template>
  <div>
    234
    <vant-button @click="clickHandle" custom-class="b" type="primary">默认按钮</vant-button>
    <card :text="1233"></card>
  </div>
</template>

<script>
import api from '@/service'
import card from '@/components/card'
// import { formatTime } from '@/utils/index'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
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
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="less">
  @import "../../../styles/index";
  div{
    /deep/ .b {
      background: @primary-color !important;
    }
  }
</style>

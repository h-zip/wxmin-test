<template>
  <div class="container">
  </div>
</template>

<script>
import api from '@/service'
export default {
  data () {
    return {
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
    }
  },
  mounted () {
    // wx.router.redirect(wx.router.routes.login.home)
  },
  created () {
    // let app = getApp()
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

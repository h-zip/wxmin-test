<template>
  <div>
    234
    <i-button @click="clickHandle">默认按钮</i-button>
    <card :text="1233"></card>
  </div>
</template>

<script>
import card from '@/components/card'

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
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

</style>

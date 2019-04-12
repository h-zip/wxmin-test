import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import utils from '@/utils'
Vue.config.productionTip = false
App.mpType = 'app'
wx.router = router
wx.store = store
let code = utils.localstorage.get('code')
store.commit('setCode', code)
// let qqmapsdk = new QQMapWX({
//   key: 'LJJBZ-5DZCG-X2YQ4-IBJWZ-42TH2-Y7BYO'
// })
// wx.qqmapsdk = qqmapsdk
const app = new Vue(App)
app.$mount()

import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
App.mpType = 'app'
wx.router = router
const app = new Vue(App)
app.$mount()

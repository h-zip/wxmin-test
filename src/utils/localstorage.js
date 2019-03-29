export default {
  getAsync (config) {
    wx.getStorage(config)
    // if (/^\{.*\}$/.test(value) || /^\[.*\]$/.test(value)) value = JSON.parse(value)
  },
  get (key) {
    return wx.getStorageSync(key)
  },
  setAsync (config) {
    // if (typeof value === typeof {} || typeof value === typeof []) value = JSON.stringify(value)
    wx.setStorage(config)
  },
  set (key, value) {
    wx.setStorageSync(key, value)
  },
  removeAsync (config) {
    wx.removeStorage(config)
  },
  remove (key) {
    wx.removeStorageSync(key)
  },
  clearAsync (config) {
    wx.clearStorage(config)
  },
  clear () {
    wx.clearStorageSync()
  }
}

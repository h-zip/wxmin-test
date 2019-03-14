const routes = {
  donate: {
    home: '/pages/home/home/main'
  },
  index: {
    home: '/pages/index/home/main'
  },
  member: {
    home: '/pages/member/home/main'
  },
  partner: {
    home: '/pages/partner/home/main'
  },
  requirement: {
    home: '/pages/requirement/home/main',
    detail: '/pages/requirement/detail/main'
  }
}
let push = function (route, args) {
  let str = JSON.stringify(args)
  let r = args ? route + '?args=' + str : route
  wx.navigateTo({
    url: r
  })
}
let pop = function (delta) {
  wx.navigateBack(delta)
}
let switchTab = function (route) {
  wx.switchTab({
    url: route
  })
}
let replaceRoot = function (route, args) {
  let str = JSON.stringify(args)
  let r = route + '?args=' + str
  wx.reLaunch({
    url: r
  })
}
let redirect = function (route, args) {
  let str = JSON.stringify(args)
  let r = route + '?args=' + str
  wx.redirectTo({
    url: r
  })
}
const router = {
  routes,
  push,
  pop,
  switchTab,
  replaceRoot,
  redirect
}
export default router

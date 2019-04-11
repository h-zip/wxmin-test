const routes = {
  login: {
    home: '/pages/login/home/main'
  },
  donate: {
    home: '/pages/donate/home/main',
    detail: '/pages/donate/detail/main',
    pack: '/pages/donate/pack/main',
    delivery: '/pages/donate/delivery/main'
  },
  index: {
    home: '/pages/index/home/main'
  },
  member: {
    home: '/pages/member/home/main',
    track: {
      home: '/pages/member/track/home/main',
      summary: '/pages/member/track/summary/main',
      map: '/pages/member/track/map/main'
    }
  },
  partner: {
    home: '/pages/partner/home/main'
  },
  requirement: {
    home: '/pages/requirement/home/main',
    detail: '/pages/requirement/detail/main'
  },
  point: {
    rank: '/pages/point/rank/main'
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

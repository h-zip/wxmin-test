import base from './base'
import baseConfig from './config'
// const dataStr = ['put', 'post', 'patch', 'delete']
// const paramsStr = ['get'];
let request = function (url, method, args) {
  let options = baseConfig
  // paramsStr.includes(method) ? config.params = args : config.data = args
  return base.flyService(url, method, args, options)
}

export default {request: request}

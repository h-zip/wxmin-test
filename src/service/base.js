import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
// axios.defaults.baseURL = 'https://api.example.com'
// axios.defaults.timeout = 10000

let flyService = function (url, method, config, options) {
  return fly[method](url, config, options)
}
export default {flyService: flyService}

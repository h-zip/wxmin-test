import service from './service'
import url from './url'
let templeteapi = {
  user: {
    get: (args) => { return service.request(url.user, 'get', args) },
    post: (args) => { return service.request(url.user, 'post', args) },
    put: (args) => { return service.request(url.user, 'put', args) },
    delete: (args) => { return service.request(url.user, 'delete', args) }
  }
}
export default templeteapi

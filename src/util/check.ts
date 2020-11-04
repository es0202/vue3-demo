import router from '../router/index'
import { Cookie } from './cookie'
//router为login死循环
const whiteList = ['/home/login','/home/hello']

router.beforeEach((to, from, next) => {
  if (!Cookie.getCookie('cid')) {
    //未登录
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      next({
        path: '/home/login',
      })
    }
  } else {
    next()
  }
})

router.afterEach((route) => {})

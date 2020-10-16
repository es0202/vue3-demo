// ///<reference path="./typings/shim.d.ts" />
import { createApp } from 'vue'
//没有声明.vue模块，编译错误会提示找不到App.vue模块
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import SvgIcon from './components/SvgIcon.vue'

//createApp(App).mount('#app')
const app = createApp(App)
app.use(Antd)
//全局注册SvgIcon组件
app.component('svg-icon', SvgIcon)

window.vm = app
window.router = router
window.store = store

// 通过use 将 路由插件安装到 app 中
app.use(router)
app.use(store)
app.mount('#app')
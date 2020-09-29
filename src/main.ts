import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'

//createApp(App).mount('#app')
const app = createApp(App)
window.vm = app
window.router = router
window.store = store
// 通过use 将 路由插件安装到 app 中
app.use(router)
app.use(store)
app.mount('#app')

interface obj {
  one: number,
  two: number
}
function add({ one, two }: obj) {
  return one + two;
}

const total = add({ one: 1, two: 2 });
const xiaojiejie: (string | number)[] = ["dajiao", "teacher", 28];
const arr: [string, string, number] = ["dajiao", "teacher", 28];
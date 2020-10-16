import { createRouter, createWebHistory } from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHistory(),
  // 路由地址
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('/@/components/HelloWorld.vue'),
        },
      ],
    },
    {
      path: '/todo',
      // 必须添加.vue后缀
      component: () => import('../views/todo/index.vue'),
    },
    {
      path: '/test',
      component: () => import('../test'),
    },
    {
      path: '/login',
      component: () => import('../views/login/index.vue'),
    },
  ],
})

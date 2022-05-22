import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '', // 默认子路由, 可以'/'或者''， 建议''
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */ '@/views/home/index.vue'),
        // 配置在子路由会更加动态
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: 'role' */ '@/views/role/index.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue')
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/* webpackChunkName: 'resource' */ '@/views/resource/index.vue')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/* webpackChunkName: 'course' */ '@/views/course/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: 'user' */ '@/views/user/index.vue')
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/* webpackChunkName: 'advert' */ '@/views/advert/index.vue')
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () => import(/* webpackChunkName: 'advert-space' */ '@/views/advert-space/index.vue')
      }]
  },
  {
    // * 可以不放在最后，router会做处理。 不过一般放最后
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: '404' */ '@/views/error-page/404.vue')
  }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫：任何页面的访问都要经过这里
// to：要去哪里的路由信息
// from：从哪里来的路由信息
// next：通行的标志
router.beforeEach((to, from, next) => {
  // to.matched 是一个数组（匹配到是路由记录）
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      // 跳转到登录页面
      next({
        name: 'login',
        query: { // 通过 url 传递查询字符串参数
          redirect: to.fullPath // 把登录成功需要返回的页面告诉登录页面
        }
      })
    } else {
      next() // 允许通过
    }
  } else {
    next() // 允许通过
  }

  // // 路由守卫中一定要调用 next，否则页码无法展示
  // next()
  // if (to.path !== '/login') {
  //   // 校验登录状态
  // }
})

export default router

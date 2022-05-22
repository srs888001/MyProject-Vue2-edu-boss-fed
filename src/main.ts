import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
// 全局样式里面添加了， 但是那边添加的是未压缩的
// import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式
import './styles/index.scss'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

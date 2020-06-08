import Vue from 'vue'
import App from './App.vue'
import adpater from "./utils/adpater.js"
Vue.use(adpater)
import router from './router/index.js'
import VueKeepScrollPosition from 'vue-keep-scroll-position'
// 导入 element-ui
import ElementUI from 'element-ui'
// 导入 element-ui的样式
import 'element-ui/lib/theme-chalk/index.css'
// 注册element-ui
Vue.use(ElementUI)

// 导入 lazy-load 指令
import Vant from 'vant'
// 导入 vant 的样式
import 'vant/lib/index.css'
// 使用 vant


Vue.use(Vant)
Vue.use(VueKeepScrollPosition)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

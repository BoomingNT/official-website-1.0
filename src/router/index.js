import Vue from 'vue'
// 导入 vue-router
import VueRouter from 'vue-router'
import childer from '../components/HelloWorld.vue'
import ls_h5 from '../components/ls_h5.vue'
//注册 vue-router
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
    //这里就是路由的配制项
    routes: [
        {
            path: '/',
            component: childer
        },
        {
            path: '/home',
            component: ls_h5 
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router


import Vue from 'vue'
import Router from 'vue-router'

//ensure 延迟加载？？？
//http://www.css88.com/doc/webpack2/guides/code-splitting-require/  require.ensure
const index = r => require.ensure([], () => r(require('@/components/index/index')),"index")
const infro = r => require.ensure([], () => r(require('@/components/member/infro')),"infro")
const edit = r => require.ensure([], () => r(require('@/components/index/edit')),"edit")
const lifelist = r => require.ensure([], () => r(require('@/components/list/lifelist')),"lifelist")
// import index from '@/components/index'

Vue.use(Router)
//路由地址
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/infro',
            name: 'infro', //个人信息修改页
            component: infro
        },
        {
            path: '/edit',
            name: 'edit',
            component: edit
        },
        {
            path: '/lifelist',
            name: 'lifelist',
            component: lifelist
        }
    ]
})

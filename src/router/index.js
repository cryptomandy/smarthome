import Vue from 'vue'
import Router from 'vue-router'

//ensure 延迟加载？？？
//http://www.css88.com/doc/webpack2/guides/code-splitting-require/  require.ensure
const index = r => require.ensure([], () => r(require('@/page/index/index')),"index")
const infro = r => require.ensure([], () => r(require('@/page/member/infro')),"infro")
const edit = r => require.ensure([], () => r(require('@/page/index/edit')),"edit")
const lifelist = r => require.ensure([], () => r(require('@/page/list/lifelist')),"lifelist")
// import index from '@/page/index'

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
            path: '/infro',  //个人信息修改页
            name: 'infro',
            component: infro
        },
        {
            path: '/edit', //我的应用编辑页
            name: 'edit',
            component: edit
        },
        {
            path: '/lifelist', //资讯列表页
            name: 'lifelist',
            component: lifelist
        }
    ]
})

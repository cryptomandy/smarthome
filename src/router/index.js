import Vue from 'vue'
import Router from 'vue-router'

//TODO: ensure 延迟加载
//http://www.css88.com/doc/webpack2/guides/code-splitting-require/  require.ensure
const index = r => require.ensure([], () => r(require('@/page/index/index')),"index")
const infro = r => require.ensure([], () => r(require('@/page/member/infro')),"infro")
const edit = r => require.ensure([], () => r(require('@/page/index/edit')),"edit")
const lifelist = r => require.ensure([], () => r(require('@/page/list/lifelist')),"lifelist")
const book = r => require.ensure([], () => r(require('@/page/book/book')),"book")
const shop = r => require.ensure([], () => r(require('@/page/book/shop')),"shop")
const calSelect = r => require.ensure([], () => r(require('@/page/common/calSelect')),"calSelect")
// import index from '@/page/index'

Vue.use(Router)
//路由地址
export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: index
        },
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
        },
        {
            path: '/book', //订单填写
            name: 'book',
            component: book
        },
        {
            path: '/shop', //购物车
            name: 'shop',
            component: shop
        },
        {
            path: '/calselect', //购物车
            name: 'calSelect',
            component: calSelect
        }
    ]
})

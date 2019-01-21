import Vue from 'vue'
import Router from 'vue-router'

//TODO: ensure 延迟加载
//http://www.css88.com/doc/webpack2/guides/code-splitting-require/  require.ensure
/**
* @name 加载组件中name：代表打包出来是否打包在一个模块中
* 可以用import代替require.ensure 【http://www.cnblogs.com/Man-Dream-Necessary/p/9543738.html】
* import()推荐使用这种方式(需要webpack>2.4)
*
*
*/
const index = r => require.ensure([], () => r(require('@/page/index/index')),"index")
const infro = r => require.ensure([], () => r(require('@/page/member/infro')),"index")
const edit = r => require.ensure([], () => r(require('@/page/index/edit')),"index")
const lifelist = r => require.ensure([], () => r(require('@/page/list/lifelist')),"book")
const book = r => require.ensure([], () => r(require('@/page/book/book')),"book")
const shop = r => require.ensure([], () => r(require('@/page/book/shop')),"book")
const calSelect = r => require.ensure([], () => r(require('@/page/common/calSelect')),"component")
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
            path: '/book', //es6
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

/**
* @name router
*
*
*
*/

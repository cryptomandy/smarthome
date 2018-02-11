import Vue from 'vue'
import Router from 'vue-router'

//ensure 延迟加载？？？
//http://www.css88.com/doc/webpack2/guides/code-splitting-require/  require.ensure
const index = r => require.ensure([], () => r(require('@/components/index/index')),"index")
const member = r => require.ensure([], () => r(require('@/components/member/member')),"member")
const infro = r => require.ensure([], () => r(require('@/components/member/infro')),"infro")
const edit = r => require.ensure([], () => r(require('@/components/index/edit')),"edit")
const select = r => require.ensure([], () => r(require('@/components/index/select')),"select")
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
          path: '/member',
          name: 'member',
          component: member
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
            path: '/select',
            name: 'select', 
            component: select
        }
    ]
})

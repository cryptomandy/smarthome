## vuex

### vuex 核心概念
https://vuex.vuejs.org/zh-cn/actions.html

### 功能说明
* mutations: 同步执行
* actions: 可以异步执行

### actions
* Actions 支持同样的载荷方式和对象方式进行分发：
`
    // 以载荷形式分发
    store.dispatch('incrementAsync', {
        amount: 10
    })

    // 以对象形式分发
    store.dispatch({
        type: 'incrementAsync',
        amount: 10
    })
`
### module模块



### 功能场景



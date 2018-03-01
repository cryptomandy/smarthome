## vuex

### vuex 核心概念
https://vuex.vuejs.org/zh-cn/actions.html

### 功能说明
* mutations: 同步执行
* actions: 可以异步执行

### actions
* Actions 支持同样的载荷方式和对象方式进行分发
```
    // 以载荷形式分发
    store.dispatch('incrementAsync', {
        amount: 10
    })

    // 以对象形式分发
    store.dispatch({
        type: 'incrementAsync',
        amount: 10
    })
```

### mutations
https://vuex.vuejs.org/zh-cn/mutations.html


### action
action 和 mutation的区别
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

### module模块
https://vuex.vuejs.org/zh-cn/modules.html


### 功能场景



## vuex 梳理
* vuex说明 https://vuex.vuejs.org/zh-cn/intro.html
    ![vue](https://vuex.vuejs.org/zh-cn/images/vuex.png)

* Vuex 和单纯的全局对象有以下两点不同:
    1. Vuex 的状态存储是响应式的。
    当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
    2. 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化

* mock.js 生成数据
https://github.com/nuysoft/Mock/wiki/Syntax-Specification







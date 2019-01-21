### 技术栈：smarthome
vue + vue-router + vuex + es6 + webpack + axios + flex + less 知识梳理和功能

### 功能列表
- 频道编辑
- 资讯列表（加载）
- 购物车功能（计算和选择）
- 日历选择功能
- 注册信息验证

### 项目层级结构
```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── calender
│   │   │   └── calender.vue                    // 日历组件
│   │   ├── dialog
│   │   │   └── alertTip.vue                    // 弹框提示组件
│   │   └── footer
│   │       └── footer.vue                      // 底部公共组件
│   ├── config                                  // 基本配置
│   │   └── reg.js                              // 正则规则
│   images                                      // 公共图片
│   |——page
│   │   ├── book
│   │   │   ├── book.vue                        // 下单页
│   │   │   └── shop.vue                        // 购物车
│   │   ├── common
│   │   │   └── calSelect.vue                    // 日历选择页
│   │   ├── index
│   │   │   ├── index.vue                       // 首页
│   │   │   └── edit.vue                        // 频道编辑
│   │   ├── list
│   │   │   └── lifelist.vue                    // 列表页
│   │   ├── member
│   │   │   └── infro.vue                       // 个人信息页
│   ├── plugins                                 // 引用的插件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── store.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   └── mutation-types.js                   // 定义常量muations名
│   └── style
│       ├── fn
│       │   └── setonepx.less                   // ipx问题
│       ├── fonts                               // 字体图标
│       ├── base.less                           // 公共样式文件
│       ├── class.less                          // 全局有相同class样式的文件
│       ├── mixin.less                          // 混合样式配置文件
│       └── color.less                          // 颜色设置文件
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.
```
### 规范列表
#### 样式
- class用下划线 aaa-bbb
- less变量用中划线 aaa_bbb
区分样式，方便修改
#### 方法名
- 驼峰写法 eg：aaaBbb



### vue文档注释
- api说明 https://cn.vuejs.org/v2/api/




### 知识链接
* 单页面模式和多页面模式
https://www.cnblogs.com/veinyin/p/7911292.html

* git的配置说明
https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE

* md文件编辑规则
http://blog.csdn.net/ljc_563812704/article/details/53464039

* import 和 require区别
commonjs 的 require 是加载时执行; 而 es6 的 import 是调用时执行，加载时只产生引用
比如引入模块里的值异步的产生了变化， require 他的文件的值是不变的; 而 import 的，则会根据模块值的变化而变化


* [SPA](http://web.jobbole.com/94065/)

- SPA 应用优势；
提升页面切换体验
降低切换时间
易于部署&前后端分离

- 性能问题：
初始加载脚本较大
首屏空白时间较长
页面返回时，数据被动重新拉取




# webpack 打包原理
https://www.jianshu.com/p/e24ed38d89fd


### 前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) and [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

同时配套一个系列的教程文章，如何从零构建后一个完整的后台项目，建议大家先看完这些文章再来实践本项目
 - [vue后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
 - [vue后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
 - [vue后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
 - [vue后台 系列四(vueAdmin 一个极简的后台基础模板)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
 - [封装一个 vue component](https://segmentfault.com/a/1190000009090836)
 - [优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)


### nginx
- nginx反向代理原理和配置讲解
[https://blog.csdn.net/wild46cat/article/details/52997005]
[http://www.cnblogs.com/DragonFire/p/6589774.html]
[http://www.cnblogs.com/anruy/p/4989161.html]

### 首页加载文件过大
- https://www.cnblogs.com/lggggg/p/8295169.html


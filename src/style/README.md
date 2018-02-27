### less文件修改说明
* 备注: 不做高度定制的样式写法，每个页面单独写样式，避免后期重复使用修改样式；
* base.less 是基础公共文件
* class.less 是最常用的一些页面样式，直接修改class类名的，
* color 是控制颜色，包括字体颜色，按钮，背景的，不要添加过多的颜色，此处为页面统一UI颜色管理
* mixin.less，为总的混合写法文件，可以传入less变量的

### less文件引用顺序
* color.less to class.less to mixin.less
* base.less是在app.vue中引入


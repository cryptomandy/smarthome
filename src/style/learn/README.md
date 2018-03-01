## css，less知识梳理

#### flex布局

- 主容器的属性：
flex-direction  属性决定主轴的方向，项目的排列方向
flex-wrap
flex-flow: flex-direction和flex-wrap的缩写
justify-content
align-items
align-content

- justify-content:项目在主轴上的对齐方式。
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

- align-items: 交叉轴的对齐
flex-start（默认值）：左对齐
flex-end：右对齐
stretch
center
baseline:第一行文字对齐

- align-content:多行轴对齐方式，
比justify-content多了stretch值

- 子项目的属性：
.order
.flex-grow
.flex-shrink
.flex-basis
.flex
.align-self

- order:定义项目的排列顺序。数值越小，排列越靠前，默认为0。



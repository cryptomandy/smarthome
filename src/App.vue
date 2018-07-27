<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
//需要直接写入全局样式文件，如果直接引进，不能覆盖浏览器的user agent stylesheet

//正确引入样式文件，注意格式
@import "./style/base";
@import "./style/fonts/iconfont";
</style>

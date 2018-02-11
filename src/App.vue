<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
//需要直接写入全局样式文件，如果直接引进，不能覆盖浏览器的user agent stylesheet
  
// @media only screen and (max-width: 300px) {
//   html {font-size: 62.5%;}
//   .viewport {max-width: 300px;}
// }
// @media only screen and (max-width: 310px) and (min-width: 300px) {
//   html {font-size: 62.5%;}
//   .viewport {max-width: 310px;}
// }
// @media only screen and (max-width: 320px) and (min-width: 310px) {
//   html {font-size: 62.5%;}
//   .viewport {max-width: 320px;}
// }
// @media only screen and (max-width: 350px) and (min-width: 320px) {
//   html {font-size: 75%;}
//   .viewport {max-width: 350px;}
// }
// @media only screen and (max-width: 360px) and (min-width: 350px) {
//   html {font-size: 75%;}
//   .viewport {max-width: 360px;}
// }
// @media only screen and (max-width: 400px) and (min-width: 360px) {
//   html {font-size: 75%;}
//   .viewport {max-width: 400px;}
// }
// @media only screen and (max-width: 470px) and (min-width: 400px) {
//   html {font-size: 75%;}
//   .viewport {max-width: 470px;}
// }
// @media only screen and (max-width: 480px) and (min-width: 470px) {
//   html {font-size: 87.5%;}
//   .viewport {max-width: 480px;}
// }
// @media only screen and (max-width: 540px) and (min-width: 480px) {
//   html {font-size: 100%;}
//   .viewport {max-width: 540px;}
// }
// @media only screen and (max-width: 560px) and (min-width: 540px) {
//   html {font-size: 112.5%;}
//   .viewport {max-width: 560px;}
// }
// @media only screen and (max-width: 570px) and (min-width: 560px) {
//   html {font-size: 112.5%;}
//   .viewport {max-width: 570px;}
// }
// @media only screen and (max-width: 630px) and (min-width: 570px) {
//   html {font-size: 125%;}
//   .viewport {max-width: 630px;}
// }
// @media only screen and (max-width: 640px) and (min-width: 630px) {
//   html {font-size: 125%;}
//   .viewport {max-width: 640px;}
// }
// @media only screen and (max-width: 710px) and (min-width: 640px) {
//   html {font-size: 150%;}
//   .viewport,
//   .fixed {max-width: 710px;}
// }
// @media only screen and (max-width: 720px) and (min-width: 710px) {
//   html {font-size: 150%;}
//   .viewport {max-width: 720px;}
// }
// @media only screen and (min-width: 720px) {
//   html {font-size: 150%;}
//   .viewport {width: 720px;}
// }

@media only screen and (max-width:320px){html{font-size:12px}}
@media only screen and (min-width:321px) and (max-width:375px){html{font-size:12px}}
@media only screen and (min-width:376px) and (max-width:414px){html{font-size:14px}}
@media only screen and (min-width:415px) and (max-width:639px){html{font-size:16px}}
@media only screen and (min-width:640px) and (max-width:719px){html{font-size:20px}}
@media only screen and (min-width:720px) and (max-width:749px){html{font-size:22px}}
@media only screen and (min-width:750px) and (max-width:799px){html{font-size:24px}}
@media only screen and (min-width:800px){html{font-size:28px}}

html,body{
  border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
    vertical-align: baseline;
}
//需要清除原本浏览器的样式文件，但是不能设置html的大小，rem针对的是html根元素
div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, cite, img, sub, sup, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
    vertical-align: baseline;
    font-size: 1rem;
}
html,body{
    height:100%
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
button {
    outline: none;
}
ol, ul {
    margin: 0;
    padding: 0;
}
ol, ul, li {
    list-style: none;
}
i, em {
    font-style: normal;
}
blockquote {
    quotes: none;
}
blockquote:before, blockquote:after {
    content: '';
    content: none;
}
a {
    outline: none;
    text-decoration: none;
    text-decoration:none;
    text-decoration: none;
    transition: background-color .5s ease 0s,color .5s ease 0s,width .5s ease 0s,border-width .5s ease 0s,border-color .5s ease 0s;
    -webkit-transition: background-color .5s ease 0s,color .5s ease 0s,width .5s ease 0s,border-width .5s ease 0s,border-color .5s ease 0s;
    -moz-transition: background-color .5s ease 0s,color .5s ease 0s,width .5s ease 0s,border-width .5s ease 0s,border-color .5s ease 0s;
    -ms-transition: background-color .5s ease 0s,color .5s ease 0s,width .5s ease 0s,border-width .5s ease 0s,border-color .5s ease 0s;
    -o-transition: background-color .5s ease 0s,color .5s ease 0s,width .5s ease 0s,border-width .5s ease 0s,border-color .5s ease 0s
}
input, textarea{
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
}
select, option{
    font-family: inherit;
}
.noselect{
    -webkit-user-select: none;
    user-select: none;
}
.clear {
    clear: both;
}

.clearfix:before,.clearfix:after{
    content:"";
    display:table;
}
.clearfix:after{
    clear:both;
}
.clearfix{
    *zoom:1;
}

#app {
  font-family:  "Hiragino Sans GB","microsoft yahei","WenQuanYi Micro Hei",sans-serif!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 28/24rem;
  max-width: 750px;
  margin: 0 auto;
}


</style>  

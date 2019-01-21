
 ### 如何将公共模块打包为一个chunk
[https://segmentfault.com/a/1190000012828879]

- vue打包时会生成一些map文件，map文件是未经过压缩加密的，可以查看错误信息； 修改config->index 中的productionSourceMap==true；


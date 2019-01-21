"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: "static",
        assetsPublicPath: "/",
        proxyTable: {
            //webpack转发
            '/list': {
                target: 'http://192.168.182.99:9090', //源地址
                changeOrigin: true, //改变源
                xfwd: true,
                autoRewrite: true,
                secure: false
            }
        },

        // Various Dev Server settings
        // host: '0.0.0.0', // can be overwritten by process.env.HOST
        host: "localhost", // can be overwritten by process.env.HOST
        port: 4161, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: false,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: "cheap-module-eval-source-map",

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true,//
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, "../dist/index.html"),

        // __dirname node中全局变量，存储的是文件所在的文件目录。
        //https://www.jianshu.com/p/42e11515c10f
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "static",
        assetsPublicPath: "/",

        /**
         * Source Maps
         */

        productionSourceMap: false,  //*** 为false时，去除掉打包的.map文件
        // https://webpack.js.org/configuration/devtool/#production
        devtool: "#source-map",

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ["js", "css"],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
};

<style scoped lang="less">
// TODO：加载样式时require和import的区别
    @import "../../style/mixin";
    .root_box{
        padding-bottom: 130/@rem;
    }
    .wrap_bg{
        a{
            display: block;
            position: relative;
            padding: 20/@rem @padd-30;
            &:after{
                .setBottomLine();
            }
            .iconfont:before{
                margin-right: 15/@rem;
            }
            h6{
                font-size: 32/@rem;
                color: @light-s;
                position: relative;
            }
            p{
                color: @text-primary;
                font-size: 26/@rem;
                em{
                    color:@text-minor;
                }
            }
        }
    }
    .use_bg{
        ul{
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            background: #fff;
            margin-bottom: 20/@rem;
            li{
                box-sizing: border-box;
                position: relative;
                // margin: 10/@rem 1.5%;
                flex: 0 0 25%;
                text-align: center;
                .e_icon{
                    margin: 20/@rem auto 0;
                    width: 80%;
                    display: block;
                    height: 80/@rem;
                    border-radius: 50%;
                }
                p{
                    padding: 20/@rem 0;
                    color: @text-primary;
                }
            }
        }
    }
</style>

<template>
    <section class="root_box">
        <h5 class="big_title">功能列表</h5>
        <div class="use_bg" v-show="userEditList.length">
            <ul>
                <li v-for="(item,index) in userEditList">
                    <div class="e_items">
                        <span class="e_icon" v-bind:style="{background: item.background}"></span>
                        <p>{{item.text}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="wrap_bg">
            <ul>
                <li v-for="(item,index) in funList">
                    <router-link :to="item.navUrl">
                        <h6 class="iconfont icon-category">{{item.funName}}</h6>
                        <p><em>功能说明：</em>{{item.funDes}}</p>
                        <p><em>创建时间：</em>{{item.creatDate}}</p>
                        <p><em>修改时间：</em>{{item.updateDate}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 父级传递数据中划线，组件中驼峰写法，动态传递数据时，也可传递一个对象 -->
        <nav-bar bar-title="index"></nav-bar>
    </section>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

import navBar from "@/components/footer/footer";
export default {
    name: 'index',
    data () {
        return {
            funList:[
                {
                    "navUrl":"/lifelist",
                    "funName":"资讯列表",
                    "funDes":"a. 图片加载；b. axios合并请求；c. 数组重组；d. 使用字体图标（下载字体图标到本地，解压之后，在css中改为本地路径，或者在线生成路径）；d. 添加底部导航组件",
                    "creatDate":"2018-01-18",
                    "updateDate":"2018-03-25"
                },
                {
                    "navUrl":"/edit",
                    "funName":"多个div拖动编辑",
                    "funDes":"a. div添加和去除，拖曳；b. Vuex使用",
                    "creatDate":"2018-01-23",
                    "updateDate":"2018-02-28"
                },
                {
                    "navUrl":"/infro",
                    "funName":"信息验证",
                    "funDes":"a. 表单正则验证；b. 组件使用；c. 日历组件；d. 个人信息完善相关；",
                    "creatDate":"2018-01-26",
                    "updateDate":"2018-02-26"
                },
                {
                    "navUrl":"/shop",
                    "funName":"购物车",
                    "funDes":"a. mock生成数据，b. 购物车选择和计算",
                    "creatDate":"2018-03-20",
                    "updateDate":"2018-03-20"
                },
            ]
        }
    },
    components:{
        navBar
    },
    computed:{
        //查询store中值
        ...mapState([
            'userEditList'
        ])
    },
    created(){

    },
    mounted(){
        console.log(this.userEditList);
    },
    methods:{

    }
}
</script>


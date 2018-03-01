<style scoped lang="less">
    @import "../../style/mixin";
    .wrap_bg{
        a{
            display: block;
            position: relative;
            padding: 20/@rem @paddB;
            &:after{
                .setBottomLine();
            }
            h6{
                font-size: 32/@rem;
                color: @mainLC;
                position: relative;
            }
            p{
                color: @dgc;
                font-size: 26/@rem;
                em{
                    color:@lgc;
                }
            }
        }
    }
</style>

<template>
    <div class="root_box">
        <h5 class="big_title">功能列表</h5>
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
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name: 'index',
    data () {
        return {
            funList:[
                {
                    "navUrl":"/lifelist",
                    "funName":"资讯列表",
                    "funDes":"a. 图片加载；b. axios合并请求；c. 数组重组；d. 使用字体图标（下载字体图标到本地，解压之后，在css中改为本地路径，或者在线生成路径）",
                    "creatDate":"2018-01-18",
                    "updateDate":"2018-01-26"
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
                    "funDes":"a. 正则验证；b. 组件使用",
                    "creatDate":"2018-01-26",
                    "updateDate":"2018-02-26"
                },
            ]
        }
    },
    computed:{
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


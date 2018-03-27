<style scoped lang="less">
    @import "../../style/mixin";
    .com_bg{
        position: fixed;
        width: 100%;
        max-width: 750px;
        bottom: 0;
        ul{
            height: 100/@rem;
            background: #fff;
            margin: 0 auto;
            display: flex;
            text-align: center;
            align-items: center;
            position: relative;
            &:after{
                .setTopLine();
            }
            li{
                flex: 4;
                display: block;
                font-size: 24/@rem;
                em{
                    display: block;
                    margin: 0 auto;
                    font-size: 36/@rem;
                    padding-bottom: 4/@rem;
                }
            }
            .current{
                .iconfont,p{
                    color: @dark-m;
                }
            }
        }
    }
</style>

<template>
<!-- 底部导航栏 -->
    <footer class="com_bg" id="nav-bar">
        <ul>
            <!-- 绑定样式判断语句用中括号 -->
            <li v-bind:class="[barTitle == 'index' ? 'current' :'']">
                <router-link :to='"/"'>
                    <em class="iconfont icon-all"></em>
                    <p>首页</p>
                </router-link>
            </li>
            <li v-bind:class="[barTitle == 'help' ? 'current' :'']">
                <em class="iconfont icon-favorites"></em>
                <p>助手</p>
            </li>
            <li v-bind:class="[barTitle == 'his' ? 'current' :'']">
                <router-link :to='"/lifelist"'>
                    <em class="iconfont icon-favorite"></em>
                    <p>他圈</p>
                </router-link>
            </li>
            <li v-bind:class="[barTitle == 'cart' ? 'current' :'']">
                <router-link :to='"/shop"'>
                    <em class="iconfont icon-cart"></em>
                    <p>购物车</p>
                </router-link>
            </li>
            <li v-bind:class="[barTitle == 'me' ? 'current' :'']">
                <router-link :to='"/infro"'>
                    <em class="iconfont icon-account"></em>
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props:["barTitle"],
    components:{},
    mounted(){},
    computed:{},
    methods:{

    }
}
</script>



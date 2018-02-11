<template>
    <div class="news">
        <h5 class="new_title">个人信息</h5>
        <div class="new_bg">
            <ul>
                <li>
                    <label>用户名：</label><input type="text" placeholder="请输入用户名">
                </li>
                <li>
                    <label>邮箱：</label><input type="text" placeholder="请输入邮箱">
                </li>
                <li>
                    <label>手机号码：</label><input type="text" placeholder="请输入手机号码">
                </li>
                <li>
                    <label>验证码：</label><input type="text" placeholder="请输入验证码">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
//？？？ 为什么在总的main方法中写了这边还要写
import axios from 'axios'
export default {
    name: 'infro',
    data () {
        return {
            
        }
    },
    created(){
        this.getList();
    },
    mounted(){

    },
    methods:{
        //axios可用于客户端和服务器
        getList(){
            let self = this;
            
        },
        //post需要三个参数： url，{}，config

        jumpBook(){
            
        },
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*不能直接引进less变量*/ 
// @import from '@/assets/common/base'
.news{
    font-size: 24/24rem;
    .new_title{
        text-align: left;
        padding: 30/24rem 0 10/24rem 30/24rem;
        font-size: 36/24rem;
    }
}
.new_bg{
    
}
 
</style>

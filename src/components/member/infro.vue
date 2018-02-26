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

        },
        //post需要三个参数： url，{}，config

        jumpBook(){

        },
    }
}
</script>

<style scoped lang="less">
@import "../../style/mixin";
.news{
    font-size: 24/@rem;
    .new_title{
        text-align: left;
        padding: 30/@rem 0 10/@rem 30/@rem;
        font-size: 36/@rem;
    }
}
.new_bg{

}

</style>

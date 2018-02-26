<style scoped lang="less">
@import "../../style/mixin";


</style>
<template>
    <div class="root_box">
        <h5 class="big_title">个人信息</h5>
        <div class="wrap_bg">
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



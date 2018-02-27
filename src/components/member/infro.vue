<style scoped lang="less">
@import "../../style/mixin";
.wrap_ff{
    ul{

        li{
            padding: 0  @paddB;
            position: relative;
            display: block;
            height: 88/@rem;
            line-height: 88/@rem;
            font-size: 28/@rem;
            background: #fff;
            label{
                color: @dgc;
                width: 146/@rem;
                display: inline-block;
            }
            &:after{
                .setBottomLine();
            }
            input{
                height: 100%;
            }
        }
    }
}
</style>
<template>
    <div class="root_box">
        <h5 class="big_title">个人信息</h5>
        <div class="wrap_ff">
            <ul>
                <li>
                    <label>用户名：</label><input type="text" placeholder="请输入用户名">
                </li>
                <li>
                    <label>邮箱：</label><input type="text" placeholder="请输入邮箱">
                </li>
                <li class="g_line">
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
            config:{
                "userName":"",
                "email":"",
                "phone":"",
                "code":""
            },
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
}
</script>



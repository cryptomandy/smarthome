<style scoped lang="less">
@import "../../style/mixin";
.wrap_ff{
    ul{

        li{
            padding: 0  @padd-30;
            position: relative;
            display: flex;
            height: 88/@rem;
            line-height: 88/@rem;
            font-size: 28/@rem;
            background: #fff;
            label{
                color: @text-primary;
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
                    <label>用户名：</label>
                    <input type="text" maxlength="11"
                        placeholder="请输入用户名" v-model="config.userName">
                </li>
                <li>
                    <label>邮箱：</label>
                    <input type="text"
                        placeholder="请输入邮箱" v-model="config.email">
                </li>
                <li class="g_line">
                    <label>手机号码：</label>
                    <input type="text"
                        placeholder="请输入手机号码" v-model="config.phone">

                </li>
                <li>
                    <label>验证码：</label>
                    <input type="text" maxlength="6"
                        placeholder="请输入验证码" v-model="config.code">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'infro',
    data () {
        return {
            config:{
                userName:"",
                email:"",
                phone:"",
                code:""
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



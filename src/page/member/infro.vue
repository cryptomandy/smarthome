<style scoped lang="less">
@import "../../style/mixin";
.big_title{
    position: relative;
    .fj();
    em{
        padding: 0 30/@rem;
        font-size: 28/@rem;
        color: @text-minor;
        display: inline-block;
    }
}
.wrap_ff{
    ul{
        li{
            padding: 0  @padd-30;
            position: relative;
            display: flex;
            height: 92/@rem;
            line-height: 92/@rem;
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
                width: 40%;
            }
            .code_box{
                display: inline-block;
                position: absolute;
                right: 0;
                height: 56/@rem;
                line-height: 56/@rem;
                border: 1px solid @dark-brown;
                padding: 0 30/@rem;
                .radius(50);
                font-size: 26/@rem;
                color:@dark-brown;
                margin: 17/@rem 30/@rem 0 0;
            }
            // -135(向上) , -45deg(向右) , 45(向下)，135(向左)
            .arrow_right{
                .arrowCss(20/@rem,2/@rem,@text-tip,-45deg);  //依次为宽度，border宽，颜色，和方向
            }
        }
    }
}
</style>
<template>
    <div class="root_box">
        <h5 class="big_title">完善信息<em>{{allStatus == 0 ? "提交" :"编辑"}}</em></h5>
        <div class="wrap_ff">
            <ul>
                <li>
                    <label>昵称：</label>
                    <input type="text" maxlength="11"
                        placeholder="请输入昵称" v-model="config.UserName">
                </li>
                <li>
                    <label>年龄：</label>
                    <input type="text"
                        placeholder="请输入年龄" v-model="config.Age">
                </li>
                <li>
                    <label>邮箱：</label>
                    <input type="text"
                        placeholder="请输入邮箱" v-model="config.Email">
                </li>
                <li>
                    <label>性别：</label>
                    <input type="text"
                        placeholder="请选择性别" v-model="config.Sex">
                    <em class="arrow_right"></em>
                </li>
                <li class="">
                    <label>生日：</label>
                    <input type="text"
                        placeholder="请选择生日" v-model="config.Birthday">
                    <em class="arrow_right"></em>
                </li>
                <li class="">
                    <label>邮寄地址：</label>
                    <input type="text"
                        placeholder="请选择邮寄地址" v-model="config.Address">
                    <em class="arrow_right"></em>
                </li>
                <!-- 手机信息 -->
                <li class="g_line">
                    <label>手机号码：</label>
                    <input type="text"
                        placeholder="请输入手机号码" v-model="config.Phone">

                </li>
                <li>
                    <label>验证码：</label>
                    <input type="text" maxlength="6"
                        placeholder="请输入验证码" v-model="config.Code">
                    <span class="code_box">获取验证码</span>
                </li>
            </ul>
        </div>
        <!-- 弹框提示 -->
        <alert-tip :dialog="dialog" v-show="isDialog" @confirm="dialogConfirm" @close='dialogCancel'></alert-tip>

        <nav-bar bar-title="me"></nav-bar>
    </div>
</template>

<script>
import navBar from '@/components/footer/footer'
import alertTip from '@/components/dialog/alertTip'

export default {
    name: 'infro',
    data () {
        return {
            allStatus: 0, //编辑0 ，完成1

            config:{
                UserName:"",
                Age:"",

                Email:"",
                Sex:"",
                Birthday:"",
                Address:"",

                Phone:"",
                Code:""
            },

            regProps:{
                UserName:{
                    "emptyTip":"请填写姓名",
                    "tips":"姓名请填写中文",
                    "reg":/^[\u4e00-\u9fa5]{1,}$/ ,//  /^[\u2E80-\uFE4F]+[-\s]?[a-zA-Z]*$/,
                },
                Age:{
                    "emptyTip":"请填写年龄",
                    "tips":"年龄请填写数字",
                    "reg":/^\d{1,3}$/
                },
                Identify:{
                    "emptyTip":"请填写身份证号",
                    "tips":"请填写正确的身份证号",
                    "reg":/(\d{6})[1,2]([0-9]{10})(\d|x|X)$/     //[1,2]以1或者2开头的年限
                },
                Email:{
                    "emptyTip":"请填写邮箱",
                    "tips":"请填写正确的邮箱",
                    "reg":/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
                     //zhangshna.Mr@163.com、abc@sina.com.cn、lu62882@126.com
                },
                Sex:{
                    "emptyTip":"请选择性别",
                    "tips":"请选择性别",
                    "reg":/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
                },
                Birthday:{
                    "emptyTip":"请选择出生日期",
                    "tips":"请选择出生日期",
                    "reg":/^[^((\'\‘\’\"\“\”)\s]+$/, //不为空显示
                },
                Address:{
                    "emptyTip":"请选择邮寄地址",
                    "tips":"请选择邮寄地址",
                    "reg":/^[^((\'\‘\’\"\“\”)\s]+$/, //不为空显示
                },

                Phone:{
                    "emptyTip":"请填写手机号码",
                    "tips":"请填写正确的手机号码",
                    "reg":/^1[3,4,5,7,8][0-9]{9}$/
                },
                Code:{
                    "emptyTip":"请填写验证码",
                    "tips":"请填写正确的验证码",
                    "reg":/^\d{4,6}$/
                },
                Notice:{
                    "emptyTip":"请输入备注",
                    "tips":"输入备注不能为空",
                    "reg":/^[^((\'\‘\’\"\“\”)\s]+$/, //不为空显示
                },
            },
            isDialog: false,
            //传递参数
            dialog:{
                hasCancel: true, //是否有取消
                tips:"", //提示文案
                callbackYes : null, // confirm的回调
                callbackNo : null,  // cancel的回调
            },
        }
    },
    components:{
        navBar,
        alertTip
    },
    created(){

    },
    mounted(){

    },
    methods:{
        //弹框事件
        dialogConfirm(){
            this.isDialog = false;

            this.dialog.hasCancel = false;
            this.dialog.tips = "";
        },
        dialogCancel(type){
            this.isDialog = false;

            this.dialog.hasCancel = false;
            this.dialog.tips = "";
            if(type && type == "close"){
                console.log("关闭背景");
            }

        }
    }
}
</script>



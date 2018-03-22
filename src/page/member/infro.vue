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
            // height: 92/@rem;
            // line-height: 92/@rem;
            padding: 30/@rem;
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
                top: 50%;
                height: 56/@rem;
                line-height: 56/@rem;
                border: 1px solid @dark-m;
                padding: 0 30/@rem;
                .radius(50);
                font-size: 26/@rem;
                color:@dark-m;
                margin: -29/@rem 30/@rem 0 0;
            }
            // -135(向上) , -45deg(向右) , 45(向下)，135(向左)
            .arrow_right{
                .arrowCss(20/@rem,2/@rem,@text-tip,-45deg);  //依次为宽度，border宽，颜色，和方向
            }
        }
        .notice_box{
            height: 0;
            min-height: 140/@rem;
            max-height: 180/@rem;
            textarea{
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>
<template>
    <div class="root_box">
        <h5 class="big_title">完善信息
            <em @click="commitInfro">{{allStatus == 0 ? "提交" :"编辑"}}</em>
        </h5>
        <div class="wrap_ff">
            <ul>
                <li>
                    <label>昵称：</label>
                    <input type="text" maxlength="11"
                        placeholder="请输入昵称（必填）" v-model="userReg.UserName.name">
                </li>
                <li>
                    <label>年龄：</label>
                    <input type="text"
                        placeholder="请输入年龄" v-model="userReg.Age.name">
                </li>
                <li>
                    <label>邮箱：</label>
                    <input type="text"
                        placeholder="请输入邮箱" v-model="userReg.Email.name">
                </li>
                <li>
                    <label>性别：</label>
                    <input type="text"
                        placeholder="请选择性别" v-model="userReg.Sex.name">
                    <em class="arrow_right"></em>
                </li>
                <li>
                    <label>生日：</label>
                    <input type="text"
                        placeholder="请选择生日" v-model="userReg.Birthday.name">
                    <em class="arrow_right"></em>
                </li>
                <li>
                    <label>邮寄地址：</label>
                    <input type="text"
                        placeholder="请选择邮寄地址（必选）" v-model="userReg.Address.name">
                    <em class="arrow_right"></em>
                </li>
                <!-- 手机信息 -->
                <li class="g_line">
                    <label>手机号码：</label>
                    <input type="text"
                        placeholder="请输入手机号码（必填）" v-model="userReg.Phone.name">

                </li>
                <li>
                    <label>验证码：</label>
                    <input type="text" maxlength="6"
                        placeholder="请输入验证码（必填）" v-model="userReg.Code.name">
                    <span class="code_box" @click="sendCode">获取验证码</span>
                </li>
                <li class="g_line">
                    <label>设置密码：</label>
                    <input type="text"
                        placeholder="请输入密码（必填）" v-model="userReg.Password.name">

                </li>
                <li>
                    <label>确认密码：</label>
                    <input type="text" maxlength="6"
                        placeholder="请输入确认密码（必填）" v-model="userReg.ComfirmPassword.name">
                </li>

                <li class="g_line notice_box">
                    <label>备注：</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="如果有任何疑问，请输入备注" v-model="userReg.Notice.name"></textarea>
                </li>
            </ul>
        </div>
        <!-- 弹框提示 -->
        <alert-tip :dialog="dialog" v-show="isDialog" @dialogConfirm="dialogConfirm" @dialogCancel='dialogCancel'></alert-tip>
        <!-- 自动取消提示，样式在公共样式中 -->
        <div class="auto_tip" v-show="autoCancelObj.isAutoShow"><span> {{autoCancelObj.autoTips}}</span></div>
        <!-- 底部导航 -->
        <nav-bar bar-title="me"></nav-bar>
    </div>
</template>

<script>
import navBar from '@/components/footer/footer'
import alertTip from '@/components/dialog/alertTip'
import Rules from '@/config/reg' //正则验证规则

export default {
    name: 'infro',
    data () {
        return {
            allStatus: 0, //编辑0 ，完成1
            user:{
                UserName:"",
                Age:"",
                Identify:"",

                Email:"",
                Sex:"",
                Birthday:"",
                Address:"",

                Phone:"",
                Code:"",

                Password:"",
                ComfirmPassword:"",

                Notice:""
            },
            //带有是否验证的，如果填写验证，不填不验证
            userReg:{
                UserName:{
                    "required": true,
                    "name":""
                },
                Age:{
                    "required": false,
                    "name":""
                },
                Identify:{
                    "required": false,
                    "name":""
                },

                Email:{
                    "required": false,
                    "name":""
                },
                Sex:{
                    "required": false,
                    "name":""
                },
                Birthday:{
                    "required": false,
                    "name":""
                },
                Address:{
                    "required": false,
                    "name":""
                },

                Phone:{
                    "required": true,
                    "name":""
                },
                Code:{
                    "required": true,
                    "name":""
                },

                Password:{
                    "required": true,
                    "name":""
                },
                ComfirmPassword:{
                    "required": true,
                    "name":""
                },

                Notice:{
                    "required": false,
                    "name":""
                }
            },
            // 提示组件默认data值
            autoCancelObj :{
                isAutoShow: false, //半透明自动取消
                autoTips:"",
            },
            autoTimer:null,//提示定时器

            isDialog: false,  //是否显示弹框
            callbackYes: null, //弹框确定是否有回调函数
            dialog:{      //传递参数
                hasCancel: false, //是否有取消，默认没有
                tips:"", //提示文案
            },
        }
    },
    components:{
        navBar,
        alertTip,
    },
    created(){
    },
    mounted(){

    },
    destroyed(){
        clearInterval(() => {
            this.autoTimer = null;
        })

    },
    methods:{
        //验证提交
        commitInfro(){
            for(var item in this.userReg){  //循环验证
                if(this.userReg[item].required){    //必须验证的项
                    if(this.userReg[item].name==""){    //为空
                        this.dialogShow(true,Rules[item].emptyTip,null);
                        return false;
                    }else if(!Rules[item].reg.test(this.userReg[item].name)){
                        this.dialogShow(true,Rules[item].tips,null);
                        return false;
                    }
                }else{
                    if(this.userReg[item].name!="" && !Rules[item].reg.test(this.userReg[item].name)){  //不必输入项，有值验证
                        this.dialogShow(true,Rules[item].tips,null);
                        this.callbackYes = null;
                        return false;
                    }
                }
            }
        },
        //发送验证码
        sendCode(){
            if(this.userReg['Phone'].name==''){
                this.autoCancel(true,Rules['Phone'].emptyTip);
                return false;
            }else if(this.userReg['Phone'].name != "" && !Rules['Phone'].reg.test(this.userReg['Phone'].name)){
                his.autoCancel(true,Rules['Phone'].tips);
                this.autoCancel();
                return false;
            }
        },
        /******************** 提示信息代码 *****************************/
        autoCancel(isAutoShow,autoTips){
            this.autoCancelObj.isAutoShow = isAutoShow  || false;
            this.autoCancelObj.autoTips = autoTips || "";
            //自动提示消失
            this.autoTimer =
                setTimeout(() => {
                    this.autoCancelObj.isAutoShow = false;
                    this.autoCancelObj.autoTips = "";
                }, 2000)
        },
        //弹框显示
        dialogShow(isDialog,tips,callbackYes){
            this.isDialog = isDialog || false;
            this.dialog.tips = tips||"";
            this.callbackYes = callbackYes || null;
        },
        //弹框事件
        dialogConfirm(){
            this.isDialog = false;
            if(this.callbackYes && typeof this.callbackYes == "function"){
                this.callbackYes();
            }
        },
        dialogCancel(type){
            this.isDialog = false;
        },

    }
}
</script>



<style scoped lang="less">
    @import "../../style/mixin";
    .com_bg{
        height: 100%;
        width: 100%;
    }
    .ui_mask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        background: rgba(0,0,0,0.65);
        z-index:2000;
        width: 100%;
    }
    //TODO： translate移动时文字百分比原理 ：1. 最好将当前下弹框文字和高度设置为px处理；需要测试真机是否模糊
    .ui_dialog{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 540/@rem;
        transform: translate(-50%,-51%);
        transform-origin:50% 50%;
        z-index:2001;
        background: #fff;
        .radius(10);
        .con_bg{
            position: relative;
            h6{
                font-size: 28/@rem;
                text-align: center;
                padding-top: 30/@rem;
            }
            .tip_detail{
                padding: 30/@rem;
            }
            .tip_btn{
                display: flex;
                height: 90/@rem;
                line-height: 90/@rem;
                font-size: 32/@rem;
                position: relative;
                &:before{
                    .setTopLine();
                }
                span{
                    display: block;
                    flex: 2;
                    text-align: center;
                }
                .btn_cancel{
                    color: @text-minor;
                    position: relative;
                    &:after{
                        .setRightLine();
                    }
                }
                .btn_confirm{
                    color: @dark-s;
                }
            }
        }
    }
</style>

<template>

    <!-- TODO： 同一组件初始化多次 -->
    <section class="com_bg" id="alertTip" @click.stop="close">
        <div class="ui_mask"></div>
        <div class="ui_dialog">
            <div class="con_bg">
                <h6>温馨提示</h6>
                <div class="tip_detail">{{dialog.tips}}</div>
                <div class="tip_btn">
                    <span v-show="dialog.hasCancel" class="btn_cancel" @click.stop='close'>取消</span>
                    <span class="btn_confirm" @click.stop="confirm">确定</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/**
 * @name 弹框组件
 * @description 支持一个确定按钮（包括文案自定义）， 两个按钮（确定按钮带有回调函数）， 两个按钮（取消和确定，支持文案自定义，且带有回调函数）
 *
 * */
export default {
    data () {
        return {

        }
    },
    //prop 传参验证和 非prop特性参数
    props:{
        dialog:{
            type:Object, //类型，可以指定多种类型，针对的某个属性时 (String, Number, Boolean, Function, Object, Array, Symbol)
            // required: true,  // 是否是必传
            //数组/对象的默认值应当由一个工厂函数返回
            default : function(){
                return {
                    hasCancel: false,
                    tips:"",
                }
            }
        }
    },
    components:{},

    mounted(){

    },
    computed:{},
    methods:{
        /**
        * @description 子组件向父组件传递事件
        *
        */
        confirm(){
            this.$parent.dialog.hasCancel = false;
            this.$parent.dialog.tips = "";
            this.$emit('dialogConfirm');
        },
        /**
         * @param "close"判断是否是关闭取消按钮
         * */
        close(){ //不能直触发父组件的事件，需要在模板中绑定
            //如果有回调函数
            this.$parent.dialog.hasCancel = false;
            this.$parent.dialog.tips = "";
            this.$emit('dialogCancel');  //emit修改数据；
        }
    }
}
</script>



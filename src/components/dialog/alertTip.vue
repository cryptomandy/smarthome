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
                    color: @dark-blue;
                }
            }
        }
    }
</style>

<template>
    <!-- 弹框提示，分为有无cancel -->
    <!-- TODO： 同一组件初始化多次 -->
    <section class="com_bg" id="alertTip" @click.stop="close">
        <div class="ui_mask"></div>
        <div class="ui_dialog">
            <div class="con_bg">
                <h6>温馨提示</h6>
                <div class="tip_detail">{{dialog.contentText}}</div>
                <div class="tip_btn">
                    <span v-show="dialog.hasCancel" class="btn_cancel" @click.stop='close("close")'>取消</span>
                    <span class="btn_confirm" @click.stop="confirm">确定</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props:{
        dialog:{
            type:Object
        }
    },
    components:{},
    mounted(){},
    computed:{},
    methods:{
        /**
        * @description 子组件向父组件传递事件
        *
        */
        confirm(){
            this.$emit('confirm');
        },
        /**
         * @param "close"判断是否是关闭取消按钮
         * */
        close(type){
            //如果有回调函数
            if(type && type == "close"){
                this.$emit('close',"close");
            }else{
                this.$emit('close');
            }
        }
    }
}
</script>



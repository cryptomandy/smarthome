<style scoped lang="less">
    @import "../../style/mixin";
    .auto_tip{
        position: fixed;
        bottom: 30%;
        background: rgba(0, 0,0,0.6);
        font-size: 26/@rem;
        left: 50%;
        transform: translate(-50%,0);
        min-width: 260/@rem;
        max-width: 460/@rem;
        padding: 20/@rem 20/@rem;
        text-align: center;
        .radius(50);
        span{
            color: #fff;
        }

    }
</style>

<template>
    <section class="com_bg" id="autoCanceltip">
        <div class="auto_tip">
            <span> {{autoCancelObj.autoTips}}</span>
        </div>
    </section>
</template>

<script>
/**
 * @name 自动取消提示组件（黑色半透明显示）
 * */
export default {
    data () {
        return {
            autoTimer: null
        }
    },
    props:{
        autoCancelObj:{
            type: Object
        }
    },
    components:{},

    mounted(){
        if(this.autoCancelObj.isAuto){
            this.autoTimer = setTimeout(() => {
                this.$emit("cancalTip");
                console.log("2");
            },3000)
        }
    },
    destroyed(){
        this.autoTimer = null;
    },
    computed:{},
    methods:{

    }
}
</script>



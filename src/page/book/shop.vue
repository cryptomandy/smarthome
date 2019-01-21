<style scoped lang="less">
    @import "../../style/mixin";
    .root_box{
        padding-bottom: 210/@rem;
    }
    .good_list ol{
        li{
            padding: 20/@rem 30/@rem;
            background: #fff;
            .fj(flex-start);
            .g_choose{
                width: 40/@rem;
                min-height: 60/@rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 20/@rem;
            }
            .g_img{
                display: flex;
                align-items: center;
                img{
                    width: 100/@rem;
                    height: 120/@rem;
                    display: block;
                    margin-right: 20/@rem;
                }
            }
            .good_box{
                flex: 1;
            }
            .g_infro{
                h6{
                    font-size: 28/@rem;
                    .moreText(2);
                }
                .g_time{
                    color: @text-minor;
                    font-size: 1rem;

                }
                .price_num{
                    .fj();
                    position: relative;
                    margin-top: 10/@rem;
                    .g_price{
                        color: @dark-m;
                        font-size: 24/@rem;
                        em{
                            font-size: 32/@rem;
                        }
                    }
                    .g_num{
                        em{
                            display: inline-block;
                            width: 54/@rem;
                            border: solid 1px @light-border-btn;
                            float: left;
                            text-align: center;
                            height: 40/@rem;
                            line-height: 40/@rem;
                            font-size: 36/@rem;
                            font-weight: lighter;
                        }
                        .disabled{
                            color: #ccc;
                        }
                        input{
                            height: 40/@rem;
                            line-height: 40/@rem;
                            width: 70/@rem;
                            display: inline-block;
                            border-top: solid 1px @light-border-btn;
                            border-bottom: solid 1px @light-border-btn;
                            float: left;
                            text-align: center;
                        }
                        .left_minus{
                            border-top-left-radius: 10/@rem;
                            border-bottom-left-radius: 10/@rem;
                        }
                        .right_plus{
                            border-top-right-radius: 10/@rem;
                            border-bottom-right-radius: 10/@rem;
                        }
                    }
                }

            }
        }
    }
    .choose_btn{
        width: 28/@rem;
        height: 28/@rem;
        border-radius: 50%;
        border: 1px solid @text-tip;
        display: inline-block;
        &.active{
            background: @dark-m;
            border: 1px solid @dark-m;
        }
    }
    .select_bg{
        position: fixed;
        bottom: 100/@rem;
        width: 100%;
        background: #fff;
        .select_box{
            height: 80/@rem;
            align-items: center;
            display: flex;
            padding: 0 30/@rem;
            >div{
                flex:2;
                display: flex;
                align-items: center;
            }
            .left{
                em{
                    margin-right: 10/@rem;
                    font-size: 28/@rem;
                }
                span{
                    color: #999;
                    font-size: 20/@rem;
                    margin-left: 20/@rem;
                    display: inline-block;
                    i{
                        font-size: 32/@rem;
                        color: @dark-m;
                    }
                    b{
                        color: @dark-m;
                    }
                }
            }
            .right{
                .fj(flex-end);
                span{
                    .setIcon(180/@rem, 52/@rem);
                }
            }
        }
    }
</style>
<template>
    <div class="root_box">
        <h5 class="big_title">购物车</h5>
        <div class="good_list">
            <ol>
                <li v-for="(item,index) in GoodList">
                    <span class="g_choose" @click="singleSelect(index)">
                        <em v-bind:class="['choose_btn',item.IsSelect ? 'active':'']"></em>
                    </span>
                    <a class="g_img" href="javascript"><img v-bind:src="item.ImgUrl" alt=""></a>
                    <div class="good_box">
                        <div class="g_infro">
                            <h6>{{item.ProductName}}【{{item.Detail}}】</h6>
                            <p class="g_time">{{item.Date}}</p>
                            <div class="price_num">
                                <div class="g_price">&yen;<em>{{item.Price}}</em></div>
                                <div class="g_num">
                                    <em v-bind:class="[item.LeftStatus?'disabled':'','left_minus']" @click="setMinus(index)">-</em>
                                    <input type="text" v-model="item.Count">
                                    <em v-bind:class="[item.RightStatus?'disabled':'','right_plus']" @click="setPlus(index)">+</em>
                                </div>
                            </div>
                        </div>
                    </div>

                </li>
            </ol>
        </div>
        <section class="select_bg">
            <div class="select_box">
                <div class="left">
                    <em v-bind:class="['choose_btn',isAllSelect ? 'active':'']" @click="setAllSelect"></em>全选
                    <span>合计：<b>&yen;</b><i>{{totalPrice}}</i></span>
                </div>
                <div class="right">
                    <span>去结算({{totalNum}})</span>
                </div>

            </div>
        </section>
        <nav-bar bar-title="cart"></nav-bar>
    </div>

</template>

<script>
import axios from 'axios'
import Mock from "mockjs"
import navBar from "@/components/footer/footer"
export default {
    name: 'shop',
    data () {
        return {
            min : 0,
            max : 5,
            // 设置标记
            GoodList:[],

            // 总价和选择
            totalPrice:0,
            totalNum: 0,
            isAllSelect:false,

        }
    },
    props:{},
    components:{
        navBar
    },
    created(){
        this.getData();
    },
    mounted(){},
    computed:{},
    methods:{
        getData(){
            /**
             * @name mock数据
             * @description mock规则
             * @url https://github.com/nuysoft/Mock/wiki/Address
             * */
            let Random = Mock.Random;
            let data = Mock.mock({
                // 属性 list 的值是一个数组，其中含有 m 到 n 个元素
                'GoodList|10-20': [{
                    // 属性 id 是一个自增数，起始值为 0，每次增 1
                    'ProductId|+1': 0,
                    'ProductName|1-2':"苏州一日景点游",//重复字符串m-n次
                    "Detail|1-3":"拙政园，狮子林，虎丘",
                    "ImgUrl":Random.image('120x140'),
                    "description":Random.paragraph(1), //生成英文句子
                    "Instruction":Random.csentence(), //随机生成中文句子
                    "SubTitle":Random.ctitle(),
                    "City":Random.city(true),  // Random.county(true) / province()
                    "ZipCode":Random.zip(),  //zip()邮编
                    "Identify":Random.id(),//身份证
                    "Date":Random.date('yy-MM-dd HH:mm'),

                    "Count|0-5":0,
                    "Price|20-1000":0,

                    "IsSelect|1":true
                }]
            });
            this.GoodList = data.GoodList;
            this.handlerData();
        },
        // 初始计算总价
        handlerData(){
            if(!this.GoodList.length) return false;
            this.GoodList.forEach((item,i) => {
                //判断加减状态
                if(item.Count === this.min){
                    item.LeftStatus = true;
                }
                if(item.Count === this.max){
                    item.RightStatus = true;
                }
                if(item.IsSelect){
                    this.totalPrice += item.Price * item.Count;
                    this.totalNum += item.Count;
                }
            })
        },
        // 全选
        setAllSelect(){
            if(!this.GoodList.length) return false;
            if(this.isAllSelect){
                this.GoodList.forEach((item,i) => {
                    item.IsSelect = false;
                    this.totalPrice = 0;
                    this.totalNum = 0;
                })
                this.isAllSelect = false;
            }else{
                this.GoodList.forEach((item,i) => {
                    item.IsSelect = true;
                    this.totalPrice += item.Price * item.Count;
                    this.totalNum += item.Count;
                })
                this.isAllSelect = true;
            }
        },
         //单个选择
        singleSelect(index){
            let cur =  this.GoodList[index];
            if(cur.IsSelect){
                this.totalPrice -= cur.Price * cur.Count;
                this.totalNum -= cur.Count;
                cur.IsSelect = false;
            }else{
                this.totalPrice += cur.Price * cur.Count;
                this.totalNum += cur.Count;
                cur.IsSelect = true;
            }
        },
        //产品数量减
        setMinus(index){
            let cur =  this.GoodList[index];
            if(cur.Count > this.min){
                cur.Count--;
                if(cur.Count === this.min){ //减少临界点判断
                    if(cur.LeftStatus === "undefined"){
                        this.$set(cur,"LeftStatus",true)
                    }else{
                        cur.LeftStatus = true;
                    }
                }else{
                    cur.LeftStatus = false;
                }
                if(cur.RightStatus){
                    cur.RightStatus = false;
                }
                this.totalPrice -= cur.Price;
                this.totalNum--;
            }
        },
        //产品数量加
        setPlus(index){
            let cur =  this.GoodList[index];
            if(cur.Count < this.max){
                cur.Count++;
                if(cur.Count === this.max){ //增加临界点判断
                    if(cur.RightStatus === "undefined"){
                        this.$set(cur,"RightStatus",true)
                    }else{
                        cur.RightStatus = true;
                    }
                }else{
                    cur.RightStatus = false;
                }
                if(cur.LeftStatus){
                    cur.LeftStatus = false;
                }
                this.totalPrice += cur.Price;
                this.totalNum++;
            }
        }
    }
}
</script>



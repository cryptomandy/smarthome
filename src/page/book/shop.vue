<style scoped lang="less">
    @import "../../style/mixin";
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
                em{
                    width: 28/@rem;
                    height: 28/@rem;
                    border-radius: 50%;
                    border: 1px solid @text-tip;
                }

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
</style>
<template>
    <div class="root_box">
        <h5 class="big_title">vue shop</h5>
        <div class="good_list">
            <ol>
                <li v-for="(item,i) in GoodList">
                    <span class="g_choose"><em></em></span>
                    <a class="g_img" href="javascript"><img v-bind:src="item.ImgUrl" alt=""></a>
                    <div class="good_box">
                        <div class="g_infro">
                            <h6>{{item.ProductName}}【{{item.Detail}}】</h6>
                            <p class="g_time">{{item.Date}}</p>
                            <div class="price_num">
                                <div class="g_price">&yen;<em>{{item.Price}}</em></div>
                                <div class="g_num">
                                    <em class="left_minus">-</em>
                                    <input type="text" v-model="item.Count">
                                    <em class="right_plus">+</em>
                                </div>
                            </div>
                        </div>
                    </div>

                </li>
            </ol>
        </div>
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
            GoodList:[]
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
                    'ProductName|1-2':"小米MIX2",//重复字符串m-n次
                    "Detail|1-3":"全网通版 6GB内存",
                    "ImgUrl":Random.image('120x140'),
                    "description":Random.paragraph(1), //生成英文句子
                    "Instruction":Random.csentence(), //随机生成中文句子
                    "SubTitle":Random.ctitle(),
                    "City":Random.city(true),  // Random.county(true) / province()
                    "ZipCode":Random.zip(),  //zip()邮编
                    "Identify":Random.id(),//身份证
                    "Date":Random.date('yy-MM-dd HH:mm'),

                    "Count|1-5":0,
                    "Price|20-1000":0,

                    "IsActive|1":true,
                }]
            });
            this.GoodList = data.GoodList;
        }
    }
}
</script>



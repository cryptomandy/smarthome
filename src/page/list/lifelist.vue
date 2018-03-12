<style scoped lang="less">
    @import "../../style/mixin";
    .root_box{
        padding-bottom: 130/@rem;
    }
    .wrap_bg{
        a{
            display: block;
            position: relative;
            &:after{
                .setBottomLine();
            }
        }
        .item_bg{
            display: flex;
            padding: 20/@rem 1rem;
            height: 160/@rem;
        }
        .m_image img {
            display: block;
            width: 100%;
        }
        .item_left{
            img{
                display: inline-block;
                width: 200/@rem;
                height: 100%;
            }
        }
        .item_right{
            margin-left: 20/@rem;
            position: relative;
            h6{
                font-size: 28/@rem;
                color: #333;
                .moreText(1);
            }
            p{
                color: @text-tip;
                font-size: 22/@rem;
            }
            .item_icon{
                position: absolute;
                bottom: 0;
                em{
                    display: inline-block;
                    padding: 0 10/@rem;
                    border: 1px solid @text-tip;
                    color: @text-tip;
                    font-size: 20/@rem;
                    margin-right: 10/@rem;
                    .radius(30);
                }
            }
        }
    }
</style>

<template>
    <div class="root_box">
        <h5 class="big_title">生活营养师</h5>
        <div class="wrap_bg">
            <a href="javascript:;" v-for='(item,index) in newsList' v-if="item && item!=null">
                <div class="item_bg m_image" v-if='item.Imageurl && item.Imageurl!=""'>
                    <img v-bind:src="item.Imageurl" alt="">
                </div>
                <div class="item_bg" v-else>
                    <div class="item_left">
                        <!--TODO： 如何控制不同懒加载背景的图片 -->
                        <!-- 懒加载注意图片是require到main.js中，给图片加尺寸限制 -->
                        <img src="" v-lazy="item.h5Img" alt="">
                    </div>
                    <div class="item_right">
                        <h6>{{item.title}}</h6>
                        <p>{{item.digest}}</p>
                        <div class="item_icon"  v-if="item.channelList.length">
                            <em v-for="(item,key) in item.channelList">{{item.split("_")[1]}}</em>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <nav-bar bar-title="his"></nav-bar>
    </div>
</template>

<script>
// TODO： axios和async区别
import axios from 'axios'
import navBar from '@/components/footer/footer'

export default {
    name: 'lifelist',
    data () {
        return {
            pageIndex:1,
            newsList : [],
            isHasData: true,
            bannerList:[
                {
                    "Imageurl":"https://kano.guahao.cn/elarge_TvG31935441",
                },
                {
                    "Imageurl":"https://kano.guahao.cn/elarge_Obf31348461"
                },
                {
                    "Imageurl":"http://kano.guahao.cn/elarge_fYj30684548"
                }
            ],
            sortArr :[1,3,5]
        }
    },
    components:{
        navBar
    },
    created(){
        this.getList();
    },
    mounted(){

    },
    methods:{
        //axios可用于客户端和服务器
        getList(){
            const url = "http://service.guahao.com/json/white/search/mediafocus.jsonp?pageSize=20&label=5&category=5&type=130";
            axios.get(url, {
                params:{
                    pageNo:1
                }
            }).then((res) => {
                //如果此处用let，则需要改变名称，因为res已经声明过了
                res = res.data;
                if(res.data && res.data.length){
                    this.newsList = res.data;
                    for(let i = 0; i< this.sortArr.length; i++){
                        let __index = this.sortArr[i];
                        this.newsList.splice(__index,0,this.bannerList[i]);
                    }
                }else{
                    this.isHasData = true;
                    return false;
                }
            },(res) => { // ***总结 1. 当参数有一个时，可以省略“()”括号；2. 当多参数时，不可省略；3、当为空时，空中括号，右侧大括号为return语句时，可以省略大括号和return语句

            });
            // ***总结 : 1. 并发请求 axios.all和Promise.all相同，axios经过封装;  2. get请求参数注意在params中；
            axios.all([
                axios.get(url, {
                    params:{
                        pageNo:2
                    }
                }),
                axios.get(url, {
                    params:{
                        pageNo:3
                    }
                })
            ]).then(axios.spread((oneRes,twoRes) => { //spread
                if(oneRes.data.data && oneRes.data.data.length){
                    console.log(oneRes.data.data,"第1个异步结果");
                }
                if(twoRes.data.data && twoRes.data.data.length){
                    console.log(twoRes.data.data,"第2个异步结果");
                }

                //concat 不能改变原来的数组，需要重新赋值
                let newData = this.newsList.concat(oneRes.data.data,twoRes.data.data);
                this.newsList = newData;
                //或者
                // this.newsList.push.apply(this.newsList, oneRes.data.data);
                // this.newsList.push.apply(this.newsList, twoRes.data.data);
                //*** 总结： 1.用cancat，可以一次性合并多个，需要重新赋值 2. 使用push.apply则一次合并一个数组
                // 数组合并 http://blog.csdn.net/renfufei/article/details/39376311
                console.log(this.newsList.length,"当前数组长度");
            })).catch(error => {
                console.log(error);
            })

        },
        //post需要三个参数： url，{}，config
    }
}
</script>


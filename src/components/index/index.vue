<template>
    <div class="news">
        <h5 class="new_title">生活涨知识</h5>
        <div class="new_bg">
            <a href="javascript:;" v-for='(item,index) in newsList' @click="jumpBook" v-if="item && item!=null">
                <div class="item_bg m_image" v-if='item.Imageurl && item.Imageurl!=""'>
                    <img v-bind:src="item.Imageurl" alt="">
                </div>
                <div class="item_bg" v-else>
                    <div class="item_left">
                        <img v-bind:src="item.h5Img" alt="">
                    </div>
                    <div class="item_right">
                        <h6>{{item.title}}</h6><p>{{item.digest}}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    
    name: 'index',
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
    created(){
        this.getList();
    },
    mounted(){

    },
    methods:{
        //axios可用于客户端和服务器
        getList(){
            let self = this;
            let url = "http://service.guahao.com/json/white/search/mediafocus.jsonp?pageSize=20&label=5&category=5&type=130";
            axios.get(url, {
                params:{
                    pageNo:1
                }
            }).then((res) => {
                //如果此处用let，则需要改变名称，因为res已经声明过了
                res = res.data;
                if(res.data && res.data.length){
                    this.$data.newsList = res.data;

                    for(var i=0; i< this.$data.sortArr.length; i++){
                        var __index = this.$data.sortArr[i];
                        this.$data.newsList.splice(__index,0,this.$data.bannerList[i]);
                    }
                }else{
                    this.$data.isHasData = true;    
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
                var newData = self.$data.newsList.concat(oneRes.data.data,twoRes.data.data);
                self.$data.newsList = newData;
                //或者 
                // self.$data.newsList.push.apply(self.newsList, oneRes.data.data);
                // self.$data.newsList.push.apply(self.newsList, twoRes.data.data);
                //*** 总结： 1.用cancat，可以一次性合并多个，需要重新赋值 2. 使用push.apply则一次合并一个数组
                console.log(self.newsList.length);
            })).catch(error => {
                console.log(error);
            })
            
        },
        //post需要三个参数： url，{}，config

        jumpBook(){
            
        },
    }
}
</script>

<style scoped lang="less">
/*不能直接引进less变量*/ 
// @import from '@/assets/common/base'
.news{
    font-size: 20/24rem;
    .new_title{
        text-align: left;
        padding: 30/24rem 0 10/24rem 30/24rem;
        font-size: 36/24rem;
    }
}
.new_bg{
    .item_bg{
        display: flex;
        padding: 20/24rem 1rem;
    }
    .m_image img{
        width: 100%;
        height: 200/24rem;
    }
    .item_left{
        flex: 0 0 38%;
    }
    .item_right{
        margin-left: 20/24rem;
        position: relative;
        h6{
            font-size: 28/24rem;
            color: #333;
        }
        p{
            position:absolute;
            bottom: 0;
            color: #999;
        }
    }
}
 
</style>

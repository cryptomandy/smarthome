<style scoped lang="less">
    /*不能直接引进less变量*/
    // @import from '@/assets/common/base'
    @import "../../style/mixin";
    .news{
        font-size: 20/@rem;
        .edit_title{
            text-align: left;
            padding: 30/@rem 0 10/@rem 30/@rem;
            font-size: 36/@rem;
        }
    }
    .edit_bg{
        .edit_item{
            width: 100%;
            h6{
                padding: 0 30/@rem;
                height: 80/@rem;
                line-height: 80/@rem;
                font-size: 32/@rem;
                .fj();
                .btu_edit{
                    width: 120/@rem;
                    text-align: right;
                }
            }
            .edits{
                padding: 0 30/@rem;

            }
            ul{
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                li{
                    box-sizing: border-box;
                    position: relative;
                    // margin: 10/@rem 1.5%;
                    flex: 0 0 25%;
                    text-align: center;
                    background: #f5f5f5;
                    .e_icon{
                        margin: 20/@rem auto 0;
                        width: 80%;
                        display: block;
                        height: 80/@rem;
                    }
                    p{
                        padding: 20/@rem 0;
                    }
                    .e_status{
                        position: absolute;
                        right: 0;
                        top: 0;
                        z-index: 1;
                        span{
                            display: block;
                            border-radius: 50%;
                            width: 1.2rem;
                            height: 1.2rem;
                            line-height: 1.2rem;
                            color: #fff;
                        }
                        .e_minus{
                            background: #ff4444;
                        }
                        .e_plus{
                            background: #1336ee;
                        }
                    }

                }
            }
        }
    }
</style>
<template>
    <div class="news">
        <h5 class="edit_title">子项添加的div存在—编辑</h5>
        <div class="edit_bg">
            <div class="edit_item" v-for="(list,ind) in editList">
                <h6>
                    <span>{{list.SortName}}</span>
                    <span class="btu_edit" v-if='list.SortId=="1" && allStatus==0' @click="setEdit">编辑</span>
                    <span class="btu_edit" v-if='list.SortId=="1" && allStatus==1' @click="setFinish">完成</span>
                </h6>
                <div class="edits">
                    <ul>
                        <li v-for="(item,index) in list.SortList"  v-bind:key="item.text" @click="minusOrPlus(list,ind,item,index)">
                            <div class="e_status">
                                <span class="e_minus" v-if='item.EditStatus =="minus" && allStatus==1'>-</span>
                                <span class="e_plus" v-if='item.EditStatus =="plus" && allStatus==1'>+</span>
                            </div>
                            <span class="e_icon" v-bind:style="{background: item.background}"></span>
                            <p>{{item.text}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'select-index',
    data () {
        return {
            editList :[
                {
                    "SortName":"我的应用",//必须有
                    "SortId":"1", //必须有
                    "SortList":[
                        {
                            "text": "火车票", //必须有
                            "background":"#e17f50", //暂时标记页面颜色
                            "SubSortId":"2",//必须有
                        },
                        {
                            "text": "机票",
                            "background":"#db72c9",
                            "SubSortId":"2"
                        },
                        {
                            "text": "日本",
                            "background":"#a673ea",
                            "SubSortId":"2"
                        },
                        {
                            "text": "德国",
                            "background":"#7a73ea",
                            "SubSortId":"2"
                        },
                    ]
                },
                {
                    "SortName":"旅游",
                    "SortId":"2",
                    "SortList":[
                        {
                            "text": "火车票",
                            "background":"#e17f50",
                            "SubSortId":"2"
                        },
                        {
                            "text": "机票",
                            "background":"#db72c9",
                            "SubSortId":"2"
                        },
                        {
                            "text": "日本",
                            "background":"#a673ea",
                            "SubSortId":"2"
                        },
                        {
                            "text": "德国",
                            "background":"#7a73ea",
                            "SubSortId":"2"
                        },

                        {
                            "text": "境内意外险",
                            "background":"#e17f50",
                            "SubSortId":"2"
                        },
                        {
                            "text": "境外意外险",
                            "background":"#db72c9",
                            "SubSortId":"2"
                        },
                        {
                            "text": "全年意外险",
                            "background":"#a673ea",
                            "SubSortId":"2"
                        },
                        {
                            "text": "高铁贵宾厅",
                            "background":"#7a73ea",
                            "SubSortId":"2"
                        }

                    ]
                },
                {
                    "SortName":"生活",
                    "SortId":"3",
                    "SortList":[
                        {
                            "text": "健身",
                            "background":"#e17f50",
                            "SubSortId":"3"
                        },
                        {
                            "text": "在线教育",
                            "background":"#db72c9",
                            "SubSortId":"3"
                        },
                        {
                            "text": "拍照",
                            "background":"#a673ea",
                            "SubSortId":"3"
                        }
                    ]
                },
                {
                    "SortName":"医疗",
                    "SortId":"4",
                    "SortList":[
                        {
                            "text": "问诊",
                            "background":"#e17f50",
                            "SubSortId":"4"
                        },
                        {
                            "text": "挂号",
                            "background":"#db72c9",
                            "SubSortId":"4"
                        },
                        {
                            "text": "电话医生",
                            "background":"#a673ea",
                            "SubSortId":"4"
                        }
                    ]
                }
            ],
            allStatus: 0, //编辑0 ，完成1
        }
    },
    created(){

    },
    mounted(){
        this.getList();
    },
    methods: {
        getList(){
            if(this.$data.editList.length == 0) return false;
            this.$data.editList.forEach( list => {
                if(list.SortList == 0) return false;
                list.SortList.forEach( item => {
                    item.EditStatus = "";
                })
            });
        },
        //点击编辑设置状态
        setStatus(){
            this.$data.editList.forEach( list => {
                list.SortList.forEach( item => {
                    if(list.SortId=="1"){//在我的应用中
                        item.EditStatus = "minus";
                    }else{
                        let curStatus = "plus";
                        this.$data.editList[0].SortList.forEach( elem => {
                            if(elem.text == item.text){
                                curStatus = "minus";
                            }
                        });
                        item.EditStatus = curStatus;
                    }
                })
            });
        },
        //编辑
        setEdit(){
            this.$data.allStatus = 1;
            this.setStatus();
        },
        //完成
        setFinish(){
            this.$data.allStatus = 0;
        },
        //加减应用
        minusOrPlus(list,ind,item,index){
            //点击从我的应用减去
            if(this.$data.allStatus==1){ //必须在可编辑状态下
                let curElem = this.$data.editList[ind];

                if(list.SortId == "1"){ //已在“我的应用”中
                    curElem.SortList.splice(index,1);
                    item.EditStatus = "minus";
                    this.$data.editList.forEach( el => {
                        if(el.SortId == "1") return false;
                        for(let kk = 0; kk < el.SortList.length; kk++){
                            let element = el.SortList[kk];
                            if(element.text == item.text){
                                element.EditStatus = "plus";
                                break;
                            }
                        }
                    })
                }else{
                    //加状态
                    if(item.EditStatus == "plus"){
                        item.EditStatus = "minus";
                        this.$data.editList[0].SortList.push(item);
                    }else{
                        item.EditStatus = "plus";
                        //从我的应用中减去
                        this.$data.editList[0].SortList.forEach( (el, ii) => {
                            if(el.text == item.text){
                                this.$data.editList[0].SortList.splice(ii,1);
                            }
                        })
                    }
                }
            }
        }
    }
}
</script>



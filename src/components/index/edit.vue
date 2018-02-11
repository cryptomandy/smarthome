<template>
    <div class="news">
        <h5 class="edit_title">div拖动编辑</h5>
        <div class="edit_bg">
            <div class="edit_item" v-for="(list,ind) in editList">
                <h6>
                    <span>{{list.SortName}}</span>
                    <span class="btu_edit" v-if='list.SortId=="1" && allStatus==0' @click="setEdit">编辑</span>
                    <span class="btu_edit" v-if='list.SortId=="1" && allStatus==1' @click="setFinish">完成</span>
                </h6>
                <div class="edits">
                    <ul>
                        <li v-for="(item,index) in list.SortList"  v-bind:key="item.text">
                            <!-- 我的应用加拖曳事件添加 -->
                            <div v-if='list.SortId=="1"' class="e_items"  @dragover="preventOver($event)" @drop.prevent="drop($event)" id="dropBox">
                                <div class="e_bg" @dragstart="drag($event)" :data-id="index" draggable="true" @click="minusOrPlus(list,ind,item,index)" id="dragBox">
                                    <div class="e_status">
                                        <span class="e_minus" v-if='item.EditStatus =="minus" && allStatus==1'>-</span>
                                        <span class="e_plus" v-if='item.EditStatus =="plus" && allStatus==1'>+</span>
                                    </div>
                                    <span class="e_icon" v-bind:style="{background: item.background}"></span>
                                    <p>{{item.text}}</p>
                                </div>
                            </div>
                            
                            <div v-else class="e_items">
                                <div class="e_bg" @click="minusOrPlus(list,ind,item,index)">
                                    <div class="e_status">
                                        <span class="e_minus" v-if='item.EditStatus =="minus" && allStatus==1'>-</span>
                                        <span class="e_plus" v-if='item.EditStatus =="plus" && allStatus==1'>+</span>
                                    </div>
                                    <span class="e_icon" v-bind:style="{background: item.background}"></span>
                                    <p>{{item.text}}</p>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
//？？？ 为什么在总的main方法中写了这边还要写
import axios from 'axios'
export default {
    
    name: 'edit',
    data () {
        return {
            editList :[
                {
                    "SortName":"我的应用",
                    "SortId":"1",
                    "SortList":[
                        
                    ]
                },
                {
                    "SortName":"旅游",
                    "SortId":"2",
                    "SortList":[
                        {
                            "text": "火车票",
                            "background":"#e17f50",
                        }, 
                        {
                            "text": "机票",
                            "background":"#db72c9",
                        }, 
                        {
                            "text": "日本",
                            "background":"#a673ea",
                        }, 
                        {
                            "text": "德国",
                            "background":"#7a73ea",
                        },
                        {
                            "text": "酒店",
                            "background":"#a673ea",
                        }, 
                        {
                            "text": "美国",
                            "background":"#7a73ea",
                        },
                        {
                            "text": "境内意外险",
                            "background":"#e17f50",
                        }, 
                        {
                            "text": "境外意外险",
                            "background":"#db72c9",
                        }, 
                        {
                            "text": "全年意外险",
                            "background":"#a673ea",
                        }, 
                        {
                            "text": "高铁贵宾厅",
                            "background":"#7a73ea",
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
                        }, 
                        {
                            "text": "在线教育",
                            "background":"#db72c9",
                        }, 
                        {
                            "text": "拍照",
                            "background":"#a673ea",
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
                        }, 
                        {
                            "text": "挂号",
                            "background":"#db72c9",
                        }, 
                        {
                            "text": "电话医生",
                            "background":"#a673ea",
                        }
                    ]
                }
            ],
            allStatus: 0, //编辑0 ，完成1
        }
    },
    created(){
        this.getList();
    },
    mounted(){
        
    },
    methods:{
        getList(){
            if(this.$data.editList.length==0) return false;
            this.$data.editList.forEach((list,i) => {
                if(list.SortList==0) return false;
                list.SortList.forEach((item,index) => {
                    item.SubSortId =  list.SortId;
                })
            });
        },
        //点击编辑设置状态
        setStatus(){
            this.$data.editList.forEach((list,i) => {
                list.SortList.forEach((item,index) => {
                    if(list.SortId=="1"){//我的应用
                        if(list.EditStatus == "undefined"){
                            Vue.$set(item,"EditStatus","minus");
                        }else{
                            item.EditStatus = "minus";
                        }
                    }else{
                        if(list.EditStatus == "undefined"){
                            Vue.$set(item,"EditStatus","plus");
                        }else{
                            item.EditStatus = "plus";
                        }
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
            if(this.$data.allStatus==1){
                for(let i= 0 ;i< this.$data.editList.length; i++){
                    let el = this.$data.editList[i];

                    if(el.SortId == list.SortId){
                        el.SortList.splice(index,1);
                        if(list.SortId=="1"){
                            item.EditStatus = "plus";
                            this.$data.editList.forEach(elem => {
                                if(elem.SortId == item.SubSortId){
                                    elem.SortList.push(item);
                                }
                            })
                            
                        }else{
                            item.EditStatus = "minus";
                            this.$data.editList[0].SortList.push(item);
                        }
                        break;
                    }
                }
            }
        },

        //拖曳事件
        drag(event){
            console.log(event);
            event.dataTransfer.setData("Text",event.target.id);
        },
        preventOver(event){
            event.preventDefault();
        },
        drop(event){
            console.log(event);
            let data = event.dataTransfer.getData("Text");
        },
    }
}
</script>

<style scoped lang="less">
/*不能直接引进less变量*/ 
// @import from '@/assets/common/base'
.news{
    font-size: 20/24rem;
    .edit_title{
        text-align: left;
        padding: 30/24rem 0 10/24rem 30/24rem;
        font-size: 36/24rem;
    }
}
.edit_bg{
    .edit_item{
        width: 100%;
        h6{
            padding: 0 30/24rem;
            height: 80/24rem;
            line-height: 80/24rem;
            font-size: 32/24rem;
            display: flex;
            justify-content: space-between;
            .btu_edit{
                width: 120/24rem;
                text-align: right;
            }
        }
        .edits{
            padding: 0 30/24rem;
            
        }
        ul{
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            li{
                box-sizing: border-box;
                position: relative;
                // margin: 10/24rem 1.5%;
                flex: 0 0 25%;
                text-align: center;
                background: #f5f5f5;
                .e_icon{
                    margin: 20/24rem auto 0;
                    width: 80%;
                    display: block;
                    height: 80/24rem;
                }
                p{
                    padding: 20/24rem 0;
                }
                .e_status{
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: 1;
                    color: #fff;
                    span{
                        display: block;
                        border-radius: 50%;
                        width: 1.2rem;
                        height: 1.2rem;
                        line-height: 1.2rem;
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

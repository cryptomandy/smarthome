
<style scoped lang="less">
@import "../../style/mixin";
</style>
<template>
    <!-- 模板文件 -->
    <div class="root_box">
        <h5 class="big_title"></h5>
        <!-- -->
        <div class="es6-box">

        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "member",
  data() {
    return {
        lists :[],
        arr1 : [
            {
                'id':"pai",
                'name':2
            }
        ],
        arr2 : [
            {
                'id':1,
                'name':"pai"
            },
            {
                'id':1,
                'name':"gis"
            },
            {
                'id':1,
                'name':"gis"
            },
             {
                'id':1,
                'name':"pai"
            },
            {
                'id':1,
                'name':"gis"
            },
        ],
        arr3 :[1,2,3,"4"],
        arr4 :[1,2,3],
        objList : {
                "cityCode": 120100000000,
                "cityName": "天津市",
                "countyCode": 120101000000,
                "countyName": "和平区",
                "id": "192882",
                "label": "越南大区2[192882]",
                "lat": "",
                "lng": "",
                "orgCode": "192882",
                "orgName": "越南大区2",
                "parentOrgCode": "999990",
                "property": "8120",
                "propertyName": "授权商",
                "provinceCode": 120000000000,
                "provinceName": "天津",
                "status": 1,
                "type": 0,
                "typeCode": 1010,
                "typeName": "大区",
                'children':[{
                    "children": [{
                        "children": [],
                        "cityCode": 120100000000,
                        "cityName": "天津市",
                        "countyCode": 120101000000,
                        "countyName": "和平区",
                        "id": "32131",
                        "label": "test1[32131]",
                        "lat": "39.13102789263628",
                        "lng": "117.20264421834666",
                        "orgCode": "32131",
                        "orgName": "test1",
                        "parentOrgCode": "228282",
                        "property": "8120",
                        "propertyName": "授权商",
                        "provinceCode": 120000000000,
                        "provinceName": "天津",
                        "status": 1,
                        "type": 0,
                        "typeCode": 1090,
                        "typeName": "外包"
                    }],
                    "cityCode": 350100000000,
                    "cityName": "福州市",
                    "countyCode": 350102000000,
                    "countyName": "鼓楼区",
                    "id": "131313",
                    "label": "4636[131313]",
                    "lat": "",
                    "lng": "",
                    "orgCode": "131313",
                    "orgName": "4636",
                    "parentOrgCode": "228282",
                    "property": "8120",
                    "propertyName": "授权商",
                    "provinceCode": 350000000000,
                    "provinceName": "福建省",
                    "status": 1,
                    "type": 0,
                    "typeCode": 1010,
                    "typeName": "大区"
                }]
            },
    };
  },
  props: {

  },
  components: {

  },
  created() {
    this.setData();
    var newObj = {};
    var Obj = this.deepClone(this.objList,newObj);
    console.log(Obj,"clone deep");
  },
  mounted() {

  },
  computed: {

  },
  methods: {
      setData(){
          let vm = this;
          //find 和 findIndex都是找到第一个满足条件的元素
          console.log(vm.arr2.find(item => item.name === "gis"));
          console.log(vm.arr2.findIndex(item => item.name === "gis"));

          console.log(vm.arr4.includes(1),"includes");
          //includes不能使用对象
          console.log(vm.arr2.includes({
              'id':"pai",
              'name':2
          }),"includes2");
      },
      deepClone(origin,target){

        var target = target|| {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
          
        for(var prop in origin){
            if(origin.hasOwnProperty(prop)){
                if(origin[prop] != "null" && typeof(origin[prop]) == 'object'){//判断原型链
                    target[prop] = (toStr.call(origin[prop]) == arrStr) ? [] : {}//判断obj的key是否是数组
                    this.deepClone(origin[prop],target[prop]);//递归的方式
                }else{
                    target[prop] = origin[prop];
                }
            }
        }
        return target
      }
  }
};
</script>



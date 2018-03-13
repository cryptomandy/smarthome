/**
 * @name 常用正则验证
 * @description emptyTip为为空时提示信息，tips验证不通过时
 * @todo 可以封装一个组件，传入提示值
 * */
export default {
    UserName:{
        "emptyTip":"请输入姓名",
        "tips":"姓名请输入中文",
        "reg":/^[\u4e00-\u9fa5]{1,}$/ ,//  /^[\u2E80-\uFE4F]+[-\s]?[a-zA-Z]*$/,
    },
    Age:{
        "emptyTip":"请输入年龄",
        "tips":"年龄请输入数字",
        "reg":/^\d{1,3}$/
    },
    Identify:{
        "emptyTip":"请输入身份证号",
        "tips":"请输入正确的身份证号",
        "reg":/(\d{6})[1,2,3]([0-9]{10})(\d|x|X)$/     //[1,2,3]以1/2/3开头的年限
    },
    Email:{
        "emptyTip":"请输入邮箱",
        "tips":"请输入正确的邮箱",
        "reg":/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
         //zhangshna.Mr@163.com、abc@sina.com.cn、lu62882@126.com
    },
    Sex:{
        "emptyTip":"请选择性别",
        "tips":"请选择性别",
        "reg":/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
    },
    Birthday:{
        "emptyTip":"请选择出生日期",
        "tips":"请选择出生日期",
        "reg":/^[^((\'\‘\’\"\“\”)\s]+$/, //不为空显示
    },
    Address:{
        "emptyTip":"请选择邮寄地址",
        "tips":"请选择邮寄地址",
        "reg":/^[^((\'\‘\’\"\“\”)\s]+$/, //不为空显示
    },

    Phone:{
        "emptyTip":"请输入手机号码",
        "tips":"请输入正确的手机号码",
        "reg":/^1[3,4,5,7,8][0-9]{9}$/
    },
    Code:{      //验证码
        "emptyTip":"请输入验证码",
        "tips":"请输入正确的验证码",
        "reg":/^\d{4,6}$/
    },
    Password:{
        "emptyTip":"请输入密码",
        "tips":"密码为字母或者数字组合",
        "reg":/^\d{4,6}$/
    },
    ComfirmPassword:{
        "emptyTip":"请输入确认密码",
        "tips":"密码为字母或者数字组合",
        "reg":/^\d{4,6}$/
    },

    Notice:{        //不为空备注
        "emptyTip":"请输入备注",
        "tips":"输入备注不能为有特殊符号",
        "reg":/^[^((\'\‘\’\"\“\”)\s]+$/, //不为空显示
    },
}

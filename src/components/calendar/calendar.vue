<style scoped lang="less">
@mColor: #5a76c3;
@sColor: #ea6151;
.calendar {
  margin: auto;
  width: 100%;
  min-width: 300px;
  background: #fff;
  font-family: "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  user-select: none;
  padding-top: 10px;
}

.calendar-tools {
  height: 40px;
  font-size: 20px;
  line-height: 40px;
  color: @mColor;
}
.calendar-tools span {
  cursor: pointer;
}
.calendar-prev {
  width: 14.28571429%;
  float: left;
  text-align: center;
}
.calendar-info {
  padding-top: 3px;
  font-size: 16px;
  line-height: 1.3;
  text-align: center;
}
.calendar-info > div.month {
  margin: auto;
  height: 20px;
  width: 100px;
  text-align: center;
  color: @mColor;
  overflow: hidden;
  position: relative;
}
.calendar-info > div.month .month-inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 240px;
  transition: top 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.calendar-info > div.month .month-inner > span {
  display: block;
  font-size: 14px;
  height: 20px;
  width: 100px;
  overflow: hidden;
  text-align: center;
}
.calendar-info > div.year {
  font-size: 10px;
  line-height: 1;
  color: #999;
}
.calendar-next {
  width: 14.28571429%;
  float: right;
  text-align: center;
}

.calendar table {
  clear: both;
  width: 100%;
  /* margin-bottom:10px; */
  border-collapse: collapse;
  color: #444444;
}
.calendar td {
  margin: 2px !important;
  padding: 0px 0;
  width: 14.28571429%;
  height: 44px;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  line-height: 125%;
  cursor: pointer;
  position: relative;
  vertical-align: top;
}
.calendar td.week {
  font-size: 12px;
  pointer-events: none !important;
  cursor: default !important;
}
.calendar td.disabled {
  color: #ccc;
  pointer-events: none !important;
  cursor: default !important;
}
.calendar td.disabled div {
  color: #ccc;
}
.calendar td span {
  display: block;
  max-width: 40px;
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  margin: 0px auto;
  border-radius: 20px;
}
.calendar td:not(.selected) span:not(.red):hover {
  background: #f3f8fa;
  color: #444;
}
.calendar td:not(.selected) span.red:hover {
  background: #f9efef;
}

.calendar td:not(.disabled) span.red {
  color: @sColor;
}
.calendar td.selected span {
  background-color: @mColor;
  color: #fff;
}
.calendar td .text {
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  text-align: center;

  padding: 2px;
  font-size: 8px;
  line-height: 1.2;
  color: #444;
}
.calendar td .isGregorianFestival,
.calendar td .isLunarFestival {
  color: @sColor;
}
.calendar td.selected span.red {
  background-color: @mColor;
  color: #fff;
}
.calendar td.selected span.red:hover {
  background-color: @mColor;
  color: #fff;
}
.calendar thead td {
  text-transform: uppercase;
  height: 30px;
  vertical-align: middle;
}
.calendar-button {
  text-align: center;
}
.calendar-button span {
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  min-width: 5em;
  vertical-align: baseline;
  background: @mColor;
  color: #fff;
  margin: 0 0.25em 0 0;
  padding: 0.6em 2em;
  font-size: 1em;
  line-height: 1em;
  text-align: center;
  border-radius: 0.3em;
}
.calendar-button span.cancel {
  background: #efefef;
  color: #666;
}
.calendar-years {
  position: absolute;
  left: 0px;
  top: 60px;
  right: 0px;
  bottom: 0px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
}
.calendar-years.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0px);
}
.calendar-years > span {
  margin: 1px 5px;
  display: inline-block;
  width: 60px;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #fbfbfb;
  color: #999;
}
.calendar-years > span.active {
  border: 1px solid @mColor;
  background-color: @mColor;
  color: #fff;
}
</style>

<template>
    <div class="calendar_box">
      <div class="calendar" v-for="(mon,k) in calList">
          <div class="calendar-tools">
              <div class="calendar-info" @click.stop="changeYear">
                  <div class="month">
                      <span>{{mon.year}}年{{mon.month}}月</span>
                  </div>
                  <!-- <div class="year">{{mon.year}}年</div> -->
              </div>
          </div>
          <table cellpadding="5">
          <thead>
              <tr>
                  <td v-for="week in weeks" class="week">周{{week}}</td>
              </tr>
          </thead>
          <tbody>
            <!-- TODO -->
          <tr v-for="(day,k1) in mon.days" style="{'animation-delay',(k1*30)+'ms'}">
              <td v-for="(child,k2) in day" :class="{'selected':child.selected,'disabled':child.disabled}" @click="select(k,k1,k2,$event)">

                  <span :class="{'red':k2==0||k2==6||((child.isLunarFestival||child.isGregorianFestival) && lunar)}">{{child.day}}</span>

                  <div class="text" v-if="child.eventName!=undefined">{{child.eventName}}</div>
                  <div class="text" :class="{'isLunarFestival':child.isLunarFestival,'isGregorianFestival':child.isGregorianFestival}"
                  v-if="lunar">{{child.lunar}}</div>
              </td>
          </tr>
          </tbody>
          </table>
      </div>
    </div>

</template>

<script>
// https://github.com/jinzhe/vue-calendar
/**
 * @name 平铺显示
 * */
import calendar from "./calendar.js";
export default {
  props: {
    // 多选模式
    multi: {
      type: Boolean,
      default: false
    },
    showMouthNum: {
      type: Number,
      default: 4
    },
    // 范围模式
    range: {
      type: Boolean,
      default: false
    },
    // 默认日期
    value: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 开始选择日期
    begin: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 结束选择日期
    end: {
      type: Array,
      default: function() {
        return [];
      }
    },

    // 是否小于10补零
    zero: {
      type: Boolean,
      default: false
    },
    // 屏蔽的日期
    disabled: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 是否显示农历
    lunar: {
      type: Boolean,
      default: false
    },

    // 自定义星期名称
    weeks: {
      type: Array,
      default: function() {
        return window.navigator.language.toLowerCase() == "zh-cn"
          ? ["日", "一", "二", "三", "四", "五", "六"]
          : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      }
    },
    // 自定义月份
    months: {
      type: Array,
      default: function() {
        return window.navigator.language.toLowerCase() == "zh-cn"
          ? [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月"
            ]
          : [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ];
      }
    },
    // 自定义事件
    events: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      years: [],
      yearsShow: false,
      year: 0,
      month: 0,
      day: 0,
      days: [],
      multiDays: [],
      today: [],
      festival: {
        lunar: {
          "1-1": "春节",
          "1-15": "元宵节",
          "2-2": "龙头节",
          "5-5": "端午节",
          "7-7": "七夕节",
          "7-15": "中元节",
          "8-15": "中秋节",
          "9-9": "重阳节",
          "10-1": "寒衣节",
          "10-15": "下元节",
          "12-8": "腊八节",
          "12-23": "祭灶节"
        },
        gregorian: {
          "1-1": "元旦",
          "2-14": "情人节",
          "3-8": "妇女节",
          "3-12": "植树节",
          "4-5": "清明节",
          "5-1": "劳动节",
          "5-4": "青年节",
          "6-1": "儿童节",
          "7-1": "建党节",
          "8-1": "建军节",
          "9-10": "教师节",
          "10-1": "国庆节",
          "12-24": "平安夜",
          "12-25": "圣诞节"
        }
      },
      rangeBegin: [],
      rangeEnd: [],

      calList: []
    };
  },
  watch: {
    events() {
      this.render(this.year, this.month);
    },
    value() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let now = new Date();
      this.year = now.getFullYear();
      this.month = now.getMonth();
      this.day = now.getDate();
      // 是否有时间；
      // if (this.value.length>0) {
      //     this.year = parseInt(this.value[0])
      //     this.month = parseInt(this.value[1]) - 1
      //     this.day = parseInt(this.value[2])
      // }
      //循环获N个月时间
      for (let i = 0; i < this.showMouthNum; i++) {
        if (this.month > 12) {
          this.month = 1;
          this.year = this.year + 1;
        }
        let obj = {
          year: this.year,
          month: this.month + 1,
          days: this.render(this.year, this.month)
        };
        this.calList.push(obj);
        this.month++;
      }
      // this.render(this.year, this.month)
    },
    // 渲染日期 TODO:
    render(y, m) {
      // console.log(y,m,"render");
      let firstDayOfMonth = new Date(y, m, 1).getDay(); //当月第一天
      let lastDateOfMonth = new Date(y, m + 1, 0).getDate(); //当月最后一天
      let lastDayOfLastMonth = new Date(y, m, 0).getDate(); //最后一月的最后一天
      this.year = y;
      let seletSplit = this.value;
      console.log(seletSplit);
      let i,
        line = 0,
        temp = [],
        nextMonthPushDays = 1;
      for (i = 1; i <= lastDateOfMonth; i++) {
        let day = new Date(y, m, i).getDay(); //返回星期几（0～6）
        let k;
        // 第一行
        if (day == 0) {
          temp[line] = [];
        } else if (i == 1) {
          temp[line] = [];
          k = lastDayOfLastMonth - firstDayOfMonth + 1;
          for (let j = 0; j < firstDayOfMonth; j++) {
            // console.log("第一行",lunarYear,lunarMonth,lunarValue,lunarInfo)
            temp[line].push(
              Object.assign(
                { day: k, disabled: true, year: this.year, month: this.month },
                this.getLunarInfo(
                  this.computedPrevYear(),
                  this.computedPrevMonth(true),
                  k
                ),
                this.getEvents(
                  this.computedPrevYear(),
                  this.computedPrevMonth(true),
                  k
                )
              )
            );
            k++;
          }
        }

        // console.log(this.lunar(this.year,this.month,i));
        let chk = new Date();
        let chkY = chk.getFullYear();
        let chkM = chk.getMonth();
        // 匹配上次选中的日期
        if (
          parseInt(seletSplit[0]) == this.year &&
          parseInt(seletSplit[1]) == this.month &&
          parseInt(seletSplit[2]) == i
        ) {
          // console.log("匹配上次选中的日期",lunarYear,lunarMonth,lunarValue,lunarInfo)
          temp[line].push(
            Object.assign(
              { day: i, selected: true, year: this.year, month: this.month },
              this.getLunarInfo(this.year, this.month + 1, i),
              this.getEvents(this.year, this.month + 1, i)
            )
          );
        } else if (
          chkY == this.year &&
          chkM == this.month &&
          i == this.day &&
          this.value == ""
        ) {
          // 没有默认值的时候显示选中今天日期
          // console.log("今天",lunarYear,lunarMonth,lunarValue,lunarInfo)
          temp[line].push(
            Object.assign(
              { day: i, selected: true, year: this.year, month: this.month },
              this.getLunarInfo(this.year, this.month + 1, i),
              this.getEvents(this.year, this.month + 1, i)
            )
          );
        } else {
          // 普通日期
          // console.log("设置可选范围",i,lunarYear,lunarMonth,lunarValue,lunarInfo)
          let options = Object.assign(
            { day: i, selected: false, year: this.year, month: this.month },
            this.getLunarInfo(this.year, this.month + 1, i),
            this.getEvents(this.year, this.month + 1, i)
          );
          if (this.begin.length > 0) {
            let beginTime = Number(
              new Date(
                parseInt(this.begin[0]),
                parseInt(this.begin[1]) - 1,
                parseInt(this.begin[2])
              )
            );
            if (beginTime > Number(new Date(this.year, this.month, i)))
              options.disabled = true;
          }
          if (this.end.length > 0) {
            let endTime = Number(
              new Date(
                parseInt(this.end[0]),
                parseInt(this.end[1]) - 1,
                parseInt(this.end[2])
              )
            );
            if (endTime < Number(new Date(this.year, this.month, i)))
              options.disabled = true;
          }
          if (this.disabled.length > 0) {
            if (
              this.disabled.filter(v => {
                return (
                  this.year === v[0] && this.month === v[1] - 1 && i === v[2]
                );
              }).length > 0
            ) {
              options.disabled = true;
            }
          }
          temp[line].push(options);
        }
        // 到周六换行
        if (day == 6 && i < lastDateOfMonth) {
          line++;
        } else if (i == lastDateOfMonth) {
          // line++
          let k = 1;
          for (let d = day; d < 6; d++) {
            // console.log(this.computedNextYear()+"-"+this.computedNextMonth(true)+"-"+k)
            temp[line].push(
              Object.assign(
                { day: k, disabled: true, year: this.year, month: this.month },
                this.getLunarInfo(
                  this.computedNextYear(),
                  this.computedNextMonth(true),
                  k
                ),
                this.getEvents(
                  this.computedNextYear(),
                  this.computedNextMonth(true),
                  k
                )
              )
            );
            k++;
          }
          // 下个月除了补充的前几天开始的日期
          nextMonthPushDays = k;
        }
      } //end for

      // console.log(this.year+"/"+this.month+"/"+this.day+":"+line)
      // 补充第六行让视觉稳定
      if (line <= 5 && nextMonthPushDays > 0) {
        // console.log({nextMonthPushDays:nextMonthPushDays,line:line})
        for (let i = line + 1; i <= 5; i++) {
          temp[i] = [];
          let start = nextMonthPushDays + (i - line - 1) * 7;
          for (let d = start; d <= start + 6; d++) {
            temp[i].push(
              Object.assign(
                { day: d, disabled: true, year: this.year, month: this.month },
                this.getLunarInfo(
                  this.computedNextYear(),
                  this.computedNextMonth(true),
                  d
                ),
                this.getEvents(
                  this.computedNextYear(),
                  this.computedNextMonth(true),
                  d
                )
              )
            );
          }
        }
      }
      // this.days = temp
      return temp;
    },
    computedPrevYear() {
      let value = this.year;
      if (this.month - 1 < 0) {
        value--;
      }
      return value;
    },
    computedPrevMonth(isString) {
      let value = this.month;
      if (this.month - 1 < 0) {
        value = 11;
      } else {
        value--;
      }
      // 用于显示目的（一般月份是从0开始的）
      if (isString) {
        return value + 1;
      }
      return value;
    },
    computedNextYear() {
      let value = this.year;
      if (this.month + 1 > 11) {
        value++;
      }
      return value;
    },
    computedNextMonth(isString) {
      let value = this.month;
      if (this.month + 1 > 11) {
        value = 0;
      } else {
        value++;
      }
      // 用于显示目的（一般月份是从0开始的）
      if (isString) {
        return value + 1;
      }
      return value;
    },
    // 获取农历信息
    getLunarInfo(y, m, d) {
      let lunarInfo = calendar.solar2lunar(y, m, d);
      let lunarValue = lunarInfo.IDayCn;
      // console.log(lunarInfo)
      let isLunarFestival = false;
      let isGregorianFestival = false;
      if (
        this.festival.lunar[lunarInfo.lMonth + "-" + lunarInfo.lDay] !=
        undefined
      ) {
        lunarValue = this.festival.lunar[
          lunarInfo.lMonth + "-" + lunarInfo.lDay
        ];
        isLunarFestival = true;
      } else if (this.festival.gregorian[m + "-" + d] != undefined) {
        lunarValue = this.festival.gregorian[m + "-" + d];
        isGregorianFestival = true;
      }
      return {
        lunar: lunarValue,
        isLunarFestival: isLunarFestival,
        isGregorianFestival: isGregorianFestival
      };
    },
    // 获取自定义事件
    getEvents(y, m, d) {
      if (Object.keys(this.events).length == 0) return false;
      let eventName = this.events[y + "-" + m + "-" + d];
      let data = {};
      if (eventName != undefined) {
        data.eventName = eventName;
      }
      return data;
    },
    // 选中日期
    select(k, k1, k2, e) {
      console.log(k, k1, k2, e, "点击");
      if (e != undefined) e.stopPropagation();

      // 取消上次选中
      if (this.calList.length > 0) {
        this.calList.forEach(vv => {
          vv.days.forEach(ii => {
            ii.forEach(jj => {
              jj.selected = false;
            });
          });
        });
      }
      this.calList[k].days[k1][k2].selected = true;
      this.day = this.calList[k].days[k1][k2];
      let curDay = this.calList[k].days[k1][k2];

      this.$emit("select", [
        curDay.year,
        this.zero ? this.zeroPad(curDay.month + 1) : curDay.month + 1,
        this.zero ? this.zeroPad(curDay.day) : curDay.day
      ]);
    },
    changeYear() {
      if (this.yearsShow) {
        this.yearsShow = false;
        return false;
      }
      this.yearsShow = true;
      this.years = [];
      for (let i = ~~this.year - 20; i < ~~this.year + 10; i++) {
        this.years.push(i);
      }
    },
    selectYear(value) {
      this.yearsShow = false;
      this.year = value;
      this.render(this.year, this.month);
      this.$emit("selectYear", value);
    },
    // 返回今天
    setToday() {
      let now = new Date();
      this.year = now.getFullYear();
      this.month = now.getMonth();
      this.day = now.getDate();
      this.render(this.year, this.month);
      // 遍历当前日找到选中
      this.days.forEach(v => {
        let day = v.find(vv => {
          return vv.day == this.day && !vv.disabled;
        });
        if (day != undefined) {
          day.selected = true;
        }
      });
    },
    // 日期补零
    zeroPad(n) {
      return String(n < 10 ? "0" + n : n);
    }
  }
};
</script>

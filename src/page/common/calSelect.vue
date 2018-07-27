<style lang="less" scoped>
</style>

<template>
    <div class="ticket_bg">
        <div class="calendar-dropdown">
            <calendar :zero="calendar.zero" :lunar="calendar.lunar" :value="calendar.value"
            :begin="calendar.begin" :end="calendar.end" @select="calendar.select" :showMouthNum="calendar.showMouthNum">
            </calendar>
        </div>
    </div>
</template>

<script>
// 日历平铺显示
import calendar from "../../components/calendar/calendar.vue";
export default {
  data() {
    return {
      urlparam: "",
      calendar: {
        show: false,
        showMouthNum: 4, //日历显示几个月,默认显示4个月
        zero: true,
        value: [], //默认日期
        lunar: false, //显示农历,
        curDate: [],
        select: value => {
          console.log(value, "当前日历");
          this.calendar.show = true;
          this.calendar.curDate = value;
          // this.$router.push({path:'/' + this.$route.query.urlname + "?curdate=" + value.join("-")})
        }
      }
    };
  },
  components: {
    calendar
  },
  created() {
    console.log(this.$route.params);
  },
  mounted() {},
  computed: {},
  methods: {
    openByDrop(e) {
      this.calendar.show = true;
      this.calendar.left = e.target.offsetLeft + 19;
      this.calendar.top = e.target.offsetTop + 70;

      e.stopPropagation();
      window.setTimeout(() => {
        document.addEventListener(
          "click",
          e => {
            this.calendar.show = false;
            document.removeEventListener("click", () => {}, false);
          },
          false
        );
      }, 1000);
    }
  }
};
</script>



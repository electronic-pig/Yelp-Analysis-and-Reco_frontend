<template>
  <AnalysisHead />
  <BaseChart
    v-if="isDataLoaded"
    :chartOption="chartOption1"
    style="height: 650px"
  />
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption2" />
  <!-- <div class="container">
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption3" />
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption4" />
  </div> -->
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";
import request from "@/utils/request.js";
export default {
  name: "UserAnalysis",
  components: {
    AnalysisHead,
    BaseChart,
  },
  data() {
    return {
      chartOption1: {},
      chartOption2: {},
      chartOption3: {},
      chartOption4: {},
      isDataLoaded: false,
    };
  },
  async created() {
    const response1 = await request({
      url: "users/info_by_year",
      method: "get",
    });
    this.chartOption1 = {
      title: {
        text: "用户分析",
      },
      legend: {},
      xAxis: {
        type: "category",
        data: response1.map((item) => item.year + "年"),
      },
      yAxis: [
        {
          type: "value",
          name: "数量",
        },
        {
          type: "value",
          name: "比率",
          axisLabel: {
            formatter: "{value} %",
          },
        },
      ],
      series: [
        {
          name: "注册用户数",
          type: "bar",
          stack: "count",
          emphasis: {
            focus: "series",
          },
          data: response1.map((item) => item.registration_user_count),
          markPoint: {
            data: [{ type: "max", name: "Max" }],
          },
        },
        {
          name: "精英用户数",
          type: "bar",
          stack: "count",
          emphasis: {
            focus: "series",
          },
          data: response1.map((item) => item.registration_user_count),
          markPoint: {
            data: [{ type: "min", name: "min" }],
          },
        },
        {
          name: "打卡数",
          type: "bar",
          stack: "count",
          emphasis: {
            focus: "series",
          },
          data: response1.map((item) => item.checkin_count),
        },
        {
          name: "评论数",
          type: "bar",
          stack: "review",
          barWidth: 10,
          emphasis: {
            focus: "series",
          },
          data: response1.map((item) => item.review_count),
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
        },
        {
          name: "tip数",
          type: "bar",
          stack: "review",
          emphasis: {
            focus: "series",
          },
          data: response1.map((item) => item.tip_count),
          markPoint: {
            data: [{ type: "max", name: "Max" }],
          },
          markLine: {
            data: [{ type: "max", name: "Max" }],
          },
        },
        {
          name: "沉默用户比率",
          type: "line",
          yAxisIndex: 1,
          color: "pink",
          emphasis: {
            focus: "series",
          },
          data: response1.map((item) =>
            (item.silent_user_ratio * 100).toFixed(1)
          ),
        },
      ],
    };
    const response2 = await request({
      url: "users/user_with_most_review",
      method: "get",
    });
    const response3 = await request({
      url: "users/user_with_most_fans",
      method: "get",
    });
    this.chartOption2 = {
      title: {
        text: "评论达人与人气用户",
      },
      legend: {
        data: response2.slice(0, 10).map((item) => item.user_name),
      },
      series: [
        {
          name: "人气用户",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],
          label: {
            position: "inner",
            fontSize: 14,
          },
          labelLine: {
            show: false,
          },
          data: response3.slice(0, 5).map((item) => ({
            name: item.user_name,
            value: item.user_fans,
            selected: true,
          })),
        },
        {
          name: "评论达人",
          type: "pie",
          radius: ["45%", "60%"],
          labelLine: {
            length: 30,
          },
          label: {
            formatter: "{hr|}\n  {b|{b}：}{c} 次 ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                color: "#4C5058",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 33,
              },
            },
          },
          data: response2.slice(0, 10).map((item) => ({
            name: item.user_name,
            value: item.user_review_count,
          })),
        },
      ],
    };
    this.isDataLoaded = true;
  },
  mounted() {
    this.chartOption3 = {
      title: {
        text: "优质用户比例",
      },
      series: [
        {
          type: "liquidFill",
          data: [
            {
              value: 0.45,
              itemStyle: {
                normal: {
                  color: "#e25d3e",
                },
              },
            },
          ],
          backgroundStyle: {
            color: "#ffe5e0",
          },
          label: {
            normal: {
              textStyle: {
                color: "#e25d3e",
              },
              formatter: function (param) {
                return param.value * 100 + "%";
              },
            },
          },
          outline: {
            itemStyle: {
              borderColor: "#e25d3e",
            },
          },
        },
      ],
    };
    this.chartOption4 = {
      title: {
        text: "沉默用户比例",
      },
      series: [
        {
          type: "liquidFill",
          data: [
            {
              value: 0.45,
              itemStyle: {
                normal: {
                  color: "#e83f3f",
                },
              },
            },
          ],
          backgroundStyle: {
            color: "#f9c8c8",
          },
          label: {
            normal: {
              textStyle: {
                color: "#e83f3f",
              },
              formatter: function (param) {
                return param.value * 100 + "%";
              },
            },
          },
          outline: {
            itemStyle: {
              borderColor: "#e83f3f",
            },
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>

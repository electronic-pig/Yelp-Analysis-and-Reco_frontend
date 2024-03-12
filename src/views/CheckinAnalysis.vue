<template>
  <AnalysisHead />
  <div class="container">
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption1" />
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption2" />
  </div>
  <div class="container">
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption3" />
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption4" />
  </div>
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";
import request from "@/utils/request.js";
export default {
  name: "CheckinAnalysis",
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
      url: "checkin/checkin_count_by_year",
      method: "get",
    });
    this.chartOption1 = {
      title: {
        text: "每年的打卡次数",
      },
      legend: {
        data: ["打卡次数"],
      },
      xAxis: {
        data: response1.map((item) => item.checkin_year + "年"),
      },
      yAxis: {},
      series: [
        {
          name: "打卡次数",
          type: "bar",
          data: response1.map((item) => item.count),
        },
      ],
    };
    const response2 = await request({
      url: "checkin/checkin_count_by_hour",
      method: "get",
    });
    this.chartOption2 = {
      title: {
        text: "每小时的打卡次数",
      },
      legend: {
        data: ["打卡次数"],
      },
      xAxis: {
        data: response2.map((item) => item.checkin_hour + "时段"),
      },
      yAxis: {},
      series: [
        {
          name: "打卡次数",
          type: "line",
          data: response2.map((item) => item.count),
        },
      ],
    };
    const response3 = await request({
      url: "checkin/city_with_most_checkin",
      method: "get",
    });
    this.chartOption3 = {
      title: {
        text: "最喜欢打卡的城市",
        left: "center",
      },
      legend: {
        orient: "vertical",
        top: "10%",
        left: "10%",
        data: response3.map((item) => item.city),
      },
      series: [
        {
          name: "最喜欢打卡的城市",
          type: "pie",
          radius: "50%",
          data: response3.map((item) => ({
            name: item.city,
            value: item.checkin_count,
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    const response4 = await request({
      url: "checkin/business_order_by_checkin_count",
      method: "get",
    });
    this.chartOption4 = {
      title: {
        text: "商家打卡排行榜(前10)",
      },
      legend: {
        data: ["打卡次数"],
      },
      xAxis: {
        data: response4.slice(0, 10).map((item) => item.name),
        show: false,
      },
      yAxis: {},
      series: [
        {
          name: "打卡次数",
          type: "bar",
          data: response4.slice(0, 10).map((item) => item.checkin_count),
        },
      ],
    };
    this.isDataLoaded = true;
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <AnalysisHead />
  <div class="container">
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption1" />
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption2" />
  </div>
  <BaseChart
    style="height: 600px"
    v-if="isDataLoaded"
    :chartOption="chartOption3"
  />
  <FooterView />
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";
import FooterView from "@/components/UserComponents/FooterView.vue";
import request from "@/utils/request.js";
export default {
  name: "StarsAnalysis",
  components: {
    AnalysisHead,
    BaseChart,
    FooterView
  },
  data() {
    return {
      chartOption1: {},
      chartOption2: {},
      chartOption3: {},
      isDataLoaded: false,
    };
  },
  methods: {
    getWeekday(review_week) {
      const weekdays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      return weekdays[review_week - 1];
    },
  },
  async created() {
    const loadingInstance = this.$loading({ text: "努力加载中..." });
    const response1 = await request({
      url: "stars/stars_count",
      method: "get",
    });
    const response2 = await request({
      url: "stars/stars_count_by_day_of_week",
      method: "get",
    });
    const response3 = await request({
      url: "stars/business_with_most_5stars",
      method: "get",
    });
    this.chartOption1 = {
      title: {
        text: "评分分布统计",
      },
      legend: {
        data: ["评分次数"],
      },
      xAxis: {
        data: response1.map((item) => item.rev_stars + "星"),
      },
      yAxis: {
        type: "value",
        name: "次数",
        axisLabel: {
          formatter: "{value}次",
        },
      },
      series: [
        {
          name: "评分次数",
          type: "bar",
          data: response1.map((item) => item.count),
        },
      ],
    };
    this.chartOption2 = {
      title: {
        text: "评分周统计",
      },
      legend: {
        data: ["评分次数"],
      },
      xAxis: {
        data: response2.map((item) => this.getWeekday(item.review_week)),
      },
      yAxis: {
        type: "value",
        name: "次数",
        min: "dataMin",
        axisLabel: {
          formatter: "{value}次",
        },
      },
      series: [
        {
          name: "评分次数",
          type: "line",
          data: response2.map((item) => item.count),
          smooth: false,
          color: "#f37427",
        },
      ],
    };
    this.chartOption3 = {
      title: {
        text: "5星评分商家统计",
      },
      legend: {
        data: ["5星次数"],
      },
      xAxis: { type: "value", boundaryGap: [0, 0.01] },
      yAxis: {
        type: "category",
        data: response3
          .slice()
          .reverse()
          .map((item) => item.name),
      },
      series: [
        {
          name: "5星次数",
          type: "bar",
          color: "#ee4720",
          data: response3
            .slice()
            .reverse()
            .map((item) => item.five_stars_count),
          label: { show: true, position: "right" },
          itemStyle: {
            borderRadius: [0, 50, 50, 0],
          },
        },
      ],
    };
    this.isDataLoaded = true;
    loadingInstance.close();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <AnalysisHead />
  <BarChart v-if="isDataLoaded" :chartOption="chartOption" />
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BarChart from "@/components/ChartComponents/BarChart.vue";
import request from "@/utils/request.js";
export default {
  name: "BusinessAnalysis",
  components: {
    AnalysisHead,
    BarChart,
  },
  data() {
    return {
      chartOption: {},
      isDataLoaded: false,
    };
  },
  async created() {
    const response = await request({
      url: "business/most_common_business",
      method: "get",
    });
    this.chartOption = {
      title: {
        text: "美国最常见商户(前20)",
      },
      tooltip: {},
      legend: {
        data: ["数量"],
      },
      xAxis: {
        data: response.map((item) => item.name),
      },
      yAxis: {},
      series: [
        {
          name: "数量",
          type: "bar",
          data: response.map((item) => item.name_count),
        },
      ],
    };
    this.isDataLoaded = true;
  },
};
</script>

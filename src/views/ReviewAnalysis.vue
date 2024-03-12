<template>
  <AnalysisHead />
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption" />
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";
import request from "@/utils/request.js";
export default {
  name: "ReviewAnalysis",
  components: {
    AnalysisHead,
    BaseChart,
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

<template>
  <AnalysisHead />
  <BarChart :chartOption="chartOption" />
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BarChart from "@/components/ChartComponents/BarChart.vue";
export default {
  name: "BusinessAnalysis",
  components: {
    AnalysisHead,
    BarChart,
  },
  data() {
    return {
      chartOption: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
};
</script>

<template>
  <AnalysisHead />
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption1" />
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption2" />
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";
import request from "@/utils/request.js";
export default {
  name: "BusinessAnalysis",
  components: {
    AnalysisHead,
    BaseChart,
  },
  data() {
    return {
      chartOption1: {},
      isDataLoaded: false,
    };
  },
  async created() {
    const response1 = await request({
      url: "business/most_common_business",
      method: "get",
    });
    const response2 = await request({
      url: "business/most_common_business_with_stars",
      method: "get",
    });
    this.chartOption1 = {
      title: {
        text: "美国最常见商户与平均评分",
      },
      legend: {
        data: ["数量", "平均评分"],
      },
      xAxis: {
        data: response1.map((item) => item.name),
      },
      yAxis: [
        {
          type: "value",
          name: "数量",
          min: 100,
          max: 800,
          interval: 100,
          axisLabel: {
            formatter: "{value} 家",
          },
        },
        {
          type: "value",
          name: "平均评分",
          min: 0,
          max: 5,
          interval: 1,
          axisLabel: {
            formatter: "{value} 分",
          },
        },
      ],
      series: [
        {
          name: "数量",
          type: "bar",
          yAxisIndex: 0,
          data: response1.map((item) => item.name_count),
        },
        {
          name: "平均评分",
          type: "line",
          yAxisIndex: 1,
          smooth: false,
          data: response2.map((item) => item.avg_stars.toFixed(1)),
        },
      ],
    };
    const response3 = await request({
      url: "business/city_with_most_business",
      method: "get",
    });
    const response4 = await request({
      url: "business/state_with_most_business",
      method: "get",
    });
    this.chartOption2 = {
      title: {
        text: "商户最多的州与城市",
      },
      legend: {
        data: response3.map((item) => item.city),
      },
      series: [
        {
          name: "商户最多的州",
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
          data: response4.map((item) => ({
            name: item.state,
            value: item.state_count,
          })),
        },
        {
          name: "商户最多的城市",
          type: "pie",
          radius: ["45%", "60%"],
          labelLine: {
            length: 30,
          },
          label: {
            formatter: "{hr|}\n  {b|{b}：}{c} ",
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
          data: response3.map((item) => ({
            name: item.city,
            value: item.city_count,
          })),
        },
      ],
    };
    this.isDataLoaded = true;
  },
};
</script>

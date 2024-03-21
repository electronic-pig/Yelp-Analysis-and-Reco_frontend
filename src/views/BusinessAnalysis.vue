<template>
  <AnalysisHead />
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption1" />
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption2" />
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption5" />
  <div class="container">
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption3" />
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption4" />
  </div>
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption6" />
  <FooterView />
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";
import FooterView from "@/components/UserComponents/FooterView.vue";
import request from "@/utils/request.js";
export default {
  name: "BusinessAnalysis",
  components: {
    AnalysisHead,
    BaseChart,
    FooterView,
  },
  data() {
    return {
      chartOption1: {},
      chartOption2: {},
      chartOption3: {},
      chartOption4: {},
      chartOption5: {},
      chartOption6: {},
      isDataLoaded: false,
    };
  },
  async created() {
    const loadingInstance = this.$loading({ text: "努力加载中..." });
    const response1 = await request({
      url: "business/most_common_business",
      method: "get",
    });
    const response2 = await request({
      url: "business/most_common_business_with_stars",
      method: "get",
    });
    const response3 = await request({
      url: "business/city_with_most_business",
      method: "get",
    });
    const response4 = await request({
      url: "business/state_with_most_business",
      method: "get",
    });
    const response5 = await request({
      url: "business/highest_stars_city",
      method: "get",
    });
    const response6 = await request({
      url: "business/category_with_most_business",
      method: "get",
    });
    const response7 = await request({
      url: "business/business_with_most_5stars",
      method: "get",
    });
    const response8 = await request({
      url: "business/different_types_restaurant",
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
            selected: true,
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
    this.chartOption3 = {
      title: {
        text: "评分最高的城市",
      },
      polar: {
        radius: [30, "80%"],
      },
      radiusAxis: {
        max: 5,
        min: 3,
      },
      legend: {
        data: ["数量"],
      },
      angleAxis: {
        type: "category",
        data: response5.map((item) => item.city),
        startAngle: 75,
      },
      series: {
        name: "数量",
        type: "bar",
        color: "#ee4720",
        data: response5.map((item) => item.avg_stars.toFixed(1)),
        coordinateSystem: "polar",
        label: {
          show: true,
          position: "middle",
          formatter: "{b}",
        },
      },
    };
    this.chartOption4 = {
      title: {
        text: "商户数量最多的种类",
      },
      polar: {
        radius: [30, "80%"],
      },
      angleAxis: {
        startAngle: 75,
      },
      legend: {
        data: ["数量"],
      },
      radiusAxis: {
        type: "category",
        data: response6.map((item) => item.category),
      },
      series: {
        name: "数量",
        type: "bar",
        color: "#af0606",
        data: response6.map((item) => item.count),
        coordinateSystem: "polar",
        label: {
          show: true,
          position: "middle",
          formatter: "{b}",
        },
      },
    };
    this.chartOption5 = {
      title: {
        text: "5星评论最多的商户",
      },
      legend: {
        data: ["数量"],
      },
      xAxis: {
        data: response7.map((item) => item.name),
      },
      yAxis: [
        {
          type: "value",
          name: "数量",
          axisLabel: {
            formatter: "{value} 次",
          },
        },
      ],
      series: [
        {
          name: "数量",
          type: "bar",
          color: "#e83f3f",
          data: response7.map((item) => item.five_stars_count),
        },
      ],
    };
    this.chartOption6 = {
      title: {
        text: "商户类型数量与评论数量",
      },
      legend: {
        data: ["数量", "评论数量"],
      },
      xAxis: {
        data: response8.slice(11, 21).map((item) => item.category),
        axisLabel: { interval: 0, rotate: 20 },
      },
      yAxis: [
        {
          type: "value",
          name: "数量",
          axisLabel: {
            formatter: "{value} 家",
          },
        },
        {
          type: "value",
          name: "评论数量",
          axisLabel: {
            formatter: "{value} 条",
          },
        },
      ],
      series: [
        {
          name: "数量",
          type: "bar",
          yAxisIndex: 0,
          data: response8.slice(11, 21).map((item) => item.restaurant_count),
        },
        {
          name: "评论数量",
          type: "bar",
          yAxisIndex: 1,
          smooth: false,
          data: response8.slice(11, 20).map((item) => item.review_count),
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

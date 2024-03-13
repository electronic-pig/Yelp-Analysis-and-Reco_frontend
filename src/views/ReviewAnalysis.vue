<template>
  <AnalysisHead />
  <!-- <BaseChart v-if="isDataLoaded" :chartOption="chartOption1" /> -->
  <div class="container">
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption3" />
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption4" />
  </div>
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption2" />
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
      chartOption1: {},
      chartOption2: {},
      chartOption3: {},
      isDataLoaded: false,
    };
  },
  async created() {
    // const response1 = await request({
    //   url: "review/",
    //   method: "get",
    // });
    // this.chartOption1 = {
    //   title: {
    //     text: "评论分析",
    //   },
    //   legend: {},
    //   xAxis: {
    //     type: "category",
    //     data: response1.map((item) => item.year + "年"),
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: "Helpful评论",
    //       type: "bar",
    //       stack: "count",
    //       emphasis: {
    //         focus: "series",
    //       },
    //       data: response1.map((item) => item.registration_user_count),
    //     },
    //     {
    //       name: "Cool评论",
    //       type: "bar",
    //       stack: "count",
    //       emphasis: {
    //         focus: "series",
    //       },
    //       data: response1.map((item) => item.registration_user_count),
    //     },
    //     {
    //       name: "Funny评论",
    //       type: "bar",
    //       stack: "count",
    //       emphasis: {
    //         focus: "series",
    //       },
    //       data: response1.map((item) => item.registration_user_count),
    //     },
    //     {
    //       name: "Funny评论",
    //       type: "bar",
    //       barWidth: 10,
    //       emphasis: {
    //         focus: "series",
    //       },
    //       data: response1.map((item) => item.registration_user_count),
    //     },
    //   ],
    // };
    const response2 = await request({
      url: "review/top20_words",
      method: "get",
    });
    this.chartOption2 = {
      series: [
        {
          type: "wordCloud",
          sizeRange: [4, 150],
          rotationRange: [0, 0],
          gridSize: 0,
          shape: "circle",
          drawOutOfBound: false,
          layoutAnimation: true,
          keepAspect: true,
          left: "center",
          top: "center",
          width: "100%",
          height: "75%",
          textStyle: {
            fontWeight: "bold",
            color: function () {
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 200) + 50,
                  Math.round(Math.random() * 50),
                  Math.round(Math.random() * 50) + 50,
                ].join(",") +
                ")"
              );
            },
          },
          emphasis: {
            textStyle: {
              color: "#528",
            },
          },
          data: response2.map((item) => ({
            name: item.word,
            value: item.word_count,
          })),
        },
      ],
    };
    const response3 = await request({
      url: "review/top10_positive_words",
      method: "get",
    });
    this.chartOption3 = {
      title: {
        text: "正向评论Top10",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
        formatter: function (params) {
          return params[0].name + ": " + params[0].value;
        },
      },
      xAxis: {
        data: response3.a.map((item) => item.word),
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: "#e54035",
        },
      },
      yAxis: {},
      color: ["#e54035"],
      series: [
        {
          name: "hill",
          type: "pictorialBar",
          barCategoryGap: "-100%",
          symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
          itemStyle: {
            opacity: 0.5,
          },
          emphasis: {
            itemStyle: {
              opacity: 1,
            },
          },
          data: response3.a.map((item) => item.word_count),
        },
      ],
    };
    const response4 = await request({
      url: "review/top10_negative_words",
      method: "get",
    });
    this.chartOption4 = {
      title: {
        text: "负向评论Top10",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none",
        },
        formatter: function (params) {
          return params[0].name + ": " + params[0].value;
        },
      },
      xAxis: {
        data: response4.a.map((item) => item.word),
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: "#e54035",
        },
      },
      yAxis: {},
      color: ["#e54035"],
      series: [
        {
          name: "hill",
          type: "pictorialBar",
          barCategoryGap: "-130%",
          symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
          itemStyle: {
            opacity: 0.5,
          },
          emphasis: {
            itemStyle: {
              opacity: 1,
            },
          },
          data: response4.a.map((item) => item.word_count),
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

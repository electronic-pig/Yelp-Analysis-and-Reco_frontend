<template>
  <AnalysisHead />
  <BaseChart v-if="isDataLoaded" :chartOption="chartOption1" />
  <div class="container">
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption2" />
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption3" />
  </div>
  <div class="container">
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption4" />
    <BaseChart v-if="isDataLoaded" :chartOption="chartOption5" />
  </div>
  <FooterView />
</template>

<script>
import AnalysisHead from "@/components/AnalysisComponents/AnalysisHead.vue";
import BaseChart from "@/components/AnalysisComponents/BaseChart.vue";
import FooterView from "@/components/UserComponents/FooterView.vue";
import request from "@/utils/request.js";
import links from "@/assets/links.json";
export default {
  name: "ReviewAnalysis",
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
      isDataLoaded: false,
      links: links,
    };
  },
  async created() {
    const loadingInstance = this.$loading({ text: "努力加载中..." });
    const response1 = await request({
      url: "review/different_review",
      method: "get",
    });
    const response2 = await request({
      url: "review/top20_words",
      method: "get",
    });
    const response3 = await request({
      url: "review/top10_positive_words",
      method: "get",
    });
    const response4 = await request({
      url: "review/top10_negative_words",
      method: "get",
    });
    this.chartOption1 = {
      title: {
        text: "评论分析",
      },
      legend: {},
      xAxis: {
        type: "category",
        data: response1.cool.map((item) => item.review_year + "年"),
      },
      yAxis: {},
      series: [
        {
          name: "Helpful评论",
          type: "bar",
          stack: "count",
          emphasis: {
            focus: "series",
          },
          data: response1.helpful.map((item) => item.helpful_review_count),
        },
        {
          name: "Cool评论",
          type: "bar",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            borderRadius: [50, 50, 0, 0],
          },
          data: response1.cool.map((item) => item.cool_review_count),
        },
        {
          name: "Funny评论",
          type: "bar",
          stack: "count",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            borderRadius: [50, 50, 0, 0],
          },
          data: response1.funny.map((item) => item.funny_review_count),
        },
      ],
    };
    this.chartOption2 = {
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
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}次",
        },
      },
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
    this.chartOption3 = {
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
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}次",
        },
      },
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
    this.chartOption4 = {
      title: {
        text: "单词云图",
      },
      series: [
        {
          type: "wordCloud",
          shape: "circle",
          rotationRange: [0, 0],
          sizeRange: [12, 80],
          shrinkToFit: true,
          drawOutOfBound: true,
          layoutAnimation: true,
          left: "center",
          top: "center",
          width: "100%",
          height: "100%",
          textStyle: {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: function () {
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 200) + 50,
                  Math.round(Math.random() * 50),
                  Math.round(Math.random() * 50),
                ].join(",") +
                ")"
              );
            },
          },
          emphasis: {
            focus: "self",
            textStyle: {
              color: "#f37427",
            },
          },
          data: response2.slice(0, 100).map((item) => ({
            name: item.word,
            value: item.word_count,
          })),
        },
      ],
    };
    this.chartOption5 = {
      title: {
        text: "单词关系图",
      },
      tooltip: {
        trigger: "item",
      },
      animationDuration: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          type: "graph",
          layout: "circular",
          data: response2.slice(0, 77).map((item, index) => ({
            id: index.toString(),
            name: item.word,
            symbolSize: 10,
            value: item.word_count,
            label: {
              show: true,
              color: "#e54035",
              fontWeight: "bold",
            },
          })),
          links: this.links,
          circular: {
            rotateLabel: true,
          },
          lineStyle: {
            color: "source",
            curveness: 0.3,
          },
          emphasis: {
            focus: "adjacency",
            lineStyle: {
              width: 8,
            },
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

<template>
  <div ref="chart" style="width: 100%; height: 400px"></div>
</template>

<script>
export default {
  name: "BaseChart",
  data() {
    return {
      baseOption: {
        title: {
          left: "5%",
        },
        toolbox: {
          show: true,
          right: "8%",
          feature: {
            dataView: { readOnly: true },
            magicType: {
              type: ["line", "bar"],
            },
            restore: {},
            saveAsImage: {},
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
      },
    };
  },
  props: {
    chartOption: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const chart = this.$echarts.init(this.$refs.chart, "customed");
      chart.setOption(this.baseOption);
      chart.setOption(this.chartOption);
    },
  },
};
</script>

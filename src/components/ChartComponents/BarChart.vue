<template>
  <div ref="chart" style="width: 100%; height: 400px"></div>
</template>

<script>
export default {
  name: "BarChart",
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
      const chart = this.$echarts.init(this.$refs.chart);
      chart.setOption(this.chartOption);
    },
  },
};
</script>

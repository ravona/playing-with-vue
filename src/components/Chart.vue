<template>
  <div :class="['chart', `chart--${chartType}`]">
    <canvas id="myChart" width="400" height="400" />
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

export default {
  name: "Chart",
  props: {
    chartData: {
      type: Array,
      required: true,
    },
  },
  data() {
    // state
    return {
      chartType: "pie",
      parsedChartData: null,
      chartConfig: null,
    };
  },
  computed: {
    // functions that change the PRESENTATION of data:
  },
  created() {
    Chart.register(...registerables);
    this.parseChartData();
    this.setChartConfig(
      this.$data.parsedChartData.vehicle,
      this.$data.parsedChartData.price
    );
  },
  mounted() {
    this.renderChart(this.$data.chartType, this.$data.chartConfig);
  },
  methods: {
    // functions that change data:
    parseChartData() {
      this.parsedChartData = this.chartData.reduce(
        (accumulator, currentValue) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const [key, value] of Object.entries(currentValue)) {
            if (!accumulator[key]) {
              accumulator[key] = [];
            }
            accumulator[key].push(value);
          }
          return accumulator;
        },
        {}
      );
    },
    setChartConfig(labels, data) {
      this.chartConfig = {
        labels,
        datasets: [
          {
            label: "AdIntel Chart",
            data,
            backgroundColor: [
              "rgb(255, 100, 50)",
              "rgb(50, 255, 100)",
              "rgb(100, 50, 255)",
            ],
            hoverOffset: 4,
          },
        ],
      };
    },
    renderChart(chartType, chartConfig) {
      const config = {
        type: chartType,
        data: chartConfig,
      };

      const result = new Chart("myChart", config);
      return result;
    },
  },
};
</script>

<style scoped>
.chart {
  height: auto;
}

#myChart {
  border: 3px dashed darkred;
  height: 360px;
  width: 360px;
  margin: 0 auto;
}
</style>

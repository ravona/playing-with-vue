<template>
  <h5>You are watching a {{ chartType }} chart</h5>
  <div :class="['chart', `chart--${chartType}`]">
    <canvas id="mainChart" width="400" height="400" />
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

export default {
  name: "Chart",
  props: {
    shouldToggleChartType: {
      type: Boolean,
    },
    chartData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartType: "pie",
    };
  },
  computed: {
    parsedChartData() {
      return this.chartData.reduce((accumulator, currentValue) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(currentValue)) {
          if (!accumulator[key]) {
            accumulator[key] = [];
          }
          accumulator[key].push(value);
        }
        return accumulator;
      }, {});
    },

    chartConfig() {
      return {
        labels: this.parsedChartData.vehicle,
        datasets: [
          {
            label: "AdIntel Chart",
            data: this.parsedChartData.price,
            backgroundColor: [
              "rgb(255, 100, 50)",
              "rgb(50, 255, 100)",
              "rgb(100, 50, 255)",
              "rgb(70, 50, 20)",
              "rgb(50, 200, 200)",
            ],
            hoverOffset: 4,
          },
        ],
      };
    },
  },
  watch: {
    chartData: {
      handler(newChartData) {
        this.parsedChartData = newChartData;
      },
    },
    shouldToggleChartType: {
      handler(toggledState) {
        this.toggleChartType(toggledState);
      },
    },
  },
  mounted() {
    Chart.register(...registerables);
    this.renderChart();
  },
  updated() {
    if (Chart.getChart("mainChart") !== undefined) {
      Chart.getChart("mainChart").destroy();
      this.renderChart();
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    renderChart() {
      const config = {
        type: this.chartType,
        data: this.chartConfig,
      };

      const mainChart = new Chart("mainChart", config);

      console.log(mainChart);
    },
    toggleChartType() {
      this.shouldToggleChartType === true
        ? (this.chartType = "polarArea")
        : (this.chartType = "pie");
    },
  },
};
</script>

<style scoped>
.chart {
  height: auto;
}

#mainChart {
  height: 360px;
  width: 360px;
  margin: 0 auto;
}
</style>

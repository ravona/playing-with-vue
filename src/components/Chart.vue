<template>
  <div class="Chart">
    <h5 class="Chart__title">You are watching a {{ chartType }} chart</h5>
    <div class="Chart__body" :class="['chart', `chart--${chartType}`]">
      <canvas id="mainChart" />
    </div>
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
              "rgb(0, 150, 136)",
              "rgb(0, 188, 212)",
              "rgb(233, 30, 99)",
              "rgb(76, 175, 80)",
              "rgb(63, 81, 181)",
              "",
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
      return mainChart;
    },
    toggleChartType() {
      this.shouldToggleChartType === true
        ? (this.chartType = "polarArea")
        : (this.chartType = "pie");
    },
  },
};
</script>

<style lang="scss" scoped>
.Chart {
  &__title {
    padding: 0 1rem;
    font-size: 1.618rem;
    margin-top: 1.618rem;
    margin-bottom: 1rem;
  }
}

#mainChart {
  height: 500px;
  width: 500px;
  margin: 0 auto;
}
</style>

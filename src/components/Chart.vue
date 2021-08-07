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
    shouldToggleChartType: {
      type: Boolean,
    },
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
  watch: {
    chartData: {
      handler(newChartData) {
        this.parseChartData(newChartData);
      },
    },
    // TODO
    // chartConfig: {
    //   handler(chartConfig, chartType) {
    //     this.renderChart(chartConfig, chartType);
    //   },
    // },
    shouldToggleChartType: {
      handler(toggleState) {
        this.toggleChartType(toggleState);
      },
    },
  },

  created() {
    console.log("created: ", this.$data);
  },
  mounted() {
    console.log("mounted: ", this.$data);
    Chart.register(...registerables);
    this.parseChartData(this.chartData);
    this.setChartConfig(
      this.parsedChartData.vehicle,
      this.parsedChartData.price
    );

    this.renderChart(this.chartType, this.chartConfig);
  },
  methods: {
    parseChartData() {
      // Transforms an array of objects to arrays grouped by value type ([...vehicles], [...prices])
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
      return this.parsedChartData;
    },

    // Transforms an array of objects to arrays grouped by value type ([...vehicles], [...prices])
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

      this.chartElement = new Chart("myChart", config);
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

#myChart {
  border: 3px dashed darkred;
  height: 360px;
  width: 360px;
  margin: 0 auto;
}
</style>

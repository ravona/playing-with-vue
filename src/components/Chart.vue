<template>
  <div :class="['chart', `chart--${chartType}`]">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

const staticData = {
  labels: [
    "Volkswagen",
    "Land Rover Spyder",
    "Mini Grand Cherokee",
    "Mini CTS",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [869.0, 334.0, 39.0, 705.0],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(255, 0, 100)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default {
  name: 'chart',
  props: ['chartData', 'chartType'],
  methods: {
    // TODO: add parameter chartData
    initChart(staticData, param_type) {

//       const getParsedChartData = staticData.reduce((accumulator, currentValue) => {
//   for (const [key, value] of Object.entries(currentValue)) {
//     if (!accumulator[key]) {
//       accumulator[key] = [];
//     }
//     accumulator[key].push(value);
//   }
//   return accumulator;
// }, {});

// console.log(getParsedChartData)

    const config = {
      type: param_type,
      data: staticData,
    };

new Chart('myChart', config)
    }
  },
  beforeCreate() {
    Chart.register(...registerables)
  },
  mounted() {
    this.initChart(staticData, "pie")
  }
}
</script>

<style scoped>
.chart {
  outline: 3px solid red;
}
</style>

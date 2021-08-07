<template>
  <h1>Charts Page</h1>
  <div v-if="chartData">
    <Chart
      :chart-data="chartData"
      :should-toggle-chart-type="shouldToggleChartType"
    />
  </div>

  <div class="chart__menu">
    <Button text="Remove Vehicle" @cbFunc="removeRandomItem"
      >Remove Vehicle</Button
    >
    <Button text="Randomize Chart Type" @cbFunc="randomizeChartType">
      Randomize Chart Type
    </Button>
  </div>
</template>

<script>
import axios from "axios";

// components
import Chart from "../components/Chart.vue";
import Button from "../components/Button.vue";

// utils
import getRandomArrayItem from "../utils/getRandomArrayItem";

export default {
  name: "ChartsPage",
  components: {
    Chart,
    Button,
  },
  emits: ["removeRandomItem", "randomizeChartType"],
  data() {
    return {
      shouldToggleChartType: false,
      chartData: null,
    };
  },
  computed: {},
  async created() {
    await axios
      .get("https://610a491f52d56400176afcc5.mockapi.io/vehicles")
      .then((res) => {
        this.chartData = res.data;
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
  },
  methods: {
    removeRandomItem() {
      const randomlySelectedIndex = getRandomArrayItem(this.chartData);

      this.chartData = this.chartData.filter(
        (items, index) => index !== randomlySelectedIndex
      );
    },
    randomizeChartType() {
      this.shouldToggleChartType = !this.shouldToggleChartType;
    },
  },
};
</script>

<style lang="scss" scoped>
.chart__menu {
  margin-top: 2rem;
}
</style>

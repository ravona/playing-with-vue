<template>
  <Header title="Charts Page" subtitle="Let's talk figures" />
  <div v-if="chartData">
    <Chart
      :chart-data="chartData"
      :should-toggle-chart-type="shouldToggleChartType"
    />
  </div>

  <div class="Menu">
    <Button text="Remove Vehicle" @cbFunc="removeRandomItem" />
    <Button text="Toggle Chart Type" @cbFunc="randomizeChartType" />
  </div>
</template>

<script>
import axios from "axios";

// components
import Header from "../components/Header.vue";
import Chart from "../components/Chart.vue";
import Button from "../components/Button.vue";

// utils
import getRandomArrayItem from "../utils/getRandomArrayItem";

export default {
  name: "ChartsPage",
  components: {
    Header,
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
@import "../style/global";
@import "../style/colors";

.Menu {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media only screen and (min-width: map-get($screen_sizes, $key: "tablet" )) {
    justify-content: center;
    flex-direction: row;
  }
}
</style>

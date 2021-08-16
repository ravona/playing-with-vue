<template>
  <Header title="Charts Page" subtitle="Let's talk figures" />
  <h4>World Avocado Production by Country (in tons)</h4>

  <div v-if="chartData">
    <Chart
      :chart-data="chartData"
      :should-toggle-chart-type="shouldToggleChartType"
    />
  </div>

  <div class="Menu">
    <Button text="Remove Country" @cbFunc="removeRandomItem" />
    <Button text="Toggle Chart Type" @cbFunc="toggleChartType" />
  </div>

  <footer>
    <span>Source for the data: </span>
    <a href="https://www.atlasbig.com/en-gb/countries-by-avocado-production"
      >Atlasbig</a
    >
  </footer>
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
  emits: ["removeRandomItem", "toggleChartType"],
  data() {
    return {
      shouldToggleChartType: false,
      chartData: null,
    };
  },
  computed: {},
  async created() {
    await axios
      .get("https://611a2781cbf1b30017eb5532.mockapi.io/productionByCountry")
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
    toggleChartType() {
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

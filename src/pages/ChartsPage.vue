<template>
  <h1>Charts Page</h1>
  <div v-if="chartData">
    <Chart :chart-data="chartData" />
  </div>
  <Button text="Remove Vehicle" @cbFunc="removeRandomItem"
    >Remove Vehicle</Button
  >
  <Button text="Randomize Chart Type" @cbFunc="randomizeChartType">
    Randomize Chart Type
  </Button>
</template>

<script>
import axios from "axios";
// import getRandomArrayItem from "../utils/getRandomArrayItem";

// components
import Chart from "../components/Chart.vue";
import Button from "../components/Button.vue";

export default {
  name: "ChartsPage",
  components: {
    Chart,
    Button,
  },
  emits: ["removeRandomItem", "randomizeChartType"],
  data() {
    return {
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
      console.log("remove Random Item");
    },
    randomizeChartType() {
      console.log("Randomize Chart Type");
    },
  },
};
</script>

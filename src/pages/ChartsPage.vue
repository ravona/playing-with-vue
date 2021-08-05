<template>
    <h1>Charts Page</h1>
    <chart :chartData="this.chartData" :chartType="chartType"/>
</template>

<script>
import axios from 'axios'

// components
import Chart from '../components/Chart.vue'

export default {
    name: 'ChartsPage',
      components: {
    Chart,
  },
    data() {
        return {
            chartData: [],
            chartType: "pie"
        }
    },
    methods: {
        async getChartData() {
            try {
            const { data } = await axios.get('https://610a491f52d56400176afcc5.mockapi.io/vehicles');
            this.chartData = data
            console.log('response.data', data);
            } 
            catch(error) {
                console.log('There was an error fetching the data: ', error)
            }
            }

    },
    beforeMount() {
        this.getChartData()
    }
}
</script>
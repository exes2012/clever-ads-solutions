<template>
  <div>
    <Bar
        type="line"
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
  </div>
</template>

<script>
import {Bar} from 'vue-chartjs/legacy'

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement,CategoryScale, LinearScale)

export default {
  name: "TheMediationChartComponent",
  components: {
    Bar,

  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 1200
    },
    height: {
      type: Number,
      default: 422
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        type:'line',
        datasets: [
          {
            label: 'Data one',
            backgroundColor: '#f87979',
            data: [2500, 2000, 1200],
            yAxisID: 'y',
          },
          {
            data: [2500, 2000, 1200],
            yAxisID: 'y1',
          }
        ]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            min:0,
            max:3000,
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          }
        },

      },

    }
  }
}
</script>

<style scoped>

</style>
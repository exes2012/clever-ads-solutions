<template>
  <div class="chart">
    <canvas id="myChart" width="400" height="165"></canvas>
  </div>
</template>

<script>
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);
import planetChartData from "@/planet-data";
export default {
  name: "CustomChart",
  data(){
    return{
      planetChartData:planetChartData
    }
  },
  mounted() {
    const ctx= 'myChart';
    Chart.defaults.font.family = "'GothamPro'";
    Chart.defaults.font.size = 14;

    const tooltipLine = {
      id:'tooltipLine',
      beforeDatasetDraw(chart) {
        const {ctx, tooltip, scales:{x,y}, chartArea: {top, bottom, left, right, width, height} }= chart;
        ctx.beginPath();
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 1;
        ctx.setLineDash([6,6]);
        ctx.moveTo(10, 50);
        ctx.lineTo(100, 250);
        ctx.stroke();
        ctx.restore();
      }
    };

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          type:'bar',
          data: [108, 19, 295, 113, 211, 12],
          backgroundColor: [
            'rgba(244, 244, 244, 0.25)',
          ],
          borderColor: [
            '#DFDFDF',
          ],
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
          barPercentage:0.25,
          order:2,
          yAxisID: 'y1',

        },
          {
            label: '# free',
            type:'line',
            tension: 0.3,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "transparent",
            ],
            borderColor: [
              '#0DC100',
            ],
            borderWidth: 3,
            yAxisID: 'y',
            pointStyle:'Rounded',
            pointBorderWidth:1,
            pointBorderColor:'rgba(244, 244, 244, 0.25)',
            pointHoverBorderColor:'#0DC100',
            pointHoverWidth:50,
            pointHoverBackgroundColor:'white',
            pointHoverBorderWidth:3,
            pointHoverRadius:10,
            radius:15,
          },
          {
            label: '# free',
            type:'line',
            tension: 0.3,
            data: [9, 35, 12, 2, 12, 23],
            backgroundColor: [
              "transparent",
            ],
            borderColor: [
              '#EC0000',
            ],
            borderWidth: 3,
            yAxisID: 'y',
            pointBorderColor:'rgba(244, 244, 244, 0.25)',
            pointHoverWidth:50,
            pointHoverBackgroundColor:'white',
            pointHoverBorderWidth:3,
            pointHoverRadius:10,
            pointHoverBorderColor:'#EC0000',
            radius:15,
          }
        ]
      },
      options: {
        plugins:[tooltipLine],
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x:{
            grid: {
              drawOnChartArea: false,
              borderWidth:1,
              borderColor:'#A3A3A3',
              tickColor: '#FFFFFF',
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              drawOnChartArea: false,
              borderDashOffset:0,
              borderWidth:1,
              borderColor:'#A3A3A3',
              tickColor: '#FFFFFF',
            },
          },
          y1: {
            beginAtZero: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
              borderWidth:1,
              borderColor:'#A3A3A3',
              tickColor: '#FFFFFF',
            },
          }
        }
      }
    });

    function mousemoveHandler(){
      console.log('yes')
    }

    myChart.canvas.onmousemove=mousemoveHandler;
  }


}
</script>

<style scoped>
  .chart{
    padding: 20px;
  }

</style>
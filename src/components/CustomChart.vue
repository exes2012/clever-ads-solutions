<template>
  <div>
    <v-btn color=primary @click="getChartData(myChart)">Фетч</v-btn>
    <div class="chart_container">
      <div class="chart" :class="toggleClass">
        <canvas id="myChart"></canvas>
      </div>
    </div>
    <div class="legend">
      <div class="legend_border"></div>
      <v-row-container class="justify-center">
        <v-btn
          color="primary"
          width="111"
          height="36"
          @click="resetLegendItems(myChart)"
          class="legend_reset"
          v-if="isLegendItemHide === true"
        >
          <base-icon name="clarityEyeWhite" class="mr-2 mt-1" />Show all</v-btn
        >
      </v-row-container>
      <div id="legend" class="legend_item">
        <ul class="legend_list" v-if="showChart">
          <li
            class="legend_list-item"
            v-for="legendItem in this.legendItems"
            :key="legendItem.id"
            @click="toggleLegendItem(legendItem, myChart)"
            v-if="legendItem.datasetIndex !== 0"
          >
            <base-icon
              class="legend_list-icon"
              :name="
                !myChart.isDatasetVisible(legendItem.datasetIndex)
                  ? 'clarityEyeClosed'
                  : 'clarityEye'
              "
            />
            <div
              class="legend_item-text"
              :style="{ color: legendItem.strokeStyle }"
              :class="{
                disable: !myChart.isDatasetVisible(legendItem.datasetIndex),
              }"
            >
              {{ legendItem.text }}
            </div>
          </li>
        </ul>
      </div>
    </div>
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
  SubTitle,
} from "chart.js";

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
import { mapMutations } from "vuex";
import EventService from "@/services/EventService";

export default {
  name: "CustomChart",
  components: {},
  props: {
    toggleClass: {
      type: String,
    },
    chartWidth: {
      type: Number,
      default: 375,
    },
    chartHeight: {
      type: Number,
      default: 450,
    },
  },
  data() {
    return {
      revenue:null,
      myChart: null,
      legendItems: null,
      disabledId: null,
      isActive: true,
      isLegendItemHide: null,
      dataPoints:null,
      priorInterval:["01.02", "02.02", "03.02", "04.02", "05.02", "06.02"],
      lastInterval:null,
      isCompareActive:false,
      chartDates:null,
      chartData:null,
    };
  },
  mounted() {
    this.fetchChartData()

    let mobileSize = false;
    let barBorderRadius = 8;
    let barBorderThick = 2;
    let lineThick = 3;
    let circleRadius = 5;
    let circleRoundRadius = 10;
    let barPercentage;

    const ctx = "myChart";
    Chart.defaults.font.family = "'GothamPro'";
    Chart.defaults.font.size = 14;

    function resizeFont() {
      if (window.innerWidth < 768) {
        Chart.defaults.font.size = 11;
        mobileSize = true;
        barBorderRadius = 8;
        barBorderThick = 1;
        lineThick = 2;
        circleRadius = 5;
        circleRoundRadius = 10;
        barPercentage = 0.8;
      } else {
        Chart.defaults.font.size = 14;
        mobileSize = false;
        barBorderRadius = 8;
        barBorderThick = 2;
        lineThick = 3;
        circleRadius = 5;
        circleRoundRadius = 10;
        barPercentage = 0.3;
      }
    }

    resizeFont();
    window.addEventListener("resize", resizeFont);

    const tooltipLine = {
      id: "tooltipLine",
      afterDatasetsDraw(chart) {
        const {
          ctx,
          tooltip,
          scales: { x, y },
          chartArea: { top, bottom, left, right, width, height },
        } = chart;

        if (tooltip._active[0]) {
          let itemsLength = tooltip._active.length;

          //drawing vertical dashed line when tooltipped element
          ctx.beginPath();
          ctx.strokeStyle = "grey";
          ctx.lineWidth = 1;
          ctx.setLineDash([6, 6]);
          ctx.moveTo(tooltip._active[0].element.x, top);
          ctx.lineTo(tooltip._active[0].element.x, bottom);
          ctx.stroke();
          ctx.restore();
          ctx.setLineDash([6, 0]);

          let color = "";
          for (let i = 0; i < itemsLength; i++) {
            if (tooltip.labelColors[i].borderColor !== "#DFDFDF") {
              ctx.beginPath();
              ctx.arc(
                tooltip._active[i].element.x,
                tooltip._active[i].element.y,
                circleRadius,
                0,
                2 * Math.PI,
                false
              );
              color = tooltip.labelColors[i].borderColor;
              ctx.fillStyle = color;
              ctx.fill();
            }
          }

          //drawing horizontal dashed line if active only 1 line in chart
          if (tooltip._active.length < 3) {
            ctx.beginPath();
            ctx.strokeStyle = "grey";
            ctx.lineWidth = 1;
            ctx.setLineDash([6, 6]);
            ctx.moveTo(left, tooltip._active[0].element.y);
            ctx.lineTo(right, tooltip._active[0].element.y);

            ctx.stroke();
            ctx.restore();
            ctx.setLineDash([6, 0]);
          }
        }
      },
    };
    let tooltipUL;

    //custom tooltip plugin
    const getOrCreateTooltip = (chart) => {
      let tooltipEl = chart.canvas.parentNode.querySelector("div");
      if (!tooltipEl) {
        tooltipEl = document.createElement("DIV");
        tooltipEl.classList.add("tooltipDesign");
        tooltipUL = document.createElement("UL");
        tooltipUL.classList.add("tooltipUl");

        //append parent
        tooltipEl.appendChild(tooltipUL);
        chart.canvas.parentNode.appendChild(tooltipEl);
      }

      return tooltipEl;
    };
    // tooltip trigger
    const externalTooltipHandler = (context) => {
      const { chart, tooltip } = context;
      const tooltipEL = getOrCreateTooltip(chart);

      // hide tooltip if mouseout
      if (tooltip.opacity === 0) {
        tooltipEL.style.opacity = 0;
        return;
      }

      if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map((b) => b.lines);
        const tooltipLI = document.createElement("LI");

        titleLines.forEach((title) => {
          tooltipUL.appendChild(tooltipLI);

          const tooltipSPAN = document.createElement("SPAN");
          tooltipLI.appendChild(tooltipSPAN);
          if (tooltip.body.length < 2) {
            const tooltipTitleKey = document.createTextNode("Date: ");
            const tooltipTitle = document.createTextNode(title);
            const titleValueSpan = document.createElement("SPAN");
            titleValueSpan.classList.add("itemValueSpan");

            titleValueSpan.appendChild(tooltipTitle);
            tooltipSPAN.appendChild(tooltipTitleKey);
            tooltipSPAN.appendChild(titleValueSpan);
          }
        });

        const tooltipBodyP = document.createElement("P");
        bodyLines.forEach((body, i) => {
          const displayBlockSpan = document.createElement("SPAN");
          const itemValueSpan = document.createElement("SPAN");
          itemValueSpan.classList.add("itemValueSpan");
          displayBlockSpan.classList.add("displayBlockSpan");
          const colors = tooltip.labelColors[i];
          if (body[0].split(":")[0].includes("users")) {
            itemValueSpan.style.color = "black";
          } else {
            itemValueSpan.style.color = colors.borderColor;
          }

          const textLabel = document.createTextNode(
            body[0].split(":")[0] + ": "
          );
          const textValue = document.createTextNode(body[0].split(":")[1]);

          itemValueSpan.appendChild(textValue);
          displayBlockSpan.appendChild(textLabel);
          displayBlockSpan.appendChild(itemValueSpan);
          tooltipBodyP.appendChild(displayBlockSpan);
        });

        const ULnode = tooltipEL.querySelector("ul");
        while (ULnode.firstChild) {
          ULnode.firstChild.remove();
        }

        ULnode.appendChild(tooltipLI);
        tooltipLI.appendChild(tooltipBodyP);
        tooltipEL.style.opacity = 1;

        const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

        if (tooltip.body.length < 2) {
          if (mobileSize === true) {
            tooltipEL.style.left = positionX + tooltip.caretX + 20 + "px";
            tooltipEL.style.top = positionY + tooltip.caretY - 100 + "px";
          } else {
            tooltipEL.style.left = positionX + tooltip.caretX - 80 + "px";
            tooltipEL.style.top = positionY / 2 + tooltip.caretY + 80 + "px";
          }
        } else {
          if (mobileSize === true) {
            tooltipEL.style.left = positionX + tooltip.caretX + 20 + "px";
            tooltipEL.style.top = positionY + tooltip.caretY - 150 + "px";
          } else {
            tooltipEL.style.left = positionX + tooltip.caretX + "px";
            tooltipEL.style.top = positionY / 2 + tooltip.caretY + "px";
          }
        }
      }
    };

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.priorInterval,
        datasets: [
          {
            label: "Active users",
            type: "bar",
            data: [108, 19, 295, 113, 211, 12],
            backgroundColor: ["rgba(244, 244, 244, 0.5)"],
            borderColor: ["#DFDFDF"],
            borderWidth: barBorderThick,
            borderRadius: barBorderRadius,
            borderSkipped: false,
            barPercentage: barPercentage,
            order: 2,
            yAxisID: "y1",
          },
          {
            label: "Android",
            type: "line",
            tension: 0.3,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ["transparent"],
            borderColor: ["#0DC100"],
            borderWidth: lineThick,
            yAxisID: "y",
            pointStyle: "Rounded",
            pointBorderWidth: 1,
            pointBorderColor: "#0DC100",
            pointBackgroundColor: "#0DC100",
            pointHoverBorderColor: "#0DC100",
            pointHoverWidth: 50,
            pointHoverBackgroundColor: "white",
            pointHoverBorderWidth: 3,
            pointHoverRadius: circleRoundRadius,
            radius: 1,
          },
          {
            label: "iкOS",
            type: "line",
            tension: 0.3,
            data: [9, 32, 12, 2, 12, 23],
            backgroundColor: ["transparent"],
            borderColor: ["#EC0000"],
            borderWidth: lineThick,
            pointBorderWidth: 1,
            yAxisID: "y",
            pointBorderColor: "#EC0000",
            pointBackgroundColor: "#EC0000",
            pointHoverWidth: 50,
            pointHoverBackgroundColor: "white",
            pointHoverBorderWidth: 3,
            pointHoverRadius: circleRoundRadius,
            pointHoverBorderColor: "#EC0000",
            radius: 0.5,
          },
        ],
      },
      plugins: [tooltipLine],
      options: {
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false,
            position: "average",
            external: externalTooltipHandler,
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales: {
          x: {
            ticks: {
              color: "#A3A3A3",
              font: {
                weight: 400,
              },
            },
            grid: {
              drawOnChartArea: false,
              borderWidth: 1,
              borderColor: "#DFDFDF",
              tickColor: "#FFFFFF",
            },
          },
          y: {
            ticks: {
              color: "#A3A3A3",
              font: {
                weight: 400,
              },
            },
            beginAtZero: true,
            grid: {
              drawOnChartArea: false,
              borderDashOffset: 0,
              borderWidth: 1,
              borderColor: "#DFDFDF",
              tickColor: "#FFFFFF",
            },
          },
          y1: {
            ticks: {
              color: "#A3A3A3",
              font: {
                weight: 400,
              },
            },
            beginAtZero: true,
            position: "right",
            grid: {
              drawOnChartArea: false,
              borderWidth: 1,
              borderColor: "#DFDFDF",
              tickColor: "#FFFFFF",
            },
          },
        },
      },
    });

    this.myChart = myChart;

    function generateLegend() {
      //get DOM location
      const legend = document.querySelector(".legend");

      //create legend
      const legendItem = document.createElement("DIV");
      legendItem.setAttribute("class", "legend_item");
      // create legendList
      const legendList = document.createElement("UL");
      legendList.setAttribute("class", "legend_list");

      //create legend listItem
      myChart.legend.legendItems.forEach((dataset, index) => {
        const text = dataset.text;
        const datasetIndex = dataset.datasetIndex;
        const bgColor = dataset.fillStyle;
        const bColor = dataset.strokeStyle;
        const fontColor = dataset.fontColor;

        const legendListItem = document.createElement("LI");
        legendListItem.setAttribute("class", "legend_list-item");
      });

      //insert legend
      legend.appendChild(legendItem);
    }

    generateLegend();
    this.showChart(myChart);
  },
  methods: {
    ...mapMutations("filters", ["toggleLegendItemActive"]),
    fetchChartData() {
      EventService.getData()
        .then((response) => {
          this.chartData = response.data

        }).catch(error =>{
          console.log(error)
      })
    },

    addZero(num){
      if (num >= 0 && num <= 9) {
        return '0' + num;
      } else {
        return num;
      }
    },

    formatDate(str){
      let date = new Date(str)
      return this.addZero(date.getDate())+'.'+ this.addZero(date.getMonth()+1)
    },

    getChartData(myChart){
      this.fetchChartData()
      this.isCompareActive = this.chartData.compare
      this.priorInterval = this.chartData.dates.map(this.formatDate)
      myChart.config.data.labels = this.priorInterval
      myChart.update()
    },

    showChart(myChart) {
      this.myChart = myChart;
      this.legendItems = myChart.legend.legendItems;
    },
    resetLegendItems(myChart) {
      myChart.legend.legendItems.forEach((legendItem, index) => {
        myChart.setDatasetVisibility(legendItem.datasetIndex, true);
      });
      myChart.update();
      this.disabledId = null;
      this.isLegendItemHide = false;
    },
    toggleLegendItem(legendItem, myChart) {
      const isHidden = !myChart.isDatasetVisible(legendItem.datasetIndex);
      myChart.setDatasetVisibility(legendItem.datasetIndex, isHidden);
      myChart.update();

      let arr = myChart.legend.legendItems;
      let disabledItems = 0;

      function filterDisabledItems(item) {
        if (item.hidden === true) {
          disabledItems++;
        }
      }

      let filteredItems = arr.filter(filterDisabledItems);
      if (disabledItems > 0) {
        this.isLegendItemHide = true;
      } else {
        this.isLegendItemHide = false;
      }
    },
  },
};
</script>

<style lang="scss">
.chart {
  height: 422px;
  padding: 40px 50px;
}

.tooltipDesign {
  background: #ffffff;
  border: 2px solid #efefef;
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  border-radius: 8px;
  padding: 16px;
  position: absolute;
  opacity: 1;
  transform: translate(-50%, 0);
  transition: all 0.1s ease;
}

.tooltipUl {
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style: none;
}

.tooltipUl p {
  margin: 0;
}

.displayBlockSpan {
  display: block;
}

.itemValueSpan {
  font-weight: bold;
}

.v-application ul {
  padding: 0;
}

.legend {
  display: flex;
  flex-direction: column;
  position: relative;
  &_reset {
    position: absolute;
    margin: 0 auto;
    top: -18px;
  }
  &_border {
    display: flex;
    margin: 0 35px;
    height: 1px;
    background: #efefef;
  }
  &_item {
    display: flex;
    padding: 30px 132px;
  }
  &_list {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
  }
  &_list-icon {
    display: flex;
    align-items: center;
  }
  &_list-item {
    display: flex;
    align-items: center;
    margin-right: 130px;
    cursor: pointer;
    height: 26px;
  }
  &_item-text {
    display: flex;
    margin: 0 0 0 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
  }
}

.disable {
  color: #bacade !important;
}

@media screen and (max-width: 768px) {
  .chart {
    padding: 0 0 20px 0;
    &_container {
      overflow-x: hidden;
    }
  }
  .legend {
    &_reset {
      top: -8px;
    }
    &_item {
      display: flex;
      padding: 0;
      margin: 20px 10px;
    }
    &_border {
      margin: 10px 0 0 0;
      height: 2px;
    }
    &_list-item {
      margin-left: 20px;
      margin-right: 0;
    }
  }
  #myChart {
    width: 375px;
    height: 450px;
  }

  .toggleLeft {
    transition: width 1s ease-out;
    width: 110%;
    float: right;
  }
  .toggleRight {
    width: 110%;
    float: left;
    transition: width 1s ease-out;
  }
  .toggleAll {
    width: 120%;
    margin-left: -10%;
    transition: width 1s ease-out;
  }
  .untoggleAll {
    width: 100%;
    margin: 0;
    transition: width 1s ease-out;
  }
  .untoggleLeft {
    width: 100%;
    margin: 0;
    float: right;
    transition: width 1s ease-out;
  }
  .untoggleRight {
    width: 100%;
    margin: 0;
    float: left;
    transition: width 1s ease-out;
  }
}
</style>

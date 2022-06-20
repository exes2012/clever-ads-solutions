export const chartOptions = {
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
};

export default chartOptions;

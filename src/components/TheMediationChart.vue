<template>
  <div class="mediation-chart">
    <TheMediationChartBar />
    <v-divider-horizontal class="pl-5 pr-5" />
    <custom-chart />
  </div>
</template>

<script>
import TheMediationChartBar from "@/components/TheMediationChartBar.vue";
import VDividerHorizontal from "@/components/VDividerHorizontal";
import CustomChart from "@/components/CustomChart.vue";

export default {
  name: "TheMediationChart",
  components: {
    TheMediationChartBar,
    VDividerHorizontal,
    CustomChart,
  },
};
</script>

<style scoped>
.mediation-chart {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 632px;
  margin-top: 40px;
  border: 2px solid #efefef;
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  border-radius: 16px;
}
</style>

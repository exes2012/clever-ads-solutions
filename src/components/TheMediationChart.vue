<template>
 <div class="mediation-chart">
   <TheMediationChartBar/>
   <divider-horizontal/>
   <custom-chart/>
 </div>
</template>

<script>
import TheMediationChartBar from "@/components/TheMediationChartBar.vue";
import DividerHorizontal from "@/components/DividerHorizontal";
import CustomChart from "@/components/CustomChart.vue";


export default {
  name: "TheMediationChart",
  components:{
    TheMediationChartBar,
    DividerHorizontal,
    CustomChart
  }
}
</script>

<style scoped>
.mediation-chart{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 632px;
  margin-top: 40px;
  border:2px solid #EFEFEF;
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  border-radius: 16px;
}
</style>

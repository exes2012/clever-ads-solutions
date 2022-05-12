<template>
 <div class="mediation-chart">
   <TheMediationChartBar/>
   <divider-horizontal/>

 </div>
</template>

<script>
import TheMediationChartBar from "@/components/TheMediationChartBar.vue";
import DividerHorizontal from "@/components/DividerHorizontal";
export default {
  name: "TheMediationChart",
  components:{
    TheMediationChartBar,
    DividerHorizontal
  }
}
</script>

<style scoped>
.mediation-chart{
  width: 100%;
  height: 632px;
  margin-top: 40px;
  border:2px solid #EFEFEF;
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  border-radius: 16px;
}
</style>

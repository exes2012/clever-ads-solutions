<template>
  <div class="stepper">
    <stepper-item step-number="1" step-label="App settings"/>
    <stepper-item step-number="2" step-label="Ads settings"/>
  </div>
</template>

<script>
import StepperItem from "@/components/StepperItem.vue";
export default {
  name: "TheStepper",
  components:{
    StepperItem
  }
}
</script>

<style scoped lang="scss">
.stepper{
  display: flex;
  margin: 21px 0 47px 12px;
}
</style>
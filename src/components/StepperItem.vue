<template>
  <div class="stepper_step step">
    <div class="step_icon">
      <span class="step_number">{{ stepNumber }}</span>
    </div>
    <div class="step_label"> {{ stepLabel }}</div>
    <div class="step_dash"></div>
  </div>
</template>

<script>
export default {
  name: "StepperItem",
  props:{
    stepNumber:{
      type:Number,
      default:0
    },
    stepLabel:{
      type:String,
      default: ""
    }
  }
}
</script>

<style scoped lang="scss">
.step{
  display: flex;
  align-items: center;
&_icon{
   display: flex;
   background: #0074FF;
   align-items: center;
   justify-content: center;
   width: 32px;
   height: 32px;
   border-radius: 50%;
 }
&_number{
   font-weight: 400;
   font-size: 18px;
   line-height: 140%;
   color: white;
 }
&_label{
   font-weight: 700;
   font-size: 16px;
   line-height: 120%;
   color: #0074FF;
   margin-left: 9px;
 }
&_dash{
   height: 1px;
   width: 186px;
   margin: 0 8px;
   background: #0074FF;
 }
}
</style>
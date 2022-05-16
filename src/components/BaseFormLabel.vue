<template>
  <div class="form-label">
    <label>{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "BaseFormLabel",
  props:{
    label:{
      type:String,
      default:""
    }
  }
}
</script>

<style scoped lang="scss">
.form-label{
  font-size: 24px;
  font-weight: 700;
  display: flex;
  max-width: 100%;
  margin: 28px 12px 16px 12px;
}
</style>
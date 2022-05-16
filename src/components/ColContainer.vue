<template>
  <div class="col-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ColContainer"
}
</script>

<style scoped>
.col-container{
  display: flex;
  width: 100%;
}
</style>
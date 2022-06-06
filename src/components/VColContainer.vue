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
  flex-direction: column;
  width: 100%;
}
</style>
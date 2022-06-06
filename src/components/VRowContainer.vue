<template>
  <div class="row-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RowContainer"
}
</script>

<style scoped>
  .row-container{
    display: flex;
    width: 100%;
  }
</style>
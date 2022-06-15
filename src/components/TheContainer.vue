<template>
  <div class="the-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheContainer",
};
</script>

<style scoped>
.the-container {
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
}

@media (max-width: 1024px) {
  .the-container {
    max-width: 1024px;
    padding: 0 10px;
  }
}

@media (max-width: 640px) {
  .the-container {
    max-width: 640px;
    padding: 0;
  }
}
</style>

<template>
  <div class="divider"></div>
</template>

<script>
export default {
  name: "DividerVertical"
}
</script>

<style scoped>
.divider{
  height: 40px;
  width: 1px;
  margin: 0 22px;
  background:#DEDEDE;
}

@media screen and (max-width: 1200px) {
  .divider{
    margin: 0 8px;
  }
}
</style>
<template>
  <div class="wrapper">
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "DividerHorizontal"
}
</script>

<style scoped>
.divider{
  display: flex;
  height: 1px;
  width: 100%;
  margin: 0 16px;
  background:#DEDEDE;
}
.wrapper{
  display: flex;
}
</style>
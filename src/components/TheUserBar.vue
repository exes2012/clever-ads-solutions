<template>
<div class="user-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "TheUserBar"
}
</script>

<style scoped>
.user-bar{
  display: flex;
  align-items: center;
  margin-left: auto;
}
</style>
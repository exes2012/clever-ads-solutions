<template>
  <div class="dropdown">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "TheUserAccountDropdown",
}
</script>

<style scoped lang="scss">
.dropdown{
  display: flex;
  flex-direction: column;
  background: white;
  transition: all 0.5s;
  border-radius: 16px;
  overflow: hidden;
  /*border: 2px solid #EFEFEF;*/
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  order:1;
  position: absolute;
  top:30px;
  z-index: 10;
  padding: 16px 0;
}
</style>
<template>
  <div class="modal">
    <div class="modal_window"></div>
  </div>
</template>

<script>
export default {
  name: "BaseModal"
}
</script>

<style scoped lang="scss">
.modal{
  position: fixed;
  z-index: 10;
  background: black;
  opacity: 0.3 ;
  inset: 0;
  &_window{
    background: white;
    width: 670px;
    height: 770px;
    border-radius: 26px;
    box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
    margin: 117px auto;
    z-index: 12;
    opacity: 100%;
   }
}
</style>
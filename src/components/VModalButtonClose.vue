<template>
  <button @click="$emit('click')" class="button-close">
    <base-icon name="close"/>
  </button>
</template>

<script>

export default {
  name: "BaseModalButtonClose",

}
</script>

<style>
.button-close{
  position: absolute;
  top:15px;
  right: 15px;
}
</style>
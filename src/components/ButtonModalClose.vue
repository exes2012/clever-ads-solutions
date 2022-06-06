<template>
  <button @click="$emit('click')">
    <base-icon name="close"/>
  </button>
</template>

<script>

export default {
  name: "BaseModalButtonClose",

}
</script>

<style scoped>

</style>
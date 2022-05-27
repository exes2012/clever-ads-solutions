<template>
  <button @click="$emit('click')">
    <base-icon name="close"/>
  </button>
</template>

<script>
import {mapMutations} from "vuex"

export default {
  name: "BaseModalButtonClose",
  methods:{
    ...mapMutations('userAccount', ['closeWindow'])
  }
}
</script>

<style scoped>

</style>
<template>
  <div v-html="path"></div>
</template>

<script>
import icons from "@/assets/icons/icons";
export default {
  name: "BaseIcon",
  props:['name'],
  data(){
    return{
      path:icons[this.name]
    }
  }
}
</script>

<style scoped>

</style>
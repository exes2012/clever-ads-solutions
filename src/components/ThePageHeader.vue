<template>
  <div class="page-header">
        <h1 class="main-title mb-8">{{ pageTitle }}</h1>
        <v-btn
            text
            class="text-btn"
            color="#0074FF"
            @click="$emit('buttonClick')"
        >
          <v-icon left>{{ buttonIcon }}</v-icon>
          {{ buttonTitle }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "ThePageHeader",
  props:{
    pageTitle:String,
    buttonTitle:String,
    buttonIcon:String,
  }
}
</script>

<style scoped>
.page-header{
  display: flex;
  width: 100%;
  margin-top:140px;
}

.text-btn{
  font-size: 14px;
  line-height: 120%;
  font-stretch: normal;
  margin-left: auto;
}
</style>
<template>
  <div class="page-header">
    <h1 class="main-title mb-8">{{ pageTitle }}</h1>
    <v-btn
      v-if="haveButton"
      text
      class="text-btn"
      color="#0074FF"
      @click="$emit('buttonClick')"
    >
      <v-icon left>{{ buttonIcon }}</v-icon>
      {{ buttonTitle }}</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "ThePageHeader",
  props: {
    pageTitle: String,
    buttonTitle: String,
    buttonIcon: String,
    haveButton: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.page-header {
  display: flex;
  width: 100%;
  margin-top: 140px;
}

.text-btn {
  font-size: 14px;
  line-height: 120%;
  font-stretch: normal;
  margin-left: auto;
}

@media screen and (max-width: 1200px) {
  .page-header {
    margin-top: 10px;
    flex-direction: column;
    justify-items: start;
  }

  .main-title {
    font-size: 30px;
    margin-left: 16px;
    margin-bottom: 0 !important;
  }
  .text-btn {
    margin: 8px 0 16px 16px;
    width: 160px;
  }
}
</style>

<template>
  <div class="content">
    <the-page-header
        pageTitle="Creatives"
        button-icon="mdi-plus"
        buttonTitle="Add Creative"
    />

    <div class="d-flex">
      <v-checkbox
          v-for="(checkbox,id) in checkboxes"
          :key="id"
          :label="checkbox"
          class="chckbox"
          color="#0074FF"
      ></v-checkbox>
    </div>
    <base-table
      :headers="this.$store.state.tablesHeaders.creativesTableHeaders"
      :items="this.$store.state.creatives.creativesList"
    />

  </div>
</template>

<script>

import BaseTable from "@/components/BaseTable.vue";
export default {
  name: "PageCreatives",
  components:{
    BaseTable,
  },
  data(){
    return{
      checkboxes:['Banner', 'Interstitial',
        'Rewarded', 'Archived creatives'],
    }
  }
}
</script>

<style scoped>
.chckbox /deep/ label{
  color: black;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: normal;
  margin-right: 41px;
}
</style>
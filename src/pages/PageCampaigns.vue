<template>
  <div>
  <the-page-header
      pageTitle="Cross Promo Campaigns"
      button-icon="mdi-plus"
      buttonTitle="Add Campaign"
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
      :headers="this.$store.state.tablesHeaders.campaignsTableHeaders"
      :items="this.$store.state.campaigns.campaignsList"
      />
    </div>
</template>

<script>
import TheCurrencySelector from "@/components/TheCurrencySelector.vue";
import BaseMultiSelect from "@/components/BaseMultiSelect.vue";
import BaseTable from "@/components/BaseTable.vue";

export default {
  name: "PageCampaigns",
  components:{
    TheCurrencySelector,
    BaseMultiSelect,
    BaseTable,
  },
  data(){
    return{

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
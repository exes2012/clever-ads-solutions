<template>
  <div class="content">
    <the-page-header
      pageTitle="Cross Promo Campaigns"
      button-icon="mdi-plus"
      buttonTitle="Add Campaign"
      @buttonClick="openModalAddCampaign"
    />
    <prime-table
      :table-data="this.$store.state.campaigns.campaignsList"
      :columns="this.$store.state.tableColumns.campaignsTableColumns"
      :is-search-enabled="true"
      search-width="300px"
      search-label="Search by name"
      :is-checkboxes-enabled="true"
      :checkboxes="checkboxes"
    />
    <the-modal-add-campaign />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TheModalAddCampaign from "@/components/TheModalAddCampaign.vue";
import TheCurrencySelector from "@/components/TheCurrencySelector.vue";
import BaseMultiSelect from "@/components/VMultiSelect.vue";
import BaseTable from "@/components/BaseTable.vue";
import PrimeTable from "@/components/PrimeTable.vue";

export default {
  name: "PageCampaigns",
  components: {
    TheCurrencySelector,
    TheModalAddCampaign,
    BaseMultiSelect,
    BaseTable,
    PrimeTable,
  },
  data() {
    return {
      checkboxes: [
        {
          name: "Active",
          color: "success",
        },
        {
          name: "Pause",
          color: "#BDBDBD",
        },
        {
          name: "Delete",
          color: "red",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("campaigns", ["openModalAddCampaign"]),
  },
};
</script>

<style scoped>
.chckbox /deep/ label {
  color: black;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: normal;
  margin-right: 41px;
}
</style>

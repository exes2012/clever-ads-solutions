<template>
  <div class="content">
    <the-page-header
      pageTitle="Cross Promo Campaigns"
      button-icon="mdi-plus"
      buttonTitle="Add Campaign"
      @buttonClick="openModalAddCampaign"
    />
    <v-row-container>
      <v-row-container>
        <v-checkbox
          v-for="(checkbox, id) in checkboxes"
          :key="id"
          :label="checkbox.name"
          class="chckbox"
          :color="checkbox.color"
        ></v-checkbox>
      </v-row-container>
      <v-row-container :style="{ width: '300px' }">
        <v-text-field
          label="Search by name"
          prepend-inner-icon="mdi-magnify"
          class="search-field"
        />
      </v-row-container>
    </v-row-container>
    <base-table
      :headers="this.$store.state.tablesHeaders.campaignsTableHeaders"
      :items="this.$store.state.campaigns.campaignsList"
    />
    <the-modal-add-campaign />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TheModalAddCampaign from "@/components/TheModalAddCampaign.vue";
import TheCurrencySelector from "@/components/TheCurrencySelector.vue";
import BaseMultiSelect from "@/components/BaseMultiSelect.vue";
import BaseTable from "@/components/BaseTable.vue";

export default {
  name: "PageCampaigns",
  components: {
    TheCurrencySelector,
    TheModalAddCampaign,
    BaseMultiSelect,
    BaseTable,
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

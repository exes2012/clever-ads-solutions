<template>
  <div class="content">
    <the-page-header
      pageTitle="Creatives"
      button-icon="mdi-plus"
      buttonTitle="Add Creative"
      @buttonClick="openModalAddCreative"
    />
    <prime-table
      :table-data="this.$store.state.creatives.creativesList"
      :columns="this.$store.state.tableColumns.creativesTableColumns"
      :is-search-enabled="true"
      search-width="450px"
      search-label="Search by bundle or creative name"
      :is-checkboxes-enabled="true"
      :checkboxes="checkboxes"
    />
    <the-modal-add-creative />
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";
import TheModalAddCreative from "@/components/TheModalAddCreative.vue";
import PrimeTable from "@/components/PrimeTable.vue";
import { mapMutations } from "vuex";

export default {
  name: "PageCreatives",
  components: {
    BaseTable,
    TheModalAddCreative,
    PrimeTable,
  },
  data() {
    return {
      checkboxes: [
        {
          name: "Banner",
          color: "primary",
        },
        {
          name: "Interstitial",
          color: "primary",
        },
        {
          name: "Rewarded",
          color: "primary",
        },
        {
          name: "Archived creatives",
          color: "primary",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("creatives", ["openModalAddCreative"]),
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

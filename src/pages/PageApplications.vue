<template>
  <div class="content">
    <the-page-header
      pageTitle="Applications"
      button-icon="mdi-plus"
      buttonTitle="Add Application"
      @buttonClick="openModalAddApplication"
    />
    <prime-table
      :table-data="this.$store.state.applications.appList"
      :columns="this.$store.state.tableColumns.applicationsTableColumns"
      :is-search-enabled="true"
      search-label="Search app"
    />

    <the-modal-add-application
      v-if="$store.state.applications.isModalAddApplicationOpen"
    />
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";
import TheModalAddApplication from "@/components/TheModalAddApplication.vue";
import PrimeTable from "@/components/PrimeTable.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "PageApplications",
  components: {
    BaseTable,
    TheModalAddApplication,
    PrimeTable,
  },
  data() {
    return {
      e1: 1,
    };
  },
  methods: {
    ...mapState("applications", ["isModalAddApplicationOpen"]),
    ...mapMutations("applications", ["openModalAddApplication"]),
  },
};
</script>

<style lang="scss"></style>

<template>
  <div class="content">
    <the-page-header
      pageTitle="Applications"
      button-icon="mdi-plus"
      buttonTitle="Add Application"
      @buttonClick="openModalAddApplication"
    />
    <v-row-container :style="{ width: '300px' }" class="ml-auto">
      <v-text-field
        label="Search App"
        prepend-inner-icon="mdi-magnify"
        class="search-field"
      />
    </v-row-container>
    <base-table
      :headers="this.$store.state.tablesHeaders.applicationsTableHeaders"
      :items="this.$store.state.applications.appList"
    ></base-table>

    <the-modal-add-application
      v-if="$store.state.applications.isModalAddApplicationOpen"
    />
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";
import TheModalAddApplication from "@/components/TheModalAddApplication.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "PageApplications",
  components: {
    BaseTable,
    TheModalAddApplication,
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

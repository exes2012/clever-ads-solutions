<template>
  <div class="content">
    <the-page-header
      pageTitle="Creatives"
      button-icon="mdi-plus"
      buttonTitle="Add Creative"
      @buttonClick="openModalAddCreative"
    />

    <v-row-container>
      <v-row-container>
        <v-checkbox
          v-for="(checkbox, id) in checkboxes"
          :key="id"
          :label="checkbox"
          class="chckbox"
          color="primary"
        ></v-checkbox>
      </v-row-container>
      <v-row-container :style="{ width: '450px' }">
        <v-text-field
          label="Search by bundle or creative name"
          prepend-inner-icon="mdi-magnify"
          class="search-field"
        />
      </v-row-container>
    </v-row-container>
    <base-table
      :headers="this.$store.state.tablesHeaders.creativesTableHeaders"
      :items="this.$store.state.creatives.creativesList"
    />
    <the-modal-add-creative />
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";
import TheModalAddCreative from "@/components/TheModalAddCreative.vue";
import { mapMutations } from "vuex";

export default {
  name: "PageCreatives",
  components: {
    BaseTable,
    TheModalAddCreative,
  },
  data() {
    return {
      checkboxes: ["Banner", "Interstitial", "Rewarded", "Archived creatives"],
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

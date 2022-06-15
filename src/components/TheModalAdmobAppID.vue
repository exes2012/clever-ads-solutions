<template>
  <v-dialog
    v-model="this.$store.state.applications.isAdmobAppIdModalOpen"
    transition="dialog-bottom-transition"
    max-width="774px"
    persistent
  >
    <v-card elevation="0" class="px-10 py-10 card d-flex flex-column">
      <v-modal-button-close @click="closeAdmobAppIdModal" />
      <div class="app-id_label">Admob App ID for {{ appName }}</div>
      <div class="app-id">{{ admobAppId }}</div>
      <div class="app-id_description">
        Copy the ID above and follow the instructios for <span>Android</span> or
        <span>iOS</span>
      </div>
      <v-btn
        width="180"
        height="53"
        color="primary"
        class="mx-auto"
        button-class="btn-filter-apply"
        @click="closeAdmobAppIdModal"
        >Close</v-btn
      >
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BaseTableModalAdmobId",
  components: {},
  props: {
    appName: {
      type: String,
    },
    admobAppId: {
      type: String,
    },
  },
  methods: {
    ...mapMutations("applications", ["closeAdmobAppIdModal"]),
  },
};
</script>

<style scoped lang="scss">
.app-id {
  display: flex;
  margin: 44px auto 32px auto;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: #1f2024;
  &_label {
    margin: 0 auto;
    font-weight: 700;
    font-size: 24px;
  }
  &_description {
    margin: 0 auto 52px auto;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #545454;
    & > span {
      color: #0074ff;
      font-weight: 700;
    }
  }
  &_btn {
    margin: 0 auto;
    width: 180px;
  }
}
</style>

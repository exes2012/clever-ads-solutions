<template>
  <v-dialog
    v-model="this.$store.state.filters.isDatepickerModalOpen"
    max-width="774"
    transition="dialog-bottom-transition"
    persistent
  >
    <v-card elevation="0" class="px-10 py-10 card" width="774">
      <v-modal-button-close @click="closeDatepickerModal" />
      <v-form-label label="Date range" class="mx-auto" />
      <the-date-picker />
    </v-card>
  </v-dialog>
</template>

<script>
import TheDatePicker from "@/components/TheDatePicker.vue";
import { mapMutations } from "vuex";

export default {
  name: "BaseTableModalAdmobId",
  components: {
    TheDatePicker,
  },
  props: {
    admobAppId: {
      type: String,
    },
  },
  methods: {
    ...mapMutations("filters", ["closeDatepickerModal"]),
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

.buttons {
  margin-top: 36px;
  padding-right: 9px;
}
</style>

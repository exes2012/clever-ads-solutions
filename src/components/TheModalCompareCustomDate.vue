<template>
  <v-dialog
    v-model="this.$store.state.filters.isCompareDatepickerModalOpen"
    max-width="774"
    transition="dialog-bottom-transition"
    persistent
  >
    <v-card elevation="0" class="card" width="774">
      <v-modal-button-close @click="closeCompareDatepickerModal" />
      <div class="label">Select two periods with the same number of days</div>
      <the-date-compare />
    </v-card>
  </v-dialog>
</template>

<script>
import TheDateCompare from "@/components/TheDateCompare.vue";
import { mapMutations } from "vuex";

export default {
  name: "BaseTableModalAdmobId",
  components: {
    TheDateCompare,
  },
  props: {
    admobAppId: {
      type: String,
    },
  },
  methods: {
    ...mapMutations("filters", ["closeCompareDatepickerModal"]),
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 40px;
}

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

.label {
  font-size: 24px;
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  .card {
    padding: 20px;
  }

  .datepicker {
    font-size: 30px;
  }

  .label {
    font-size: 18px;
    line-height: 110%;
    font-weight: 500;
  }
}
</style>

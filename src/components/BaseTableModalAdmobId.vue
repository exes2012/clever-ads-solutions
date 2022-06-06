<template>
  <base-modal form-width="774px" @on-close="closeAdmobAppIdModal">
    <base-form-label
      label="Admob App ID for com.ulimedia.chasecraft"
      class="mx-auto"
    />
    <div class="app-id">{{ admobAppId }}</div>
    <div class="app-id_description">
      Copy the ID above and follow the instructios for <span>Android</span> or
      <span>iOS</span>
    </div>
    <v-btn
      class="app-id_btn"
      button-class="btn-filter-apply"
      @click="closeAdmobAppIdModal"
      >Close</v-btn
    >
  </base-modal>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";
import { mapMutations } from "vuex";

export default {
  name: "BaseTableModalAdmobId",
  components: {
    BaseModal,
  },
  props: {
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

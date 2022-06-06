<template>
  <div class="dropdown">
    <user-account-dropdown-item
      item-label="Personal data"
      @click="openPersonalData"
    />
    <user-account-dropdown-item
      item-label="Payment details"
      @click="openPaymentDetails"
    />
    <user-account-dropdown-item item-label="Api documentation" />
    <v-divider-horizontal />
    <user-account-dropdown-item class="text-red" item-label="Logout" />
  </div>
</template>

<script>
import UserAccountDropdownItem from "@/components/UserAccountDropdownItem.vue";
import VDividerHorizontal from "@/components/VDividerHorizontal.vue";

import { mapMutations } from "vuex";

export default {
  name: "TheUserAccountDropdown",
  components: {
    UserAccountDropdownItem,
    VDividerHorizontal,
  },
  methods: {
    ...mapMutations("userAccount", ["openPersonalData", "openPaymentDetails"]),
  },
};
</script>

<style scoped lang="scss">
.dropdown {
  display: flex;
  flex-direction: column;
  background: white;
  transition: all 0.5s;
  border-radius: 16px;
  overflow: hidden;
  /*border: 2px solid #EFEFEF;*/
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  order: 1;
  position: absolute;
  top: 30px;
  right: 0px;
  z-index: 10;
  padding: 16px 0;
}

.text-red {
  color: #ec0000;
}
</style>

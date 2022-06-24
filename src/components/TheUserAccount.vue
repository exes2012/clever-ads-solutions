<template>
  <div>
    <div class="user" @click="openUserAccountDropdown">
      <the-user-account-avatar />
      <div class="user_name">{{ this.$store.state.userAccount.userName }}</div>
      <the-user-account-dropdown
        v-if="this.$store.state.userAccount.userAccountDropdownVisible"
      />
    </div>
    <the-modal-personal-data
      v-if="this.$store.state.userAccount.isPersonalDataOpen"
    />
    <the-modal-payment-details
      v-if="this.$store.state.userAccount.isPaymentDetailsOpen"
    />
  </div>
</template>

<script>
import TheUserAccountDropdown from "@/components/TheUserAccountDropdown.vue";
import TheUserAccountAvatar from "@/components/TheUserAccountAvatar.vue";
import TheModalPersonalData from "@/components/TheModalPersonalData.vue";
import TheModalPaymentDetails from "@/components/TheModalPaymentDetails.vue";
import { mapMutations } from "vuex";

export default {
  name: "TheUserAccount",
  components: {
    TheUserAccountAvatar,
    TheUserAccountDropdown,
    TheModalPersonalData,
    TheModalPaymentDetails,
  },

  methods: {
    ...mapMutations("userAccount", [
      "openUserAccountDropdown",
      "closeUserAccountDropdown",
    ]),
    handleOutsideClick(e) {
      if (!this.$el.contains(e.target)) {
        this.$store.commit("userAccount/closeUserAccountDropdown");
      }
    },
  },
  mounted() {
    document.addEventListener("click", (event) => {
      this.handleOutsideClick(event);
    });
    console.log(this);
  },
  beforeDestroy() {
    document.removeEventListener("click", (event) => {
      this.handleOutsideClick(event);
    });
  },
};
</script>

<style scoped lang="scss">
.user {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &_name {
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    margin-right: 15px;
    max-height: 25px;
  }
  &::after {
    content: "";
    background: url("../assets/svg/chevron_down.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height: 12px;
    width: 12px;
    right: 0px;
    top: 10px;
    transition: all 0.4s;
  }
}

@media screen and (max-width: 1200px) {
  .user_name {
    font-size: 14px;
  }
}
</style>

<template>
  <div>
    <div
      class="user"
      @click="openUserAccountDropdown"
    >
      <the-user-account-avatar />
      <div class="user_name">Dart Weider</div>
      <the-user-account-dropdown v-if="this.$store.state.userAccount.userAccountDropdownVisible"/>
    </div>
    <user-account-personal-data
      v-if="this.$store.state.userAccount.isPersonalDataOpen"
    />
    <user-account-payment-details
        v-if="this.$store.state.userAccount.isPaymentDetailsOpen"
    />
  </div>
</template>

<script>
import TheUserAccountDropdown from "@/components/TheUserAccountDropdown.vue";
import TheUserAccountAvatar from "@/components/TheUserAccountAvatar.vue";
import UserAccountPersonalData from "@/components/UserAccountPersonalData.vue";
import UserAccountPaymentDetails from "@/components/UserAccountPaymentDetails.vue";
import {mapMutations} from "vuex";

export default {
  name: "TheUserAccount",
  components: {
    TheUserAccountAvatar,
    TheUserAccountDropdown,
    UserAccountPersonalData,
    UserAccountPaymentDetails
  },

  methods: {
    ...mapMutations('userAccount',["openUserAccountDropdown", "closeUserAccountDropdown"]),
    handleOutsideClick(e) {
      if (!this.$el.contains(e.target)) {
        this.$store.commit('userAccount/closeUserAccountDropdown')
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
    font-size: 16px;
    font-weight: 500;
    margin-right: 15px;
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


</style>

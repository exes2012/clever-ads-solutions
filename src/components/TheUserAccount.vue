<template>
  <div>
    <div
      class="user"
      @click="userAccountDropdownVisible = !userAccountDropdownVisible"
    >
      <the-user-account-avatar />
      <div class="user_name">Dart Weider</div>
      <the-user-account-dropdown v-if="userAccountDropdownVisible">
        <user-account-dropdown-item
          item-label="Personal data"
          @click="handleClick"
        />
        <user-account-dropdown-item item-label="Payment details" />
        <user-account-dropdown-item item-label="Api documentation" />
        <divider-horizontal />
        <user-account-dropdown-item class="text-red" item-label="Logout" />
      </the-user-account-dropdown>
    </div>
    <user-account-personal-data
      v-if="this.$store.state.userAccount.isPersonalDataOpen"
    />
  </div>
</template>

<script>
import TheUserAccountDropdown from "@/components/TheUserAccountDropdown.vue";
import TheUserAccountAvatar from "@/components/TheUserAccountAvatar.vue";
import UserAccountDropdownItem from "@/components/UserAccountDropdownItem.vue";
import DividerHorizontal from "@/components/DividerHorizontal.vue";
import UserAccountPersonalData from "@/components/UserAccountPersonalData.vue";
export default {
  name: "TheUserAccount",
  components: {
    TheUserAccountAvatar,
    TheUserAccountDropdown,
    UserAccountDropdownItem,
    UserAccountPersonalData,
    DividerHorizontal,
  },
  data() {
    return {
      userAccountDropdownVisible: false,
    };
  },
  methods: {
    showUserDropdown() {
      this.userDropdownAccountVisible = true;
      console.log(this.userDropdownAccountVisible);
      console.log("hi");
    },
    handleClick() {
      this.isPersonalDataOpen = !this.isPersonalDataOpen;
    },
    handleOutsideClick(e) {
      if (!this.$el.contains(e.target)) {
        this.userDropdownAccountVisible = false;
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

.text-red {
  color: #ec0000;
}
</style>

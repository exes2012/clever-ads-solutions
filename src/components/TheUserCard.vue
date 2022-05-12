<template>
  <div>
    <div class="user" @click="userDropdownVisible = !userDropdownVisible">
      <UserAvatar />
      <div class="user_name">Dart Weider</div>
      <the-dropdown-user v-if="userDropdownVisible">
        <dropdown-user-list-item
          item-label="Personal data"
          @click="handleClick"
        />
        <dropdown-user-list-item item-label="Payment details" />
        <dropdown-user-list-item item-label="Api documentation" />
        <divider-horizontal />
        <dropdown-user-list-item class="text-red" item-label="Logout" />
      </the-dropdown-user>
    </div>
    <base-modal v-if="modalOpen" />
  </div>
</template>

<script>
import DropdownUserListItem from "@/components/DropdownUserListItem.vue";
import TheDropdownUser from "@/components/TheDropdownUser.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import DividerHorizontal from "@/components/DividerHorizontal.vue";
import BaseModal from "@/components/BaseModal";
export default {
  name: "TheUserBar",
  components: {
    UserAvatar,
    DropdownUserListItem,
    TheDropdownUser,
    DividerHorizontal,
    BaseModal,
  },
  data() {
    return {
      userDropdownVisible: false,
      modalOpen: false,
    };
  },
  methods: {
    showUserDropdown() {
      this.userDropdownVisible = true;
      console.log(this.userDropdownVisible);
      console.log("hi");
    },
    handleClick() {
      this.modalOpen = !this.modalOpen
    },
    handleOutsideClick(e) {
      if (!this.$el.contains(e.target)) {
        this.userDropdownVisible = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", (event) => {
      this.handleOutsideClick(event);
    });
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

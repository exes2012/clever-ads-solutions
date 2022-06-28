<template>
  <header class="header">
    <the-container class="header_container">
      <the-logo-main />
      <header-nav-link
        v-for="(navLink, i) in navLinks"
        :key="i"
        :url="navLink.url"
        :name="navLink.label"
      />
      <the-user-bar>
        <the-currency-selector
          :options="this.$store.state.currencies.currenciesList"
          @select="optionSelect"
          :selected="this.$store.state.currencies.defaultCurrency"
        />
        <divider-vertical />
        <the-user-account />
      </the-user-bar>
    </the-container>
  </header>
</template>

<script>
import TheUserBar from "@/components/TheUserBar.vue";
import TheCurrencySelector from "@/components/TheCurrencySelector.vue";
import TheLogoMain from "@/components/TheLogoMain.vue";
import HeaderNavLink from "@/components/HeaderNavLink.vue";
import DividerVertical from "@/components/VDividerVertical.vue";
import TheUserAccount from "@/components/TheUserAccount.vue";
import TheDropdownUser from "@/components/TheUserAccountDropdown.vue";
import DropdownUserListItem from "@/components/UserAccountDropdownItem.vue";

export default {
  name: "TheAppHeader",
  components: {
    TheCurrencySelector,
    TheLogoMain,
    HeaderNavLink,
    DividerVertical,
    TheUserAccount,
    TheUserBar,
    TheDropdownUser,
    DropdownUserListItem,
  },
  data() {
    return {
      navLinks: [
        {
          label: "Mediation",
          url: "/",
        },
        {
          label: "My payments",
          url: "/mypayments",
        },
        {
          label: "Applications",
          url: "/applications",
        },
        {
          label: "Creatives",
          url: "/creatives",
        },
        {
          label: "Cross Promo Campaigns",
          url: "/crosspromocampaigns",
        },
      ],
      userDropdownVisible: true,
    };
  },
  methods: {
    optionSelect(option) {
      this.$store.state.currencies.defaultCurrency = option;
    },
  },
  // mounted() {
  //   document.addEventListener('click',this.hideUserDropdown.bind(this), true)
  // },
  // beforeDestroy() {
  //   document.removeEventListener('click',this.hideUserDropdown)
  // }
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  align-items: center;
  height: 75px;
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  position: fixed;
  top: 0;
  background: white;
  z-index: 20;
  &_container {
    align-items: center;
    width: 100%;
  }
}
</style>

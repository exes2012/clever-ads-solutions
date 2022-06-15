<template>
  <div class="main">
    <v-app-bar color="white" elevation="0">
      <the-logo-main />
      <v-spacer />
      <the-currency-selector
        :options="this.$store.state.currencies.currenciesList"
        @select="optionSelect"
        :selected="this.$store.state.currencies.defaultCurrency"
      />
      <div class="menu-item_icons">
        <v-icon v-if="drawer === false" @click.stop="drawer = true"
          >mdi-menu
        </v-icon>
        <v-icon v-else @click.stop="drawer = false">mdi-close</v-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      hide-overlay
      v-model="drawer"
      absolute
      temporary
      height="370"
      width="100%"
      right
      class="menu-item_menu"
    >
      <v-list dense>
        <v-list-item
          v-for="navLink in navLinks"
          :key="navLink.title"
          :to="navLink.url"
          class="menu-item"
          active-class="menu-item_active"
        >
          <v-list-item-icon class="menu-item_icon">
            <base-icon :name="navLink.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-item_title">{{
              navLink.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="my-0"></v-divider>
      <v-list dense>
        <v-list-item link class="menu-item" @click.prevent="openPersonalData">
          <v-list-item-icon class="menu-item_icon">
            <base-icon name="user" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-item_title"
              >Personal data</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item link class="menu-item" @click.prevent="openPaymentDetails">
          <v-list-item-icon class="menu-item_icon">
            <base-icon name="payments" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-item_title"
              >Payment details</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item link class="menu-item" @click="">
          <v-list-item-icon class="menu-item_icon">
            <base-icon name="logout" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="menu-item_title danger"
              >Log Out</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <the-modal-personal-data
      v-if="this.$store.state.userAccount.isPersonalDataOpen"
    />
    <the-modal-payment-details
      v-if="this.$store.state.userAccount.isPaymentDetailsOpen"
    />
  </div>
</template>

<script>
import TheLogoMain from "@/components/TheLogoMain.vue";
import TheCurrencySelector from "@/components/TheCurrencySelector";
import TheModalPaymentDetails from "@/components/TheModalPaymentDetails";
import TheModalPersonalData from "@/components/TheModalPersonalData";
import { mapMutations } from "vuex";

export default {
  name: "TheMobileHeader",
  components: {
    TheLogoMain,
    TheCurrencySelector,
    TheModalPaymentDetails,
    TheModalPersonalData,
  },
  data() {
    return {
      drawer: false,
      navLinks: [
        { title: "Mediation", icon: "lineChart", url: "/" },
        {
          title: "My Payments",
          icon: "receipt",
          url: "/mypayments",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("userAccount", ["openPersonalData", "openPaymentDetails"]),
    optionSelect(option) {
      this.$store.state.currencies.defaultCurrency = option;
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  z-index: 10;
}
.menu-item {
  display: flex;
  height: 64px;
  align-items: center;
  &_icons {
    padding-left: 27px;
    border-left: 1px solid #dedede;
    margin-left: 10px;
  }
  &_menu {
    margin-top: 55px !important;
  }
  &_container {
    padding: 16px 20px !important;
  }
  &_icon {
    margin-top: 16px !important;
  }
  &_active {
    background: #f1f7ff;
  }
  &_title {
    font-size: 18px !important;
    font-weight: 500;
    overflow: visible !important;
  }
}

.danger {
  color: red;
}
</style>

<template>
  <div>
    <v-dialog
      v-model="this.$store.state.filters.isFilterModalOpen"
      max-width="500"
      persistent
      transition="dialog-bottom-transition"
      class="dialog"
    >
      <v-card width="500" elevation="0" class="px-7 py-10 card">
        <v-modal-button-close @click="closeFilterModal" />
        <form @submit.prevent="">
          <div class="form-label">Application</div>
          <base-multi-select
            :options="this.$store.state.applications.appList"
            display-property="appName"
            value-property="id"
            v-model="selectedApps"
            :placeholder="'Choose an application'"
          />
          <div class="form-label mt-5">Countries</div>
          <v-row-container>
            <v-radio-group
              class="stepper_radio-wrap"
              v-model="countries"
              row
              hide-details
            >
              <v-radio
                value="allCountries"
                class="stepper_radio"
                label="Select all countries"
                color="primary"
              />
              <v-radio
                value="choose"
                class="stepper_radio"
                label="Let me choose"
                color="primary"
              />
            </v-radio-group>
          </v-row-container>
          <base-multi-select
            v-if="countries !== 'allCountries'"
            :options="this.$store.state.countries.countriesList"
            display-property="name"
            value-property="value"
            v-model="selectedCountries"
            :placeholder="'Choose the country'"
          />
          <div v-else class="disabled">All countries</div>
          <div class="form-label mt-5">Network</div>
          <v-row-container>
            <v-radio-group
              class="stepper_radio-wrap"
              v-model="networks"
              row
              hide-details
            >
              <v-radio
                value="allNetworks"
                class="stepper_radio"
                label="Select all networks"
                color="primary"
              />
              <v-radio
                value="choose"
                class="stepper_radio"
                label="Let me choose"
                color="primary"
              />
            </v-radio-group>
          </v-row-container>
          <base-multi-select
            v-if="networks !== 'allNetworks'"
            :options="this.$store.state.networks.networksList"
            display-property="name"
            value-property="value"
            v-model="selectedNetworks"
            :placeholder="'Choose network'"
          />
          <div v-else class="disabled">All Networks</div>
          <div class="form-label mt-4">Ad Type</div>
          <div class="d-flex">
            <v-checkbox
              label="Banner"
              value="Banner"
              v-model="selectedAdType"
              class="chckbox mt-0"
              color="#0074FF"
            ></v-checkbox>
            <v-checkbox
              label="Intertial"
              value="Intertial"
              v-model="selectedAdType"
              class="chckbox mt-0"
              color="#0074FF"
            ></v-checkbox>
            <v-checkbox
              label="Rewarded"
              value="Rewarded"
              v-model="selectedAdType"
              class="chckbox mt-0"
              color="#0074FF"
            ></v-checkbox>
          </div>
          <div class="form-label mt-2">Platform</div>
          <div class="d-flex">
            <v-checkbox
              label="iOS"
              value="iOS"
              v-model="selectedPlatform"
              class="chckbox mt-0"
              color="#0074FF"
            ></v-checkbox>
            <v-checkbox
              label="Android"
              value="Android"
              v-model="selectedPlatform"
              class="chckbox ml-8 mt-0"
              color="#0074FF"
            ></v-checkbox>
          </div>
          <v-row-container class="justify-end">
            <v-btn
              text
              color="error"
              class="form_btn"
              width="100"
              height="53"
              @click="resetFilterModalSelection"
              >Clear all
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="ml-7"
              width="180"
              height="53"
              @click="submitFilterModal"
              >Apply
            </v-btn>
          </v-row-container>
        </form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import BaseMultiSelect from "@/components/BaseMultiSelect.vue";
import VModalButtonClose from "@/components/VModalButtonClose.vue";

import { mapMutations, mapState } from "vuex";

import axios from "axios";

export default {
  name: "UserAccountPersonalData",
  components: {
    BaseModal,
    BaseMultiSelect,
    VModalButtonClose,
  },
  data() {
    return {
      countries: "choose",
      networks: "choose",
    };
  },
  methods: {
    ...mapMutations("filters", [
      "closeFilterModal",
      "resetFilterModalSelection",
      "submitFilterModal",
    ]),
  },
  computed: {
    selectedCountries: {
      get() {
        return this.$store.state.filters.selectedCountries;
      },
      set(value) {
        this.$store.commit("filters/updateSelectedCountries", value);
      },
    },
    selectedApps: {
      get() {
        return this.$store.state.filters.selectedApps;
      },
      set(value) {
        this.$store.commit("filters/updateSelectedApps", value);
      },
    },
    selectedNetworks: {
      get() {
        return this.$store.state.filters.selectedNetworks;
      },
      set(value) {
        this.$store.commit("filters/updateSelectedNetworks", value);
      },
    },
    selectedAdType: {
      get() {
        return this.$store.state.filters.selectedAdType;
      },
      set(value) {
        this.$store.commit("filters/updateSelectedAdType", value);
      },
    },
    selectedPlatform: {
      get() {
        return this.$store.state.filters.selectedPlatform;
      },
      set(value) {
        this.$store.commit("filters/updateSelectedPlatforms", value);
      },
    },
  },
};
</script>

<style>
.form-label {
  font-size: 18px;
  font-weight: 500;
}

.chckbox label {
  color: black;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: normal;
  margin-right: 65px;
}

.form_btn .v-btn__content {
  font-size: 18px;
}

.disabled {
  margin: 10px 0;
  height: 59px;
  font-size: 18px;
}
</style>

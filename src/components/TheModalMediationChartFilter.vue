<template>
  <div>
    <v-dialog
      v-model="this.$store.state.filters.isFilterModalOpen"
      max-width="500"
      max-height="713"
      persistent
      transition="dialog-bottom-transition"
      class="dialog"
    >
      <v-card width="500" elevation="0" class="card">
        <v-modal-button-close @click="closeFilterModal" />
        <form @submit.prevent="">
          <v-btn text color="primary" @click="openCustomFilters = true"
            >Saved filters <v-icon right dark> mdi-open-in-new </v-icon></v-btn
          >
          <div class="form-label mt-0">Application</div>
          <base-multi-select
            :options="this.$store.state.applications.appList"
            display-property="appName"
            value-property="id"
            v-model="selectedApps"
            :placeholder="'Choose an application'"
          />
          <div class="form-label">Countries</div>
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
          <div class="form-label">Network</div>
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
          <div class="form-label">Ad Type</div>
          <div class="d-flex">
            <v-checkbox
              label="Banner"
              value="Banner"
              v-model="selectedAdType"
              class="chckbox mt-0"
              color="#0074FF"
              hide-details
            ></v-checkbox>
            <v-checkbox
              label="Intertial"
              value="Intertial"
              v-model="selectedAdType"
              class="chckbox mt-0"
              color="#0074FF"
              hide-details
            ></v-checkbox>
            <v-checkbox
              label="Rewarded"
              value="Rewarded"
              v-model="selectedAdType"
              class="chckbox mt-0"
              color="#0074FF"
              hide-details
            ></v-checkbox>
          </div>
          <div class="form-label">Platform</div>
          <div class="d-flex">
            <v-checkbox
              label="iOS"
              value="iOS"
              v-model="selectedPlatform"
              class="chckbox mt-0"
              color="#0074FF"
              hide-details
            ></v-checkbox>
            <v-checkbox
              label="Android"
              value="Android"
              v-model="selectedPlatform"
              class="chckbox ml-8 mt-0"
              color="#0074FF"
              hide-details
            ></v-checkbox>
          </div>
          <v-row-container class="justify-end">
            <v-btn
              text
              color="green"
              class="filter_btn"
              width="100"
              height="53"
              @click="saveCustomFilter = true"
              >Save filter
            </v-btn>
            <v-btn
              text
              color="error"
              class="filter_btn ml-4"
              width="100"
              height="53"
              @click="resetFilterModalSelection"
              >Clear all
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="ml-7 filter_btn"
              width="180"
              height="53"
              @click="submitFilterModal"
              >Apply
            </v-btn>
          </v-row-container>
        </form>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="saveCustomFilter"
      max-width="500"
      transition="dialog-bottom-transition"
      persistent
    >
      <v-card
        width="500"
        height="250"
        elevation="0"
        class="card d-flex flex-column"
      >
        <v-modal-button-close @click="saveCustomFilter = false" />
        <div class="form-label mt-0">
          Choose the name for your custom filter
        </div>
        <v-text-field
          v-model="customFilterName"
          outlined
          label="Filter name"
          class="text-field mt-4"
          reqired
          counter="25"
        />
        <v-row-container class="mt-auto">
          <v-btn
            text
            color="error"
            class="filter_btn ml-4"
            width="100"
            height="53"
            @click="saveCustomFilter = false"
          >
            Close
          </v-btn>
          <v-btn
            depressed
            :disabled="customFilterName === ''"
            color="primary"
            class="ml-auto filter_btn"
            width="180"
            height="53"
            @click="saveCustomFilter = false"
          >
            Save
          </v-btn>
        </v-row-container>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="openCustomFilters"
      max-width="500"
      transition="dialog-bottom-transition"
      persistent
    >
      <v-card
        width="500"
        height="450"
        elevation="0"
        class="card d-flex flex-column"
      >
        <v-modal-button-close @click="openCustomFilters = false" />
        <filter-list-item
          :custom-filters-list="customFiltersList"
          @click="this.openCustomFilters = false"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BaseMultiSelect from "@/components/VMultiSelect.vue";
import VModalButtonClose from "@/components/VModalButtonClose.vue";
import FilterListItem from "@/components/FilterListItem.vue";

import { mapMutations, mapState } from "vuex";

import axios from "axios";

export default {
  name: "UserAccountPersonalData",
  components: {
    BaseMultiSelect,
    VModalButtonClose,
    FilterListItem,
  },
  data() {
    return {
      countries: "choose",
      networks: "choose",
      saveCustomFilter: false,
      openCustomFilters: false,
      customFilterName: "",
      customFiltersList: [
        {
          name: "Europe Android",
          presets: "44 countries, Android",
        },
        {
          name: "Europe iOS",
          presets: "44 countries, iOS",
        },
        {
          name: "NoBanner USA Android",
          presets: "USA, Intertitial, Rewarded, Android",
        },
        {
          name: "NoBanner USA iOS",
          presets: "USA, Intertitial, Rewarded, iOS",
        },
        {
          name: "Benelux Vungle",
          presets: "Belgium, Netherlands, Luxembourg, Vungle",
        },
        {
          name: "Europe iOS",
          presets: "44 countries, iOS",
        },
        {
          name: "NoBanner USA Android",
          presets: "USA, Intertitial, Rewarded, Android",
        },
        {
          name: "NoBanner USA iOS",
          presets: "USA, Intertitial, Rewarded, iOS",
        },
        {
          name: "Benelux Vungle",
          presets: "Belgium, Netherlands, Luxembourg, Vungle",
        },
      ],
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

<style lang="scss">
.form-label {
  font-size: 18px;
  font-weight: 500;
}

.form-label {
  margin-top: 20px;
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

.card {
  padding: 40px 28px;
  max-height: 713px;
  overflow-y: scroll;
  overflow-x: hidden;
}

@media screen and (max-width: 768px) {
  .card {
    padding: 15px 15px;
  }

  .form-label {
    font-size: 14px;
    margin-top: 5px;
  }
  .chckbox label {
    color: black;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: normal;
    margin-right: 40px;
  }

  .disabled {
    margin: 5px 0;
    height: 30px;
    font-size: 14px;
  }
}
</style>

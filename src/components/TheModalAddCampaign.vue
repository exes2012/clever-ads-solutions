<template>
  <div>
    <v-dialog
      v-model="this.$store.state.campaigns.isModalAddCampaignOpen"
      transition="dialog-bottom-transition"
      max-width="774px"
      persistent
    >
      <v-card
        width="774"
        height="805"
        elevation="0"
        class="px-10 py-10 card d-flex flex-column"
      >
        <v-modal-button-close @click="closeModalAddCampaign" />
        <div class="stepper_label mt-0">Campaign Name</div>
        <v-row-container>
          <v-text-field
            v-model="campaignName"
            outlined
            label="Enter a custom name for campaign"
            class="text-field"
            reqired
          />
        </v-row-container>
        <v-row-container>
          <v-col-container>
            <v-checkbox
              v-model="isPremiumCampaign"
              value="Banner"
              class="stepper_checkbox mt-2"
              label="Premium campaign"
            />
          </v-col-container>
          <v-col-container>
            <v-form-select
              v-if="isPremiumCampaign"
              placeholder="Manager Name"
              class="pl-3"
            />
          </v-col-container>
        </v-row-container>
        <div class="stepper_label">Goal schedule</div>
        <v-row-container>
          <v-menu ref="menuStartDate" v-model="menuStartDate">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                class="text-field pr-3"
                label="Start date"
                append-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                v-model="startDate"
              />
            </template>
            <v-date-picker
              v-model="startDate"
              active-picker.sync="activePicker"
              @change="saveStartDate"
            ></v-date-picker>
          </v-menu>
          <v-menu ref="menuEndDate" v-model="menuEndDate">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                class="text-field pl-3"
                label="End date"
                append-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                v-model="endDate"
                hint="You can leave 'End date' blank"
                persistent-hint
              />
            </template>
            <v-date-picker
              v-model="endDate"
              active-picker.sync="activePicker"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-row-container>
        <div class="stepper_label">Forcing goals schedule</div>
        <v-row-container>
          <v-menu ref="menuForcingStartDate" v-model="menuForcingStartDate">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                class="text-field pr-3"
                label="Start date"
                append-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                v-model="forcingStartDate"
              />
            </template>
            <v-date-picker
              v-model="forcingStartDate"
              active-picker.sync="activePicker"
              @change="save"
            ></v-date-picker>
          </v-menu>
          <v-menu ref="menuForcingEndDate" v-model="menuForcingEndDate">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                class="text-field pl-3"
                label="Start date"
                append-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                v-model="forcingEndDate"
              />
            </template>
            <v-date-picker
              v-model="forcingEndDate"
              active-picker.sync="activePicker"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-row-container>
        <div class="stepper_label">Campaign status</div>
        <v-row-container>
          <v-radio-group
            class="stepper_radio-wrap"
            v-model="campaignStatus"
            row
          >
            <v-radio
              value="Active"
              class="stepper_radio"
              label="Active"
              color="success"
            />
            <v-radio
              value="Pause"
              class="stepper_radio"
              label="Pause"
              color="#BDBDBD"
            />
            <v-radio
              value="Delete"
              class="stepper_radio"
              label="Delete"
              color="red"
            />
          </v-radio-group>
        </v-row-container>
        <v-btn
          @click="additionalSettings = true"
          text
          color="primary"
          width="300"
          >Select languages & locations
        </v-btn>
        <v-row-container class="mt-auto">
          <v-btn
            large
            text
            color="red"
            height="53"
            class="mt-3"
            @click="closeModalAddCampaign"
          >
            Close
          </v-btn>
          <v-btn
            :disabled="campaignName === ''"
            class="ml-auto mt-3"
            large
            color="primary"
            depressed
            width="180"
            height="53"
            @click="e1 = 2"
          >
            Save
          </v-btn>
        </v-row-container>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="additionalSettings"
      max-width="774"
      transition="dialog-bottom-transition"
      persistent
    >
      <v-card
        width="774"
        height="805"
        elevation="0"
        class="px-10 py-10 card d-flex flex-column"
      >
        <v-modal-button-close @click="additionalSettings = false" />
        <v-form-label label="Select Languages" class="mb-2 mt-0" />
        <div class="stepper_label mb-0">
          Select the languages your customer speak
        </div>
        <v-radio-group class="stepper_radio-wrap" row v-model="languages">
          <v-radio
            class="stepper_radio"
            label="All available languages"
            value="All available languages"
          />
          <v-radio
            class="stepper_radio"
            label="Let me choose (select at least one)"
            value="Let me choose"
          />
        </v-radio-group>
        <base-multi-select
          class="mt-0"
          v-if="languages !== 'All available languages'"
          :options="this.$store.state.languages.languagesList"
          display-property="name"
          value-property="value"
          v-model="selectedLanguages"
          :placeholder="'Select language'"
        />
        <div v-else class="disabled">All languages</div>
        <v-form-label label="Select Location" class="mb-2 mt-4" />
        <div class="stepper_label mb-0">
          Select the locations that you want to target
        </div>
        <v-radio-group class="stepper_radio-wrap" row v-model="locations">
          <v-radio
            class="stepper_radio"
            label="All available location"
            value="All available location"
          />
          <v-radio
            class="stepper_radio"
            label="Let me choose (select at least one)"
            value="Let me choose"
          />
        </v-radio-group>
        <base-multi-select
          class="mt-0"
          v-if="locations === 'Let me choose'"
          :options="this.$store.state.languages.languagesList"
          display-property="name"
          value-property="value"
          v-model="selectedLocations"
          :placeholder="'Select location'"
        />
        <div v-else class="disabled">All Locations</div>
        <v-row-container class="mt-auto">
          <v-btn
            large
            text
            color="red"
            height="53"
            class="mt-3"
            @click="additionalSettings = false"
          >
            Close
          </v-btn>
          <v-btn
            class="ml-auto mt-3"
            large
            color="primary"
            depressed
            width="180"
            height="53"
          >
            Save
          </v-btn>
        </v-row-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VFormSelect from "@/components/VFormSelect.vue";
import VFormLabel from "@/components/VFormLabel.vue";
import BaseMultiSelect from "@/components/BaseMultiSelect.vue";
import VModalButtonClose from "@/components/VModalButtonClose.vue";
import { mapMutations } from "vuex";

export default {
  name: "TheModalAddCampaign",
  components: {
    VFormSelect,
    BaseMultiSelect,
    VModalButtonClose,
    VFormLabel,
  },
  data() {
    return {
      additionalSettings: false,
      campaignName: "",
      campaignStatus: "",
      isPremiumCampaign: false,
      menuStartDate: false,
      menuEndDate: false,
      menuForcingStartDate: false,
      menuForcingEndDate: false,
      startDate: null,
      endDate: null,
      forcingStartDate: null,
      forcingEndDate: null,
      activePicker: null,
      languages: "Let me choose",
      locations: "Let me choose",
      selectedLocations: [],
    };
  },
  methods: {
    ...mapMutations("campaigns", ["closeModalAddCampaign"]),
    saveStartDate(date) {
      this.$refs.menuStartDate.save.date;
    },
  },
  computed: {
    selectedLanguages: {
      get() {
        return this.$store.state.languages.selectedLanguages;
      },
      set(value) {
        this.$store.commit("languages/updateSelectedLanguages", value);
      },
    },
  },
};
</script>

<style></style>

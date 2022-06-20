<template>
  <div>
    <v-dialog
      v-model="this.$store.state.creatives.isModalAddCreativeOpen"
      transition="dialog-bottom-transition"
      max-width="774px"
      persistent
    >
      <v-stepper v-model="e1" class="stepper" height="805">
        <v-modal-button-close @click="closeModalAddCreative" />
        <v-stepper-header class="stepper_header">
          <v-stepper-step :complete="e1 > 1" step="1" class="stepper_step">
            Main settings
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">
            Media source
          </v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1" class="pt-2">
            <div class="stepper_label mt-0">Creative Name</div>
            <v-text-field
              v-model="creativeName"
              :rules="[rules.required]"
              outlined
              label="Enter a custom name for creative"
              class="text-field"
              reqired
            />
            <div class="stepper_label mt-0">Application for the creative</div>
            <v-form-select
              :options="this.$store.state.applications.appList"
              display-property="appName"
              @select="appSelect"
              :selected="selectedApp"
              placeholder="Select Application for the creative"
            />
            <div class="stepper_label mt-6">Placements</div>
            <v-row-container>
              <v-checkbox
                v-model="banner.isPresent"
                class="stepper_checkbox mt-0"
                label="Banner"
              />
              <v-checkbox
                v-model="intertitial.isPresent"
                class="stepper_checkbox ml-16 mt-0"
                label="Interstitial"
              />
              <v-checkbox
                v-model="rewarded.isPresent"
                value="Banner"
                class="stepper_checkbox ml-16 mt-0"
                label="Rewarded"
              />
            </v-row-container>
            <v-text-field
              :disabled="!banner.isPresent"
              v-model="banner.url"
              :rules="[rules.required]"
              outlined
              label="Enter Banner URL"
              class="text-field"
              reqired
            />
            <v-text-field
              :disabled="!intertitial.isPresent"
              v-model="intertitial.url"
              :rules="[rules.required]"
              outlined
              label="Enter Interstitial URL"
              class="text-field"
              reqired
            />
            <v-text-field
              :disabled="!rewarded.isPresent"
              v-model="rewarded.url"
              :rules="[rules.required]"
              outlined
              label="Enter Rewarded URL"
              class="text-field"
              reqired
            />
            <v-row-container class="justify-space-between">
              <v-btn
                large
                text
                color="primary"
                height="33"
                @click="additionalSettings = true"
              >
                Screen settings & languages
              </v-btn>
              <v-btn
                large
                text
                color="red"
                height="33"
                @click="closeModalAddCreative"
              >
                Move Creative to archive
              </v-btn>
            </v-row-container>
            <v-row-container>
              <v-btn
                large
                text
                color="red"
                height="53"
                class="mt-3"
                @click="closeModalAddCreative"
              >
                Close
              </v-btn>
              <v-btn
                :disabled="!stepOneIsValid"
                class="ml-auto mt-3"
                large
                color="primary"
                depressed
                width="180"
                height="53"
                @click="e1 = 2"
              >
                Next
              </v-btn>
            </v-row-container>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-form-label label="Image" />
            <v-drag-n-drop />
            <v-form-label label="Video" class="mt-8" />
            <v-drag-n-drop />
            <v-row-container>
              <v-btn
                large
                text
                color="primary"
                height="53"
                @click="e1 = 1"
                class="mt-5"
              >
                Back
              </v-btn>
              <v-btn
                :disabled="!stepOneIsValid"
                class="ml-auto mt-5"
                large
                color="primary"
                depressed
                width="180"
                height="53"
                @click="closeModalAddCreative"
              >
                Save
              </v-btn>
            </v-row-container>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
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
            label="Let me choose"
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
        <v-divider-horizontal class="mt-2" />
        <v-form-label label="Select screen options" class="mb-2 mt-4" />

        <div class="stepper_label mb-0">Orientation</div>
        <v-radio-group class="stepper_radio-wrap" row v-model="orientation">
          <v-radio
            class="stepper_radio"
            label="All orientation"
            value="All orientation"
          />
          <v-radio class="stepper_radio" label="Portrait" value="Portrait" />
          <v-radio class="stepper_radio" label="Landscape" value="Landscape" />
        </v-radio-group>
        <div class="stepper_label mb-0">Devices</div>
        <v-radio-group class="stepper_radio-wrap" v-model="devices" row>
          <v-radio
            class="stepper_radio"
            label="All devices"
            value="All devices"
          />
          <v-radio
            class="stepper_radio"
            label="Mobile only"
            value="Mobile only"
          />
          <v-radio
            class="stepper_radio"
            label="Tablet only"
            value="Tablet only"
          />
        </v-radio-group>
        <div class="stepper_label mb-0">Addition options</div>
        <v-checkbox
          v-if="orientation !== 'All orientation'"
          class="stepper_checkbox mt-0"
          label="Do not show if the device is in an unsupported orientation"
        />
        <v-checkbox
          class="stepper_checkbox mt-0"
          label="Do not show video background"
        />
        <v-checkbox
          class="stepper_checkbox mt-0"
          label="Do not show detailed information about the application"
        />
        <v-row-container class="mt-auto">
          <v-btn
            large
            text
            color="red"
            height="53"
            @click="additionalSettings = false"
          >
            Close
          </v-btn>
          <v-btn
            class="ml-auto"
            large
            color="primary"
            depressed
            width="180"
            height="53"
            @click="additionalSettings = false"
          >
            Save
          </v-btn>
        </v-row-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import VModalButtonClose from "@/components/VModalButtonClose.vue";
import VFormSelect from "@/components/VFormSelect.vue";
import VFormLabel from "@/components/VFormLabel.vue";
import BaseMultiSelect from "@/components/VMultiSelect.vue";
import VDividerHorizontal from "@/components/VDividerHorizontal.vue";
import VDragNDrop from "@/components/VDragNDrop.vue";

export default {
  name: "TheModalAddApplication",
  components: {
    VModalButtonClose,
    VFormSelect,
    VFormLabel,
    BaseMultiSelect,
    VDividerHorizontal,
    VDragNDrop,
  },

  data() {
    return {
      e1: 1,
      creativeName: "",
      selectedApp: "",
      languages: "All available languages",
      additionalSettings: false,
      orientation: "All orientation",
      devices: "All devices",
      banner: {
        isPresent: false,
        url: "",
      },
      intertitial: {
        isPresent: false,
        url: "",
      },
      rewarded: {
        isPresent: false,
        url: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    ...mapMutations("creatives", ["closeModalAddCreative"]),
    appSelect(option) {
      this.selectedApp = option;
    },
  },
  computed: {
    stepOneIsValid() {
      return (this.creativeName !== "") & (this.selectedApp !== "");
    },
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

<style lang="scss">
.modal {
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  inset: 0;
}

.app-create {
  display: flex;
  margin-left: 25px;
  font-size: 16px;
  color: #1f2024;

  &_parameter {
    font-weight: 500;
  }

  &_value {
    margin-left: 8px;
  }
}

.placements_text {
  margin-top: 9px;
  max-width: 220px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
}
</style>

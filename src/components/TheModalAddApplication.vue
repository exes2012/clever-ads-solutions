<template>
  <v-dialog
    v-model="this.$store.state.applications.isModalAddApplicationOpen"
    transition="dialog-bottom-transition"
    max-width="774px"
    persistent
  >
    <v-stepper v-model="e1" class="stepper">
      <v-modal-button-close @click="closeModalAddApplication" />
      <v-stepper-header class="stepper_header">
        <v-stepper-step :complete="e1 > 1" step="1" class="stepper_step">
          App settings
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">
          Ads settings
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <div class="stepper_label">Choose an app store</div>
          <v-radio-group class="stepper_radio-wrap" v-model="appStore" row>
            <v-radio
              class="stepper_radio"
              label="Apple App Store"
              value="Apple App Store"
            />
            <div class="divider_one"></div>
            <v-radio
              class="stepper_radio"
              label="Google Play Market"
              value="Google Play Market"
            />
          </v-radio-group>
          <div class="stepper_label">Custom app name</div>
          <v-text-field
            v-model="appName"
            :rules="[rules.required]"
            outlined
            label="Enter a custom name for application"
            class="text-field"
            reqired
          />
          <div class="stepper_label">Connect your live app</div>
          <v-text-field
            v-model="appId"
            color="#0074FF"
            outlined
            label="Search by App name / Store ID"
            class="text-field"
            prepend-inner-icon="mdi-magnify"
          />
          <div class="stepper_label">App publication</div>
          <v-radio-group class="wrap" v-model="appIsLive" row>
            <v-radio
              class="stepper_radio"
              label="App is live in the App store"
              value="AppIsLive"
            />
            <div class="divider_two"></div>
            <v-radio
              class="stepper_radio"
              label="App is not live yet"
              value="AppIsNotLive"
            />
          </v-radio-group>
          <v-checkbox
            v-model="policyChecked"
            class="stepper_checkbox"
            label="This app is directed to children under 13 as defined by the Children’s Online Privacy Protection Act"
          />
          <div class="stepper_policy">
            In accordance with the Children’s Online Privacy Protection Act we
            require all products that use PSV ads to identify whether or not
            they are directed at children under the age of 13 in the United
            States.
          </div>
          <v-row-container>
            <v-btn
              large
              text
              color="red"
              height="53"
              class="mt-3"
              @click="closeModalAddApplication"
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
          <v-row-container>
            <img
              src="../assets/images/Calculator.png"
              alt=""
              width="83"
              height="80"
            />
            <v-col-container>
              <div class="app-create">
                <div class="app-create_parameter">Custom App Name:</div>
                <div class="app-create_value">
                  {{ appName }}
                </div>
              </div>
              <div class="app-create">
                <div class="app-create_parameter">App ID:</div>
                <div class="app-create_value">
                  {{ appId }}
                </div>
              </div>
              <v-btn
                :disabled="appId === ''"
                text
                color="primary"
                width="110px"
                class="ml-6"
              >
                View in store
              </v-btn>
            </v-col-container>
          </v-row-container>
          <div class="stepper_label mt-7">App orientation</div>
          <v-radio-group
            class="stepper_radio-wrap"
            v-model="appOrientation"
            row
          >
            <v-radio class="stepper_radio" label="Portrait" value="Portrait" />
            <div class="divider_one"></div>
            <v-radio
              class="stepper_radio"
              label="Landscape"
              value="Landscape"
            />
          </v-radio-group>
          <div class="stepper_label">Cross Promo Ads</div>
          <v-checkbox
            v-model="useInCrossPromo"
            class="stepper_checkbox"
            label="Use this app in Cross Promo Campaigns"
          />
          <div class="stepper_label">Placements</div>
          <v-row-container>
            <v-col-container>
              <v-checkbox
                v-model="placements"
                value="Intertitial"
                class="stepper_checkbox"
                label="Intertitial"
              />
              <img
                src="../assets/images/intertitial.png"
                alt=""
                width="145"
                height="80"
              />
              <p class="placements_text">
                Full-page ad format that appears at natureal breaks and
                transitions, such as level completion.
              </p>
            </v-col-container>
            <v-col-container>
              <v-checkbox
                v-model="placements"
                value="Rewarded"
                class="stepper_checkbox"
                label="Rewarded"
              />
              <img
                src="../assets/images/rewarded.png"
                alt=""
                width="145"
                height="80"
              />
              <p class="placements_text">
                Ad format that rewards users for watching ads. Great for
                monetising free-to-play users.
              </p>
            </v-col-container>
            <v-col-container>
              <v-checkbox
                v-model="placements"
                value="Banner"
                class="stepper_checkbox"
                label="Banner"
              />
              <img
                src="../assets/images/banner.png"
                alt=""
                width="145"
                height="80"
              />
              <p class="placements_text">
                Rectangular ads that occupy a portion of an app’s layout; can be
                refreshed automatically after a period f time.
              </p>
            </v-col-container>
          </v-row-container>
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
              @click="closeModalAddApplication"
            >
              Save
            </v-btn>
          </v-row-container>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
import VModalButtonClose from "@/components/VModalButtonClose.vue";

export default {
  name: "TheModalAddApplication",
  components: {
    VModalButtonClose,
  },

  data() {
    return {
      e1: 1,
      appName: null,
      appId: "",
      policyChecked: false,
      appIsLive: "",
      appOrientation: "",
      useInCrossPromo: false,
      placements: [],
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    ...mapMutations("applications", ["closeModalAddApplication"]),
  },
  computed: {
    stepOneIsValid() {
      return this.rules.required && this.policyChecked;
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

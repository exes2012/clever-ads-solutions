<template>
  <v-dialog
    v-model="this.$store.state.userAccount.isPersonalDataOpen"
    max-width="774"
    persistent
    transition="dialog-bottom-transition"
  >
    <v-card width="774" elevation="0" class="card">
      <v-modal-button-close @click="closePersonalData" />
      <v-form-label label="Personal Data" class="mb-4 mt-0" />
      <v-row-container>
        <v-text-field
          v-model="appName"
          :rules="[rules.required]"
          outlined
          label="First Name"
          class="text-field pr-3"
          reqired
          counter="25"
        />
        <v-text-field
          v-model="appName"
          :rules="[rules.required]"
          outlined
          label="Last Name"
          class="text-field pl-3"
          reqired
          counter="25"
        />
      </v-row-container>
      <v-row-container>
        <v-text-field
          v-model="appName"
          :rules="[rules.phoneNumber]"
          outlined
          label="Phone"
          class="text-field pr-3"
          reqired
          counter="16"
          hint="Enter valid phone number"
        />
        <v-text-field
          v-model="appName"
          :rules="[rules.zipCode]"
          outlined
          label="ZIP code"
          class="text-field pl-3"
          reqired
        />
      </v-row-container>
      <v-divider-horizontal class="mt-3" />
      <v-form-label label="Company Data" class="mb-4 mt-4" />
      <v-text-field
        v-model="appName"
        :rules="[rules.required]"
        outlined
        label="Company Name"
        class="text-field"
        reqired
        counter="25"
      />
      <v-row-container>
        <v-col-container>
          <v-form-select
            :options="this.$store.state.countries.countriesList"
            @select="countrySelect"
            :selected="selectedCountry"
            placeholder="Bank Country"
            class="pr-3"
          />
        </v-col-container>
        <v-col-container>
          <v-text-field
            v-model="appName"
            :rules="[rules.required]"
            outlined
            label="City"
            class="text-field pl-3"
            reqired
            counter="25"
          />
        </v-col-container>
      </v-row-container>
      <v-text-field
        v-model="appName"
        :rules="[rules.required]"
        outlined
        label="Address"
        class="text-field"
        reqired
        counter="50"
      />
      <v-row-container class="justify-end">
        <v-btn
          text
          color="error"
          class=""
          width="100"
          height="53"
          @click="closePersonalData"
          >Cancel</v-btn
        >
        <v-btn
          depressed
          color="primary"
          class="ml-4"
          width="180"
          height="53"
          @click="closePersonalData"
          >Save changes</v-btn
        >
      </v-row-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
import VModalButtonClose from "@/components/VModalButtonClose.vue";
import VFormLabel from "@/components/VFormLabel.vue";
import VDividerHorizontal from "@/components/VDividerHorizontal.vue";
import VFormSelect from "@/components/VFormSelect.vue";

export default {
  name: "TheModalPersonalData",
  components: {
    VModalButtonClose,
    VFormLabel,
    VDividerHorizontal,
    VFormSelect,
  },
  data() {
    return {
      selectedCountry: "",
      rules: {
        required: (value) => !!value || "Required.",
        phoneNumber: (value) => {
          const pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
          return pattern.test(value) || "Invalid phone number";
        },
        zipCode: (value) => {
          const pattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
          return pattern.test(value) || "Invalid ZIP code";
        },
      },
    };
  },
  methods: {
    ...mapMutations("userAccount", ["closePersonalData"]),
    countrySelect(option) {
      this.selectedCountry = option;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 40px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .card {
    padding: 10px !important;
  }
}
</style>

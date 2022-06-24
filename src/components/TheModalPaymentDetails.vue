<template>
  <v-dialog
    v-model="this.$store.state.userAccount.isPaymentDetailsOpen"
    max-width="774"
    persistent
    transition="dialog-bottom-transition"
    class="dialog"
  >
    <form @submit.prevent="savePaymentDetails">
      <v-card width="774" elevation="0" class="card">
        <v-modal-button-close @click="closePaymentDetails" />
        <v-form-label label="Payment details" class="mb-4 mt-0" />
        <v-text-field
          v-model="paymentDetails.iban"
          :rules="[rules.iban]"
          outlined
          label="IBAN"
          class="text-field"
          reqired
          counter="50"
        />
        <v-row-container class="mobile-row">
          <v-text-field
            v-model="paymentDetails.holdersName"
            :rules="[rules.required]"
            outlined
            label="Holder's Name"
            class="text-field pr-3 mobile-row_field"
            reqired
            counter="16"
            hint="Enter valid phone number"
          />
          <v-text-field
            v-model="paymentDetails.swift"
            :rules="[rules.required]"
            outlined
            label="SWIFT"
            class="text-field pl-3 mobile-row_field"
            counter="25"
            reqired
          />
        </v-row-container>
        <v-row-container class="mobile-row">
          <v-col-container>
            <v-form-select
              :options="this.$store.state.countries.countriesList"
              @select="countrySelect"
              :selected="paymentDetails.selectedCountry"
              placeholder="Bank Country"
              class="pr-3 mobile-row_field"
            />
          </v-col-container>
          <v-col-container>
            <v-form-select
              :options="this.$store.state.currencies.currenciesList"
              @select="currencySelect"
              :selected="paymentDetails.selectedCurrency"
              placeholder="Currency"
              class="pl-3 mobile-row_field mt-s"
            />
          </v-col-container>
        </v-row-container>
        <v-row-container class="justify-end mt-8">
          <v-btn
            text
            color="error"
            class=""
            width="100"
            height="53"
            @click="closePaymentDetails"
            >Cancel</v-btn
          >
          <v-btn
            type="submit"
            depressed
            color="primary"
            class="ml-4"
            width="180"
            height="53"
            @submit="savePaymentDetails"
            >Save changes</v-btn
          >
        </v-row-container>
      </v-card>
    </form>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
import VModalButtonClose from "@/components/VModalButtonClose.vue";
import VFormLabel from "@/components/VFormLabel.vue";
import VDividerHorizontal from "@/components/VDividerHorizontal.vue";
import VFormSelect from "@/components/VFormSelect.vue";
import axios from "axios";

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
      paymentDetails: {
        iban: "",
        holdersName: "",
        swift: "",
        selectedCountry: null,
        selectedCurrency: null,
      },
      rules: {
        required: (value) => !!value || "Required.",
        iban: (value) => {
          const pattern =
            /^(?:(?:IT|SM)\d{2}[A-Z]\d{22}|CY\d{2}[A-Z]\d{23}|NL\d{2}[A-Z]{4}\d{10}|LV\d{2}[A-Z]{4}\d{13}|(?:BG|BH|GB|IE)\d{2}[A-Z]{4}\d{14}|GI\d{2}[A-Z]{4}\d{15}|RO\d{2}[A-Z]{4}\d{16}|KW\d{2}[A-Z]{4}\d{22}|MT\d{2}[A-Z]{4}\d{23}|NO\d{13}|(?:DK|FI|GL|FO)\d{16}|MK\d{17}|(?:AT|EE|KZ|LU|XK)\d{18}|(?:BA|HR|LI|CH|CR)\d{19}|(?:GE|DE|LT|ME|RS)\d{20}|IL\d{21}|(?:AD|CZ|ES|MD|SA)\d{22}|PT\d{23}|(?:BE|IS)\d{24}|(?:FR|MR|MC)\d{25}|(?:AL|DO|LB|PL)\d{26}|(?:AZ|HU)\d{27}|(?:GR|MU)\d{28})$/;
          return pattern.test(value) || "Invalid IBAN";
        },
        zipCode: (value) => {
          const pattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
          return pattern.test(value) || "Invalid ZIP code";
        },
      },
    };
  },
  methods: {
    ...mapMutations("userAccount", ["closePaymentDetails"]),
    countrySelect(option) {
      this.selectedCountry = option;
    },
    currencySelect(option) {
      this.selectedCurrency = option;
    },
    savePaymentDetails() {
      axios.post("http://", this.paymentDetails).then(function (response) {});
      this.closePaymentDetails();
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 40px !important;
  position: relative;
}

@media screen and (max-width: 768px) {
  .mobile-row {
    flex-direction: column;
    &_field {
      padding: 0 !important;
    }
  }

  .mt-s {
    margin-top: 30px !important;
  }

  .card {
    padding: 10px !important;
  }
}
</style>

<template>
  <div>
    <base-modal @on-close="closePaymentDetails">
      <form @submit.prevent="savePaymentDetails">
        <base-form-label label="Payment details" />
        <base-input
            text="IBAN"
            v-model="iban"
        />
        <row-container>
          <base-input text="Holder's Name" />
          <base-input text="SWIFT" />
        </row-container>
        <row-container>
          <base-form-select
              :options="this.$store.state.countries.countriesList"
              @select="countrySelect"
              :selected="selectedCountry"
              placeholder="Bank Country"
          />
          <base-form-select
              :options="this.$store.state.currencies.currenciesList"
              @select="currencySelect"
              :selected="selectedCurrency"
              placeholder="Currency"
          />
        </row-container>
        <row-container>
          <base-button class="ml-auto" button-class="btn-red" type="button" @click="closePaymentDetails">Cancel</base-button>
          <base-button button-class="btn-blue" type="submit">Save changes</base-button>
        </row-container>
      </form>
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import DividerHorizontal from "@/components/DividerHorizontal.vue";
import BaseFormSelect from "@/components/BaseFormSelect.vue";

import {mapMutations} from 'vuex'

import axios from 'axios'

export default {
  name: "UserAccountPersonalData",
  components: {
    BaseModal,
    DividerHorizontal,
    BaseFormSelect
  },
  data(){
    return{
      iban:"",
      selectedCountry: "",
      selectedCurrency: "",
    }
  },
  methods:{
    ...mapMutations('userAccount', ['closePaymentDetails']),
    countrySelect(option){
      this.selectedCountry=option
    },
    currencySelect(option){
      this.selectedCurrency=option
    },
    savePaymentDetails(){
      console.log(this.iban)
      console.log(this.selectedCountry.name)
      console.log(this.selectedCurrency.name)
    }
  }
};
</script>

<style scoped></style>

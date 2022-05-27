<template>
  <div>
    <base-modal @on-close="closeFilterModal" :form-width="'500px'">
      <form @submit.prevent="">
        <div class="form-label">Application</div>
        <base-multi-select
            :options="this.$store.state.countries.countriesList"
            display-property="name"
            value-property="value"
            v-model="selectedCountries"
        />
        <div class="form-label">Country</div>
        <base-multi-select/>
        <div class="form-label">Network</div>
        <base-multi-select/>
        <div class="form-label">Ad Type</div>
        <div class="d-flex">
          <v-checkbox
              label=Banner
              class="chckbox"
              color="#0074FF"
          ></v-checkbox>
          <v-checkbox
              label=Intertial
              class="chckbox"
              color="#0074FF"
          ></v-checkbox>
          <v-checkbox
              label=Rewarded
              class="chckbox"
              color="#0074FF"
          ></v-checkbox>
        </div>
        <div class="form-label">Platform</div>
        <div class="d-flex">
          <v-checkbox
              label=iOS
              class="chckbox"
              color="#0074FF"
          ></v-checkbox>
          <v-checkbox
              label=Android
              class="chckbox"
              color="#0074FF"
          ></v-checkbox>
        </div>
        <row-container>
          <base-button class="ml-auto" button-class="btn-red" type="button" @click="">Clear all</base-button>
          <base-button button-class="btn-filter-apply" type="submit" @click="closeFilterModal">Apply</base-button>
        </row-container>
      </form>
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import BaseMultiSelect from "@/components/BaseMultiSelect.vue";

import {mapMutations} from 'vuex'

import axios from 'axios'

export default {
  name: "UserAccountPersonalData",
  components: {
    BaseModal,
    BaseMultiSelect
  },
  data(){
    return{
      selectedCountries:[]
    }
  },
  methods:{
    ...mapMutations('filters',['closeFilterModal']),
  }
};
</script>

<style scoped>
.form-label{
  margin-top: 28px;
  font-size: 18px;
  font-weight: 500;
}

.chckbox /deep/ label{
  color: black;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: normal;
  margin-right: 41px;
}
</style>

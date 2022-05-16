<template>
  <div>
    <base-modal @on-close="closeWindow">
      <base-form-label label="Personal Data" />
      <row-container>
        <base-input text="Firstname" />
        <base-input text="Lastname" />
      </row-container>
      <row-container>
        <base-input text="Phone" />
        <base-input text="Zip code" />
      </row-container>
      <divider-horizontal class="mt-4" />
      <base-form-label label="Company Data" />
      <base-input text="Company Name" />
      <row-container>
        <base-input text="Firstname" />
        <base-input text="City" />
      </row-container>
      <base-input text="Address" />
      <row-container>
        <base-button class="ml-auto" button-class="btn-red">Cancel</base-button>
        <base-button button-class="btn-blue">Save changes</base-button>
      </row-container>
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import DividerHorizontal from "@/components/DividerHorizontal.vue";
import {mapMutations} from 'vuex'

export default {
  name: "UserAccountPersonalData",
  components: {
    BaseModal,
    DividerHorizontal,
  },
  methods:{
    ...mapMutations('userAccount', ['closeWindow'])
  }
};
</script>

<style scoped></style>

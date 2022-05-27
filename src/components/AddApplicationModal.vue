<template>
  <base-modal>
    <the-stepper/>
    <div class="form_label">Choose an app store</div>
    <v-radio-group class="wrap" v-model="appStore" row>
      <v-radio class="form_radio" label="Apple App Store" value="Apple App Store" />
      <div class="divider"></div>
      <v-radio class="form_radio" label="Google Play Market" value="Google Play Market" />
    </v-radio-group>
    <base-input label="Custom app name" text="Enter a custom name for application "/>
    <base-input label="Connect your Live App" text="Search by App name / Store ID"/>
    <div class="form_label">App publication</div>
    <v-radio-group class="wrap" v-model="appLive" row>
      <v-radio class="form_radio" label="App is live in the App store" value="1" />
      <div class="divider"></div>
      <v-radio class="form_radio" label="App is not live yet" value="2" />
    </v-radio-group>
    <v-checkbox label="This app is directed to children under 13 as defined by the Children’s Online Privacy Protection Act"/>
    <div>In accordance with the Children’s Online Privacy Protection Act we require all products that use PSV ads to identify whether or not they are directed at children under the age of 13 in the
      United States.</div>
  </base-modal>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import TheStepper from "@/components/TheStepper.vue";
export default {
  name: "AddApplicationAppsettingsModal",
  components:{
    BaseModal,
    TheStepper
  },
  data(){
    return{
      appStore:'',
      appLive:'',
      appStores:["Apple App Store","Google Play Market"]
    }
  }
}
</script>

<style scoped lang="scss">
  .form{
    &_label{
      font-weight: 700;
      font-size: 18px;
      line-height: 120%;
      margin-left: 12px;
    }
    &_radio{
      ::v-deep .v-label{
        font-weight: 500;
        font-size: 16px;
      }
    }
  }

  .divider{
    width: 180px;
  }

  ::v-deep .v-radio{
    margin-left: 12px;
    margin-bottom: 12px;
  }

</style>
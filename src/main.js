import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "@/store/store";
import "./scss/general.scss";
import "./scss/datepicker.scss";
import ThePageHeader from "@/components/ThePageHeader.vue";
import TheContainer from "@/components/TheContainer.vue";
import VRowContainer from "@/components/VRowContainer.vue";
import VColContainer from "@/components/VColContainer.vue";
import VFormLabel from "@/components/VFormLabel.vue";
import VModalButtonClose from "@/components/VModalButtonClose.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";

Vue.config.productionTip = false;
Vue.component("the-page-header", ThePageHeader);
Vue.component("the-container", TheContainer);
Vue.component("v-row-container", VRowContainer);
Vue.component("v-col-container", VColContainer);
Vue.component("v-form-label", VFormLabel);
Vue.component("v-modal-button-close", VModalButtonClose);
Vue.component("base-icon", BaseIcon);

Vue.use(vuetify, PrimeVue);

new Vue({
  router,
  vuetify,
  store: store,

  render: (h) => h(App),
}).$mount("#app");

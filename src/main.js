import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from "@/store/store";
import "./scss/general.scss"
import ThePageHeader from "@/components/ThePageHeader.vue";
import TheContainer from "@/components/TheContainer.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseFormLabel from "@/components/BaseFormLabel.vue";
import RowContainer from "@/components/RowContainer.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseIcon from "@/components/BaseIcon.vue";

Vue.config.productionTip = false
Vue.component('the-page-header',ThePageHeader)
Vue.component('the-container',TheContainer)
Vue.component('base-input',BaseInput)
Vue.component('base-form-label',BaseFormLabel)
Vue.component('row-container',RowContainer)
Vue.component('base-button',BaseButton)
Vue.component('base-icon',BaseIcon)

new Vue({
  router,
  vuetify,
  store:store,
  render: h => h(App)
}).$mount('#app')

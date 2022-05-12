import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import "./scss/general.scss"
import ThePageHeader from "@/components/ThePageHeader.vue";
import TheContainer from "@/components/TheContainer.vue";

Vue.config.productionTip = false
Vue.component('the-page-header',ThePageHeader)
Vue.component('the-container',TheContainer)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import userAccount from "@/store/modules/userAccount";
import currencies from "@/store/modules/currencies";
import countries from "@/store/modules/countries";
import filters from "@/store/modules/filters";
import applications from "@/store/modules/applications";
import tablesHeaders from "@/store/modules/tablesHeaders";
import payments from "@/store/modules/payments";
import creatives from "@/store/modules/creatives";
import campaigns from "@/store/modules/campaigns";
import chartdata from "@/store/modules/chartdata"

Vue.use(Vuex)

const store= new Vuex.Store({

    modules:{
        userAccount,
        currencies,
        countries,
        filters,
        applications,
        tablesHeaders,
        payments,
        creatives,
        campaigns,
        chartdata
    }
})

export default store
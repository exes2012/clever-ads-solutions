import Vue from 'vue'
import Vuex from 'vuex'
import userAccount from "@/store/modules/userAccount";

Vue.use(Vuex)

const store= new Vuex.Store({

    modules:{
        userAccount
    }
})

export default store
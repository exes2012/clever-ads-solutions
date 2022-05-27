export default {
    namespaced: true,
    state:{
        userAccountDropdownVisible:false,
        isPersonalDataOpen:false,
        isPaymentDetailsOpen:false,
    },
    mutations:{
        openPersonalData(state){
            state.isPersonalDataOpen=true
        },
        closePersonalData(state){
            state.isPersonalDataOpen=false
        },
        openPaymentDetails(state){
            state.isPaymentDetailsOpen=true
        },
        closePaymentDetails(state){
            state.isPaymentDetailsOpen=false
        },
        openUserAccountDropdown(state){
            state.userAccountDropdownVisible= !state.userAccountDropdownVisible
        },
        closeUserAccountDropdown(state){
            state.userAccountDropdownVisible=false
        },
    },

    getters: {

    },
    actions:{},
}
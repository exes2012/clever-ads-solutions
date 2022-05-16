export default {
    namespaced: true,
    actions:{},
    mutations:{
        closeWindow(state){
            state.isPersonalDataOpen=false
        }
    },
    state:{
        isPersonalDataOpen:true,
    },
    getters: {

    },
}
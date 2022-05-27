export default {
    namespaced: true,
    state:{
        isFilterModalOpen:false,

    },
    mutations:{
        openFilterModal(state){
            state.isFilterModalOpen=true
            console.log('filter')
        },
        closeFilterModal(state){
            state.isFilterModalOpen=false
        },
    },

    getters: {

    },
    actions:{},
}
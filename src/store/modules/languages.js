export default {
    namespaced: true,
    state:{
        selectedLanguages:[],
        languagesList: [
            {
                name: "Arabic",
                value: "ar",
            },
            {
                name: "Bengali",
                value: "bn",
            },
            {
                name: "Bulgarian",
                value: "bg",
            },
            {
                name: "Chinese(simplifized)",
                value: "zns",
            },
            {
                name: "Chinese(traditional)",
                value: "zn",
            },
            {
                name: "Croatian",
                value: "hr",
            },
            {
                name: "Czech",
                value: "cs",
            },
            {
                name: "Dania",
                value: "da",
            },
            {
                name: "Dutch",
                value: "nl",
            },
            {
                name: "English",
                value: "en",
            },
        ]
    },
    mutations:{
        updateSelectedLanguages(state, list){
            state.selectedLanguages = list
        },
    },

    getters: {
    },
    actions:{},
}
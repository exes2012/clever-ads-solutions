export default {
    namespaced: true,
    state:{
        appList: [
            {
                id:1,
                admobAppId:'ca-app-pub-1234567890-0987654321',
                appName: "App 1",
                dau: 455,
                arpu: 0.015,
                immersions: 1463,
                ecpm: 4.13,
                est: 7.13,
                platform: "android",
                orientation: "landscape",
                published: true,
                useBanner: false,
                useIntertitial: true,
                useRewarded: false,
                coppa: true,
                crossPromo: false,
            },
            {
                id:2,
                admobAppId:'pb-app-pub-1234567890-0987654321',
                appName: "App 2",
                dau: 455,
                arpu: 0.015,
                immersions: 1463,
                ecpm: 4.13,
                est: 7.13,
                platform: "android",
                orientation: "landscape",
                published: true,
                useBanner: false,
                useIntertitial: true,
                useRewarded: false,
                coppa: true,
                crossPromo: false,
            },
            {
                id:3,
                admobAppId:'cn-app-pub-1234567890-0987654321',
                appName: "App 3",
                dau: 455,
                arpu: 0.015,
                immersions: 1463,
                ecpm: 4.13,
                est: 7.13,
                platform: "android",
                orientation: "landscape",
                published: true,
                useBanner: false,
                useIntertitial: true,
                useRewarded: true,
                coppa: false,
                crossPromo: false,
            },
            {
                id:4,
                admobAppId:'as-app-pub-1234567890-0987654321',
                appName: "App 4",
                dau: 455,
                arpu: 0.015,
                immersions: 1463,
                ecpm: 4.13,
                est: 7.13,
                platform: "android",
                orientation: "landscape",
                published: false,
                useBanner: true,
                useIntertitial: true,
                useRewarded: true,
                coppa: true,
                crossPromo: true,
            },
        ],
        selectedId: null,
        isAdmobAppIdModalOpen: false,
        isModalAddApplicationOpen:false,
    },
    mutations:{
        changeSelectedId(state,id){
            state.selectedId=id
        },
        resetDropdown(state){
            state.selectedId=null
        },
        openAdmobAppIdModal(state){
            state.isAdmobAppIdModalOpen=true
            state.selectedId = null
        },
        closeAdmobAppIdModal(state){
            state.isAdmobAppIdModalOpen=false
        },
        openModalAddApplication(state){
            state.isModalAddApplicationOpen=true
        },
        closeModalAddApplication(state){
            state.isModalAddApplicationOpen=false
        },
    }
}
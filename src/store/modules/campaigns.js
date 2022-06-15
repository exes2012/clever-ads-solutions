export default {
  namespaced: true,
  state: {
    isModalAddCampaignOpen: false,
    campaignsList: [
      {
        id: 1,
        status: "On",
        campaignName: "Campaign 1",
        startDate: "12.03.2022",
        languages: "Ru, En, Fr",
        locations: "Europe",
        creativesCount: 4.13,
        premiumId: true,
        applications: "App1, App2, App3",
        creatives: "",
        frequency: "",
      },
      {
        id: 2,
        status: "Off",
        campaignName: "Campaign 2",
        startDate: "16.03.2022",
        languages: "Ru, En, Fr",
        locations: "Europe",
        creativesCount: 4.13,
        premiumId: true,
        applications: "App1, App2, App3",
        creatives: "",
        frequency: "",
      },
    ],
  },
  mutations: {
    openModalAddCampaign(state) {
      state.isModalAddCampaignOpen = true;
    },
    closeModalAddCampaign(state) {
      state.isModalAddCampaignOpen = false;
    },
  },
};

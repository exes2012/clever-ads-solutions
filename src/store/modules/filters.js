export default {
  namespaced: true,
  state: {
    //filter modals & buttons activity
    isFilterButtonActive: false,
    isFilterModalOpen: false,
    isLegendItemActive: true,
    isDatepickerModalOpen: false,
    isCompareDatepickerModalOpen: false,

    //filtered items from filter form
    selectedCountries: [],
    selectedColumns: [],
    selectedApps: [],
    selectedNetworks: [],
    selectedAdType: [],
    selectedPlatform: [],
    selectedDateRange: [],
  },
  mutations: {
    updateSelectedDateRange(state, range) {
      state.selectedDateRange = range;
    },
    //filter modal window mutations
    updateSelectedCountries(state, list) {
      state.selectedCountries = list;
    },
    updateSelectedColumns(state, list) {
      state.selectedColumns = list;
    },
    updateSelectedApps(state, list) {
      state.selectedApps = list;
    },
    updateSelectedNetworks(state, list) {
      state.selectedNetworks = list;
    },
    updateSelectedAdType(state, list) {
      state.selectedAdType = list;
    },
    updateSelectedPlatforms(state, list) {
      state.selectedPlatform = list;
    },
    resetFilterModalSelection(state) {
      state.selectedCountries = [];
      state.selectedApps = [];
      state.selectedNetworks = [];
      state.selectedAdType = [];
      state.selectedPlatform = [];
      state.isFilterButtonActive = false;
    },
    submitFilterModal(state) {
      if (
        state.selectedCountries.length ||
        state.selectedApps.length ||
        state.selectedNetworks.length ||
        state.selectedAdType.length ||
        state.selectedPlatform.length > 0
      ) {
        state.isFilterButtonActive = true;
      }
      state.isFilterModalOpen = false;
    },

    //Filter modal
    openFilterModal(state) {
      state.isFilterModalOpen = true;
    },
    closeFilterModal(state) {
      state.selectedCountries = [];
      state.selectedApps = [];
      state.selectedNetworks = [];
      state.selectedAdType = [];
      state.selectedPlatform = [];
      state.isFilterButtonActive = false;
      state.isFilterModalOpen = false;
    },

    //Datepicker
    openDatepickerModal(state) {
      state.isDatepickerModalOpen = true;
    },
    closeDatepickerModal(state) {
      state.isDatepickerModalOpen = false;
    },
    openCompareDatepickerModal(state) {
      state.isCompareDatepickerModalOpen = true;
    },
    closeCompareDatepickerModal(state) {
      state.isCompareDatepickerModalOpen = false;
    },

    //Legend
    toggleLegendItemActive(state) {
      state.isLegendItemActive = !state.isLegendItemActive;
    },
  },

  getters: {},
  actions: {},
};

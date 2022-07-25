import axios from "axios";

export default {
  namespaced: true,
  state: {
    indicator: null,
    revenue: null,
    ecpm: null,
    impressions: null,
  },

  getters: {},
  mutations: {
    SELECT_INDICATOR_TYPE(state, type) {
      state.indicator = type;
    },
  },
};

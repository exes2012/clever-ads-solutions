import axios from "axios";

export default {
  namespaced: true,
  state: {
    chartData: null,
    chartDates: [],
    indicator: "revenue",
  },

  getters: {},
  mutations: {
    SELECT_INDICATOR_TYPE(state, type) {
      state.indicator = type;
    },
    SET_CHART_DATA(state, data) {
      state.chartData = data;
    },
  },
  actions: {
    FETCH_CHART_DATA(context) {
      axios
        .get("http://localhost:3000/chartdata")
        .then((response) => {
          console.log(response.data);
          context.commit("SET_CHART_DATA", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

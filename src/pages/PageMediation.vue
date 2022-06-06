<template>
  <div class="content">
    <the-page-header
      pageTitle="Performance reporting"
      button-icon="mdi-tray-arrow-down"
      buttonTitle="Download report"
    />
    <the-indicators-bar />
    <the-mediation-chart />
    <base-table
      :headers="this.$store.state.tablesHeaders.mediationTableHeaders"
      :items="this.$store.state.applications.appList"
      :totals="true"
    >
    </base-table>
    <the-modal-chart-custom-date />
  </div>
</template>
<script>
import TheIndicatorsBar from "@/components/TheIndicatorsBar.vue";
import TheMediationChart from "@/components/TheMediationChart.vue";
import BaseTable from "@/components/BaseTable";
import TheModalChartCustomDate from "@/components/TheModalChartCustomDate.vue";
import { format, subDays } from "date-fns";

import axios from "@/api";
import { mapMutations } from "vuex";

export default {
  name: "PageMediation",
  components: {
    TheIndicatorsBar,
    TheMediationChart,
    TheModalChartCustomDate,
    BaseTable,
    // eslint-disable-next-line
  },
  data() {
    return {};
  },

  methods: {
    ...mapMutations("filters", [
      "closeDatepickerModal",
      "closeCompareDatepickerModal",
    ]),
  },
  // async created() {
  //   const response = await axios.get(`/api/mediation/adsources`);
  //   console.log(response);
  // },
};
</script>

<style scoped>
.content {
  width: 100%;
}

.calendar {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>

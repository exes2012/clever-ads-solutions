<template>
  <div class="content">
    <the-page-header
      pageTitle="Performance reporting"
      button-icon="mdi-tray-arrow-down"
      buttonTitle="Download report"
    />
    <the-indicators-bar />
    <the-mediation-chart />
    <prime-table
      :columns="this.$store.state.tableColumns.mediationTableColumns"
      :table-data="this.$store.state.applications.appList"
    />
    <the-modal-chart-custom-date />
    <the-modal-compare-custom-date />
  </div>
</template>
<script>
import TheIndicatorsBar from "@/components/TheIndicatorsBar.vue";
import TheMediationChart from "@/components/TheMediationChart.vue";
import BaseTable from "@/components/BaseTable";
import TheModalChartCustomDate from "@/components/TheModalChartCustomDate.vue";
import TheModalCompareCustomDate from "@/components/TheModalCompareCustomDate.vue";
import ScrollTable from "@/components/ScrollTable.vue";
import PrimeTable from "@/components/PrimeTable.vue";
import { format, subDays } from "date-fns";

import axios from "@/api";
import { mapMutations } from "vuex";

export default {
  name: "PageMediation",
  components: {
    TheIndicatorsBar,
    TheMediationChart,
    TheModalChartCustomDate,
    TheModalCompareCustomDate,
    BaseTable,
    ScrollTable,
    PrimeTable,
    // eslint-disable-next-line
  },
  data() {
    return {
      tableData: null,
    };
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
</style>

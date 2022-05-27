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
  </div>
</template>
<script>
import TheIndicatorsBar from "@/components/TheIndicatorsBar.vue";
import TheMediationChart from "@/components/TheMediationChart.vue";
import BaseTable from "@/components/BaseTable";
import axios from "@/api";

export default {
  name: "PageMediation",
  components: {
    TheIndicatorsBar,
    TheMediationChart,
    BaseTable,
  },
  data() {
    return {

    };
  },
  // async created() {
  //   const response = await axios.get(`/api/mediation/adsources`);
  //   console.log(response);
  // },
};
</script>

<style scoped>
.main-title {
  font-size: 40px;
  font-weight: bold;
}

.content {
  width: 100%;
}
</style>

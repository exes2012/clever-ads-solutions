<template>
  <div class="content">
    <the-page-header
      pageTitle="Performance reporting"
      button-icon="mdi-tray-arrow-down"
      buttonTitle="Download report"
    />
    <the-indicators-bar />
    <the-mediation-chart />
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-3 mt-10"
    >
      <template slot="body.append">
        <tr class="table-row">
          <td>Totals:</td>
          <td class="table-data">150</td>
          <td class="table-data">260</td>
          <td class="table-data">150</td>
          <td class="table-data">260</td>
          <td class="table-data">33%</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import TheIndicatorsBar from "@/components/TheIndicatorsBar.vue";
import TheMediationChart from "@/components/TheMediationChart.vue";
import axios from "@/api";

export default {
  name: "PageMediation",
  components: {
    TheIndicatorsBar,
    TheMediationChart,
  },
  data() {
    return {
      headers: [
        {
          text: "App",
          align: "start",
          value: "name",
        },
        { text: "DAU", value: "calories", align: "end" },
        { text: "ARPU", value: "fat", align: "end" },
        { text: "Immersions", value: "carbs", align: "end" },
        { text: "RCPM", value: "protein", align: "end" },
        { text: "Est. Earnings", value: "iron", align: "end" },
      ],
      desserts: [
        {
          name: "App name",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "App name",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "App name",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "App name",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "App name",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "App name",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "App name",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "App name",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "App name",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "App name",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
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

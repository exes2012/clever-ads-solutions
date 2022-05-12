<template>
  <div>
  <the-page-header
      pageTitle="Cross Promo Campaigns"
      button-icon="mdi-plus"
      buttonTitle="Add Campaign"
  />
    <div class="d-flex">
      <v-checkbox
          v-for="(checkbox,id) in checkboxes"
          :key="id"
          :label="checkbox"
          class="chckbox"
          color="#0074FF"
      ></v-checkbox>
    </div>
  <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-3 mt-8"
  >
  </v-data-table>
  </div>
</template>

<script>
import TheCurrencySelector from "@/components/TheCurrencySelector.vue";
export default {
  name: "PageCampaigns",
  components:{
    TheCurrencySelector
  },
  data(){
    return{
      checkboxes:['Active', 'Pause',
        'Delete'],
      headers: [
        {
          text: 'Status',
          align: 'start',
          value: 'name',
        },
        { text: 'Campaign Name', value: 'calories',align: 'start' },
        { text: 'Start date', value: 'fat',align: 'center' },
        { text: 'Languages', value: 'carbs',align: 'start' },
        { text: 'Locations', value: 'protein',align: 'start' },
        { text: 'Creatives count', value: 'iron',align: 'center' },
        { text: 'PremiumId', value: 'iron',align: 'center' },
        { text: 'Applications', value: 'iron',align: 'center' },
        { text: 'Creatives', value: 'iron',align: 'center' },
        { text: 'Frequency', value: 'iron',align: 'center' },
      ],
      desserts: [
        {
          name: 'App name',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'App name',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'App name',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'App name',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'App name',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'App name',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'App name',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'App name',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'App name',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'App name',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
    }
}
</script>

<style scoped>
.chckbox /deep/ label{
  color: black;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: normal;
  margin-right: 41px;
}
</style>
<template>
  <div>
    <the-page-header
        pageTitle="Applications"
        button-icon="mdi-plus"
        buttonTitle="Add Application"
    />
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
export default {
  name: "PageApplications",
  data(){
    return{
          headers: [
            {
              text: 'App',
              align: 'start',
              value: 'name',
            },
            { text: 'Platform', value: 'calories',align: 'center' },
            { text: 'Start date', value: 'fat',align: 'center' },
            { text: 'Orientation', value: 'carbs',align: 'start' },
            { text: 'Published', value: 'protein',align: 'center' },
            { text: 'Use Banner', value: 'iron',align: 'center' },
            { text: 'Use Intertitial', value: 'iron',align: 'center' },
            { text: 'Use Rewarded', value: 'iron',align: 'center' },
            { text: 'Coppa', value: 'iron',align: 'center' },
            { text: 'Cross promo', value: 'iron',align: 'center' },
            { text: '', value: 'iron',align: 'center' },
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

</style>
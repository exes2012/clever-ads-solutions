<template>
  <div class="content">
    <the-page-header
        pageTitle="Payments info"
    />
    <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-3 mt-10"
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "PageMyPayments",
  data(){
    return{
      headers: [
        {
          text: 'Year',
          align: 'start',
          value: 'name',
        },
        { text: 'Month', value: 'calories',align: 'start' },
        { text: 'Accural sum', value: 'fat',align: 'start' },
        { text: 'Payment date', value: 'carbs',align: 'start' },
        { text: 'Payment sum', value: 'protein',align: 'start' },
        { text: 'Current balance', value: 'iron',align: 'start' },
        { text: 'Comment', value: 'comment',align: 'start' },
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
  },
  methods:{
    test(){
      console.log(this)
    }
  }
}
</script>

<style scoped>

.test{
  position: relative;
  cursor: pointer;
  border-radius: 10px;
}

.super{
  position: absolute;
  border-radius: 10px;
}
</style>
<template>
  <div class="content">
    <the-page-header
        pageTitle="Payments info"
    />
    <base-table
        :headers="this.$store.state.tablesHeaders.paymentsTableHeaders"
        :items="this.$store.state.payments.paymentsList"
    ></base-table>
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";
export default {
  name: "PageMyPayments",
  components:{
    BaseTable,
  },
  data(){
    return {}
  },
  methods:{

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
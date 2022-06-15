<template>
  <div class="content">
    <the-page-header pageTitle="Payments info" :have-button="false" />
    <prime-table
      :columns="this.$store.state.tableColumns.paymentsTableColumns"
      :table-data="this.$store.state.payments.paymentsList"
    />
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";
import ScrollTable from "@/components/ScrollTable.vue";
import PrimeTable from "@/components/PrimeTable.vue";
export default {
  name: "PageMyPayments",
  components: {
    BaseTable,
    ScrollTable,
    PrimeTable,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.test {
  position: relative;
  cursor: pointer;
  border-radius: 10px;
}

.super {
  position: absolute;
  border-radius: 10px;
}
</style>

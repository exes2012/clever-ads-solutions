<template>
  <div class="content">
    <the-page-header
        pageTitle="Applications"
        button-icon="mdi-plus"
        buttonTitle="Add Application"
    />
    <base-table
        :headers="this.$store.state.tablesHeaders.applicationsTableHeaders"
        :items="this.$store.state.applications.appList"
    ></base-table>
    <add-application-modal v-if="1===2"/>
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";
import AddApplicationModal from "@/components/AddApplicationModal.vue";

export default {
  name: "PageApplications",
  components:{
    BaseTable,
    AddApplicationModal
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
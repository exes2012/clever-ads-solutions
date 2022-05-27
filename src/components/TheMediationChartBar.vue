<template>
 <div class="chart-bar">
  <v-btn text>Yesterday</v-btn>
  <v-btn text>7 days</v-btn>
  <v-btn text>30 days</v-btn>
  <v-btn text>Custom</v-btn>
   <div class="select-bar">
     <div class="select-bar_title">View by:</div>
     <base-selector
         :options="optionsViewBy"
         @select="viewBySelect"
         :selected="selectedViewBy"
         :options-width="'140px'"
     />
     <base-selector
         :options="optionsCompare"
         @select="compareSelect"
         :selected="selectedCompare"
         :options-width="'300px'"
     />
   </div>
   <the-mediation-chart-filter @click="openFilterModal"/>
   <the-mediation-chart-filter-modal v-if="this.$store.state.filters.isFilterModalOpen"/>
 </div>
</template>

<script>
import BaseSelector from "@/components/BaseSelector.vue";
import TheMediationChartFilter from "@/components/TheMediationChartFilter.vue";
import TheMediationChartFilterModal from "@/components/TheMediationChartFilterModal.vue";
import {mapMutations} from "vuex";

export default {
  name: "TheMediationChartBar",
  components: {
    BaseSelector,
    TheMediationChartFilter,
    TheMediationChartFilterModal
  },
  data() {
    return {
      selectedViewBy:
        {
        name: 'Default', value: '1'
        },
      optionsViewBy: [
        {
          name: 'Default', value: '1'
        },
        {
          name: 'Country', value: '2'
        },
        {
          name: 'Application', value: '3'
        },
        {
          name: 'Network', value: '4'
        },
        {
          name: 'Platform', value: '5'
        }
      ],
      selectedCompare:{
        name:'None', value:'1'
      },
      optionsCompare: [
        {
          name: 'None', value: '1'
        },
        {
          name: 'Last week to prior week', value: '2'
        },
        {
          name: 'Last weekend to prior weekend', value: '3'
        },
        {
          name: 'Custom date range', value: '4'
        },
      ]
    }
  },
  methods: {
    ...mapMutations('filters',['openFilterModal']),
    viewBySelect(option) {
      this.selectedViewBy = option
    },
    compareSelect(option) {
      this.selectedCompare = option
    },
  },
}
</script>

<style scoped lang="scss">
.chart-bar{
  display: flex;
  align-items: center;
  margin: 30px 40px;
}

.select-bar{
  display: flex;
  align-items: center;
  margin-left:auto;
  &_title{
    margin-right: 12px;
    font-weight: 500;
  }
}
</style>
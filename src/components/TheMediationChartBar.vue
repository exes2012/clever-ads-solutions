<template>
  <div class="chart-bar">
    <div class="chart-bar_buttons">
      <v-btn
        class="chart-bar_btn"
        text
        @click="getYesterday"
        :class="{ active: activeButtonId === 1 }"
        >Yesterday</v-btn
      >
      <v-btn
        class="chart-bar_btn"
        text
        @click="getSevenDays"
        :class="{ active: activeButtonId === 2 }"
        >7 days</v-btn
      >
      <v-btn
        class="chart-bar_btn"
        text
        @click="getThirtyDays"
        :class="{ active: activeButtonId === 3 }"
        >30 days</v-btn
      >
      <v-btn
        class="chart-bar_btn"
        text
        @click="getCustomDateRange"
        :class="{ active: activeButtonId === 4 }"
        >Custom</v-btn
      >
    </div>
    <div class="select-bar">
      <div class="select-bar_title">View by:</div>
      <base-selector
        :options="optionsViewBy"
        @select="viewBySelect"
        :selected="selectedViewBy"
        :options-width="'140px'"
      />
      <the-compare-selector
        :options="optionsCompare"
        @select="compareSelect"
        :selected="selectedCompare"
        :options-width="'300px'"
      />
      <the-mediation-chart-filter @click="openFilterModal" />
    </div>
    <the-mediation-chart-filter-modal
      v-if="this.$store.state.filters.isFilterModalOpen"
    />
  </div>
</template>

<script>
import BaseSelector from "@/components/BaseSelector.vue";
import TheMediationChartFilter from "@/components/TheMediationChartFilter.vue";
import TheMediationChartFilterModal from "@/components/TheModalMediationChartFilter.vue";
import TheCompareSelector from "@/components/TheCompareSelector.vue";
import { mapMutations } from "vuex";

export default {
  name: "TheMediationChartBar",
  components: {
    BaseSelector,
    TheMediationChartFilter,
    TheMediationChartFilterModal,
    TheCompareSelector,
  },
  data() {
    return {
      barState: null,
      selectedViewBy: {
        name: "Default",
        value: "1",
      },
      optionsViewBy: [
        {
          name: "Default",
          value: "1",
        },
        {
          name: "Country",
          value: "2",
        },
        {
          name: "Application",
          value: "3",
        },
        {
          name: "Network",
          value: "4",
        },
        {
          name: "Platform",
          value: "5",
        },
      ],
      selectedCompare: {
        name: "None",
        value: "1",
      },
      optionsCompare: [
        {
          name: "None",
          value: "1",
        },
        {
          name: "Last week to prior week",
          value: "2",
        },
        {
          name: "Last weekend to prior weekend",
          value: "3",
        },
        {
          name: "Custom date range",
          value: "4",
        },
      ],
      activeButtonId: 0,
    };
  },
  methods: {
    ...mapMutations("filters", ["openFilterModal", "openDatepickerModal"]),
    viewBySelect(option) {
      this.selectedViewBy = option;
    },
    compareSelect(option) {
      this.selectedCompare = option;
    },
    getYesterday() {
      this.activeButtonId = 1;
    },
    getSevenDays() {
      this.activeButtonId = 2;
    },
    getThirtyDays() {
      this.activeButtonId = 3;
    },
    getCustomDateRange() {
      this.activeButtonId = 4;
      this.openDatepickerModal();
    },
    updateBarState() {
      if (window.innerWidth >= 768) {
        this.barState = "normal";
      } else {
        this.barState = null;
      }
    },
  },
  mounted() {
    this.getSevenDays();
    this.updateBarState();
  },
  created() {
    window.addEventListener("resize", this.updateBarState);
  },
};
</script>

<style scoped lang="scss">
.chart-bar {
  display: flex;
  align-items: center;
  margin: 30px 40px;
}

.select-bar {
  display: flex;
  align-items: center;
  margin-left: auto;
  &_title {
    text-align: center;
    width: 70px;
    margin-right: 12px;
    margin-left: 10px;
    font-weight: 500;
  }
}

.active {
  background: #0074ff;
  color: white;
}

@media screen and (max-width: 1280px) {
  .chart-bar {
    width: 100%;
    -ms-overflow-style: none;
    align-items: start;
    margin: 0;
    padding: 10px 0;
    border-top: 2px solid #efefef;
    border-bottom: 2px solid #efefef;
    max-height: 97px;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    &_buttons {
      display: flex;
      padding: 0 10px;
      border-right: 2px solid #efefef;
    }
    &_btn {
      font-size: 14px !important;
      padding: 4px 10px !important;
      height: 33px !important;
    }
  }

  .select-bar {
  }
}
</style>

<template>
  <div class="mediation-chart">
    <TheMediationChartBar />
    <v-divider-horizontal class="pl-5 pr-5 hide" />
    <v-row-container>
      <v-btn
        text
        class="mediation-chart_toggle"
        :class="{ active: toggleLeftActive }"
        @click="toggleLeft"
      >
        <base-icon
          name="toggleActive"
          v-if="toggleLeftActive"
          class="mediation-chart_toggle_right"
        />
        <base-icon name="toggle" class="mediation-chart_toggle_left" v-else />
      </v-btn>
      <v-spacer />
      <v-btn
        text
        class="mediation-chart_toggle"
        :class="{ active: toggleRightActive }"
        @click="toggleRight"
      >
        <base-icon
          name="toggleActive"
          v-if="toggleRightActive"
          class="mediation-chart_toggle_left"
        />
        <base-icon name="toggle" v-else class="mediation-chart_toggle_right" />
      </v-btn>
    </v-row-container>
    <custom-chart :toggle-class="toggleClass" />
  </div>
</template>

<script>
import TheMediationChartBar from "@/components/TheMediationChartBar.vue";
import VDividerHorizontal from "@/components/VDividerHorizontal";
import CustomChart from "@/components/CustomChart.vue";

export default {
  name: "TheMediationChart",
  components: {
    TheMediationChartBar,
    VDividerHorizontal,
    CustomChart,
  },
  data() {
    return {
      toggleLeftActive: true,
      toggleRightActive: true,
      toggleClass: "",
      chartWidth: 375,
      chartHeight: 450,
    };
  },
  methods: {
    toggleLeft() {
      this.toggleLeftActive = !this.toggleLeftActive;
      if (!this.toggleLeftActive && this.toggleRightActive) {
        this.toggleClass = "toggleLeft";
      } else if (this.toggleLeftActive && this.toggleRightActive) {
        this.toggleClass = "untoggleLeft";
      } else if (!this.toggleLeftActive && !this.toggleRightActive) {
        this.toggleClass = "toggleAll";
      } else if (this.toggleLeftActive && !this.toggleRightActive) {
        this.toggleClass = "toggleRight";
      }
    },
    toggleRight() {
      this.toggleRightActive = !this.toggleRightActive;
      if (this.toggleLeftActive && !this.toggleRightActive) {
        this.toggleClass = "toggleRight";
      } else if (this.toggleLeftActive && this.toggleRightActive) {
        this.toggleClass = "untoggleRight";
      } else if (!this.toggleLeftActive && !this.toggleRightActive) {
        this.toggleClass = "toggleAll";
      } else if (!this.toggleLeftActive && this.toggleRightActive) {
        this.toggleClass = "toggleLeft";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.active {
  background: #0074ff;
  color: white;
}

.mediation-chart {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 632px;
  margin-top: 40px;
  border: 2px solid #efefef;
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  border-radius: 16px;
  &_toggle {
    width: 32px !important;
    height: 32px !important;
    min-width: 32px !important;
    margin: 16px 10px;
    &_left {
      -moz-transform: scale(-1, 1);
      -webkit-transform: scale(-1, 1);
      -o-transform: scale(-1, 1);
      -ms-transform: scale(-1, 1);
      transform: scale(-1, 1);
    }
    &_right {
    }
  }
}
@media screen and (max-width: 768px) {
  .mediation-chart {
    margin-top: 0;
    border: none;
    box-shadow: none;
    min-height: 300px;
  }

  .hide {
    display: none;
  }
}
</style>

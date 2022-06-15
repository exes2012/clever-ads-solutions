<template>
  <v-row-container class="indicator-card_overflow">
    <v-card
      width="214"
      height="90"
      outlined
      class="indicator-card"
      :class="{ 'selected-card': selectedId === id }"
      v-for="(indicator, id) in indicators"
      :key="id"
      @click.prevent="selectIndicator(indicator, id)"
    >
      <v-card-text class="indicator-card_text">
        <div class="indicator-card_title">
          {{ indicator.type }}
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-icon size="15.75" color="#BCBCBC" v-on="{ ...tooltip }"
                >mdi-information</v-icon
              >
            </template>
            <span>Hello World</span>
          </v-tooltip>
        </div>
        <div class="indicator-card_value" :style="indicator.color">
          {{ indicator.currency }}{{ indicator.value }}
        </div>
      </v-card-text>
    </v-card>
  </v-row-container>
</template>

<script>
export default {
  name: "TheIndicatorsBar",
  data() {
    return {
      selectedId: 0,
      indicators: [
        {
          type: "Est. Revenue",
          currency: "$",
          value: 157235.13,
          color: { color: "#0DC100" },
          info: "",
        },
        {
          type: "Impressions",
          value: 351342,
          color: { color: "#0074FF" },
          info: "",
        },
        {
          type: "eCPM",
          currency: "$",
          value: 0.13,
          color: { color: "#EC0000" },
          info: "",
        },
      ],
    };
  },
  methods: {
    selectIndicator(indicator, id) {
      this.selectedId = id;
      console.log(indicator.type);
    },
  },
};
</script>

<style lang="scss" scoped>
.indicator-card {
  margin-right: 16px;
  margin-left: 0;
  background: white !important;
  &_overflow {
    padding-bottom: 20px;
    overflow: auto;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &_text {
    padding: 12px !important;
  }
  &:hover {
    border: 2px solid #0074ff;
  }

  &_title {
    font-size: 16px;
    font-weight: 500;
    color: black;
  }

  &_value {
    font-weight: 500;
    font-size: 31px;
    line-height: 120%;
    margin-top: 9px;
  }
}
.selected-card {
  border: 2px solid #0074ff;
  background: white !important;
}

@media screen and (max-width: 768px) {
  .indicator-card {
    margin-left: 10px;
    margin-right: 0;
    min-width: 170px !important;
    &_value {
      font-size: 24px;
      line-height: 120%;
    }
  }
}
</style>

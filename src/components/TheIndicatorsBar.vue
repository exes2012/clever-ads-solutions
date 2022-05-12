<template>
  <v-row>
    <v-col class="d-flex">
      <v-card width="214" height="90" outlined class="indicator-card" v-for="(indicator,id) in indicators" :key="id">
        <v-card-text >
          <div class="indicator-card_title">
            {{ indicator.type }}
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
              <v-icon size="15.75" color="#BCBCBC" v-on="{ ...tooltip}">mdi-information</v-icon>
              </template>
              <span>Hello World</span>
            </v-tooltip>
          </div>
          <div class="indicator-card_value" :style="indicator.color">{{ indicator.currency }}{{ indicator.value }}</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheIndicatorsBar",
  data(){
    return{
      indicators:[
        {
          type:'Est. Revenue',
          currency:'$',
          value:157235.13,
          color:{color:'#0DC100'},
          info:'',
        },
        {
          type:'Impressions',
          value:351342,
          color: {color:'#0074FF'},
          info:'',
        },
        {
          type:'eCPM',
          currency:'$',
          value:0.13,
          color:{color:'#EC0000'},
          info:'',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.indicator-card {
  margin-right: 24px;
  &:hover {
    border: 2px solid #0074FF;
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
</style>
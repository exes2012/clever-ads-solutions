<template>
  <v-app class="application" id="App">
    <the-app-header/>
    <v-main>
      <the-container>
        <router-view/>
      </the-container>
    </v-main>
  </v-app>
</template>

<script>
import TheAppHeader from "@/components/TheAppHeader";

export default {
  name: 'App',
  components: {
    TheAppHeader
  },


  data(){
    return{
      items: ['$USD', 'EUR'],
    }
  },
  methods:{
    forcedOriginScale(containerId){
      let App=document.getElementById(containerId)
      App.style.zoom = 1/devicePixelRatio;
    }
  },
  mounted() {
    this.forcedOriginScale('App')
  }
};
</script>

<style  lang="scss">
.application{
  width: 100%;
}
</style>

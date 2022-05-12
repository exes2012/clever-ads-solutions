<template>
  <v-app>
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
};
</script>

<style  lang="scss">

</style>

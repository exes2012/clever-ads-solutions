<template>
  <v-app class="application" id="App">
    <the-app-header v-if="headerState === 'normal'" />
    <the-mobile-header v-if="headerState === 'mobile'" />
    <v-main>
      <the-container>
        <router-view />
      </the-container>
    </v-main>
  </v-app>
</template>

<script>
import TheAppHeader from "@/components/TheAppHeader";
import TheMobileHeader from "@/components/TheMobileHeader";

export default {
  name: "App",
  components: {
    TheAppHeader,
    TheMobileHeader,
  },

  data() {
    return {
      headerState: null,
    };
  },
  methods: {
    // forcedOriginScale(containerId) {
    //   let App = document.getElementById(containerId);
    //   App.style.zoom = 1 / devicePixelRatio;
    // },

    updateHeaderState() {
      if (window.innerWidth < 1280) {
        this.headerState = "mobile";
      }

      if (window.innerWidth >= 1280) {
        this.headerState = "normal";
      }
    },
  },
  mounted() {
    // this.forcedOriginScale("App");
    this.updateHeaderState();
  },
  created() {
    window.addEventListener("resize", this.updateHeaderState);
  },
};
</script>

<style lang="scss">
.application {
  width: 100%;
  overflow: hidden;
}
</style>

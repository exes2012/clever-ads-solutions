<template>
  <v-dialog
    v-model="$store.state.creatives.isModalVideoOpen"
    max-width="800"
    persistent
  >
    <div class="relative">
      <v-modal-button-close @click="closeModalVideo" class="close" />
    </div>
    <v-card max-width="800" max-height="450">
      <iframe
        class="video"
        width="800"
        height="450"
        :src="source"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TableModalContent",
  components: {},
  props: {
    source: {
      type: String,
      default: "img",
    },
    contentType: ["image", "video"],
  },
  methods: {
    ...mapMutations("creatives", ["closeModalVideo"]),
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}
.close {
  right: -60px;
}
.video {
  border: 0;
  border-radius: 26px;
}
</style>

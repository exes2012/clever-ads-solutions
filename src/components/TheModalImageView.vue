<template>
  <v-dialog
    v-model="$store.state.creatives.isModalImageOpen"
    max-width="800"
    max-height="450"
  >
    <div class="relative">
      <v-modal-button-close @click="closeModalImage" class="close" />
    </div>
    <v-img :src="source" alt="" max-width="800" max-height="450" class="img">
    </v-img>
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
    ...mapMutations("creatives", ["closeModalImage"]),
  },
};
</script>

<style scoped>
.close {
  z-index: 10000;
  right: -60px;
}

.img {
  border-radius: 26px;
}

.relative {
  position: relative;
}
</style>

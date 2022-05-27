<template>
  <base-modal windowType="content-window" @on-close="closeModalVideo">
    <iframe width="944" height="455" :src="source" title="YouTube video player" frameborder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </base-modal>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";
import {mapMutations} from "vuex";
export default {
  name: "TableModalContent",
  components:{
    BaseModal
  },
  props:{
    source:{
      type:String,
      default:"img"
    },
    contentType:['image', 'video']
  },
  methods:{
    ...mapMutations('creatives',['closeModalVideo'])
  }
}
</script>

<style scoped>

</style>
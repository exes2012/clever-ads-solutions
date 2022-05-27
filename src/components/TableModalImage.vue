<template>
  <base-modal windowType="content-window" @on-close="closeModalImage">
    <img
         :src="source" alt="">
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
    ...mapMutations('creatives',['closeModalImage'])
  }
}
</script>

<style scoped>

</style>
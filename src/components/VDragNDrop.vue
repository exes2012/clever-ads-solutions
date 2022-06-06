<template>
  <div>
    <div class="dropzone">
      <div class="dropzone_items">
        <v-icon size="90">mdi-cloud-upload</v-icon>
        <span>Drag your file here or click to select item</span>
      </div>
      <input
          type="file"
          id="dropzoneFile"
          class="dropzone_input"
          :accept="accept"
      >
    </div>
  </div>
</template>

<script>
import VFormLabel from "@/components/VFormLabel.vue";
export default {
  name: "VDragNDrop",
  components:{
    VFormLabel
  },
  data(){
    return{
      accept:{
        type:String,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.dropzone{
  display: flex;
  width: 100%;
  height: 250px;
  position: relative;
  border: 2px dashed #CDD9E8;
  border-radius: 24px;
  &_items{
    display: flex;
    flex-direction: column;
    margin:auto;
  }
  &_input{
    opacity: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>
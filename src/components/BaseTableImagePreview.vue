<template>
  <div class="image-preview_container" @click="$emit('click')">
    <img class="image-preview_img"
         :src="imageSRC" alt="img">
    <base-icon class="image-preview_icon" :name="iconName"/>
  </div>
</template>

<script>
export default {
  name: "BaseTableImagePreview",
  props:{
    imageSRC:{
      type:String,
    },
    iconName:{
      type:String
    }
  }

}
</script>

<style scoped lang="scss">
  .image-preview{
    &_container{
      display: flex;
      width: 90px;
      height: 50px;
      position: relative;
      margin: 16px auto 10px auto;
      cursor: pointer;
    }
    &_img{
      border-radius: 8px;
      margin: 0 auto;
    }
    &_icon{
      position: absolute;
      top:16px;
      right:35px;
    }
  }
</style>
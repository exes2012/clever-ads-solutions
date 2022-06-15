<template>
  <div class="image-preview_container" @click="$emit('click')">
    <v-img
      class="image-preview_img"
      :src="imageSRC"
      alt="img"
      max-width="90"
      max-height="50"
    >
      <base-icon class="image-preview_icon" :name="iconName" />
    </v-img>
  </div>
</template>

<script>
export default {
  name: "BaseTableImagePreview",
  props: {
    imageSRC: {
      type: String,
    },
    iconName: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.image-preview {
  &_container {
    display: flex;
    position: relative;
    margin: 16px auto 10px auto;
    cursor: pointer;
  }
  &_img {
    border-radius: 8px;
    margin: 0 auto;
  }
  &_icon {
    position: absolute;
    top: 35%;
    right: 38%;
  }
}
</style>

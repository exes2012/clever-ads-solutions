<template>
  <button @click="$emit('click')" class="button-close">
    <base-icon name="close" class="button-close_icon" />
  </button>
</template>

<script>
export default {
  name: "BaseModalButtonClose",
};
</script>

<style lang="scss">
.button-close {
  position: absolute;
  top: 15px;
  right: 15px;
}

@media screen and (max-width: 768px) {
  .button-close {
    &_icon svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>

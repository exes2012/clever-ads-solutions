<template>
  <div class="modal">
    <div class="modal_window">
      <base-modal-button-close class="modal_button-close"
       @click="$emit('on-close')"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import DividerHorizontal from "@/components/DividerHorizontal.vue";
import BaseModalButtonClose from "@/components/BaseModalButtonClose.vue";
export default {
  name: "BaseModal",
  components: {
    DividerHorizontal,
    BaseModalButtonClose
  },

};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  inset: 0;
  &_window {
    display: flex;
    flex-direction: column;
    background: white;
    width: 774px;
    border-radius: 26px;
    box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
    margin: 117px auto;
    padding:12px 28px;
    z-index: 12;
    position: relative;
    }
  &_button-close{
    position: absolute;
    top:17px;
    right: 18px;
  }
}
</style>

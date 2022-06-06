<template>
  <div class="modal">
    <div
      class="modal_window"
      :style="{ width: formWidth }"
      v-if="windowType === 'modal-window'"
    >
      <base-modal-button-close
        class="modal_button-close"
        @click="$emit('on-close')"
      />
      <slot></slot>
    </div>
    <div class="content_window" v-else-if="windowType === 'content-window'">
      <div class="content_content">
        <slot></slot>
      </div>
      <base-modal-button-close
        class="content_button-close"
        @click="$emit('on-close')"
      />
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from "@/components/ButtonModalClose.vue";
export default {
  name: "BaseModal",
  props: {
    windowType: {
      Type: String,
      validator(value) {
        return ["modal-window", "content-window"].includes(value);
      },
      default: "modal-window",
    },
    formWidth: {
      Type: String,
      default: "774px",
    },
    formHeight: {
      Type: String,
      default: "774px",
    },
  },
  components: {
    BaseModalButtonClose,
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
    border-radius: 26px;
    box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
    margin: 117px auto;
    padding: 12px 28px;
    z-index: 12;
    position: relative;
  }
  &_button-close {
    position: absolute;
    top: 17px;
    right: 18px;
  }
}

.content {
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  inset: 0;
  &_window {
    display: flex;
    width: 944px;
    height: 472px;
    margin: 214px auto;
    padding: 11px 72px;
    z-index: 12;
    position: relative;
  }
  &_button-close {
    position: absolute;
    top: 26px;
    right: 36px;
  }
  &_content {
    display: flex;
    margin: auto;
    max-width: 100%;
    height: 100%;
    border-radius: 26px;
    overflow: hidden;
    object-fit: fill;
  }
}
</style>

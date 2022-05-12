<template>
  <div class="select-box">
    <div class="options-container" v-if="selectActive">
      <div
        class="option"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </div>
    </div>
    <div class="selected" @click="selectActive = !selectActive">
      <div v-if="!selected">{{ selected }}</div>
      <div>{{ selected }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCurrencySelector",
  props: {
    selected: String,
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      selectActive: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.selectActive = false;
    },
    hideSelect() {
      this.selectActive = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style scoped>
.select-box {
  display: flex;
  flex-direction: column;
  width: 70px;
  position: relative;
}

.options-container {
  background: white;
  width: 90px;
  transition: all 0.5s;
  border-radius: 16px;
  overflow: hidden;
  /*border: 2px solid #EFEFEF;*/
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  order: 1;
  position: absolute;
  top: 30px;
  z-index: 10;
  padding: 16px 0;
}

.option {
  text-align: center;
  padding: 5px 10px;
  cursor: pointer;
  height: 30px;
  font-size: 14px;
}

.selected {
  cursor: pointer;
}

.option:hover {
  background: #f1f7ff;
}

.select-box .options-container + .selected::after {
  transform: rotateX(180deg);
  top: 7px;
}
.selected {
  display: flex;
  font-size: 16px;
  font-weight: 500;
  position: relative;
}
.selected::after {
  content: "";
  background: url("../assets/svg/chevron_down.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  height: 12px;
  width: 12px;
  right: 10px;
  top: 7px;
  transition: all 0.4s;
}
</style>

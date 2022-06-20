<template>
  <div class="select-box" :class="{ active: compareActive }">
    <div
      class="options-container"
      :style="{ width: optionsWidth }"
      v-if="selectActive && !compareActive"
    >
      <div
        class="option"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </div>
    </div>
    <div
      class="compare"
      v-if="compareActive"
      @click="openCompareDatepickerModal"
    >
      Compare
      <span class="compare_remove" @click="compareReset">&times;</span>
    </div>
    <div class="selected" @click="selectActive = !selectActive" v-else>
      None
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TheCurrencySelector",
  props: {
    optionsWidth: {
      type: String,
      default: "140px",
    },
    selected: Object,
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
      compareActive: false,
    };
  },
  methods: {
    ...mapMutations("filters", ["openCompareDatepickerModal"]),
    selectOption(option) {
      if (option.name === "None") {
        this.compareActive = false;
        this.$emit("select", option);
        this.selectActive = false;
      } else if (option.name === "Custom date range") {
        this.selectActive = false;
        this.compareActive = true;
        this.openCompareDatepickerModal();
      } else {
        this.$emit("select", option);
        this.selectActive = false;
        this.compareActive = true;
      }
    },
    compareReset() {
      this.$emit("select", this.options[0]);
      this.compareActive = false;
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

<style scoped lang="scss">
.select-box {
  display: flex;
  flex-direction: column;
  min-width: 140px;
  padding: 4px 35px 4px 16px;
  border: 2px solid #efefef;
  border-radius: 8px;
  margin-right: 12px;
  position: relative;
}

.options-container {
  background: white;
  transition: all 0.5s;
  border-radius: 16px;
  overflow: hidden;
  /*border: 2px solid #EFEFEF;*/
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  order: 1;
  position: absolute;
  top: 33px;
  right: -2px;
  z-index: 10;
  padding: 16px 0;
}

.option {
  display: flex;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #efefef;
}

.selected {
  cursor: pointer;
}

.option:hover {
  background: #f1f7ff;
}

.select-box .options-container + .selected::after {
  transform: rotateX(180deg);
  top: 3px;
}
.selected {
  display: flex;
  font-size: 14px;
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
  right: -23px;
  top: 7px;
  transition: all 0.4s;
}

.compare {
  color: white;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  &_remove {
    position: absolute;
    font-size: 24px;
    font-weight: 400;
    line-height: 100%;
    cursor: pointer;
    right: -25px;
    top: -1px;
    &:hover {
      color: red;
      font-weight: bold;
    }
  }
}

.active {
  border: 2px solid #0074ff;
  background: #0074ff;
}

@media screen and (max-width: 768px) {
  .select-box {
    position: unset;
  }

  .options-container {
    top: 280px;
  }
}
</style>

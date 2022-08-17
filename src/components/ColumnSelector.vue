<template>
  <div class="select-box">
    <div
      class="options-container"
      :style="{ width: optionsWidth }"
      v-show="selectActive"
    >
      <v-checkbox
        label="Application"
        v-model="isColumnApplicationSelected"
        hide-details
        class="option checkelement"
        @click="preventClose($event)"
      ></v-checkbox>
      <v-checkbox
        label="AdSource"
        v-model="isColumnAdSourceSelected"
        hide-details
        class="option checkelement"
        :disabled="isDAUARPUActive"
      ></v-checkbox>
      <v-checkbox
        label="Format"
        v-model="isColumnFormatSelected"
        hide-details
        class="option checkelement"
        :disabled="isDAUARPUActive"
      ></v-checkbox>
      <v-checkbox
        label="Platform"
        v-model="isColumnPlatformSelected"
        hide-details
        class="option checkelement"
      ></v-checkbox>
      <v-checkbox
        label="Country"
        v-model="isColumnCountrySelected"
        hide-details
        class="option checkelement"
      ></v-checkbox>
      <v-checkbox
        label="DAU"
        v-model="isColumnDAUSelected"
        hide-details
        class="option checkelement"
        :disabled="isFormatAdSourceActive"
      ></v-checkbox>
      <v-checkbox
        label="ARPU"
        v-model="isColumnARPUSelected"
        hide-details
        class="option checkelement"
        :disabled="isFormatAdSourceActive"
      ></v-checkbox>
    </div>
    <div class="selected" @click="selectActive = !selectActive">Columns</div>
  </div>
</template>

<script>
export default {
  name: "ColumnSelector",
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
      isColumnApplicationSelected: false,
      isColumnAdSourceSelected: false,
      isColumnFormatSelected: false,
      isColumnPlatformSelected: false,
      isColumnCountrySelected: false,
      isColumnDAUSelected: false,
      isColumnARPUSelected: false,
    };
  },
  methods: {
    hideSelect() {
      this.selectActive = false;
    },
    preventClose(e) {
      e.stopPropagation();
    },
  },
  computed: {
    isFormatAdSourceActive() {
      return (
        this.isColumnFormatSelected === true ||
        this.isColumnAdSourceSelected === true
      );
    },
    isDAUARPUActive() {
      return (
        this.isColumnDAUSelected === true || this.isColumnARPUSelected === true
      );
    },
  },
};
</script>

<style scoped>
.select-box {
  display: flex;
  flex-direction: column;
  min-width: 140px;
  position: relative;
  padding: 4px 35px 4px 16px;
  border: 2px solid #efefef;
  border-radius: 8px;
  margin-right: 12px;
  vertical-align: top;
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
  margin-top: 0 !important;
}

.selected {
  cursor: pointer;
}

.option:hover {
  background: #f1f7ff;
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

@media screen and (max-width: 768px) {
  .select-box {
    position: unset;
  }

  .options-container {
    top: 280px;
  }
}
</style>

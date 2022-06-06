<template>
  <div>
    <div class="datepicker">
      <div id="litepicker" class="lp" type="text" />
    </div>
    <v-row-container class="justify-end mt-5">
      <v-btn
        text
        color="error"
        class="form_btn mt-2"
        width="100"
        height="53"
        @click="clearSelection"
        >Clear all</v-btn
      >
      <v-btn
        :disabled="!rangeIsPicked"
        depressed
        color="primary"
        class="form_btn ml-3 mt-2"
        width="180"
        height="53"
        @click="getDateRange"
        >Apply</v-btn
      >
    </v-row-container>
  </div>
</template>

<script>
import Litepicker from "litepicker";
export default {
  name: "TheDatePicker",
  data() {
    return {
      datePicker: null,
      dateRange: [],
      startDate: null,
      endDate: null,
      rangeIsPicked: false,
    };
  },

  mounted() {
    const picker = new Litepicker({
      element: document.getElementById("litepicker"),
      inlineMode: true,
      singleMode: false,
      splitView: false,
      numberOfMonths: 2,
      numberOfColumns: 2,
      setup: (picker) => {
        picker.on("preselect", (date1, date2) => {
          this.rangeIsPicked = false;
          this.dateRange = [];
          this.rangeIsPicked = false;
          if (date1 && date2) {
            this.startDate = date1.format("YYYY-MM-DD");
            this.endDate = date2.format("YYYY-MM-DD");
            this.rangeIsPicked = true;
          }
        });
      },
    });

    this.datePicker = picker;
  },
  methods: {
    clearSelection() {
      this.datePicker.clearSelection();
      this.startDate = null;
      this.endDate = null;
      this.dateRange = [];
      this.rangeIsPicked = false;
    },
    getDateRange() {
      this.dateRange = [];
      this.dateRange.push(this.startDate);
      this.dateRange.push(this.endDate);
      this.startDate = null;
      this.endDate = null;
      this.rangeIsPicked = false;
      console.log(this.dateRange);
    },
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.datepicker {
  display: flex;
  margin: 0 auto;
}

.lp {
  margin: 0 auto;
}
</style>

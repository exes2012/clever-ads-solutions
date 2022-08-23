<template>
  <div>
    <div class="datepicker">
      <v-row-container class="mobile">
        <div id="litepickerOne" class="lp" type="text" />
        <div id="litepickerTwo" class="lp" type="text" />
      </v-row-container>
    </div>
    <v-row-container class="justify-end mobile_buttons">
      <v-btn
        text
        color="error"
        class="filter_btn mt-2"
        width="100"
        height="53"
        @click="clearSelection"
        >Clear all</v-btn
      >
      <v-btn
        :disabled="diffInDaysOne !== diffInDaysTwo"
        depressed
        color="primary"
        class="filter_btn ml-3 mt-2"
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
import { mapMutations } from "vuex";
export default {
  name: "TheDatePicker",
  data() {
    return {
      datePickerOne: null,
      datePickerTwo: null,
      dateRange: [],
      startDateOne: null,
      endDateOne: null,
      startDateTwo: null,
      endDateTwo: null,
      diffInDaysOne: 0,
      diffInDaysTwo: 99,
    };
  },

  mounted() {
    const oneDay = 1000 * 60 * 60 * 24;

    const pickerOne = new Litepicker({
      element: document.getElementById("litepickerOne"),
      inlineMode: true,
      singleMode: false,
      splitView: false,
      numberOfMonths: 1,
      numberOfColumns: 1,
      setup: (picker) => {
        picker.on("preselect", (date1, date2) => {
          this.dateRangeOne = [];
          if (date1 && date2) {
            this.startDateOne = date1.format("YYYY-MM-DD");
            this.endDateOne = date2.format("YYYY-MM-DD");
            const diffInTime = date2.getTime() - date1.getTime();
            this.diffInDaysOne = Math.round(diffInTime / oneDay);
          }
        });
      },
    });

    const pickerTwo = new Litepicker({
      element: document.getElementById("litepickerTwo"),
      inlineMode: true,
      singleMode: false,
      splitView: false,
      numberOfMonths: 1,
      numberOfColumns: 1,
      setup: (picker) => {
        picker.on("preselect", (date1, date2) => {
          this.dateRangeTwo = [];
          if (date1 && date2) {
            this.startDateTwo = date1.format("YYYY-MM-DD");
            this.endDateTwo = date2.format("YYYY-MM-DD");
            const diffInTime = date2.getTime() - date1.getTime();
            this.diffInDaysTwo = Math.round(diffInTime / oneDay);
          }
        });
      },
    });

    this.datePickerOne = pickerOne;
    this.datePickerTwo = pickerTwo;
  },
  computed: {},
  created() {},
  methods: {
    ...mapMutations("filters", [
      "closeCompareDatepickerModal",
      "updateSelectedCompareRange",
    ]),
    clearSelection() {
      this.datePickerOne.clearSelection();
      this.datePickerTwo.clearSelection();
      this.startDateOne = null;
      this.endDateOne = null;
      this.dateRangeOne = [];
      this.startDateTwo = null;
      this.endDateTwo = null;
      this.dateRangeTwo = [];
    },
    getDateRange() {
      this.dateRange = [];
      this.dateRange.push(this.startDateOne);
      this.dateRange.push(this.endDateOne);
      this.startDateOne = null;
      this.endDateOne = null;
      this.dateRange.push(this.startDateTwo);
      this.dateRange.push(this.endDateTwo);
      this.startDateTwo = null;
      this.endDateTwo = null;
      this.updateSelectedCompareRange(this.dateRange);
      this.closeCompareDatepickerModal();
    },
  },
};
</script>

<style scoped lang="scss">
.mobile {
  &_buttons {
    margin-top: 20px;
  }
}

.datepicker {
  display: flex;
  margin: 0 auto;
}

::v-deep .litepicker .container__months .month-item {
}

::v-deep .litepicker .container__months {
  width: 100%;
}

.lp {
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .mobile {
    &_buttons {
      margin-top: 10px;
    }
    flex-direction: column;
  }

  ::v-deep .litepicker .container__months .month-item-header {
    padding: 0 5px !important;
  }

  ::v-deep .litepicker .container__main {
    margin-top: 10px;
  }
}
</style>

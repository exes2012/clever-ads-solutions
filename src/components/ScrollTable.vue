<template>
  <div class="scrolltable">
    <div class="scrolltable_table">
<!--      <div class="scrolltable_header">-->
<!--        <div-->
<!--          class="scrolltable_header-item"-->
<!--          v-for="header in headers"-->
<!--          :key="header"-->
<!--          :style="{ minWidth: header.width + 'px' }"-->
<!--        >-->
<!--          {{ header.text }}-->
<!--        </div>-->
      </div>
      <v-data-table
        id="virtual-scroll-table"
        v-scroll:#virtual-scroll-table="onScroll"
        disable-pagination
        hide-default-footer
        calculate-widths
        :headers="headers"
        :items="itemsLimited"
        :items-per-page="5"
        class="data-table"
        mobile-breakpoint="100"
      >
        <template v-if="start > 0" v-slot:body.prepend>
          <tr>
            <td
              :colspan="headers.length"
              :style="'padding-top:' + startHeight + 'px'"
            ></td>
          </tr>
        </template>
        <template v-if="start + perPage < this.items.length" v-slot:body.append>
          <tr>
            <td
              :colspan="headers.length"
              :style="'padding-top:' + endHeight + 'px'"
            ></td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import TableModalImage from "@/components/TheModalImageView.vue";
import BaseTableDropdown from "@/components/TableDropdown.vue";
import BaseTableImagePreview from "@/components/TableImagePreview.vue";
import BaseTableModalAdmobId from "@/components/TheModalAdmobAppID.vue";
import TableModalVideo from "@/components/TheModalVideo.vue";
import { mapMutations } from "vuex";

export default {
  name: "AppTable",
  components: {
    BaseTableDropdown,
    BaseTableImagePreview,
    BaseTableModalAdmobId,
    TableModalImage,
    TableModalVideo,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    totals: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      downloadButtonVisible: false,
      admobAppId: null,
      appName: null,
      selectedId: null,
      source: null,
      contentType: null,
      start: 0,
      timeout: null,
      rowHeight: 24,
      perPage: 5,
    };
  },
  methods: {
    onScroll(e) {
      // debounce if scrolling fast
      this.timeout && clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        const { scrollTop } = e.target;
        const rows = Math.ceil(scrollTop / this.rowHeight);

        this.start =
          rows + this.perPage > this.items.length
            ? this.items.length - this.perPage
            : rows;

        this.$nextTick(() => {
          e.target.scrollTop = scrollTop;
        });
      }, 20);
    },
  },
  computed: {
    itemsLimited() {
      return this.items.slice(this.start, this.perPage + this.start);
    },
    startHeight() {
      return this.start * this.rowHeight - 32;
    },
    endHeight() {
      return this.rowHeight * (this.items.length - this.start);
    },
  },
  ...mapMutations("creatives", ["openModalContent"]),
  selectActiveId(selectedId) {
    this.selectedId = selectedId;
  },
};
</script>

<style lang="scss" scoped>
.scrolltable {
  &_header {
    display: flex;
    background: white;
    height: 54px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 8px 0;
  }
  &_header-item {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: #1f2024;
    padding: 0 20px;
    &:not(:last-child) {
      border-right: 1px solid #dedede;
    }
  }
  &_header-item:nth-child(1) {
    display: block;
    position: absolute !important;
    position: -webkit-sticky !important;
    left: 0;
    z-index: 9998;
    max-width: 385px;
  }
  &_table {
    overflow-y: hidden;
  }
  margin-top: 10px;
  filter: drop-shadow(4px 4px 20px rgba(0, 8, 81, 0.1));
  color: #1f2024 !important;
  &_img {
    border-radius: 8px;
    margin: 14px 0 10px 0;
  }
  ::v-deep .v-data-table-header {
    tr {
      th {
        position: relative;
        color: #1f2024 !important;
        text-align: left !important;
        height: 54px;
        .v-icon {
          opacity: 1;
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
        }
        &:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          border-right: 1px solid #dedede;
          width: 100%;
          height: 40px;
        }
      }
    }
  }
  ::v-deep tbody {
    tr {
      td {
        border-radius: unset !important;
        border: 0 !important;
        height: 40px !important;
      }
    }
  }
}

::v-deep .v-data-footer {
  font-size: 16px;
  font-weight: 500 !important;
}

::v-deep
  .v-data-footer__select
  .v-select__selections
  .v-select__selection--comma {
  font-size: 16px;
}

::v-deep .v-btn:not(.v-btn--round).v-size--default {
  min-width: 24px;
  height: 24px;
  padding: 0;
  &:hover {
    background: #deecff;
  }
}

.table-button-container {
  width: 40px;
  height: 30px;
  position: relative;
}

.table {
  &_slot {
    position: relative;
  }
}
.v-data-table {
}

.v-data-table__wrapper,
table,
tbody {
  //overflow-y: hidden;
  position: static !important;
}

@media screen and (max-width: 1200px) {
  ::v-deep .v-data-table > .v-data-footer {
    display: flex;
    right: 0;
    background: white;
    .v-data-footer__select {
      margin-left: 5px;
      font-size: 14px;
      .v-input {
        margin-left: 5px;
        .v-select__slot {
          .v-select__selection--comma {
            font-size: 14px !important;
          }
        }
      }
    }

    //Table pagination footer, if needed

    //.v-data-footer__pagination {
    //  margin-left: 5px;
    //  margin-right: 5px;
    //  font-size: 14px;
    //}
    //.v-data-footer__icons-before button {
    //  width: 24px;
    //  height: 24px;
    //}
    //.v-data-footer__icons-after button {
    //  width: 24px;
    //  height: 24px;
    //}
  }
  ::v-deep table > tbody > tr > td:nth-child(1),
  ::v-deep table > thead > tr > th:nth-child(1) {
    position: sticky !important;
    position: -webkit-sticky !important;
    left: 0;
    z-index: 9998;
    background: white;
  }
}

#virtual-scroll-table {
  max-height: 200px;
  overflow: auto;
}

.box {
  display: flex;
  height: 54px;
  background: red;
}
</style>

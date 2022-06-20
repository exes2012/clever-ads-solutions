<template>
  <div>
    <v-row-container>
      <v-row-container v-if="isCheckboxesEnabled">
        <v-checkbox
          v-for="(checkbox, id) in checkboxes"
          :key="id"
          :label="checkbox.name"
          class="chckbox"
          :color="checkbox.color"
        ></v-checkbox>
      </v-row-container>
      <v-row-container :style="{ width: searchWidth }" class="ml-auto">
        <v-text-field
          v-if="isSearchEnabled"
          :label="searchLabel"
          prepend-inner-icon="mdi-magnify"
          class="search-field"
          v-model="filters.value"
        />
      </v-row-container>
    </v-row-container>
    <DataTable
      :value="tableData"
      :rowHover="true"
      scrollable
      :scrollHeight="tableScrollSize"
      selectionMode="single"
      dataKey="id"
      @row-select="onRowSelect"
      :selection.sync="selectedItem"
      :filters.sync="filters"
      :globalFilterFields="['appName']"
    >
      <template #loading> Loading data. Please wait. </template>
      <Column
        v-for="column in columns"
        :field="column.field"
        :header="column.header"
        :footer="column.footer"
        :sortable="column.sortable"
        :frozen="column.frozen"
        :headerStyle="column.style"
        :bodyStyle="column.style"
        :footer-style="column.style"
      >
        <template #body="slotProps">
          <div v-if="column.field === 'appName'" class="table_start">
            <div class="table_company-name">
              {{
                slotProps.data.companyName
                  ? slotProps.data.companyName
                  : slotProps.data.id
              }}
            </div>
            <div class="table_company-appname">
              {{ slotProps.data.appName }}
            </div>
          </div>
          <div v-else-if="column.field === 'year'">
            <div>{{ slotProps.data.year }}</div>
          </div>
          <div
            v-else-if="
              column.field === 'useBanner' ||
              column.field === 'coppa' ||
              column.field === 'useRewarded' ||
              column.field === 'useIntertitial' ||
              column.field === 'published' ||
              column.field === 'crossPromo' ||
              column.field === 'premiumId'
            "
            class="table_center"
          >
            <base-icon
              name="tableCheck"
              v-if="slotProps.data[column.field] === true"
            ></base-icon>
          </div>
          <div
            v-else-if="
              column.field === 'platform' ||
              column.field === 'orientation' ||
              column.field === 'creativeName' ||
              column.field === 'bundleCode' ||
              column.field === 'languages' ||
              column.field === 'types' ||
              column.field === 'campaignName' ||
              column.field === 'status' ||
              column.field === 'locations' ||
              column.field === 'accuralSum' ||
              column.field === 'paymentDate' ||
              column.field === 'paymentSum' ||
              column.field === 'currentBalance' ||
              column.field === 'period'
            "
            class="table_start"
          >
            {{ slotProps.data[column.field] }}
          </div>
          <div v-else-if="column.field === 'imagePreview'" class="table_center">
            <table-image-preview
              icon-name="doubleAngleArrow"
              :imageSRC="slotProps.data.imageSRC"
              @click="openModalImage(slotProps.data.imageSRC)"
            />
          </div>
          <div v-else-if="column.field === 'videoPreview'" class="table_center">
            <table-image-preview
              icon-name="doubleAngleArrow"
              :imageSRC="slotProps.data.imageSRC"
              @click="openModalVideo(slotProps.data.videoSRC)"
            />
          </div>
          <div v-else-if="column.field === 'appTableActions'">
            <div class="table_slot">
              <v-btn
                @click.stop="
                  openTableAppsDropdown(
                    slotProps.data.id,
                    slotProps.data.appName,
                    slotProps.data.admobAppId
                  )
                "
                text
                width="40"
                height="30"
                class="table_button"
              >
                <base-icon name="threeDots" />
              </v-btn>
              <table-dropdown
                v-if="
                  slotProps.data.id === $store.state.applications.selectedId
                "
              />
            </div>
          </div>
          <div v-else-if="column.field" class="table_end">
            <div>{{ slotProps.data[column.field] }}</div>
          </div>
        </template>
      </Column>
    </DataTable>
    <the-modal-admob-app-i-d
      :admob-app-id="admobAppId"
      :app-name="appName"
      v-if="$store.state.applications.isAdmobAppIdModalOpen"
    />
    <the-modal-video :source="source" />
    <the-modal-image-view :source="source" />
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import TableDropdown from "@/components/TableDropdown.vue";
import TheModalAdmobAppID from "@/components/TheModalAdmobAppID.vue";
import TableImagePreview from "@/components/TableImagePreview.vue";
import TheModalVideo from "@/components/TheModalVideo.vue";
import TheModalImageView from "@/components/TheModalImageView.vue";

export default {
  name: "PrimeTable",
  components: {
    DataTable,
    Column,
    ColumnGroup,
    Row,
    TableDropdown,
    TheModalAdmobAppID,
    TableImagePreview,
    TheModalVideo,
    TheModalImageView,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    isSearchEnabled: {
      type: Boolean,
      default: false,
    },
    searchWidth: {
      type: String,
      default: "300px",
    },
    searchLabel: {
      type: String,
      default: "search",
    },
    isCheckboxesEnabled: {
      type: Boolean,
      default: false,
    },
    checkboxes: [],
  },
  data() {
    return {
      selectedItem: null,
      admobAppId: null,
      appName: null,
      filters: {},
      source: null,
      tableScrollSize: null,
    };
  },
  methods: {
    onRowSelect() {
      console.log(this.selectedItem);
    },
    openTableAppsDropdown(id, appName, admobAppId) {
      this.$store.state.applications.selectedId = id;
      this.appName = appName;
      this.admobAppId = admobAppId;
    },
    openModalImage(source) {
      this.source = source;
      this.$store.commit("creatives/openModalImage");
    },
    openModalVideo(source) {
      this.source = source;
      this.$store.commit("creatives/openModalVideo");
    },
    updateTableScrollSize() {
      if (window.innerWidth < 1280) {
        this.tableScrollSize = "500px";
      }

      if (window.innerWidth >= 1280) {
        this.tableScrollSize = "600px";
      }
    },
  },
  mounted() {
    // this.forcedOriginScale("App");
    this.updateTableScrollSize();
  },
  created() {
    window.addEventListener("resize", this.updateTableScrollSize);
  },
};
</script>

<style scoped lang="scss">
::v-deep .p-datatable-wrapper {
  margin: 15px 0;
  background: white;
  border-radius: 16px;
  filter: drop-shadow(4px 4px 20px rgba(0, 8, 81, 0.1));
  .p-datatable-thead {
    background: white;
    height: 54px;
    tr {
      padding: 8px 0;
      font-weight: 400;
      font-size: 16px;
      height: 100%;
      color: #1f2024;
      border-bottom: 1px solid #dedede;
      th {
        flex: none;
        background: white;
        &:not(:last-child) {
          border-right: 1px solid #dedede;
        }
        .p-column-header-content {
          width: 100%;
          padding: 0 21px 0 16px;
          &:first-of-type {
            text-align: start;
          }
          .p-column-title {
            display: block;
            text-align: center;
          }
          .p-sortable-column-icon {
            margin-left: auto;
            width: 18px;
          }
        }
      }
    }
  }
  .p-datatable-tbody {
    tr.p-selectable-row {
      &:nth-child(odd) {
        background: #f1f1f1;
      }
      &:nth-child(even) {
        background: white;
      }
      &:hover {
        background: #ddecff;
      }
    }
    tr {
      height: 54px;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      td {
        padding: 0 16px;
        flex: none;
      }
    }
  }
}

::v-deep .p-highlight {
  background: #ddecff !important;
}

::v-deep .p-datatable-tfoot {
  display: flex;
  background: white;
  height: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  td {
    display: flex;
    flex: none;
    padding: 0 16px;
    margin-left: auto;
    background: white;
    &:not(:first-child) {
      justify-content: flex-end;
    }
  }
}

.table {
  &_slot {
    position: relative;
  }
  &_button {
    min-width: unset !important;
    width: 30px !important;
  }
  &_start {
    display: block;
    overflow: hidden;
  }
  &_center {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  &_end {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  &_company-name {
    font-size: 12px;
    font-weight: 500;
    color: #747474;
  }
}

::v-deep .chckbox label {
  color: black;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: normal;
  margin-right: 41px;
}

@media screen and (max-width: 768px) {
  ::v-deep .p-datatable-thead {
    tr {
      th:first-child {
        min-width: 180px !important;
        width: 180px !important;
      }
    }
  }
  ::v-deep .p-datatable-tbody {
    tr {
      td:first-child {
        min-width: 180px !important;
        width: 180px !important;
      }
    }
  }
  ::v-deep .p-datatable-tfoot {
    tr {
      td {
        flex: none;
      }
      td:first-child {
        min-width: 180px !important;
        width: 180px !important;
      }
    }
  }
  .table {
    &_company-appname {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>

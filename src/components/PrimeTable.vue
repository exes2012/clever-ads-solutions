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
          @change="filteringTable"
          :value="checkbox.field"
          v-model="selectedCheckBoxes"
        ></v-checkbox>
      </v-row-container>
      <v-row-container :style="{ width: searchWidth }" class="ml-auto">
        <v-text-field
          v-if="isSearchEnabled"
          :label="searchLabel"
          prepend-inner-icon="mdi-magnify"
          class="search-field"
          v-model="filters['Name'].value"
        />
      </v-row-container>
    </v-row-container>
    <DataTable
      :value="filteredTableSource"
      :rowHover="true"
      :dataKey="dataKey"
      selectionMode="single"
      @row-select="onRowSelect"
      :selection.sync="selectedItem"
      :filters="filters"
      :globalFilterFields="['Name', 'Bundle_ID']"
      :lazy="true"
      :loading="loading"
      loading-icon=""
      :paginator="usePaginator"
      :rows="50"
      :first="firstRecordIndex"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      responsive-layout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      removableSort 
    >
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
      </template>
      <template #paginatorend>
        <Button type="button" icon="pi pi-cloud" class="p-button-text" />
      </template>
      <template #loading>Loading or no data filtered.</template>
      <Column
        v-for="(column, index) in columns"
        :key="index"
        :field="column.field"
        :header="column.header"
        :footer="formatData(column.field, column.footer)"
        :sortable="column.sortable"
        :frozen="column.frozen"
        :headerStyle="column.style"
        :bodyStyle="column.style"
        :footer-style="column.style"
        :filterField="column.field"
      >
        <template #body="slotProps">
          <div v-if="column.field === 'app' || column.field === 'Creative_Name' || column.field === 'Name'" class="table_start">
            <div class="table_company-name">
              {{
                slotProps.data.companyName
                  ? slotProps.data.companyName
                  : slotProps.data.id ? slotProps.data.id : slotProps.data.Name ? slotProps.data.Name : slotProps.data.Creative_Name
              }}
            </div>
            <div class="table_company-appname">
              <div class="table_company-name">
                {{ slotProps.data.app }}
              </div>
            </div>
          </div>
          <div v-else-if="column.field === 'year'">
            <div>{{ slotProps.data.year }}</div>
          </div>
          <div
            v-else-if="
              column.field === 'IsBanner' ||
              column.field === 'Coppa' ||
              column.field === 'IsRewarded' ||
              column.field === 'IsInterstitial' ||
              column.field === 'Published' ||
              column.field === 'UseCrossPromo' ||
              column.field === 'PremiumId'
            "
            class="table_center"
          >
            <base-icon
              name="tableCheck"
              v-if="slotProps.data[column.field] === 1"
            ></base-icon>
          </div>
          <div v-else-if="column.field === 'Bundle_Code' ">
            <div class="table_company-name">
              {{ slotProps.data[column.field] }}
            </div>
          </div>
          <div v-else-if="column.field === 'CrCount' ||
                          column.field === 'Manager'"
            style="width:100%">
            <div class="table_company-name table_center">
              {{ slotProps.data[column.field] }}
            </div>
          </div>
          <div
            v-else-if="
              column.field === 'Platformname' ||
              column.field === 'Orientation' ||
              column.field === 'CampaignName' ||
              column.field === 'Status' ||
              column.field === 'AccuralSum' ||
              column.field === 'PaymentDate' ||
              column.field === 'PaymentSum' ||
              column.field === 'CurrentBalance' ||
              column.field === 'StartDate' ||
              column.field === 'Period'
              "
            class="table_start"
            >
            <!-- column.field === 'Locations' || -->
            <div class="table_company-name">
              <!-- {{ slotProps.data[column.field] }} -->
              {{ formatData(column.field, slotProps.data[column.field]) }}
            </div>
          </div>
          <div
            v-else-if="column.field === 'Languages'"
          >
            <div class="table_company-name">
              <langs-locs-cell
                :max-height="50"
                :text-container="getLanguagesPresent(slotProps.data[column.field])"
              >
              </langs-locs-cell>
            </div>
          </div>
          <div
            v-else-if="column.field === 'Countries'"
          >
            <div class="table_company-name">
              <langs-locs-cell
                  :max-height="50"
                  :text-container="getLocationPresent(slotProps.data[column.field])"
              >
              </langs-locs-cell>
            </div>
          </div>
          <div v-else-if="column.field === 'Image_Filename'" class="table_center">
            <table-image-preview
              v-if="slotProps.data.Image_Filename"
              icon-name="doubleAngleArrow"
              :imageSRC="slotProps.data.Image_Filename"
              content="image"
              @click.stop="openModalImage(slotProps.data.Image_Filename)"
            />
          </div>
          <div v-else-if="column.field === 'Video_Filename'" class="table_center">
            <table-image-preview
              v-if="slotProps.data.Video_Filename"
              icon-name="doubleAngleArrow"
              :imageSRC="slotProps.data.Video_Preview_Filename"
              content="video"
              @click.stop="openModalVideo(slotProps.data.Video_Filename)"
            />
          </div>
          <div v-else-if="column.field === 'appTableActions'">
            <div class="table_slot">
              <v-btn
                @click.stop="
                  openTableAppsDropdown(
                    slotProps.data.App_ID,
                    slotProps.data.Bundle_ID
                  )
                "
                text
                width="40"
                height="30"
                class="table_button"
              >
                <!-- {{ slotProps.data }} -->
                <base-icon name="threeDots" />
              </v-btn>
              <table-dropdown
                v-if="
                  slotProps.data.App_ID === $store.state.applications.selectedId
                "
              />
            </div>
          </div>
          <div v-else-if="column.field === 'campaignTableActions'" style="width:100%">
            <div class="table_slot table_center">
              <v-btn
                @click.stop="
                  openTableCampaignDropdown(slotProps.data)
                "
                text
                width="40"
                height="30"
                class="table_button"
              >
                <!-- {{ slotProps.data }} -->
                <base-icon name="threeDots" />
              </v-btn>
              <table-campaign-dropdown
                v-if="
                  $store.state.campaigns.selectedCampaign && slotProps.data.Id === $store.state.campaigns.selectedCampaign.Id
                "
              />
            </div>
          </div>
          <div v-else-if="column.field" class="table_end">
            <div class="table_company-name">
              {{ formatData(column.field, slotProps.data[column.field]) }}</div>
            <!-- <div>{{ slotProps.data[column.field] }}</div> -->
            </div>
        </template>
      </Column>
      <!-- <Paginator :rows="50" :totalRecords="filteredTableSource.length"></Paginator> -->
    </DataTable>
    <the-modal-admob-app-i-d
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
// import Paginator from 'primevue/paginator';
import TableDropdown from "../components/TableDropdown.vue";
import TableCampaignDropdown from "../components/TableCampaignDropdown.vue";
import TheModalAdmobAppID from "../components/TheModalAdmobAppID.vue";
import TableImagePreview from "../components/TableImagePreview.vue";
import TheModalVideo from "../components/TheModalVideo.vue";
import TheModalImageView from "../components/TheModalImageView.vue";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { mapMutations } from "vuex";
import LangsLocsCell from "./LangsLocsCell.vue";

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
    LangsLocsCell,
    TableCampaignDropdown,
    // Paginator
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableSource: {
      type: String,
      default: () => ""
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
    checkboxes: {
      type: Array,
      default: function() {
        return []
      }
    },
    dataKey: {
      type: String,
      default: () => "id"
    },
    filterFields: {
      type: Array,
      default: () => []
    },
    checkBoxesFields: {
      type: Array,
      default: () => []
    },
    useMultiselect: {
      type: Boolean,
      default: () => false
    },
    usePaginator: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      selectedItem: null,
      admobAppId: null,
      appName: null,
      filters: {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        'Name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.CONTAINS}]},
        'Bundle_ID': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.CONTAINS}]},
      },
      source: null,
      tableScrollSize: null,
      filteredTableSource: this.tableData,
      selectedCheckBoxes: this.checkBoxesFields,
      selectedProducts3: null,
      firstRecordIndex: 0
    };
  },
  methods: {
    ...mapMutations("applications", ["changeSelectedId"]),
    ...mapMutations("campaigns", ["setSelectedCampaigns", "openModalAddCampaign"]),
    filteringTable: function() {
      console.log('lets start filtered items');
      if (this.isCheckboxesEnabled)
        this.filteredTableSource = this.tableData.filter( (el) => {
          let isNeedElement = this.checkBoxesFields.some( (someEl) => {
            return this.selectedCheckBoxes.includes(someEl) && (el[someEl] === true || el[someEl] === 1)
          })
          if ('isArchive' in el && !this.selectedCheckBoxes.includes("isArchive")) {
            isNeedElement &= !Boolean(el.isArchive);
          }
          return isNeedElement;
        });
    },
    onRowSelect: function() {
      this.$store.commit(this.tableSource + '/setSelected' + this.tableSource[0].toUpperCase() + this.tableSource.slice(1), this.selectedItem);
      this.$emit('selectPrimeTableRow')
    },
    openTableAppsDropdown(id) {
      this.changeSelectedId(id);
      let selApp = this.$store.state.applications.appList.find( (el) => el.App_ID === id );
      this.$store.commit(this.tableSource + '/setSelected' + this.tableSource[0].toUpperCase() + this.tableSource.slice(1), selApp);
      // this.$store.state.applications.selectedId = id;
    },
    openTableCampaignDropdown(campaign) {
      // this.setSelectedCampaigns(id);
      // let selCampaign = this.$store.state.campaigns.campaignsList.find( (el) => el.Id === id );
      this.$store.commit(this.tableSource + '/setSelected' + this.tableSource[0].toUpperCase() + this.tableSource.slice(1), campaign);
      // this.openModalAddCampaign();
    },
    openModalImage: function(source) {
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
    formatData: function(colName, colValue) {
        if (colValue === undefined) {
            return '';
        }
        switch (colName) {
            case 'week':
                return this.weekFormat(colValue);
            case 'month':
                return this.monthFormat(colValue);
            case 'format':
                return  this.formatById(colValue);
            case 'network':
                return  this.adSourceById(colValue);
            case 'platform':
                return  this.platformsById(colValue);
            case 'country':
                return  this.countryById(colValue);
            case 'impressions':
            case 'dau':
                return this.formatNumberAsGroup(colValue);
            case 'observed_ecpm':
            case 'est_earnings':
                return this.formatNumber(colValue);
            case 'arpu':
                return this.formatNumber3(colValue);
            default:
                return colValue;
        }
    },
    getDateOfISOWeek: function (w, y) {
        var simple = new Date(y, 0, 1 + (w - 1) * 7);
        var dow = simple.getDay();
        var ISOweekStart = simple;

        if (dow <= 4)
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        return ISOweekStart;
    },
    weekFormat: function(week) {
        if (!week)
            return '';
        var week = week.split('-');

        var from = this.getDateOfISOWeek(week[1], week[0]),
            to = new Date(from.getTime() + 1000*6*24*60*60);

        return this.formatDate(from) + ' / ' + this.formatDate(to);
    },
    formatDate: function(date) {
        var y = date.getFullYear(),
            m = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
            d = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();

        return y + '-' + m + '-' + d;
    },
    monthFormat: function(month) {
        if (!month)
            return '';
        var ml = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var monthSplit = month.split('-');

        return ml[monthSplit[1] - 1] + ' ' + monthSplit[0];
    },  
    formatNumberAsGroup(num) {
        if (num == 0) return '';
        var data = num.toString().split('').reverse(),
            groups = Math.ceil(data.length / 3),
            ret = [];
        for(var i=0; i < groups; i++)
            ret.push(data.splice(0,3).reverse().join(''));
        return ret.reverse().join(' ');
    },
    formatNumber: function(num) {
        return parseFloat(num) ? parseFloat(num).toFixed(2) : '0.00';
    },
    formatNumber3: function(num) {
        return parseFloat(num) ? parseFloat(num).toFixed(3) : '0.00';
    },
    countryById: function(id) {
      let findedCountry = this.$store.state.countries.countriesList.find( (country) => country.Country_Id === id );
      return findedCountry?.Name;
    },
    platformsById: function(id) {
      return this.$store.state.platforms.platformsList[id] || id;
    },
    getLanguagesPresent: function(langsList) {
      if (!langsList.length) {
        return "All Languages Support";
      }
      var list = '';
      for (var i in langsList) {
        list += langsList[i]['name'] + " (" + langsList[i]['code'] + "), ";
      }

      list = list.slice(0, -2);

      return list;
    },
    getLocationPresent: function(countryList) {
      if (!countryList.length) {
        return "All Locations Support";
      }
      var list = countryList.map((e) => { return e.Name}).join(', ');

      return list;
    },
    paginate: function(event) {
      //event.first: Index of first record being displayed 
      //event.rows: Number of rows to display in new page 
      //event.page: Index of the new page 
      //event.pageCount: Total number of pages 
      console.log(event);
      this.firstRecordIndex = event.first / event.rows + 1 // Index of the new page if event.page not defined.
    }
  },
  mounted() {
    this.updateTableScrollSize();
  },
  created() {
    window.addEventListener("resize", this.updateTableScrollSize);
  },
  destroyed: function() {
    window.removeEventListener("resize", this.updateTableScrollSize);
  },
  computed: {
    loading: function() {
      return this.tableData.length === 0;
    }
  },
  watch: {
    tableData: function(newValue, oldValue) {
      console.log('watch table data');
      if (this.isCheckboxesEnabled && oldValue.length === 0) {
        console.log('filtered');
        this.filteringTable();
      } else {
        this.filteredTableSource = this.tableData;
      }
    }
  }
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

<style lang="css">
.p-paginator {
  background: #ffffff;
  color: #6c757d;
  border: solid #e9ecef;
  border-width: 0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}
.p-paginator .p-paginator-first,
.p-paginator .p-paginator-prev,
.p-paginator .p-paginator-next,
.p-paginator .p-paginator-last {
  background-color: transparent;
  border: 0 none;
  color: #6c757d;
  min-width: 3rem;
  height: 3rem;
  margin: 0.143rem;
  transition: box-shadow 0.2s;
  border-radius: 50%;
}
.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
  background: #e9ecef;
  border-color: transparent;
  color: #343a40;
}
.p-paginator .p-paginator-first {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
}
.p-paginator .p-paginator-last {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
.p-paginator .p-dropdown {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 3rem;
}
.p-paginator .p-dropdown .p-dropdown-label {
  padding-right: 0;
}
.p-paginator .p-paginator-page-input {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.p-paginator .p-paginator-page-input .p-inputtext {
  max-width: 3rem;
}
.p-paginator .p-paginator-current {
  background-color: transparent;
  border: 0 none;
  color: #6c757d;
  min-width: 3rem;
  height: 3rem;
  margin: 0.143rem;
  padding: 0 0.5rem;
}
.p-paginator .p-paginator-pages .p-paginator-page {
  background-color: transparent;
  border: 0 none;
  color: #6c757d;
  min-width: 3rem;
  height: 3rem;
  margin: 0.143rem;
  transition: box-shadow 0.2s;
  border-radius: 50%;
}
.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background: #EFF6FF;
  border-color: #EFF6FF;
  color: #1D4ED8;
}
.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
  background: #e9ecef;
  border-color: transparent;
  color: #343a40;
}
.p-datatable .p-paginator-bottom {
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.p-treetable .p-paginator-top {
  border-width: 0 0 1px 0;
  border-radius: 0;
}
.p-datatable.p-datatable-gridlines .p-paginator-top {
  border-width: 0 1px 0 1px;
}
.p-datatable.p-datatable-gridlines .p-paginator-bottom {
  border-width: 0 1px 1px 1px;
}
.p-paginator {
 display:-webkit-box;
 display:-ms-flexbox;
 display:flex;
 -webkit-box-align:center;
 -ms-flex-align:center;
 align-items:center;
 -webkit-box-pack:center;
 -ms-flex-pack:center;
 justify-content:center;
 -ms-flex-wrap:wrap;
 flex-wrap:wrap
}
.p-paginator-left-content {
 margin-right:auto
}
.p-paginator-right-content {
 margin-left:auto
}
.p-paginator-current,
.p-paginator-first,
.p-paginator-last,
.p-paginator-next,
.p-paginator-page,
.p-paginator-prev {
 cursor:pointer;
 display:-webkit-inline-box;
 display:-ms-inline-flexbox;
 display:inline-flex;
 -webkit-box-align:center;
 -ms-flex-align:center;
 align-items:center;
 -webkit-box-pack:center;
 -ms-flex-pack:center;
 justify-content:center;
 line-height:1;
 -webkit-user-select:none;
 -moz-user-select:none;
 -ms-user-select:none;
 user-select:none;
 overflow:hidden;
 position:relative
}
.p-paginator-element:focus {
 z-index:1;
 position:relative
}

</style>

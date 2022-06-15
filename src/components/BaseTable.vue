<template>
  <div>
    <v-data-table
      :headers="headers"
      :header-props="{
        'sort-icon': 'icon-vector-12',
        mobile: false,
      }"
      :items="items"
      :items-per-page="5"
      class="data-table"
      mobile-breakpoint="100"
    >
      <template v-slot:item.imagePreview="{ item }">
        <base-table-image-preview
          icon-name="doubleAngleArrow"
          :imageSRC="item.imageSRC"
          @click="openModalImage(item.imageSRC)"
        />
      </template>
      <template v-slot:item.videoPreview="{ item }">
        <base-table-image-preview
          icon-name="video"
          :imageSRC="item.imageSRC"
          @click="openModalVideo(item.videoSRC)"
        />
      </template>
      <template v-slot:item.premiumId="{ item }">
        <base-icon name="tableCheck" v-if="item.premiumId === true"></base-icon>
      </template>
      <template v-slot:item.appTableActions="{ item }">
        <div class="table_slot">
          <v-btn
            @click.stop="
              openTableAppsDropdown(item.id, item.admobAppId, item.appName)
            "
            class="table-button"
            text
          >
            <base-icon name="threeDots" />
          </v-btn>
          <base-table-dropdown
            v-if="$store.state.applications.selectedId === item.id"
          >
          </base-table-dropdown>
        </div>
      </template>
      <template v-slot:item.published="{ item }">
        <base-icon name="tableCheck" v-if="item.published === true"></base-icon>
      </template>
      <template v-slot:item.useBanner="{ item }">
        <base-icon name="tableCheck" v-if="item.useBanner === true"></base-icon>
      </template>
      <template v-slot:item.useIntertitial="{ item }">
        <base-icon
          name="tableCheck"
          v-if="item.useIntertitial === true"
        ></base-icon>
      </template>
      <template v-slot:item.useRewarded="{ item }">
        <base-icon
          name="tableCheck"
          v-if="item.useRewarded === true"
        ></base-icon>
      </template>
      <template v-slot:item.coppa="{ item }">
        <base-icon name="tableCheck" v-if="item.coppa === true"></base-icon>
      </template>
      <template v-slot:item.crossPromo="{ item }">
        <base-icon
          name="tableCheck"
          v-if="item.crossPromo === true"
        ></base-icon>
      </template>
      <template v-slot:item.comment="{ item }">
        <div
          class="d-flex"
          @mouseenter="selectActiveId(item.id)"
          @mouseleave="selectedId = null"
        >
          {{ item.comment }}
          <div class="table-button-container ml-auto">
            <v-btn text v-if="selectedId === item.id">
              <base-icon name="download" />
            </v-btn>
          </div>
        </div>
      </template>
      <template slot="body.append" v-if="totals === true">
        <tr class="table-row">
          <td>Totals:</td>
          <td class="table-data">150</td>
          <td class="table-data">260</td>
          <td class="table-data">150</td>
          <td class="table-data">260</td>
          <td class="table-data">33%</td>
        </tr>
      </template>
      <template slot="header">
        <th class="my-class"></th>
      </template>
    </v-data-table>
    <BaseTableModalAdmobId
      :admob-app-id="admobAppId"
      :app-name="appName"
      v-if="$store.state.applications.isAdmobAppIdModalOpen"
    />
    <table-modal-image :source="source" />
    <table-modal-video :source="source" />
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
    };
  },
  methods: {
    ...mapMutations("creatives", ["openModalContent"]),
    selectActiveId(selectedId) {
      this.selectedId = selectedId;
    },
    openTableAppsDropdown(selectedId, admobAppId, appNAme) {
      this.$store.state.applications.selectedId === selectedId
        ? this.$store.commit("applications/changeSelectedId", null)
        : this.$store.commit("applications/changeSelectedId", selectedId);
      this.admobAppId = admobAppId;
      this.appName = appNAme;
    },
    openModalImage(source) {
      this.source = source;
      this.$store.commit("creatives/openModalImage");
    },
    openModalVideo(source) {
      this.source = source;
      this.$store.commit("creatives/openModalVideo");
    },
  },
};
</script>

<style lang="scss" scoped>
.data-table {
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
        color: #1f2024 !important;
        position: relative;
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

::v-deep .v-data-table__wrapper {
  overflow-y: unset;
  overflow-x: unset;
}
</style>

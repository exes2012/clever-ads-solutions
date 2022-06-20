<template>
  <div>
    <v-col-container class="overflow-y-auto mt-5 filter-item_list">
      <v-row-container
        v-for="customFilter in customFiltersList"
        :key="customFilter.id"
        class="filter-item"
      >
        <v-col-container>
          <div class="filter-item_name">
            {{ customFilter.name }}
          </div>
          <div class="filter-item_presets">{{ customFilter.presets }}</div>
        </v-col-container>
        <v-btn
          text
          class="filter-item_delete"
          @click="deleteFilterDialog = true"
        >
          <base-icon name="trash" />
        </v-btn>
      </v-row-container>
    </v-col-container>

    <v-dialog
      v-model="deleteFilterDialog"
      max-width="500"
      transition="dialog-bottom-transition"
      persistent
    >
      <v-card
        width="500"
        height="250"
        elevation="0"
        class="card d-flex flex-column"
      >
        <v-modal-button-close @click="deleteFilterDialog = false" />
        <div class="filter-item_name mt-7 text-center">
          Are you sure you want to delete this custom filter?
        </div>
        <v-row-container class="mt-auto">
          <v-btn
            text
            color="error"
            class="filter_btn ml-4"
            width="100"
            height="53"
            @click="deleteFilterDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            depressed
            color="primary"
            class="ml-auto filter_btn"
            width="180"
            height="53"
            @click="deleteFilterDialog = false"
          >
            Delete
          </v-btn>
        </v-row-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "FilterListItem",
  props: {
    customFiltersList: {
      type: Array,
    },
  },
  data() {
    return {
      deleteFilterDialog: false,
    };
  },

  methods: {
    deleteCustomFilter() {},
  },
};
</script>

<style scoped lang="scss">
.filter-item {
  cursor: pointer;
  padding: 8px 16px;
  &:hover {
    background: #f5f5f5;
  }
  &_list {
    height: 380px;
  }
  &_name {
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
  }
  &_presets {
    font-weight: 400;
    font-size: 13px;
    line-height: 12px;
    color: rgba(0, 0, 0, 0.48);
  }
  &_delete {
    min-width: 40px !important;
    padding: 0 !important;
  }
}
</style>

<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="mt-10 data-table"
  >
    <template v-slot:item.calories="{ item }">
      <span>{{item.calories}}</span>
    </template>
    <template slot="body.append">
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
</template>

<script>
export default {
  name: "AppTable",
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  filter: drop-shadow(4px 4px 20px rgba(0, 8, 81, 0.1));
  color: #1f2024 !important;
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
        border: 0px !important;
      }
    }
  }
}
</style>

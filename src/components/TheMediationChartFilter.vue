<template>
  <div>
    <!--    filter active button-->
    <button class="filter active" @click="" v-if="$store.state.filters.isFilterButtonActive">
      <base-icon name="filterActive" class="filter_filtericon" />
      Filter
      <span
          class="filter_remove"
          @click="resetFilterModalSelection">&times;</span>
    </button>

    <!--    filter inactive button-->
    <button class="filter" @click="openFilterModal" v-else>
      <base-icon name="filter" class="filter_filtericon"/>
      Filter
      <base-icon name="filterPlus" class="filter_plusicon"/>
    </button>
  </div>

</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "TheMediationChartFilter",
  components:{
  },
  methods:{
    ...mapMutations('filters',['openFilterModal','resetFilterModalSelection']),
  }
}
</script>

<style scoped lang="scss">
.filter{
  display: flex;
  align-items: center;
  width: 127px;
  height: 33px;
  padding: 4px 16px 4px 42px;
  position: relative;
  border: 2px solid #EFEFEF;
  border-radius: 8px;
  margin-right: 12px;
  font-weight: 500;
  position: relative;
  &_filtericon{
    position: absolute;
    top: 7px;
    left: 12px;
   }
  &_plusicon{
    position: absolute;
    top: 7px;
    right: 12px;
  }
  &_remove{
    position: absolute;
    font-size: 24px;
    font-weight: 400;
    line-height: 100%;
    cursor: pointer;
    right:12px;
    top:4px;
    &:hover{
      color:red;
      font-weight: bold;
    }
  }
}
.active{
  color: white;
  background: #0074FF;
  border:#0074FF;
}
</style>
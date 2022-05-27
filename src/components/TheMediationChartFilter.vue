<template>
  <div>
    <button class="filter-button" @click="$emit('click')">Filter</button>
  </div>

</template>

<script>
export default {
  name: "TheMediationChartFilter",
  components:{
  },
  methods:{
  }
}
</script>

<style scoped>
.filter-button{
  width: 140px;
  padding: 4px 0 4px 0;
  position: relative;
  border: 2px solid #EFEFEF;
  border-radius: 8px;
  margin-right: 12px;
  font-weight: 500;
}
</style>
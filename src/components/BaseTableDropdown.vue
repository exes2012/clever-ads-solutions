<template>
  <div class="dropdown">
      <div class="dropdown_list-item">Download CAS settings</div>
      <div class="dropdown_list-item" @click="openAdmobAppIdModal">Show Admob App ID</div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: "BaseTableDropdown",
  methods:{
    ...mapMutations('applications',['openAdmobAppIdModal','resetDropdown'])
  },
  mounted(){
    console.log("mounted")
    document.addEventListener('click', event =>{
      if (!this.$el.contains(event.target)){
        this.resetDropdown();
      }
    })
  },
  beforeDestroy() {
    document.removeEventListener('click', event =>{
      if (!this.$el.contains(event.target)){
        this.resetDropdown();
      }
    })
  }
}
</script>

<style scoped lang="scss">
.dropdown {
  display: flex;
  flex-direction: column;
  background: white;
  transition: all 0.5s;
  border-radius: 16px;
  overflow: hidden;
  /*border: 2px solid #EFEFEF;*/
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  order: 1;
  position: absolute;
  top: 0;
  right: 30px;
  z-index: 99999;
  padding: 16px 0;
    &_list-item {
      font-size: 14px;
      width: 225px;
      display: flex;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
    &:hover {
      background: #F1F7FF;
    }
  }
}
</style>
<template>
  <div class="select-box">
    <div class="options-container"
         :style = "{width:optionsWidth}"
         v-if="selectActive">
      <div class="option"
           v-for="option in options"
           :key="option.value"
           @click="selectOption(option)"
      >
        {{option.name}}
      </div>
    </div>
    <div class="selected" @click="selectActive=!selectActive">
      {{selected.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCurrencySelector",
  props:{
    optionsWidth:
        {
          type:String,
          default:"140px"
        },
    selected:Object,
    options:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      selectActive:false,
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select', option)
      this.selectActive=false
    },
    hideSelect(){
      this.selectActive=false
    }
  },
  mounted() {
    document.addEventListener('click',this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click',this.hideSelect)
  }
}
</script>

<style scoped>
  .select-box{
    display:flex;
    flex-direction: column;
    min-width: 140px;
    padding: 4px 35px 4px 16px;
    position: relative;
    border: 2px solid #EFEFEF;
    border-radius: 8px;
    margin-right: 12px;
  }

  .options-container{
    background: white;
    transition: all 0.5s;
    border-radius: 16px;
    overflow: hidden;
    /*border: 2px solid #EFEFEF;*/
    box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
    order:1;
    position: absolute;
    top:35px;
    right:-2px;
    z-index: 10;
    padding: 16px 0;
  }

  .option{
    display: flex;
    padding: 12px 16px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid #EFEFEF;

  }

  .selected{
    cursor: pointer;
  }

  .option:hover{
    background: #F1F7FF;
  }

  .select-box .options-container + .selected::after{
    transform: rotateX(180deg);
    top:3px;
  }
  .selected{
    display: flex;
    font-size: 14px;
    font-weight: 500;
    position: relative;
  }
  .selected::after{
    content:"";
    background: url('../assets/svg/chevron_down.svg') ;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height: 12px;
    width: 12px;
    right: -23px;
    top:7px;
    transition: all 0.4s;
  }
</style>
<template>
  <div class="wrapper">
    <div class="select-box">
      <div class="options-container" v-if="selectActive">
        <div class="option"
             v-for="option in options"
             :key="option.value"
             @click="selectOption(option)"
        >
          {{option[displayProperty]}}
        </div>
      </div>
      <div class="selected" @click="selectActive=!selectActive">
        <div class="placeholder" v-if="!selected">{{ placeholder }}</div>
        <div class="value" v-else>{{selected[displayProperty]}}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "BaseFormSelect",
  props:{
    selected:Object,
    placeholder:String,
    options:{
      type:Array,
      default(){
        return[]
      }
    },
    displayProperty:{
      type:String,
      default: "name"
    },
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
.wrapper{
  display: flex;
  width: 100%;
}
  .select-box{
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 57px;
    position: relative;
    border: 2px solid #CDD9E8;
    border-radius: 8px;
  }

  .options-container{
    background: white;
    width: 100%;
    transition: all 0.5s;
    border-radius: 16px;
    overflow: hidden;
    /*border: 2px solid #EFEFEF;*/
    box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
    order:1;
    position: absolute;
    top:55px;
    right:0;
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
    padding:13px 0 0 20px;
  }

  .placeholder{
    font-size: 16px;
    font-weight: 500;
    color: #D1D1D1;
  }

  .value{
    font-size: 16px;
    font-weight: 500;
  }

  .option:hover{
    background: #F1F7FF;
  }

  .select-box .options-container + .selected::after{
    transform: rotateX(180deg);
    top:17px;
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
    right: 10px;
    top:20px;
    transition: all 0.4s;
  }
</style>
<template>
  <div class="wfull">
    <div class="multiselect"
         @click="selectActive=!selectActive"
         @blur="selectActive=false"
         tabindex="-1"
         ref="parent"
    >
      <div
          class="multiselect_placeholder"
          v-if="placeholderIsVisible"
      >{{ placeholder }}</div>
      <div class="multiselect_selected"
           v-for="(option,i) in formattedOptions"
           :key="i"
           v-show="option.checked"
      >
        {{option[displayProperty]}}
        <span
            class="multiselect_remove"
            @click="preventClose($event);handleOptionClick(i)"
        >&times;</span>
      </div>

      <div
          class="multiselect_options"
          v-if="selectActive"
          @click="preventClose"
          :style="{top:optionsTop}"
      >
        <div
            class="multiselect_option"
            :class="{'multiselect_option--checked':option.checked}"
            v-for="(option,i) in formattedOptions"
            :key="i"
            @click="handleOptionClick(i)"
        >
          <div class="multiselect_checkbox"></div>
          <div class="multiselect_text">{{ option[displayProperty] }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "VColumnsMultiSelect",
  data(){
    return{
      selectActive:false,
      placeholderIsVisible:false,
      optionsTop:"51px",
    }
  },
  props:{
    options:{
      type:Array,
      default: ()=> []
    },
    value:{
      default:()=> []
    },
    placeholder:{
      type:String,
      default: "Click to select"
    },
    displayProperty:{
      type:String,
      default: "name"
    },
    valueProperty:{
      type:String,
      default: "value"
    },
    required:{
      default: false
    }
  },
  methods:{
    preventClose(e){
      e.stopPropagation();
    },
    handleOptionClick(i){
      let clickedValue=this.options[i][this.valueProperty];
      let newValue=[...this.value];
      let existIndex=this.value.findIndex( v=> v===  clickedValue);
      if (existIndex === -1){
        newValue.push(clickedValue);
      }
      else{
        newValue.splice(existIndex, 1);
      }
      this.$emit('input', newValue)
    },
  },
  computed:{
    formattedOptions(){
      let fo = this.options.map(
          option => {
            let checked = this.value.some( v => v === option[this.valueProperty]);
            return {...option, checked: checked};
          }
      );
      const checkedOptions = fo.filter( option => option.checked ===true);
      if(checkedOptions.length === 0) {
        this.placeholderIsVisible = true;
      }
      else {
        this.placeholderIsVisible = false;
      }
      return fo;
    },
  }
}
</script>

<style scoped lang="scss">
  .multiselect .multiselect_options > .multiselect::after{
    transform: rotateX(180deg);
    top:3px;
  }
  .multiselect {
    background: #fff;
    padding: 4px 35px;
    margin: 8px 12px 8px 0;
    /*display: inline-block;*/
    border: 2px solid #efefef;
    border-radius:8px;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    &_placeholder{
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
    }
    &::after{
      content:"";
      background: url('../assets/svg/chevron_down.svg') ;
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      height: 12px;
      width: 12px;
      right: 10px;
      top:21px;
      transition: all 0.4s;
    }
    &_placeholder{

    }
    &_selected{
      background: #0074FF;
      border-radius: 8px;
      color: white;
      padding: 4px 12px 4px 12px;
      margin:3px 3px;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
    }
    &_remove{
      cursor: pointer;
      &:hover{
        color:red;
        font-weight: bold;
      }
    }
    &_options{
      background: white;
      transition: all 0.5s;
      border-radius: 16px;
      overflow: hidden;
      /*border: 2px solid #EFEFEF;*/
      box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
      order: 1;
      position: absolute;
      top: 13px;
      right: -2px;
      z-index: 10;
      padding: 16px 0;
      width:200px;
    }
    &_option{
      display: flex;
      padding: 12px 16px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      border-bottom: 1px solid #efefef;
    }
    &option--checked{
      color: #0074FF;
      font-weight: bold;
    }
    &_checkbox{
      width: 22px;
      height: 22px;
      border: 2px solid #EFEFEF;
      border-radius: 4px;
      margin-right: 7px;
      position: relative;
    }
    &_text{
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      color: #1F2024;
    }

    .multiselect_option--checked .multiselect_checkbox{
      border: 1px solid  #0074FF;
    ;
      background: #0074FF;
    }

    .multiselect_option--checked .multiselect_checkbox::after{
      width:11px;
      height: 7px;
      border-left:2px solid rgb(255, 255, 255);
      border-bottom:2px solid rgb(255, 255, 255);
      content:"";
      z-index: 40;
      position: absolute;
      transform: rotate(-45deg);
      left:5px;
      top:4px;
    }
  }
  .wfull{
    display: flex;
  }

</style>
<template>
  <div class="wrapper">
    <div class="base-input">
      <label class="base-input_label" v-if="label">{{label}}</label>
      <input
          class="base-input_input"
          :placeholder="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props:{
    text:{
      type:String,
      default:''
    },
    label:{
      type:String,
    },
    value:{
      type:[String,Number],
      default:''
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  display: flex;
  width: 100%;
}
  .base-input{
    margin: 0 12px 24px 12px;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    &_label{
      font-size: 18px;
      font-weight: 700;
      line-height: 120%;
      margin-bottom: 12px;
    }
    &_input{
      height: 53px;
      outline: none;
      border: 2px solid #CDD9E8;
      border-radius: 8px;
      max-width: 100%;
      padding-left: 20px;
      font-size: 16px;
      font-weight: 500;
    }
  }
</style>
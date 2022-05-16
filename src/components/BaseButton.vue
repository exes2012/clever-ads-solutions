<template>
  <div>
    <button class="btn" :class="buttonClass" v-on="$listeners">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props:{
    buttonClass:{
      type:String
    }
  }
}
</script>

<style scoped>
.btn{
  margin: 8px 12px 28px 12px;
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
}

.btn-blue{
  background: #0074FF;
  color: white;
}

.btn-red{
  color: #EC0000;
}
</style>
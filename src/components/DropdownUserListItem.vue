<template>
  <div class="list-item" @click="$emit('click')">
    <div class="list-item_marker"></div>
    <div class="list-item_label"
    >{{itemLabel}}</div>
  </div>
</template>

<script>
export default {
  name: "DropdownUserListItem",
  props:[
      'itemLabel',
  ]
}
</script>

<style scoped lang="scss">
.list-item{
  width: 225px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  &:hover{
    background:#F1F7FF ;
  }
  &_marker{
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background:#EFEFEF;
    margin-right: 15px;
  }
  &_label{
    font-size: 14px;
  }

  .text-red{
    color: #EC0000;
  }
}
</style>
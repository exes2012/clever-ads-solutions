<template>
  <div class="avatar">
    <img class="avatar_img" :src="require('../assets/svg/avatar.svg')" alt="">
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
  props: {
    avatar:
        {
          type: String,
          default: '../assets/svg/avatar.svg'
        }
  },
  methods:{
    av(){
      console.log(this.avatar)
    }

  }
}
</script>

<style scoped lang="scss">
.avatar{
  display: flex;
  align-items: center;
  &_img{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-right: 11px;
   }
}
</style>
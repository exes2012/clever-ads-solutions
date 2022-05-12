<template>
  <div>
    <router-link
        :to="url"
        class="navlink"
        active-class="navlink-active"
        exact
    >
      {{name}}
    </router-link>
  </div>

</template>

<script>
export default {
  name: "HeaderNavLink",
  props:[
    'url',
    'name'
  ]
}
</script>

<style scoped lang="scss">
.navlink{
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-left: 40px;
  text-decoration: none;
  &:hover{
     color: #0074FF;
   }
}

.navlink-active{
  color: #0074FF;
}
</style>
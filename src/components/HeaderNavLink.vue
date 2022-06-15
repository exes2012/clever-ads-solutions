<template>
  <div>
    <router-link :to="url" class="navlink" active-class="navlink-active" exact>
      {{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderNavLink",
  props: ["url", "name"],
};
</script>

<style scoped lang="scss">
.navlink {
  white-space: nowrap;
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-left: 40px;
  text-decoration: none;
  &:hover {
    color: #0074ff;
  }
}

.navlink-active {
  color: #0074ff;
}

@media screen and (max-width: 1200px) {
  .navlink {
    font-size: 14px;
    margin-left: 20px;
  }
}
</style>

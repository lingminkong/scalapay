<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "@/components/partials/Nav.vue";
export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p {
  font-weight: $font-normal;
}
</style>

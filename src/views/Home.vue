<template>
  <div class="home">
    <home-hero />
    <product-list />
  </div>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import ProductList from "@/components/ProductList";
export default {
  name: "Home",
  components: {
    HomeHero,
    ProductList
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>

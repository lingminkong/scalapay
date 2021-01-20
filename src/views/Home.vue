<template>
  <div class="home">
    <home-hero :config="config" />
  </div>
</template>

<script>
import HomeHero from "@/components/HomeHero";
export default {
  name: "Home",
  props: {
    config: {
      type: Object
    }
  },
  components: {
    HomeHero
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>

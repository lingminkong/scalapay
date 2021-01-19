<template>
  <Nav :cart="cart" />
  <router-view @add-to-cart="updateCart" :cart="cart" />
</template>

<script>
import Nav from "@/components/partials/Nav.vue";
export default {
  name: "app",
  components: {
    Nav
  },
  data() {
    return {
      cart: []
    };
  },
  methods: {
    updateCart(product) {
      this.cart.push(product);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

p {
  font-weight: $font-normal;
}
</style>

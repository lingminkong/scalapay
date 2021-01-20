<template>
  <div v-if="!configError">
    <Nav :cart="cart" />
    <router-view
      @add-to-cart="addToCart"
      @delete-cart-item="deleteCartItem"
      :cart="cart"
      :config="config"
    />
  </div>
  <div v-else class="app-error">
    <p>Check back later to see more information</p>
  </div>
</template>

<script>
import Nav from "@/components/partials/Nav.vue";
import api from "@/services/Scalapay";
export default {
  name: "app",
  components: {
    Nav
  },
  data() {
    return {
      cart: [],
      config: {
        isLoading: true,
        data: null
      },
      configError: false
    };
  },
  created() {
    this.getConfig();
  },
  methods: {
    async getConfig() {
      api
        .getConfig()
        .then(response => {
          this.config.data = response;
          this.config.isLoading = false;
        })
        .catch(() => {
          this.configError = true;
        });
    },
    addToCart(product) {
      const findIndex = this.cart.findIndex(item => item.id === product.id);
      if (findIndex > -1) {
        this.cart[findIndex].quantity =
          parseInt(product.quantity, 10) +
          parseInt(this.cart[findIndex].quantity, 10);
      } else {
        this.cart.push(product);
      }
    },
    deleteCartItem(id) {
      const index = this.cart.findIndex(item => item.id === id);
      this.cart = [...this.cart.slice(0, index), ...this.cart.slice(index + 1)];
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary-color;
}
.app-error {
  @include flex;
  height: 100vh;
  width: 100vh;
  background-color: $primary-color;

  p {
    text-align: center;
    font-size: 3rem;
    color: $white;
  }
}
</style>

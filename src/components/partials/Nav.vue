<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img alt="Scalapay logo" src="@/assets/logo.png" />
      </router-link>
      <div class="nav">
        <router-link to="/products" class="nav__item nav__product"
          >Products</router-link
        >
        <router-link to="/cart" class="nav__item nav__cart"
          >Cart<span v-if="cart.length">{{ cart.length }}</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav",
  props: ["cart"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  background-color: white;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: $header-height;
  z-index: $z-nav;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin-bottom: 0;
  display: inline-block;

  img {
    height: 30px;
    width: auto;
    @media screen and (min-width: $screen-md) {
      height: 50px;
    }
  }
}

.nav {
  @include flex(row, center, flex-end);
  &__item {
    font-weight: $font-bold;
  }

  &__product {
    margin-right: 1rem;
  }

  &__cart {
    @include flex(row, center, flex-start);
    span {
      @include flex;
      display: inline-flex;
      background-color: $primary-color;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 100%;
      color: $white;
      margin-left: 0.3rem;
      font-size: 1rem;
    }
  }
}
</style>

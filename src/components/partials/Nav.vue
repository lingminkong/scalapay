<template>
  <nav class="nav">
    <div class="container">
      <router-link to="/" class="logo">
        <img alt="Scalapay logo" src="@/assets/logo.png" />
      </router-link>
      <div class="nav-items">
        <router-link to="/products" class="nav-item">Products</router-link>
        <router-link to="/cart" class="nav-item"
          >Cart<span v-if="cart.length">({{ cart.length }})</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: ["cart"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav {
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
    @media screen and (min-width: 768px) {
      height: 50px;
    }
  }
}

.nav-item {
  margin-right: 2rem;
}
</style>

<template>
  <nav class="nav">
    <div class="container">
      <router-link to="/" class="logo">
        <img alt="Scalapay logo" src="@/assets/logo.png" />
      </router-link>
      <div class="nav-items">
        <router-link to="/cart" class="nav-item">Cart</router-link>
        <router-link to="/checkout" class="nav-item">Checkout</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav {
  background-color: white;
  padding: 1rem 0;
  @media screen and (min-width: 768px) {
    padding: 1.3rem 0;
  }
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
    height: 40px;
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

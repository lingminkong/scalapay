<template>
  <div class="products">
    <div class="container">
      <h2 class="products__title">Checkout our products</h2>
      <div class="products__list">
        <div class="row">
          <div
            class="products__item col-md-3"
            v-for="product in products"
            :key="product.id"
            :product="product"
          >
            <router-link :to="`/product/${product.id}`">
              <product-item :data="product"></product-item>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
  name: "Products",
  components: {
    ProductItem
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "iMac pro",
          category: "Computers",
          subcategory: ["Desktop", "Gaming"],
          brand: "Apple",
          gtin: "72527273070",
          sku: "12342",
          price: {
            amount: 1999,
            currency: "EUR"
          },
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "https://placekitten.com/500/500"
        },
        {
          id: 2,
          name: "Surface",
          category: "Computers",
          subcategory: ["Tablet"],
          brand: "Microsoft",
          gtin: "725272730701",
          sku: "12341",
          price: {
            amount: 1200,
            currency: "EUR"
          },
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "https://placekitten.com/500/500"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.products {
  padding: $header-height 0;
  &__list {
    width: 100%;
  }

  &__item {
    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }
    @media screen and (min-width: $screen-md) {
      &:not(:last-of-type) {
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }
  }
}
</style>

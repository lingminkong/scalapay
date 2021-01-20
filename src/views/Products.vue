<template>
  <div class="products">
    <div class="container">
      <h1 class="products__title main-heading heading--line-top">
        Our Products
      </h1>
      <div class="products__list">
        <div class="row">
          <div
            class="products__item col-md-4"
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
            amount: 2400,
            currency: "EUR"
          },
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "http://placeimg.com/500/500/tech"
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
          image: "http://placeimg.com/500/500/tech"
        },
        {
          id: 3,
          name: "Macbook M1 13",
          category: "Computers",
          subcategory: ["Laptop", "Office"],
          brand: "Apple",
          gtin: "725272730702",
          sku: "12343",
          price: {
            amount: 300,
            currency: "EUR"
          },
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "http://placeimg.com/500/500/tech"
        },
        {
          id: 4,
          name: "iPad",
          category: "Computers",
          subcategory: ["Tablet"],
          brand: "Apple",
          gtin: "725272730703",
          sku: "123432",
          price: {
            amount: 700,
            currency: "EUR"
          },
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "http://placeimg.com/500/500/tech"
        },
        {
          id: 5,
          name: "Type C cable",
          category: "Accessories",
          subcategory: ["Cable", "Connections"],
          brand: "Belkin",
          gtin: "725272730704",
          sku: "1234322",
          price: {
            amount: 0.3,
            currency: "EUR"
          },
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "http://placeimg.com/500/500/tech"
        },
        {
          id: 6,
          name: "iWatch",
          category: "Wearable",
          subcategory: ["Watch"],
          brand: "Apple",
          gtin: "725272730705",
          sku: "1234132",
          price: {
            amount: 10,
            currency: "EUR"
          },
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "http://placeimg.com/500/500/tech"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.products {
  padding: $header-height 0;

  &__title {
    margin-bottom: 3rem;

    @media screen and (min-width: $screen-md) {
      margin-bottom: 4rem;
    }
  }

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
      }
    }

    a {
      display: block;
    }
  }
}
</style>

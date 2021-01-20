<template>
  <div class="single-product">
    <div class="container">
      <img
        class="single-product__image"
        :src="product.image"
        :alt="product.name"
      />
      <div class="single-product__content">
        <h1 class="single-product__name main-heading">{{ product.name }}</h1>
        <div class="single-product__category-wrapper">
          <span class="single-product__category">{{ product.category }}</span>
          <div
            v-if="product.subcategory.length"
            class="single-product__subcategories"
          >
            <span
              class="single-product__subcategory"
              v-for="item in product.subcategory"
              :key="item"
              >{{ item }}</span
            >
          </div>
        </div>
        <p class="single-product__price general-heading">{{ price }}</p>
        <p class="single-product__label">Brand</p>
        <p class="single-product__brand">{{ product.brand }}</p>
        <p class="single-product__label">Description</p>
        <p class="single-product__description">{{ product.description }}</p>
        <div class="single-product__quantity">
          <label for="quantity" class="single-product__label">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            min="1"
            max="100"
            v-model="product.quantity"
          />
        </div>
        <button class="btn" @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleProduct",
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
      ],
      product: {}
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    const product = this.products.find(item => item.id === ID);
    this.product = product;
    this.product.quantity = 1;
  },
  methods: {
    addToCart() {
      const productCopy = JSON.parse(JSON.stringify(this.product));
      this.$emit("add-to-cart", productCopy);
      this.product.quantity = 1;
    }
  },
  computed: {
    price() {
      return `${this.product.price.amount} ${this.product.price.currency}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.single-product {
  padding: $content-padding 0;
  .container {
    @include flex(column, flex-start, flex-start);
    @media screen and (min-width: $screen-md) {
      @include flex(row, flex-start, space-between);
    }
  }

  &__image {
    max-width: 100%;
    margin-bottom: 1rem;
    @media screen and (min-width: $screen-md) {
      width: 40%;
      height: auto;
      margin-bottom: 0;
    }
  }

  &__content {
    @include flex(column, flex-start, flex-start);
    @media screen and (min-width: $screen-md) {
      width: 50%;
    }
  }

  &__name {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  &__price {
    color: $secondary-color;
  }

  &__category-wrapper {
    @include flex(row, center, flex-start);
    margin-bottom: 2rem;
    @media screen and (min-width: $screen-md) {
      margin-bottom: 2.5rem;
    }
  }

  &__category {
    @include font($font-family, $font-normal, 14px);
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background-color: $primary-color;
    color: $white;
    border-radius: 0.3rem;
  }

  &__subcategories {
    @include flex(row, center, flex-start);
    margin-left: 1rem;
  }

  &__subcategory {
    @include font($font-family, $font-normal, 14px);
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background-color: $secondary-color;
    color: $white;
    border-radius: 0.3rem;
    margin-right: 0.5rem;
  }

  &__label {
    @include font($font-family, $font-bold, 1.125rem);
    color: $primary-color;
    margin-bottom: 0;
  }

  &__quantity {
    @include flex(row, center, flex-start);
    margin-bottom: 2rem;

    @media screen and (min-width: $screen-md) {
      margin-bottom: 3rem;
    }

    .single-product__label {
      margin-right: 1rem;
      margin-bottom: 0;
    }

    input {
      min-width: 5rem;
    }
  }

  &__price {
    font-weight: $font-bold;
    font-style: italic;
  }
}
</style>

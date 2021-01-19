<template>
  <div class="single-product">
    <div class="container">
      <img
        class="single-product__image"
        :src="product.image"
        :alt="product.name"
      />
      <div class="single-product__content">
        <h1 class="single-product__name">{{ product.name }}</h1>
        <p class="single-product__price">{{ price }}</p>
        <p class="single-product__category">{{ category }}</p>
        <p class="single-product__brand">{{ product.brand }}</p>
        <p class="single-product__description">{{ product.description }}</p>
        <label for="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          v-model="product.quantity"
        />
        <button @click="addToCart">Add to cart</button>
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
            amount: 69,
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
            amount: 99,
            currency: "EUR"
          },
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "https://placekitten.com/500/500"
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
      this.$emit("add-to-cart", this.product);
    }
  },
  computed: {
    category() {
      return `${this.product.category}-${this.product.subcategory.join(" | ")}`;
    },
    price() {
      return `${this.product.price.amount} ${this.product.price.currency}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.single-product {
  padding-top: 100px;
  .container {
    @include flex(column-reverse, flex-start, flex-start);
    @media screen and (min-width: 768px) {
      @include flex(row, flex-start, space-between);
    }
  }

  &__image {
    @media screen and (min-width: 768px) {
      width: 40%;
      height: auto;
    }
  }

  &__content {
    @include flex(column, flex-start, flex-start);
    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }

  &__price {
    font-weight: $font-bold;
  }
}
</style>

<template>
  <div class="single-product">
    <div class="container">
      <order-form></order-form>
      <div class="single-product__content">
        <img :src="product.image" :alt="product.name" />
        <h1 class="single-product__name">{{ product.name }}</h1>
        <p class="single-product__description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import OrderForm from "@/components/OrderForm";
export default {
  name: "EventSingle",
  components: {
    OrderForm
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "imac pro",
          description:
            "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          image: "https://placekitten.com/500/500"
        },
        {
          id: 2,
          name: "imac 27",
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
  }
};
</script>

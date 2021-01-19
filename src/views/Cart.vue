<template>
  <div class="cart">
    <div class="container">
      <h1 class="cart__title">Your Cart</h1>
      <div v-if="cart.length" class="cart__list">
        <div class="cart__item" v-for="item in items" :key="item.id">
          <img class="cart__item__image" :src="item.image" :alt="item.name" />
          <h2 class="cart__item__title">{{ item.name }}</h2>
          <label for="quantity">Quantity</label>
          <input type="number" name="quantity" v-model="item.quantity" />
          {{ item.quantity }}
          <p class="cart__item__price">
            {{ item.price.amount }} {{ item.price.currency }}
          </p>
          <button>Delete</button>
        </div>
        <p class="cart__shipping">Shipping: flat rate {{ shipping }} EUR</p>
        <p class="cart__total">Total: {{ total }} EUR</p>
        <button @click="checkout">Pay with Scalapay</button>
        <p class="cart__intallments">
          in 3 installments of {{ installment }} EUR
        </p>
      </div>
      <div v-else>
        Nothing is in your cart :) Go to
        <router-link to="/products" class="nav-item">Products</router-link> to
        checkour our products
      </div>
      <div v-show="showForm" class="cart__form">
        <order-form @form-submitted="sendOrder"></order-form>
      </div>
    </div>
    <button @click="redirect">Redirect</button>
  </div>
</template>

<script>
import OrderForm from "@/components/OrderForm";
// import api from "@/services/Scalapay";
export default {
  name: "Cart",
  components: {
    OrderForm
  },
  props: {
    cart: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      shipping: 10,
      showForm: false,
      items: this.cart,
      checkoutUrl: ""
    };
  },
  watch: {
    checkoutUrl: function(newUrl) {
      if (newUrl) {
        window.location.href = newUrl;
      }
    }
  },
  computed: {
    total() {
      return (
        this.cart.reduce(
          (accumulator, currentValue) =>
            accumulator +
            parseInt(currentValue.price.amount, 10) *
              parseInt(currentValue.quantity, 10),
          0
        ) + this.shipping
      );
    },
    installment() {
      return (this.total / 3).toFixed(2);
    }
  },
  methods: {
    checkout() {
      this.showForm = true;
    },
    sendOrder(consumerInfo) {
      let orderInfo = { ...consumerInfo };
      orderInfo.totalAmount = {
        amount: this.total,
        currency: "EUR"
      };

      orderInfo.merchant = {
        redirectConfirmUrl: "https://staging.portal.scalapay.com/success-url",
        redirectCancelUrl: "https://staging.portal.scalapay.com/failure-url"
      };
      orderInfo.merchantReference = "merchantOrder-1234";
      orderInfo.items = [...JSON.parse(JSON.stringify(this.cart))];
      // api.sendOrders(orderInfo).then(response => console.log(response));
    },
    redirect() {
      setTimeout(() => {
        this.checkoutUrl = "https://google.com";
      }, 2000);
    }
  }
};
</script>
<style lang="scss" scoped>
.cart {
  padding-top: 100px;

  &__list {
    border: 2px solid $primary-color;
    padding: 2rem;
  }

  &__item {
    width: 100%;
    @include flex(row, center, space-between);
    margin-bottom: 2rem;

    &__image {
      width: 10rem;
      height: auto;
    }
  }
}
</style>

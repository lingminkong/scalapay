<template>
  <div class="cart">
    <div class="container">
      <h1 class="cart__title main-heading heading--line-top">Your Cart</h1>
      <div v-if="cart.length" class="cart__content">
        <div class="cart__list">
          <div class="cart__item" v-for="item in cart" :key="item.id">
            <div class="cart__item__info">
              <img
                class="cart__item__image"
                :src="item.image"
                :alt="item.name"
              />
              <router-link :to="`/product/${item.id}`">
                <h2 class="cart__item__title">{{ item.name }}</h2>
              </router-link>
            </div>
            <div class="cart__item__action">
              <label for="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                min="1"
                max="100"
                v-model="item.quantity"
              />
              <p class="cart__item__price">
                {{ item.price.amount }} {{ item.price.currency }}
              </p>
              <button
                @click="deleteCartItem"
                :data-id="item.id"
                class="btn--incognito cart__item__delete"
              >
                delete
              </button>
            </div>
          </div>
        </div>
        <p class="cart__shipping">
          <strong>Shipping:</strong> flat rate {{ shipping }} EUR
        </p>
        <p class="cart__total"><strong>Total:</strong> {{ total }} EUR</p>
        <button
          class="btn cart__pay"
          :class="{ disabled: !canPay }"
          @click="checkout"
        >
          Pay with Scalapay ♥️
        </button>
        <p class="error-message" v-if="isOverLimit">
          Installment {{ installment }} is over our limit
          {{ config.data.maximumAmount.amount }}, please remove some products to
          use Scalapay
        </p>
        <p class="error-message" v-else-if="isUnderLimit">
          Installment {{ installment }} is under our limit
          {{ config.data.minimumAmount.amount }}, please add more products to
          use Scalapay
        </p>
        <p class="cart__installment" v-else>
          in <span class="cart__installment-number">3</span> installments of
          <span class="cart__installment-amount">{{ installment }} EUR</span>
        </p>
      </div>
      <div v-else>
        You haven't added anything into your cart yet, check out
        <router-link to="/products" class="cart__product-link"
          >Products</router-link
        >
        ♥️
      </div>
    </div>
    <div
      v-show="showForm"
      :class="{ sending: sendingOrder }"
      class="cart__form"
    >
      <div class="container">
        <order-form @form-submitted="sendOrder"></order-form>
        <p v-if="sendingError" class="error-message">
          Ooops, something went wrong when sending your order, please try again
          or contact us.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import OrderForm from "@/components/OrderForm";
import api from "@/services/Scalapay";
export default {
  name: "Cart",
  components: {
    OrderForm
  },
  props: {
    cart: {
      type: Array,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      shipping: 5,
      showForm: false,
      overLimit: false,
      underLimit: false,
      checkoutUrl: "",
      sendingOrder: false,
      sendingStatus: false
    };
  },
  watch: {
    checkoutUrl: function(newUrl) {
      if (newUrl) {
        window.location.href = newUrl;
        this.sendingError = false;
        this.sendingOrder = false;
      }
    }
  },
  computed: {
    total() {
      return (
        this.cart.reduce(
          (accumulator, currentValue) =>
            accumulator +
            parseFloat(currentValue.price.amount) * currentValue.quantity,
          0
        ) + this.shipping
      );
    },
    installment() {
      return (parseFloat(this.total) / 3).toFixed(2);
    },
    isOverLimit() {
      if (
        !this.config.isLoading &&
        parseFloat(this.installment) >
          parseFloat(this.config.data.maximumAmount.amount)
      ) {
        return true;
      }
      return false;
    },
    isUnderLimit() {
      if (
        !this.config.isLoading &&
        this.installment < parseFloat(this.config.data.minimumAmount.amount)
      ) {
        return true;
      }
      return false;
    },
    canPay() {
      return !this.isOverLimit && !this.isUnderLimit;
    }
  },
  methods: {
    checkout() {
      this.showForm = true;
    },
    sendOrder(consumerInfo) {
      let orderInfo = { ...consumerInfo };
      orderInfo.totalAmount = {
        amount: this.total.toString(),
        currency: "EUR"
      };

      orderInfo.merchant = {
        redirectConfirmUrl: "https://staging.portal.scalapay.com/success-url",
        redirectCancelUrl: "https://staging.portal.scalapay.com/failure-url"
      };
      orderInfo.merchantReference = "merchantOrder-1234";
      orderInfo.items = [...JSON.parse(JSON.stringify(this.cart))];
      this.sendingOrder = true;
      api
        .sendOrders(JSON.stringify(orderInfo))
        .then(response => (this.checkoutUrl = response.checkoutUrl))
        .catch(() => {
          this.sendingError = true;
          this.sendingOrder = false;
        });
    },
    deleteCartItem(e) {
      const id = parseInt(e.target.dataset.id, 10);
      this.$emit("delete-cart-item", id);
    }
  }
};
</script>
<style lang="scss" scoped>
.cart {
  padding: $header-height 0;
  position: relative;

  &__title {
    margin-bottom: 3rem;

    @media screen and (min-width: $screen-md) {
      margin-bottom: 4rem;
    }
  }

  &__content {
    @include flex(column, flex-start, flex-start);
    border: 2px solid $primary-color;
    padding: 2rem;

    @media screen and (min-width: $screen-md) {
      @include flex(column, flex-end, flex-start);
    }
  }

  &__product-link {
    color: $secondary-color;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    background-color: $secondary-color;
    color: $white;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: $primary-color;
      color: $white;
    }
  }

  &__list {
    margin-bottom: 2rem;
    width: 100%;
  }

  &__item {
    width: 100%;
    @include flex(column, stretch, flex-start);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba($primary-color, 0.15);

    &:first-of-type {
      padding-top: 0;
    }
    @media screen and (min-width: $screen-md) {
      @include flex(row, center, space-between);
    }

    &__info {
      @media screen and (min-width: $screen-lg) {
        @include flex(row, center, flex-start);
      }
    }

    &__image {
      @media screen and (min-width: $screen-lg) {
        margin-right: 1rem;
      }
    }

    &__action {
      @include flex(row, center, flex-start);
      @media screen and (min-width: $screen-md) {
        justify-content: flex-end;
      }
    }

    &__image {
      width: 10rem;
      height: auto;
      max-width: 100%;
    }

    &__price {
      font-weight: $font-bold;
      margin-bottom: 0;
      margin-right: 1rem;
      color: $secondary-color;
      @media screen and (min-width: $screen-md) {
        margin-right: 2rem;
      }
    }

    label {
      display: none;
      color: $primary-color;
      margin-right: 0.5rem;

      @media screen and (min-width: $screen-md) {
        display: inline-block;
      }
    }

    input {
      width: 5rem;
      margin-right: 1rem;
      @media screen and (min-width: $screen-md) {
        margin-right: 2rem;
      }
    }

    &__delete {
      transition: color 0.3s ease-in-out;
      &:hover {
        color: $message-red;
      }
    }
  }

  &__shipping,
  &__total,
  &__installment {
    text-align: left;
    @media screen and (min-width: $screen-md) {
      text-align: right;
    }
  }
  &__installment-amount,
  &__installment-number {
    font-weight: $font-bold;
    color: $secondary-color;
  }

  &__pay.disabled {
    opacity: 0.3;
    cursor: not-allowed;

    &:hover {
      &::before {
        transform: scale(0);
      }
    }
  }

  &__form {
    margin-top: 3rem;

    &.sending {
      filter: blur(5px);
    }
  }
}
</style>

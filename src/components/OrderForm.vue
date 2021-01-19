<template>
  <button @click="autoComplete">Auto Complete</button>
  <form class="order-form" @submit.prevent="onSubmit">
    <div class="order-form__group">
      <h3 class="order-form__title">Your Infomation</h3>
      <div class="order-form__input-group">
        <label for="given-names">Given Names:</label>
        <input id="given-names" type="text" v-model="givenNames" required />
      </div>
      <div class="order-form__input-group">
        <label for="surname">Surname:</label>
        <input id="surname" type="text" v-model="surname" required />
      </div>
      <div class="order-form__input-group">
        <label for="phone">Phone Number:</label>
        <input id="phone" type="tel" v-model="phoneNumber" />
      </div>
      <div class="order-form__input-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" required />
      </div>
    </div>
    <div class="order-form__group">
      <h3 class="order-form__title">Your Shipping Infomation</h3>
      <div class="order-form__input-group">
        <label for="shipping-name">Shipping Name:</label>
        <input id="shipping-name" type="text" v-model="shippingName" required />
      </div>
      <div class="order-form__input-group">
        <label for="shipping-address">Shipping Address:</label>
        <input
          id="shipping-address"
          type="text"
          v-model="shippingAddress"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="shipping-suburb">Shipping Suburb:</label>
        <input
          id="shipping-suburb"
          type="text"
          v-model="shippingSuburb"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="shipping-postcode">Shipping Postcode:</label>
        <input
          id="shipping-postcode"
          type="text"
          v-model="shippingPostcode"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="shipping-country-code">Shipping Country Code:</label>
        <input
          id="shipping-country-code"
          type="text"
          v-model="shippingCountryCode"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="shipping-phone">Shipping Phone Number:</label>
        <input
          id="shipping-phone"
          type="tel"
          v-model="shippingPhoneNumber"
          required
        />
      </div>
    </div>
    <div class="order-form__input-group">
      <label for="same-address">same to Shipping Information?</label>
      <input id="same-address" type="checkbox" v-model="sameAddress" />
    </div>
    <div v-show="!sameAddress" class="order-form__group">
      <h3 class="order-form__title">Your Billing Infomation</h3>
      <div class="order-form__input-group">
        <label for="billing-name">Billing Name:</label>
        <input id="billing-name" type="text" v-model="billingName" />
      </div>
      <div class="order-form__input-group">
        <label for="billing-address">Billing Address:</label>
        <input id="billing-address" type="text" v-model="billingAddress" />
      </div>
      <div class="order-form__input-group">
        <label for="billing-suburb">Billing Suburb:</label>
        <input id="billing-suburb" type="text" v-model="billingSuburb" />
      </div>
      <div class="order-form__input-group">
        <label for="billing-postcode">Billing Postcode:</label>
        <input id="billing-postcode" type="text" v-model="billingPostcode" />
      </div>
      <div class="order-form__input-group">
        <label for="billing-country-code">Billing Country Code:</label>
        <input
          id="billing-country-code"
          type="text"
          v-model="billingCountryCode"
        />
      </div>
      <div class="order-form__input-group">
        <label for="billing-phone">Billing Phone Number:</label>
        <input id="billing-phone" type="tel" v-model="billingPhoneNumber" />
      </div>
    </div>
    <input class="button" type="submit" value="Submit" />
  </form>
</template>
<script>
export default {
  name: "OrderForm",
  data() {
    return {
      givenNames: "",
      surname: "",
      phoneNumber: "",
      email: "",
      shippingName: "",
      shippingAddress: "",
      shippingSuburb: "",
      shippingPostcode: "",
      shippingCountryCode: "",
      shippingPhoneNumber: "",
      sameAddress: true,
      billingName: "",
      billingAddress: "",
      billingSuburb: "",
      billingPostcode: "",
      billingCountryCode: "",
      billingPhoneNumber: ""
    };
  },
  methods: {
    onSubmit() {
      let consumerInfo = {
        consumer: {
          phoneNumber: this.phoneNumber,
          givenNames: this.givenNames,
          surname: this.surname,
          email: this.email
        },
        shipping: {
          name: this.shippingName,
          line1: this.shippingAddress,
          suburb: this.shippingSuburb,
          postcode: this.shippingPostcode,
          countryCode: this.shippingCountryCode,
          phoneNumber: this.shippingPhoneNumber
        }
      };
      this.$emit("form-submitted", consumerInfo);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.recommend = null; // solution
    },
    autoComplete() {
      this.givenNames = "Michael";
      this.surname = "Kong";
      this.email = "test@test.test";
      this.shippingName = "Michael Kong";
      this.shippingAddress = "Crown Street";
      this.shippingSuburb = "Wollongong";
      this.shippingPostcode = "2500";
      this.shippingCountryCode = "AUS";
      this.shippingPhoneNumber = "0411111111";
    }
  }
};
</script>
<style lang="scss" scoped>
.order-form {
  @include flex(column, center, flex-start);
}
</style>

<template>
  <button class="btn" @click="autoComplete">Auto Complete</button>
  <form class="order-form" @submit.prevent="onSubmit">
    <div class="order-form__fields">
      <div class="order-form__consumer">
        <div class="order-form__group">
          <h3 class="order-form__title">Your Information</h3>
          <div class="order-form__input-group">
            <label for="given-names">Given Names*</label>
            <input id="given-names" type="text" v-model="givenNames" required />
          </div>
          <div class="order-form__input-group">
            <label for="surname">Surname*</label>
            <input id="surname" type="text" v-model="surname" required />
          </div>
          <div class="order-form__input-group">
            <label for="phone">Phone Number*</label>
            <input id="phone" type="tel" v-model="phoneNumber" />
          </div>
          <div class="order-form__input-group">
            <label for="email">Email*</label>
            <input id="email" type="email" v-model="email" required />
          </div>
        </div>
      </div>
      <div class="order-form__address">
        <div class="order-form__group">
          <h3 class="order-form__title">Your Shipping Information</h3>
          <div class="order-form__input-group">
            <label for="shipping-name">Shipping Name*</label>
            <input
              id="shipping-name"
              type="text"
              v-model="shippingName"
              required
            />
          </div>
          <div class="order-form__input-group">
            <label for="shipping-address">Shipping Address*</label>
            <input
              id="shipping-address"
              type="text"
              v-model="shippingAddress"
              required
            />
          </div>
          <div class="order-form__input-group">
            <label for="shipping-suburb">Shipping Suburb*</label>
            <input
              id="shipping-suburb"
              type="text"
              v-model="shippingSuburb"
              required
            />
          </div>
          <div class="order-form__input-group">
            <label for="shipping-postcode">Shipping Postcode*</label>
            <input
              id="shipping-postcode"
              type="text"
              v-model="shippingPostcode"
              required
            />
          </div>
          <div class="order-form__input-group">
            <label for="shipping-country-code">Shipping Country Code*</label>
            <input
              id="shipping-country-code"
              type="text"
              v-model="shippingCountryCode"
              required
            />
          </div>
          <div class="order-form__input-group">
            <label for="shipping-phone">Shipping Phone Number*</label>
            <input
              id="shipping-phone"
              type="tel"
              v-model="shippingPhoneNumber"
              required
            />
          </div>
        </div>
        <div class="order-form__input-group order-form__input-group--checkbox">
          <label for="same-address">same to Shipping Information?</label>
          <input id="same-address" type="checkbox" v-model="sameAddress" />
        </div>
        <div v-show="!sameAddress" class="order-form__group">
          <h3 class="order-form__title">Your Billing Information</h3>
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
            <input
              id="billing-postcode"
              type="text"
              v-model="billingPostcode"
            />
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
      </div>
    </div>
    <div v-if="errors.length" class="order-form__errors">
      <p
        v-for="error in errors"
        :key="error"
        class="order-form__error error-message"
      >
        {{ error }}
      </p>
    </div>
    <input class="btn order-form__submit" type="submit" value="Submit" />
  </form>
</template>
<script>
export default {
  name: "OrderForm",
  data() {
    return {
      errors: [],
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
      this.checkForm();
      if (this.errors.length) return;
      let consumer = {
        phoneNumber: this.phoneNumber,
        givenNames: this.givenNames,
        surname: this.surname,
        email: this.email
      };
      let shipping = {
        name: this.shippingName,
        line1: this.shippingAddress,
        suburb: this.shippingSuburb,
        postcode: this.shippingPostcode,
        countryCode: this.shippingCountryCode,
        phoneNumber: this.shippingPhoneNumber
      };
      let billing = this.sameAddress
        ? {
            name: this.shippingName,
            line1: this.shippingAddress,
            suburb: this.shippingSuburb,
            postcode: this.shippingPostcode,
            countryCode: this.shippingCountryCode,
            phoneNumber: this.shippingPhoneNumber
          }
        : {
            name: this.billingName,
            line1: this.billingAddress,
            suburb: this.billingSuburb,
            postcode: this.billingPostcode,
            countryCode: this.billingCountryCode,
            phoneNumber: this.billingPhoneNumber
          };
      let consumerInfo = {
        consumer,
        shipping,
        billing
      };
      // console.log(consumerInfo);
      this.$emit("form-submitted", consumerInfo);
    },
    checkForm() {
      this.errors = [];
      if (this.phoneNumber.length < 10 || this.shippingPhoneNumber < 10) {
        this.errors.push("Valid phone number required.");
      }
      if (this.shippingCountryCode.length != 2) {
        this.errors.push("Country code must be 2 characters.");
      }
      if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    autoComplete() {
      this.givenNames = "Michael";
      this.surname = "Kong";
      this.email = "test@test.test";
      this.phoneNumber = "0412345678";
      this.shippingName = "Michael Kong";
      this.shippingAddress = "Crown Street";
      this.shippingSuburb = "Wollongong";
      this.shippingPostcode = "2500";
      this.shippingCountryCode = "AU";
      this.shippingPhoneNumber = "0412345678";
    }
  }
};
</script>
<style lang="scss" scoped>
.order-form {
  width: 100%;
  @include flex(column, center, flex-start);

  &__fields {
    @include flex(column, stretch, flex-start);
    width: 100%;

    @media screen and (min-width: $screen-md) {
      @include flex(row, flex-start, space-between);
    }
  }

  &__consumer {
    width: 100%;
    @media screen and (min-width: $screen-md) {
      width: 45%;
    }
  }

  &__address {
    width: 100%;
    @media screen and (min-width: $screen-md) {
      width: 45%;
    }
  }
  &__group {
    width: 100%;
    margin-bottom: 2rem;
  }

  &__input-group {
    margin-bottom: 1rem;
  }

  &__error {
    margin-bottom: 0.5rem;
  }

  &__submit {
    margin-top: 2rem;
  }
}
</style>

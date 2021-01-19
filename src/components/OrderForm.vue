<template>
  <form class="order-form" @submit.prevent="onSubmit">
    <div class="order-form__group">
      <h3 class="order-form__title">Your Infomation</h3>
      <div class="order-form__input-group">
        <label for="first-name">First Name:</label>
        <input id="first-name" type="text" v-model="firstName" required />
      </div>
      <div class="order-form__input-group">
        <label for="last-name">Last Name:</label>
        <input id="last-name" type="text" v-model="lastName" required />
      </div>
      <div class="order-form__input-group">
        <label for="phone">Phone Number:</label>
        <input id="phone" type="tel" v-model="phoneNumber" required />
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
    <div class="order-form__group">
      <h3 class="order-form__title">Your Billing Infomation</h3>
      <div class="order-form__input-group">
        <label for="same-address">same to Shipping Information?</label>
        <input
          id="same-address"
          type="checkbox"
          v-model="sameAddress"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="billing-name">Billing Name:</label>
        <input id="billing-name" type="text" v-model="billingName" required />
      </div>
      <div class="order-form__input-group">
        <label for="billing-address">Billing Address:</label>
        <input
          id="billing-address"
          type="text"
          v-model="billingAddress"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="billing-suburb">Billing Suburb:</label>
        <input
          id="billing-suburb"
          type="text"
          v-model="billingSuburb"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="billing-postcode">Billing Postcode:</label>
        <input
          id="billing-postcode"
          type="text"
          v-model="billingPostcode"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="billing-country-code">Billing Country Code:</label>
        <input
          id="billing-country-code"
          type="text"
          v-model="billingCountryCode"
          required
        />
      </div>
      <div class="order-form__input-group">
        <label for="billing-phone">Billing Phone Number:</label>
        <input
          id="billing-phone"
          type="tel"
          v-model="billingPhoneNumber"
          required
        />
      </div>
    </div>

    {{ sameAddress }}
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
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
  }
};
</script>

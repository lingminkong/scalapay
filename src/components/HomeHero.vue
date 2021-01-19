<template>
  <div class="hero">
    <h1>Scalapay</h1>
    <p>buy now, pay later</p>
    <p>Pay installment in 3</p>
    <p v-if="config.minimumAmount.amount">As little as {{ min }}</p>
    <p v-if="config.maximumAmount.amount">As much as {{ max }}</p>

    <router-link to="/products" class="nav-item"
      >Check out our products</router-link
    >
  </div>
</template>

<script>
import api from "@/services/Scalapay";

export default {
  name: "HomeHero",
  components: {},
  data() {
    return {
      config: {
        minimumAmount: {
          amount: null,
          currency: null
        },
        maximumAmount: {
          amount: null,
          currency: null
        }
      }
    };
  },
  created() {
    // this.getConfig();
  },
  methods: {
    async getConfig() {
      api.getConfig().then(response => (this.config = response));
      // api.merchant().then(response => console.log(response));
    }
  },
  computed: {
    min() {
      return (
        this.config.minimumAmount.amount +
        " " +
        this.config.minimumAmount.currency
      );
    },
    max() {
      return (
        this.config.maximumAmount.amount +
        " " +
        this.config.maximumAmount.currency
      );
    }
  }
};
</script>

<style>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  height: 100vh;
}
</style>

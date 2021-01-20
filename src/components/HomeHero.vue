<template>
  <div class="hero">
    <h1 class="hero__title">Scalapay</h1>
    <p class="hero__description">buy now, pay later</p>
    <p class="hero__config">Pay installment in 3</p>
    <p class="hero__config" v-if="config.minimumAmount.amount">
      As little as {{ min }}
    </p>
    <p class="hero__config" v-if="config.maximumAmount.amount">
      As much as {{ max }}
    </p>
    <p v-if="configError">check back later to see more information</p>

    <router-link to="/products" class="hero__link btn--line"
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
      },
      configError: false
    };
  },
  created() {
    this.getConfig();
  },
  methods: {
    async getConfig() {
      api
        .getConfig()
        .then(response => (this.config = response))
        .catch(() => {
          this.configError = true;
        });
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
<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $white;
  color: $primary-color;
  height: 100vh;

  &__title {
    @include font($font-family, $font-bold, 4rem);
    color: $primary-color;
  }

  &__description {
    @include font($font-family, $font-bold, 1.5rem);
    color: $secondary-color;
  }

  &__link {
    margin-top: 2rem;
    @media screen and (min-width: $screen-md) {
      margin-top: 3rem;
    }
  }
}
</style>

<template>
  <div class="hero">
    <div class="container">
      <h1 class="hero__title main-heading heading--line-top">
        Buy now, pay later
      </h1>
      <p class="hero__description">
        Choose Scalapay at checkout and pay for your purchase over three
        instalments without paying any interest and get your order straight
        away.
      </p>
      <div v-if="!config.isLoading">
        <p class="hero__config" v-if="config.data.numberOfPayments">
          <span>{{ config.data.numberOfPayments }}</span> installments without
          interest
        </p>
        <p class="hero__config" v-if="config.data.minimumAmount.amount">
          As little as <span>{{ config.data.minimumAmount.amount }}</span>
        </p>
        <p class="hero__config" v-if="config.data.maximumAmount.amount">
          As much as <span>{{ config.data.maximumAmount.amount }}</span>
        </p>
      </div>
      <div v-else>
        <div class="hero__loading">
          <div class="hero__loading__dots"></div>
        </div>
      </div>

      <router-link to="/products" class="hero__link btn--line"
        >Check out our products</router-link
      >
    </div>
    <img class="hero__heart" alt="Scalapay Heart" src="@/assets/heart.png" />
  </div>
</template>

<script>
// import api from "@/services/Scalapay";

export default {
  name: "HomeHero",
  props: {
    config: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.hero {
  padding: $content-padding 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $white;
  color: $primary-color;
  min-height: 100vh;
  position: relative;

  &__title {
    color: $primary-color;
  }

  &__description {
    @include font($font-family, $font-bold, 1);
    color: $secondary-color;
    margin-bottom: 3rem;
    width: 90%;
    @media screen and (min-width: $screen-md) {
      font-size: 1.2rem;
      margin-bottom: 5rem;
      width: 70%;
    }
  }

  &__config {
    background-color: $secondary-color;
    padding: 1rem 2rem;
    text-align: center;
    @include font($font-family, $font-normal, 1rem);
    color: $white;
    @media screen and (min-width: $screen-md) {
      display: inline-block;
      margin-right: 1rem;
    }

    span {
      color: $white;
      font-weight: $font-bold;
    }
  }

  &__link {
    margin-top: 2rem;
    @media screen and (min-width: $screen-md) {
      margin-top: 3rem;
    }
  }

  &__heart {
    position: absolute;
    width: 50%;
    height: auto;
    right: 0;
    top: $header-height;

    @media screen and (min-width: $screen-md) {
      width: 30%;
      bottom: 0;
      top: auto;
    }
  }

  @keyframes loading {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  &__loading {
    @include flex(row, center, flex-start);
    padding-left: 3rem;

    &__dots {
      position: relative;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      background-color: $secondary-color;
      color: $secondary-color;
      transform: scale(1.25, 1.25);
      animation: dotStretching 2s infinite ease-in;

      &::before,
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        background-color: $secondary-color;
        color: $secondary-color;
      }

      &::before {
        animation: dotStretchingBefore 2s infinite ease-in;
      }
      &::after {
        animation: dotStretchingAfter 2s infinite ease-in;
      }
    }
  }
}
@keyframes dotStretching {
  0% {
    transform: scale(1.25, 1.25);
  }
  50%,
  60% {
    transform: scale(0.8, 0.8);
  }
  100% {
    transform: scale(1.25, 1.25);
  }
}

@keyframes dotStretchingBefore {
  0% {
    transform: translate(0) scale(0.7, 0.7);
  }
  50%,
  60% {
    transform: translate(-20px) scale(1, 1);
  }
  100% {
    transform: translate(0) scale(0.7, 0.7);
  }
}

@keyframes dotStretchingAfter {
  0% {
    transform: translate(0) scale(0.7, 0.7);
  }
  50%,
  60% {
    transform: translate(20px) scale(1, 1);
  }
  100% {
    transform: translate(0) scale(0.7, 0.7);
  }
}
</style>

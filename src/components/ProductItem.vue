<template>
  <div class="card">
    <div
      class="card__image"
      v-if="data.image"
      :style="{ backgroundImage: `url(${data.image})` }"
    ></div>
    <h2 class="card__title">{{ data.name }}</h2>
    <p class="card__price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["data"],
  data() {
    return {};
  },
  computed: {
    price() {
      return `${this.data.price.amount} ${this.data.price.currency}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  @include flex(column, flex-start, flex-start);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.3rem);
    .card__image::before {
      opacity: 0;
    }
  }
  &__image {
    @include background-image;
    width: 100%;
    min-height: 20rem;
    position: relative;

    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        to bottom,
        rgba($black, 0),
        rgba($black, 0.2) 60%,
        rgba($black, 0.5) 100%
      );
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }
  }

  &__title {
    font-weight: $font-bold;
    margin-bottom: 0.5rem;
  }

  &__price {
    @include font($font-family, $font-bold, 1rem);

    color: $secondary-color;
  }
}
</style>

<template>
  <div class="card">
    <img :src="data.image" alt="data.name" class="card__image" />
    <div class="card__title">{{ data.name }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["data"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.card {
  @include flex(column, center, flex-start);
  width: 20rem;
  &__image {
    @include background-image;
    height: 10rem;
    width: 10rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-weight: $font-bold;
  }
}
</style>

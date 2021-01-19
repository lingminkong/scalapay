<template>
  <div class="card">
    <div
      class="card__image"
      :style="{ backgroundImage: `url(${data.image})` }"
    ></div>
    <div class="card__title">{{ data.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Product Item",
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
    height: 20rem;
    width: 20rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-weight: $font-bold;
  }
}
</style>

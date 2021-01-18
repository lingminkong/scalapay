<template>
  <div class="home">
    <div class="hero">
      <h1>Scalapay</h1>
      <p>buy now, pay later</p>
      <p>Pay installment in 3</p>
      <p v-if="config.minimumAmount.amount">As little as {{ min }}</p>
      <p v-if="config.maximumAmount.amount">As much as {{ max }}</p>
      <Button text="learn more" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/BaseButton";
import api from "@/services/Scalapay";
export default {
  name: "Home",
  components: {
    Button
  },
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
  mounted() {
    this.getConfig();
  },
  methods: {
    async getConfig() {
      api.getConfig().then(response => (this.config = response));
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
  background-color: white;
  color: black;
  height: 50vh;
}
</style>

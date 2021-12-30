<template>
  <div>
    <h1>{{ products[5].name }}</h1>
    <img :src="products[5].imgUrl" alt="" />
    <p class="text">{{ products[5].text }}</p>
    <p class="cena">Cena: {{ products[5].cena }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Smetarniki",
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style></style>

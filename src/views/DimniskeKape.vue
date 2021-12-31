<template>
  <div>
    <h1>{{ products[6].name }}</h1>
    <img :src="products[6].imgUrl" alt="" />
    <p class="text">{{ products[6].text }}</p>
    <p class="cena">Cena: {{ products[6].cena }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DimniskeKape",
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style></style>

<template>
  <div id="ograja-polzi">
    <h1>{{ products[2].name }}</h1>
    <img :src="products[2].imgUrl" alt="" />
    <p class="text">{{ products[2].text }}</p>
    <p class="cena">Cena: {{ products[2].cena }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OgrajaPolzi",
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style>
#ograja-polzi {
  position: absolute;
}
</style>

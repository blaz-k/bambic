<template>
  <div id="okenske-police">
    <h1>{{ products[3].name }}</h1>
    <img :src="products[3].imgUrl" alt="" />
    <p class="text">{{ products[3].text }}</p>
    <p class="cena">Cena: {{ products[3].cena }}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "OkenskePolice",
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style>
#okenske-police {
  position: absolute;
}
</style>

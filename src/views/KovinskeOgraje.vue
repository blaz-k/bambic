<template>
  <div id="kovinske-ograje">
    <h1>{{ products[1].name }}</h1>
    <img :src="products[1].imgUrl" alt="" />
    <p class="text">{{ products[1].text }}</p>
    <p class="cena">Cena: {{ products[1].cena }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "KovinskeOgraje",
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
#kovinske-ograje {
  position: absolute;
}
</style>

<template>
  <div id="pokrovi-crpalk">
    <h1>{{ products[4].name }}</h1>
    <img :src="products[4].imgUrl" alt="" />
    <p class="text">{{ products[4].text }}</p>
    <p class="cena">Cena: {{ products[4].cena }}</p>
    <Footer />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "PokroviToplotnih",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style>
#pokrovi-crpalk {
  position: absolute;
}
</style>

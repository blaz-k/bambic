<template>
  <div id="dimniske-kape">
    <h1>{{ products[6].name }}</h1>
    <img :src="products[6].imgUrl" alt="" />
    <p class="text">{{ products[6].text }}</p>
    <p class="cena">Cena: {{ products[6].cena }}</p>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "DimniskeKape",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style>
#dimniske-kape {
  position: absolute;
  border: 3px solid brown;
  margin-left: auto;

  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

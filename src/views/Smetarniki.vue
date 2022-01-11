<template>
  <div id="smetarnik">
    <h1>{{ products[5].name }}</h1>
    <img :src="products[5].imgUrl" alt="" />
    <p class="text">{{ products[5].text }}</p>
    <p class="cena">Cena: {{ products[5].cena }}</p>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "Smetarniki",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style scoped>
#smetarnik {
  position: absolute;
}
.p {
  font-size: 1.5rem;
}
</style>

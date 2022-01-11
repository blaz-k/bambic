<template>
  <div id="ograja-polzi">
    <h1>{{ products[2].name }}</h1>
    <img :src="products[2].imgUrl" alt="" />
    <p class="text">{{ products[2].text }}</p>
    <p class="cena">Cena: {{ products[2].cena }}</p>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "OgrajaPolzi",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style scoped>
#ograja-polzi {
  position: absolute;
}

#ograja-polzi p {
  font-size: 1.5rem;
}
</style>

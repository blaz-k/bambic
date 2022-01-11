<template>
  <div id="pokrovi-crpalk">
    <h1>{{ products[4].name }}</h1>
    <img :src="products[4].imgUrl" alt="" />
    <div class="container">
      <div class="text-content">
        <div class="">{{ products[4].text }} Cena: {{ products[4].cena }}</div>
      </div>
    </div>
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

<style scoped>
#pokrovi-crpalk {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

#pokrovi-crpalk .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
}

h1 {
  font-size: 2.8rem;
  color: rgb(209, 14, 14);
  margin: 40px 0 20px 0;
  text-align: center;
}
</style>

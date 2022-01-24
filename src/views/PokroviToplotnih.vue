<template>
  <div id="pokrovi-crpalk">
    <h1>{{ products[5].name }}</h1>
    <div class="container">
      <div class="osnovni-del bg-light p-4">
        <div class="text-content">
          <div class="">{{ products[5].text }}</div>
        </div>

        <div class="cena">
          Cena: {{ products[5].cena }} ----> a jo sploh prikažemo?
        </div>
      </div>

      <img :src="products[5].imgUrl" alt="" />
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
#pokrovi-crpalk .cena {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.1rem;
  margin-top: 5rem;

  font-weight: 700;
  display: flex;
  justify-content: flex-start;
}
img {
  margin-top: 7rem;
}
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

/*#pokrovi-crpalk .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
}*/

h1 {
  font-size: 2.8rem;
  color: #ff1100;
  margin: 40px 0 20px 0;
  text-align: center;
}
</style>

<template>
  <div id="okenske-police">
    <h1>{{ products[3].name }}</h1>
    <img :src="products[3].imgUrl" alt="" />

    <div class="container">
      <div class="text-content">
        <div>{{ products[3].text }}</div>
      </div>
    </div>
    <!-- <p class="text">{{ products[3].text }}</p>
    <p class="cena">Cena: {{ products[3].cena }}</p> -->
    <Footer />
  </div>

  <!-- <div id="kovinske-ograje">
    <h1>{{ products[1].name }}</h1>
    <img :src="products[1].imgUrl" alt="" />

    <div class="container">
      <div class="text-content">
        <div class="">{{ products[1].text }}</div>
      </div>
    </div>

    <Footer />
  </div> -->
</template>
<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "OkenskePolice",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style scoped>
.container {
  max-width: 85%;
}
#okenske-police {
  position: absolute;
  position: absolute;
  border: 3px solid brown;
  margin-left: auto;

  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

#okenske-police .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
}
</style>

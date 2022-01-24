<template>
  <div id="okenske-police">
    <h1>{{ products[4].name }}</h1>

    <div class="container">
      <div class="osnovni-del bg-light p-4">
        <div class="text-content">
          <div>{{ products[4].text }}</div>
        </div>
      </div>
    </div>

    <img :src="products[4].imgUrl" alt="" />

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
img {
  margin-top: 7rem;
  margin-bottom: 3rem;
}
.container {
}

h1 {
  font-size: 2.8rem;
  color: #ff1100;
  margin: 40px 0 20px 0;
  text-align: center;
}

#okenske-police {
  position: absolute;
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

/*#okenske-police .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
}*/
</style>

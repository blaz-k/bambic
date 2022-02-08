<template>
  <div id="okenske-police">
    <h2>{{ products[4].name }}</h2>
    <div class="">
      <div class="container mb-4 text">{{ products[4].text }}</div>
    </div>
    <hr />

    <div class="container">
      <div class="-fx-image-gal slika">
        <!-- <div class="-fx-gal-item"> -->
        <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
          <div v-for="slika in slikeOkenske" :key="slika">
            <SlikeOkenske :slika="slika" />
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>

    <!-- <img :src="products[4].imgUrl" alt="" /> -->

    <!-- <p class="text">{{ products[3].text }}</p>
    <p class="cena">Cena: {{ products[3].cena }}</p> -->
    <!-- <Footer /> -->
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
import SlikeOkenske from "../components/SlikeStrani/SlikeOkenske.vue";

export default {
  name: "OkenskePolice",
  computed: {
    ...mapState(["products"]),
    ...mapState(["slikeOkenske"]),
  },
  components: { Footer, SlikeOkenske },
};
</script>

<style scoped>
img {
  margin-top: 7rem;
  margin-bottom: 3rem;
}
.container {
}

hr {
  background-color: rgba(255, 17, 0, 255);
  height: 6px;
  border: solid rgba(255, 17, 0, 255);
  width: 55%;
  margin: 0 auto 3rem;
}

h2 {
  text-transform: uppercase;
  /* font-size: 2rem; */
  color: #242424;
  margin: 40px 0 20px 0;
  text-align: center;
}

#okenske-police {
  /* position: absolute; */
  /* position: absolute; */
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

.text {
  font-size: 17px;
}
</style>

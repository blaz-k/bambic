<template>
  <div id="ograja-polzi">
    <h2>{{ products[2].name }}</h2>
    <div class=""></div>
    <div class="container mb-4 text">{{ products[2].text }}</div>
    <hr />
    <div class="container">
      <div class="-fx-image-gal slika">
        <!-- <div class="-fx-gal-item"> -->
        <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
          <div v-for="slika in slikePolzi" :key="slika">
            <SlikePolzi :slika="slika" />
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";
import SlikePolzi from "../components/SlikeStrani/SlikePolzi.vue";

export default {
  name: "“Polzi",
  computed: {
    ...mapState(["products"]),
    ...mapState(["slikePolzi"]),
  },
  components: { Footer, SlikePolzi },
};
</script>

<style scoped>
img {
  margin-top: 7rem;
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
  color: #242424;
  margin: 40px 0 20px 0;
  text-align: center;
}

#ograja-polzi {
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

#ograja-polzi .cena {
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
/*#ograja-polzi .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
}*/

.text {
  font-size: 17px;
}
</style>

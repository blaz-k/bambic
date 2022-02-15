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
  </div>
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

.text {
  font-size: 17px;
}
</style>

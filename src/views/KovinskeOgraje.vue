<template>
  <div id="kovinske-ograje">
    <h1>{{ products[1].name }}</h1>
    <hr />

    <div class="container">
      <div class="osnovni-del bg-light p-4">
        <div class="text-content">
          <div class="">{{ products[1].text }}</div>
        </div>
      </div>
    </div>

    <div class="-fx-image-gal">
      <!-- <div class="-fx-gal-item"> -->
      <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
        <div v-for="slika in slikeKovinska" :key="slika">
          <SlikeKovinska :slika="slika" />
        </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- <p class="cont">{{ products[1].text }}</p> -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";
import SlikeKovinska from "../components/SlikeStrani/SlikeKovinska.vue";

export default {
  name: "KovinskeOgraje",
  computed: {
    ...mapState(["products"]),
    ...mapState(["slikeKovinska"]),
  },
  components: { Footer, SlikeKovinska },
};
</script>

<style scoped>
.-fx-image-gal {
  margin-top: 10rem;
}
img {
  margin-top: 7rem;
}
.container {
  max-width: 85%;
}

hr {
  background-color: rgba(255, 17, 0, 255);
  height: 6px;
  border: solid rgba(255, 17, 0, 255);
  width: 55%;
  margin: 0 auto 3rem;
}

h1 {
  text-transform: uppercase;
  font-size: 3rem;
  color: #ff1100;
  margin: 40px 0 20px 0;
  text-align: center;
}

li {
  font-size: 1.1rem;
  margin-top: 0rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
}

#kovinske-ograje {
  position: absolute;
  margin-left: auto;

  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "PT Serif", serif;
}

/*#kovinske-ograje .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
}*/
</style>

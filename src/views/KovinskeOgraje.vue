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

    <div class="scroll-to-top">
      <button @click="scrollToTop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4a5568"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M18 15l-6-6-6 6" /></svg
        >Na začetek
      </button>
    </div>
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
  methods: {
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 1);

      function frame() {
        if (0 > currentScroll) clearInterval(int);
        else {
          currentScroll = currentScroll - 80;
          document.documentElement.scrollTop = currentScroll;
        }
      }
    },
  },
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
  color: #272525;
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
  font-family: "Roboto Condensed", sans-serif;

  /* font-family: "PT Serif", serif; */
}

@media only screen and (max-width: 419px) {
  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    color: #272525;

    margin: 40px 0 20px 0;
    text-align: center;
  }
}
</style>

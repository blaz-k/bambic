<template>
  <div id="ostalo">
    <h1 class="heading">Ostala ponudba</h1>

    <div class="stran" id="ena"><PokroviToplotnih /></div>

    <div class="stran" id="dva"><Kontejner /></div>

    <div class="stran" id="tri"><RobotskeKosilnice /></div>

    <div class="stran" id="stiri"><OkenskePolice /></div>

    <div class="stran" id="pet"><DimniskeKape /></div>

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

    <div class="stran" id="sest"><OgrajaPolzi /></div>

    <Footer />
  </div>
</template>

<script>
import OgrajaPolzi from "./OgrajaPolzi.vue";
import OkenskePolice from "./OkenskePolice.vue";
import PokroviToplotnih from "./PokroviToplotnih.vue";
import DimniskeKape from "./DimniskeKape.vue";
import RobotskeKosilnice from "./RobotskeKosilnice.vue";
import Footer from "../components/Footer.vue";
import Kontejner from "../components/Kontejner.vue";
export default {
  name: "Ostalo",
  components: {
    OgrajaPolzi,
    OkenskePolice,
    PokroviToplotnih,
    DimniskeKape,
    RobotskeKosilnice,
    Footer,
    Kontejner,
  },

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
hr {
  background-color: rgba(255, 17, 0, 255);
  height: 6px;
  border: solid rgba(255, 17, 0, 255);
  width: 55%;
  margin: 0 auto 3rem;
}

h1 {
  text-transform: uppercase;
  /* font-size: 3rem; */
  color: #ff1100;
  margin: 40px 0 20px 0;
  text-align: center;
}
.heading {
  margin-bottom: 5rem;
}

.stran {
  margin-bottom: 8rem;
}

#ostalo {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  margin-top: 5rem;
}

.scroll-to-top {
  padding: 250px 0;
  position: absolute;
  right: 1rem;
}
</style>

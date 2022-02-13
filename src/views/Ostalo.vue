<template>
  <div id="ostalo">
    <h1 class="heading">Ostala ponudba</h1>

    <div class="stran"><PokroviToplotnih /></div>

    <div class="stran"><RobotskeKosilnice /></div>

    <div class="stran"><OkenskePolice /></div>

    <div class="stran"><DimniskeKape /></div>

    <div class="stran"><OgrajaPolzi /></div>

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
export default {
  name: "Ostalo",
  components: {
    OgrajaPolzi,
    OkenskePolice,
    PokroviToplotnih,
    DimniskeKape,
    RobotskeKosilnice,
    Footer,
  },
};
</script>

<style>
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
</style>

<template>
  <div id="robotske-kosilnice">
    <h2>{{ products[7].name }}</h2>
    <div>
      <div class="container mb-4 text">{{ products[7].text }}</div>
    </div>
    <hr />

    <div class="container">
      <div class="-fx-image-gal slika">
        <!-- <div class="-fx-gal-item"> -->
        <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
          <div v-for="slika in slikeRobotskih" :key="slika">
            <SlikeRobotskih :slika="slika" />
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
import SlikeRobotskih from "../components/SlikeStrani/SlikeRobotskih.vue";

export default {
  name: "RobotskeKosilnice",
  computed: {
    ...mapState(["products"]),
    ...mapState(["slikeRobotskih"]),
  },
  components: { Footer, SlikeRobotskih },
};
</script>

<style scoped>
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

h2 {
  text-transform: uppercase;
  color: #242424;
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

#robotske-kosilnice {
  /* position: absolute; */
  margin-left: auto;

  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "PT Serif", serif;
}

.text {
  font-size: 17px;
}
</style>

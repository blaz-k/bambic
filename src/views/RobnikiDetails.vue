<template>
  <div id="robniki-details">
    <button class="btn btn-outline-warning" @click="back">Nazaj</button>

    <div id="robniki-details">
      <h1>{{ robnikName }}</h1>

      <div class="container">
        <div class="osnovni-del bg-light p-4">
          <div class="text-content">
            <div>{{ robnikText }}</div>
          </div>
        </div>
      </div>

      <div v-if="robnikiId == 1">
        <img :src="robnikImages" alt="" />
        <div class="container">
          <div class="-fx-image-gal slika">
            <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
              <div v-for="slika in slikeOsnovniRobniki" :key="slika">
                <Z :slika="slika" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="robnikiId == 2">
        <img :src="robnikImages" alt="" />
        <div class="container">
          <div class="-fx-image-gal slika">
            <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
              <div v-for="slika in slikeLRobniki" :key="slika">
                <Z :slika="slika" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="robnikiId == 3">
        <img :src="robnikImages" alt="" />
        <div class="container">
          <div class="-fx-image-gal slika">
            <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
              <div v-for="slika in slikeZarezeRobniki" :key="slika">
                <Z :slika="slika" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="robnikiId == 4">
        <img :src="robnikImages" alt="" />
        <div class="container">
          <div class="-fx-image-gal slika">
            <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
              <div v-for="slika in slikeTRobniki" :key="slika">
                <Z :slika="slika" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="robnikiId == 5">
        <img :src="robnikImages" alt="" />
        <div class="container">
          <div class="-fx-image-gal slika">
            <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
              <div v-for="slika in slikeZRobniki" :key="slika">
                <Z :slika="slika" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Footer from "../components/Footer.vue";
import Z from "../components/SlikeStrani/robniki/Z.vue";
export default {
  name: "RobnikiDetails",
  props: ["robnikiId", "robnikName", "robnikText", "robnikImages", "imgRobnik"],
  components: { Footer, Z },
  computed: {
    ...mapState(["slikeOsnovniRobniki"]),
    ...mapState(["slikeZRobniki"]),
    ...mapState(["slikeTRobniki"]),
    ...mapState(["slikeZarezeRobniki"]),
    ...mapState(["slikeLRobniki"]),
  },
  setup(props) {
    console.log(props.robnikiId.id);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2c3e50;
  /* color: #42b983; */
  background: linear-gradient(to right, #8b8686, #5a5757) center no-repeat;
}

#robniki-details {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Roboto Condensed", sans-serif;
}
</style>

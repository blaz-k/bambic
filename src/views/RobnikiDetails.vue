<template>
  <div>
    <button @click="back">Nazaj</button>
    <!-- <button @click="forward">Forward</button> -->
    <!-- <button @click="redirect">Redirect</button> -->
    <div id="robniki-details">
      <h1>{{ robnikName }}</h1>

      <div class="container">
        <div class="osnovni-del bg-light p-4">
          <div class="text-content">
            <div>{{ robnikText }}</div>
          </div>
        </div>
      </div>

      <img :src="robnikImages" alt="" />

      <!-- <p class="text">{{ products[3].text }}</p>
    <p class="cena">Cena: {{ products[3].cena }}</p> -->
      <Footer />
    </div>
    <!-- <h1>{{ robnikName }}</h1>
    <p>{{ robnikText }}</p>
    <div v-for="slika in robnikImages" :key="slika">
      <img :src="slika" alt="" /> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "RobnikiDetails",
  props: ["robnikiId", "robnikName", "robnikText", "robnikImages", "imgRobnik"],
  setup(props) {
    console.log(props.robnikiId.id);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // forward() {
    //   this.$router.go(1);
    // },
    // redirect() {
    //   this.$router.push({
    //     name: "Home",
    //   });
    // },
  },
  components: { Footer },
};
</script>

<style scoped>
button {
  font-weight: bold;
  color: #2c3e50;
  color: #42b983;
}

#nav a {
}

#nav a.router-link-exact-active {
}
</style>

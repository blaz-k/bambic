<template>
  <div id="smetarnik">
    <h1>{{ products[5].name }}</h1>
    <img :src="products[5].imgUrl" alt="" />
    <div class="container">
      <div class="text-content">
        <div class="">{{ products[5].text }}</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "Smetarniki",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style scoped>
#smetarnik {
  position: absolute;
  border: 3px solid brown;
  margin-left: auto;

  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.p {
  font-size: 1.5rem;
}
</style>

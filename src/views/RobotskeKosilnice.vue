<template>
  <div id="robotske-kosilnice">
    <h1>{{ products[7].name }}</h1>
    <hr />

    <div class="container">
      <div class="osnovni-del bg-light p-4">
        <div class="text-content">
          <div class="">{{ products[7].text }}</div>
        </div>
      </div>
    </div>
    <img :src="products[7].imgUrl" alt="" />

    <!-- <p class="cont">{{ products[1].text }}</p> -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "RobotskeKosilnice",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style scoped>
img {
  margin-top: 7rem;
}
.container {
  max-width: 85%;
}

h1 {
  font-size: 2.8rem;
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

#robotske-kosilnice {
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

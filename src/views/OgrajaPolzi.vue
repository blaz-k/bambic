<template>
  <div id="ograja-polzi">
    <h1>{{ products[2].name }}</h1>
    <hr />
    <div class="container">
      <div class="osnovni-del bg-light p-4">
        <div class="text-content">
          <div class="">{{ products[2].text }}</div>
        </div>
      </div>
    </div>
    <img :src="products[2].imgUrl" alt="" />

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "OgrajaPolzi",
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
h1 {
  font-size: 3rem;
  color: #ff1100;
  margin: 40px 0 20px 0;
  text-align: center;
}

#ograja-polzi {
  position: absolute;
  margin-left: auto;

  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

#ograja-polzi .cena {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.1rem;
  margin-top: 5rem;

  font-weight: 700;
  display: flex;
  justify-content: flex-start;
}
/*#ograja-polzi .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
}*/
</style>

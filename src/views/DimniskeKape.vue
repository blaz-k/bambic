<template>
  <div id="dimniske-kape">
    <h1>{{ products[6].name }}</h1>
    <hr />

    <div class="container">
      <div class="osnovni-del bg-light p-4">
        <div class="text-content">
          <div class="">{{ products[6].text }}</div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "DimniskeKape",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style scoped>
#dimniske-kape {
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

/*#dimniske-kape .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
}*/

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
</style>

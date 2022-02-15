<template>
  <div class="text-center">
    <div class="text-primary-600 text-9xl font-bold my-5 error">404</div>
    <div class="text-2xl text-gray-500 my-5 error-text">
      Oops. Prišlo je do napake. Strani ni bilo mogoče prikazati...
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Error404",
  components: { Footer },
};
</script>

<style scoped>
.text-center {
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
.error {
  font-size: 9rem;
}

.error-text {
  font-size: 4rem;
}

@media only screen and (max-width: 419px) {
  .error-text {
    font-size: 0.7rem;
  }

  .error {
    font-size: 4rem;
  }
}
</style>

<template>
  <img :src="carouselProduct.imgUrl" class="d-block w-100" alt="..." />
  <p>{{ carouselProduct.name }}</p>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Carousel",
  props: ["carouselProduct"],
  //   computed: {
  //     ...mapState(["products"]),
  //   },
};
</script>

<style></style>

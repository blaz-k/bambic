<template>
  <img :src="carouselProduct.imgUrl" class="d-block w-100" alt="..." />
  <p>{{ carouselProduct.name }}</p>
</template>

<script>
export default {
  name: "Carousel",
  props: ["carouselProduct"],
};
</script>

<style></style>

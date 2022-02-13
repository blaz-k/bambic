<template>
  <div class="-fx-gal-image-thumb" tabindex="1">
    <img :src="slika.imgBis" />
  </div>
  <div class="-fx-gal-image-big">
    <img :src="slika.imgUrl" />
  </div>
</template>

<script>
export default {
  props: ["slika"],
};
</script>

<style></style>

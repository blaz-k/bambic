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

<style>
p {
  font-size: 1rem;
  padding: 0 20%;
}

/* gallery specific CSS */

.-fx-image-gal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 85%; /* arbitrary valye */
  margin: 0px auto;
}
.-fx-gal-item {
  width: 30%; /* for 3 columns */
  margin: 5px;
  overflow: hidden;
  border-radius: 15px;
}

.-fx-gal-image-thumb img {
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  -webkit-filter: grayscale(80%);
  -moz-filter: grayscale(80%);
  filter: grayscale(80%);
  transition: all 0.3s ease;
}

.-fx-gal-image-thumb:hover img {
  width: 100%;
  cursor: pointer;
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  filter: grayscale(0%);

  transform: scale(1.14);
  transition: all 0.5s ease;
}

.-fx-gal-image-thumb:focus + .-fx-gal-image-big {
  display: block;
}

.-fx-gal-image-big {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(5, 10, 15, 0.8);
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  transition: all 0.3s ease;
}

.-fx-gal-image-big img {
  max-width: 90vw;
  position: absolute;
  box-shadow: 0px 0px 800px 40px rgba(0, 0, 0, 0.9);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

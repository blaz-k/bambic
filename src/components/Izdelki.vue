<template>
  <link
    href="https://fonts.googleapis.com/css?family=Raleway:300"
    rel="stylesheet"
  />
  <!-- <h2>{{ izdelek.name }}</h2> -->
  <a href="#" rel="dofollow">
    <div class="card-cover">
      <div class="card">
        <img :src="izdelek.imgUrl" alt="" />
      </div>
      <p>{{ izdelek.name }}</p>
    </div>
  </a>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Izdelki",
  props: ["izdelek"],

  ...mapState(["ostaliRobniki"]),
};
</script>

<style scoped>
.card-cover {
  width: 100%;
  height: 250px;
  max-width: 350px;
  margin: auto;

  /* background: url("../assets/img/gallery/11.jpeg"); */
  background-size: cover;
  position: relative;
  transition: 0.4s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
}
.card {
  width: 100%;
  height: 250px;
  background: rgba(0, 0, 0, 0.4);
}
img {
  width: 100%;
  height: 250px;
  background: rgba(0, 0, 0, 0.4);
}
.card + p {
  color: #fff;
  text-decoration: none !important;
  position: absolute;
  bottom: 0px;
  right: 15px;
  z-index: 6;
  font-family: raleway;
  font-size: 22px;
  letter-spacing: 0.8px;
  font-variant: small-caps;
  transition: 0.4s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
}
.card-cover:after {
  content: "";
  width: 0px;
  height: 1px;
  background: #fff;
  position: absolute;
  bottom: 15px;
  right: 15px;
  opacity: 0.8;
  transition: 0.4s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
}
.card-cover:hover:after {
  width: 100px;
  bottom: 30px;
  opacity: 1;
  transition: 0.4s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
}
.card-cover:hover {
  background-position: -1px;
  transition: 0.8s;
  /* transition-timing-function: ease-out; */
  /* backface-visibility: hidden; */
}
.card-cover:hover p {
  bottom: 15px;
  transition: 0.4s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
}
h2 {
  font-family: raleway;
  font-weight: normal;
  text-align: center;
  font-variant: small-caps;
  letter-spacing: 3px;
  margin-bottom: 20px;
  font-size: 21px;
}
body {
  background: #ab9b8e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eef2f3,
    #ab998e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
/* @import url("https://fonts.googleapis.com/css?family=Roboto");

body {
  font-family: Roboto;
  background: #cecece;
}

h5 {
  margin-top: -15px;
  font-size: 20px;
}

.container {
  width: 100%;
  padding: 2px 16px;
}
.card {
  transition: 0.75s;
  margin-left: 10px;
  margin-top: 10px;
  background: white;
  border-radius: 5px;
  float: left;
  width: 200px;
  height: 250px;
}
.card:hover {
  z-index: 10 !important;
  transform: scale(1.05);
}

.text {
  padding: 2px 16px;
}

.cook {
  position: absolute;
  color: #c7260a;
  margin-top: 0px;
}
.food {
  width: 200px;
  height: auto;
  border-bottom: 6px solid #145b09;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
} */
</style>

<template>
  <div id="kovinske-ograje">
    <div class="container">
      <h1>{{ products[3].name }}</h1>
      <img :src="products[3].imgUrl" alt="" />

      <div class="">
        <div class="text-content">
          <div class="">{{ products[3].text }}</div>
        </div>
      </div>
    </div>
    <!-- <h1>{{ products[3].name }}</h1>
    <img :src="products[3].imgUrl" alt="" />

    <div class="container">
      <div class="text-content">
        <div class="">{{ products[3].text }}</div>
      </div>
    </div> -->

    <!-- <p class="cont">{{ products[1].text }}</p> -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "KovinskeOgraje",
  computed: {
    ...mapState(["products"]),
  },
  components: { Footer },
};
</script>

<style scoped>
.container {
  /* max-width: ; */
  /* max-width: 85%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center; */
  /* | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline  */
}
#kovinske-ograje {
  position: absolute;
  border: 3px solid brown;
  margin-left: auto;

  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

#kovinske-ograje .text-content {
  /* display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem; */
}

li {
  font-size: 1rem;
  margin-top: 0rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
}

/* this * is good fontfamily */
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  /* line-height: 80px; */
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

h1 {
  font-size: 2.8rem;
  color: rgb(209, 14, 14);
  margin: 40px 0 20px 0;
  text-align: center;
}
</style>

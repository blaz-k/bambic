<template>
  <router-link
    :to="{
      name: 'RobnikiDetails',
      params: {
        robnikiId: this.robniki.id,
        robnikName: this.robniki.detailName,
        robnikText: this.robniki.detailText,
        robnikImages: this.robniki.images,
        imgRobnik: this.robniki.imgRobnik,
      },
    }"
  >
    {{ robniki.id }}
  </router-link>

  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <div class="cards">
      <div class="card">
        <h2 class="card-title">{{ robniki.detailName }}</h2>
        <img :src="robniki.imgRobnik" alt="" />
        <p class="card-desc">
          {{ robniki.detailText }}
        </p>
      </div>
    </div>
  </div>
  <!-- <h2>{{ products[0].details[0] }}</h2> -->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Robniki",
  props: ["robniki", "test"],

  setup(props) {
    // console.log(props.robniki.id);
  },
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #34495e;
} */

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin: 40px;
  position: relative;
  max-width: 250px;
  max-height: 350px;
  box-shadow: 0 40px 60px -6px black;
}

.card-title {
  display: block;
  text-align: center;
  font-size: 24px;
  color: #fff;
  background-color: #6184a8;
  padding: 2%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.card img {
  width: 100%;
  height: 98%;
  object-fit: cover;
  display: block;
  position: relative;
}

.card-desc {
  display: block;
  font-size: 1.4rem;

  position: absolute;
  height: 0;
  top: 0;
  opacity: 0;
  padding: 8px 8%;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
  transition: 1.3s ease;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
}

h1 {
  font-size: 2.8rem;
  color: #fff;
  margin: 40px 0 20px 0;
  text-align: center;
}
</style>

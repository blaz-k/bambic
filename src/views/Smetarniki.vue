<template>
  <div id="smetarniki">
    <h1>{{ products[5].name }}</h1>

    <div class="container">
      <img :src="products[5].imgUrl" alt="" />

      <div class="text-content">
        <div class="">{{ products[5].text }}</div>
      </div>
    </div>
    <!-- <p class="text">{{ products[5].text }}</p>
    <p class="cena">Cena: {{ products[5].cena }}</p> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Smetarniki",
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
#smetarniki .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 5rem;
}

/* this * is good fontfamily */
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  /* line-height: 80px; */
}

h1 {
  font-size: 2.8rem;
  color: rgb(209, 14, 14);
  margin: 40px 0 20px 0;
  text-align: center;
}
.container {
  max-width: 55%;
}
</style>

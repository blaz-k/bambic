<template>
  <div id="ograja-polzi">
    <h1>{{ products[2].name }}</h1>

    <div class="container">
      <img :src="products[1].imgUrl" alt="" />

      <div class="text-content">
        <div class="">{{ products[2].text }}</div>
      </div>
    </div>
    <!-- <p class="text">{{ products[2].text }}</p>
    <p class="cena">Cena: {{ products[2].cena }}</p> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OgrajaPolzi",
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
.container {
  max-width: 85%;
}
#ograja-polzi {
  position: absolute;
}

#ograja-polzi .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
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

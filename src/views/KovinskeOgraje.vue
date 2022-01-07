<template>
  <div id="kovinske-ograje">
    <h1>{{ products[1].name }}</h1>
    <img :src="products[1].imgUrl" alt="" />

    <div class="container">
      <div class="text-content">
        <div class="">{{ products[1].text }}</div>
      </div>
    </div>

    <!-- <p class="cont">{{ products[1].text }}</p> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "KovinskeOgraje",
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
.container {
  max-width: 85%;
}
#kovinske-ograje {
  position: absolute;
}

#kovinske-ograje .text-content {
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

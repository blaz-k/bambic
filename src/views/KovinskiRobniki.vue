<template>
  <div id="kovinskiRobniki" class="">
    <div class="relativno">
      <h1 class="mb-4">{{ products[0].name }}</h1>

      <div class="container">
        <div class="text-content">
          <div class="">{{ products[0].text }}</div>
        </div>
        <div class="bottom">
          <ul class="list-unstyled">
            <div v-for="lastnost in products[0].lastnosti" :key="lastnost">
              <li class="animate__animated animate__backInLeft">
                {{ lastnost }}
              </li>
            </div>
          </ul>
        </div>
      </div>

      <!---------- list of lastnosti from products ---------->

      <!-- 
    <div class="container">
      <ul>
        <li>hitra in enostavna montaža</li>
        <li>obstojen in nerjaveč material</li>
        <li>možnost oblikovanja po želji (ravne linije, krivulje)</li>
        <li>cenovno ugodno</li>
        <li>pestra izbira oblik robnikov</li>
      </ul>
    </div> -->

      <!------ cards from Robniki ------>
      <div class="row g-4 row-cols-1 row-cols-md-3 container-fluid">
        <div v-for="detail in products[0].details" :key="detail">
          <Robniki :robniki="detail" />
          <!-- <div>{{ detail.detailName }}</div> -->
        </div>
      </div>
      <!-- <h2>{{ products[0].details[0] }}</h2> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Robniki from "../components/Robniki.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "KovinskiRobniki",
  computed: {
    ...mapState(["products"]),
  },
  components: { Robniki, Footer },
};
</script>

<style scoped>
.container {
  max-width: 85%;
}
#kovinskiRobniki {
  position: absolute;
}
/* .relativno {
  position: relative;
} */

.bottom {
  margin-top: 6rem;
  margin-bottom: 3rem;
}
.row {
  margin-top: 5rem;
}
#kovinskiRobniki .text-content {
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

h1 {
  font-size: 2.8rem;
  color: rgb(209, 14, 14);
  margin: 40px 0 20px 0;
  text-align: center;
}
</style>

<template>
  <div id="kovinskiRobniki" class="">
    <div class="container">
      <!----------  <router-link :to="{ name: 'Details', params: { id: details } }">
        <h1 class="mb-4">{{ details[0].name }}</h1>
      </router-link>---->
      <h1 class="mb-4">{{ products[0].name }}</h1>
      <hr />

      <div class="container">
        <div class="osnovni-del bg-light p-4 pt-3">
          <div class="text-content">
            <div class="">{{ products[0].text }}</div>
          </div>
          <div class="bottom-list">
            <ul class="list-unstyled">
              <div v-for="lastnost in products[0].lastnosti" :key="lastnost">
                <li class="animate__animated animate__backInLeft">
                  {{ lastnost }}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <!--------- list of lastnosti from products ---------->

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
      <div class="row g-4 row-cols-1 row-cols-md-3">
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
    ...mapState(["details"]),
  },
  components: { Robniki, Footer },
};
</script>

<style scoped>
.bottom-list {
  margin-top: 6rem;
  margin-bottom: 3rem;
}

h1 {
  font-size: 3rem;
  color: rgb(209, 14, 14);
  margin: 40px 0 20px 0;
  text-align: center;
}

#kovinskiRobniki {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "PT Serif", serif;
}

/*#kovinskiRobniki .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
}*/

li {
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 0rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
}
.row {
  margin-top: 5rem;
}
</style>

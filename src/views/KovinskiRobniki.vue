<template>
  <div id="kovinskiRobniki" class="">
    <h1 class="mb-4">{{ products[0].name }}</h1>
    <hr />
    <div class="container">
      <div class="osnovni-del p-4 pt-3">
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
        <div v-for="detail in products[0].details" :key="detail.id">
          <Robniki :robniki="detail" :test="details" />
          <!-- <div>{{ detail.detailName }}</div> -->
        </div>
      </div>

      <div class="-fx-image-gal slike">
        <!-- <div class="-fx-gal-item"> -->
        <div class="row g-4 row-cols-1 row-cols-sm-3 container-fluid">
          <div v-for="slika in slikeRobniki" :key="slika">
            <SlikeKovinskiRobniki :slika="slika" />
          </div>
          <!-- </div> -->
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
import SlikeKovinskiRobniki from "../components/SlikeStrani/SlikeKovinskiRobniki.vue";

export default {
  name: "KovinskiRobniki",

  computed: {
    ...mapState(["products"]),
    ...mapState(["details"]),
    ...mapState(["ostaliRobniki"]),
    ...mapState(["slikeRobniki"]),
  },
  components: { Robniki, Footer, SlikeKovinskiRobniki },
};
</script>

<style scoped>
.slike {
  margin-top: 10rem;
}
/* hr {
  border-bottom: 6px solid #001aff4b;
  width: 40%;
  margin: 0 auto 3rem;
} */
* {
  font-family: "Roboto Condensed", sans-serif;
  color: #ededed;

  /* font-weight: 400; */
}

.bottom-list {
  margin-top: 6rem;
  margin-bottom: 3rem;
}

/* hr {
  background-color: rgb(131, 28, 21);
  border: solid 2px rgb(177, 18, 7);
  width: 40%;
  margin: 0 auto 3rem;
} */

/* h1 {
  text-transform: uppercase;
  font-size: 3rem;
  color: #ff1100;
  margin: 40px 0 20px 0;
  text-align: center;
} */
hr {
  background-color: rgba(255, 17, 0, 255);
  height: 6px;
  border: solid rgba(255, 17, 0, 255);
  width: 55%;
  margin: 0 auto 3rem;
}

h1 {
  text-transform: uppercase;
  font-size: 3rem;
  color: #272525;
  /* color: rgb(209, 14, 14); */

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
  /* font-family: "PT Serif", sans-serif; */
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
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 0rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
}
.row {
  margin-top: 5rem;
}
</style>

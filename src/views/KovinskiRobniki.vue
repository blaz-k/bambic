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
  </div>
</template>

<script>
import { mapState } from "vuex";
import Robniki from "../components/Robniki.vue";

export default {
  name: "KovinskiRobniki",
  computed: {
    ...mapState(["products"]),
  },
  components: { Robniki },
};
</script>

<style scoped>
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
/*
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
  font-size: 1.2rem;
  position: absolute;
  height: 0;
  top: 0;
  opacity: 0;
  padding: 18px 8%;
  background-color: white;
  overflow-y: scroll;
  transition: 0.8s ease;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
}

h1 {
  font-size: 2.8rem;
  color: rgb(209, 14, 14);
  margin: 40px 0 20px 0;
  text-align: center;
}
</style>

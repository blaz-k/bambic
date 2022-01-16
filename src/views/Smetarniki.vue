<template>
  <div id="smetarnik">
    <div class="">
      <h1>{{ products[3].name }}</h1>
      <hr />
    </div>
    <div class="container">
      <div class="osnovni-del bg-light p-4">
        <div class="text-content">
          <div class="">{{ products[3].text }}</div>
        </div>
        <div class="bottom-list">
          <ul class="list-unstyled">
            <div v-for="lastnost in products[3].lastnosti" :key="lastnost">
              <li class="animate__animated animate__backInLeft">
                {{ lastnost }}
              </li>
            </div>
          </ul>
        </div>
        <div class="drugi-text">
          {{ products[3].secondText }}
        </div>

        <div class="polepsaj">Polepšajte okolico hiše z našimi smetarniki!</div>
      </div>

      <div id="gallery">
        <div class="-fx-image-gal">
          <div class="row g-4 row-cols-1 row-cols-sm-3 container-fluid">
            <!-- lahko cols3 al pa 4 kukr hoce jani-->
            <div v-for="slika in images" :key="slika">
              <SlikaSmetarnik :slika="slika" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";
import SlikaSmetarnik from "../components/SlikaSmetarnik.vue";

export default {
  name: "Smetarniki",
  computed: {
    ...mapState(["products"]),
    ...mapState(["images"]),
  },
  components: { Footer, SlikaSmetarnik },
};
</script>

<style scoped>
.osnovni-del {
  border-radius: 46px;
}
hr {
  border-bottom: 6px solid red;
  width: 40%;
  margin: 0 auto 3rem;
}
.polepsaj {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: rgb(173, 9, 9);
}
.bottom-list {
  margin-top: 6rem;
  margin-bottom: 3rem;
}

.drugi-text {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 6rem;
}
h1 {
  font-size: 3rem;
  color: rgb(173, 9, 9);
  margin: 40px 0 20px 0;
  text-align: center;
}

li {
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 0rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
}

#smetarnik {
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

/*#smetarnik .text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 3rem;
}*/

.naslov {
}
</style>

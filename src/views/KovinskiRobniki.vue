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
      <div class="scroll-to-top">
        <button @click="scrollToTop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4a5568"
            stroke-width="1"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M18 15l-6-6-6 6" /></svg
          >Na začetek
        </button>
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

  methods: {
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 1);

      function frame() {
        if (0 > currentScroll) clearInterval(int);
        else {
          currentScroll = currentScroll - 80;
          document.documentElement.scrollTop = currentScroll;
        }
      }
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  padding: 30px 0;
  position: absolute;
  right: 3rem;
}

.scroll-to-top button {
  border: none;
  background: transparent;
  cursor: pointer;
  color: black;
}

#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}
.slike {
  margin-top: 10rem;
}

* {
  font-family: "Roboto Condensed", sans-serif;
  color: #ededed;
}

.bottom-list {
  margin-top: 6rem;
  margin-bottom: 3rem;
}

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
}

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

/* media */

@media only screen and (max-width: 419px) {
  .bottom-list {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  li {
    font-weight: 400;
    font-size: 0.6rem;
    margin-top: 0rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
  }
  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    color: #272525;

    margin: 40px 0 20px 0;
    text-align: center;
  }
  .slike {
    margin-top: 1rem;
  }
}
</style>

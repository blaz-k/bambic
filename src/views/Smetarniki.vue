<template>
  <div id="smetarnik">
    <div>
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

      <div class="-fx-image-gal slika">
        <!-- <div class="-fx-gal-item"> -->
        <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
          <div v-for="slika in slikeSmetarnik" :key="slika">
            <SmetarnikSlike :slika="slika" />
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
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";
import SmetarnikSlike from "../components/SlikeStrani/SmetarnikSlike.vue";

export default {
  name: "Smetarniki",
  computed: {
    ...mapState(["products"]),
    ...mapState(["images"]),
    ...mapState(["slikeSmetarnik"]),
  },
  components: { Footer, SmetarnikSlike },
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
.text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 0.2rem;
  color: #bd0b0b;
}
.slika {
  margin-top: 10rem;
}
* {
  font-family: "Roboto Condensed", sans-serif;
  /* font-weight: 400; */
}
.osnovni-del {
  border-radius: 46px;
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
.prvi-text {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.5rem;
  margin-top: 6rem;
}

hr {
  background-color: rgb(255, 17, 0);
  height: 6px;
  border: solid rgb(255, 17, 0);
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

li {
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 0rem;
  margin-bottom: 1rem;
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
}

.text-content {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1rem;
  color: #8b2b2b;
}

/* MEDIA */

@media only screen and (max-width: 419px) {
  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    color: #272525;

    margin: 40px 0 20px 0;
    text-align: center;
  }
  #smetarnik .polepsaj {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    color: rgb(252, 23, 23);
  }
  #smetarnik li {
    font-weight: 100;
    font-size: 5rem;
    margin-top: 0rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
  }
  .text-content {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: start;
    font-size: 0.5rem;
    color: #ededed;
  }

  #smetarnik .drugi-text {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: start;
    font-size: 17px;
    margin-top: 1rem;
  }

  #smetarnik .bottom-list {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
}

@media only screen and (max-width: 574px) {
  #smetarnik .polepsaj {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    color: rgb(252, 23, 23);
  }
  #smetarnik li {
    font-weight: 400;
    font-size: 0.7rem;
    margin-top: 0rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
  }
  .text-content {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: start;
    font-size: 17px;
    color: #ededed;
  }

  #smetarnik .drugi-text {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: start;
    font-size: 17px;
    margin-top: 1rem;
  }

  #smetarnik .bottom-list {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
}

@media only screen and (min-width: 574px) {
  .text-content {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: start;
    font-size: 1.5rem;
    color: #ffffff;
  }
  #smetarnik .polepsaj {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: rgb(252, 23, 23);
  }
  #smetarnik li {
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 0rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
  }

  #smetarnik .drugi-text {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: start;
    font-size: 1.5rem;
    margin-top: 6rem;
  }
}

/* @media only screen and (min-width: 768px) {
  #smetarnik .polepsaj {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: rgb(155, 13, 190);
  }
  #smetarnik li {
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 0rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
  }
}

@media only screen and (min-width: 992px) {
  #smetarnik .polepsaj {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: rgb(172, 190, 13);
  }
  #smetarnik .bottom-list {
    margin-top: 6rem;
    margin-bottom: 3rem;
  }
}

@media only screen and (min-width: 1250px) {
  .polepsaj {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: rgb(68, 145, 87);
  }
}

@media only screen and (min-width: 1620px) {
  .polepsaj {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: rgb(158, 190, 13);
  }
} */
</style>

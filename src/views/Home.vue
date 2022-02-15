<template>
  <div id="home">
    <main>
      <!-- CAROUSEL -->
      <div id="carousel">
        <Carousel />
      </div>

      <div id="izdelki">
        <div>
          <h1>Naša ponudba:</h1>
        </div>

        <div class="mt-4">
          <Ponudba />
        </div>
        <!-- </div> -->
      </div>

      <!---- SEVICES   ----->

      <!-- <div id="services">
        <h1>Storitve</h1>

        <div class="row g-4 row-cols-sm-2 p-0 container-fluid">
          <div v-for="service in services" :key="service">
            <Services :serviceInServices="service" />
          </div>
        </div>
      </div> -->

      <!-- GALLERY -->

      <div id="gallery">
        <header>
          <h1>Galerija Slik</h1>
        </header>

        <div class="-fx-image-gal">
          <!-- <div class="-fx-gal-item"> -->
          <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
            <div v-for="photo in photos" :key="photo">
              <Gallery :galleryPhoto="photo" />
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>

      <!-- FOOTER -->
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
      <div id="dol">
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Products from "../components/Products.vue";
import Services from "../components/Services.vue";
import Carousel from "../components/Carousel.vue";
import Gallery from "../components/Gallery.vue";
import Footer from "../components/Footer.vue";
import Izdelki from "../components/Izdelki.vue";
import Testimonials from "../components/Testimonials.vue";
import Nekaj from "../components/Nekaj.vue";
import Ponudba from "../components/Ponudba.vue";
import Mnenja from "../components/Mnenja.vue";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Home",
  components: {
    Products,
    Services,
    Carousel,

    Gallery,
    Footer,
    Izdelki,
    Testimonials,
    Nekaj,
    Ponudba,
    Mnenja,
  },
  computed: {
    ...mapState(["services"]),
    ...mapState(["products"]),
    ...mapState(["photos"]),
    ...mapState(["mnenja"]),
  },
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

<style>
.-fx-image-gal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 85%; /* arbitrary valye */
  margin: 0px auto;
}
.-fx-gal-item {
  width: 30%; /* for 3 columns */
  margin: 5px;
  overflow: hidden;
  border-radius: 15px;
}
.scroll-to-top {
  padding: 30px 0;
  position: absolute;
  right: 3rem;
}

.scroll-to-top button {
  border: none;
  background: transparent;
  cursor: pointer;
}

#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}

#testimonials {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: flex-start;
  margin-top: 9rem;
}
#testimonials h1 {
  margin-bottom: 7rem;
}
#izdelki .izdelek {
  margin-top: 0rem;
}
#home #izdelki h1 {
  color: rgb(209, 14, 14);
  margin-top: 7rem;
}
#home #gallery h1 {
  color: rgb(209, 14, 14);
  margin-bottom: 7rem;
}

#home #services h1 {
  margin-bottom: 7rem;
  /* color: rgb(107, 107, 89); */
  color: rgb(209, 14, 14);
}
#dol {
  margin-top: 11rem;
}
#home {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
#services {
  margin-top: 8rem;
}
#gallery {
  margin-top: 8rem;
}
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

#home main {
  padding-top: 0;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
#home .carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
#home .carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
#home .carousel-item {
  height: 35rem;
}
#home .carousel-item > img {
  position: absolute;
  top: 15px;
  left: 0;
  min-width: 100%;
  height: 35rem;
}

#home .featurette-divider {
  margin: 5rem 0;
}

/* Thin out the marketing headings */
#home .featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}
</style>

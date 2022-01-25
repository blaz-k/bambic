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
        <div class="row g-4 row-cols-1 row-cols-sm-3 izdelek">
          <div v-for="product in products" :key="product">
            <Izdelki :izdelek="product" />
          </div>
        </div>
      </div>

      <!---- SEVICES ----->

      <div id="services">
        <h1>Storitve</h1>

        <div class="row g-4 row-cols-sm-2 p-0 container-fluid">
          <div v-for="service in services" :key="service">
            <Services :serviceInServices="service" />
          </div>
        </div>
      </div>

      <!-- GALLERY -->

      <div id="gallery">
        <header>
          <h1>Galerija Slik</h1>
          <!--
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, porro
            tempore ut est dignissimos, ea placeat dicta in et neque quisquam
            ducimus fugit. Omnis, veniam.
          </p>-->
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
import Test from "./Test.vue";
import Gallery from "../components/Gallery.vue";
import Footer from "../components/Footer.vue";
import Izdelki from "../components/Izdelki.vue";
// CARDS TO USE IN TEMPLATE FOR IMAGES CAN BE FOUND IN FEATURES INEXAMPLES IN BOOTSTRAP
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Products,
    Services,
    Carousel,
    Test,
    Gallery,
    Footer,
    Izdelki,
  },
  computed: {
    ...mapState(["services"]),
    ...mapState(["products"]),
    ...mapState(["photos"]),
  },
};
</script>

<style>
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
  height: 50rem;
}
#home .carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 50rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
/* .marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
/* rtl:begin:ignore */
/* .marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}  */
/* rtl:end:ignore */

/* Featurettes
------------------------- */

#home .featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
#home .featurette-heading {
  font-weight: 300;
  line-height: 1;
  /* rtl:remove */
  letter-spacing: -0.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  #home .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  #home .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  #home .featurette-heading {
    margin-top: 7rem;
  }
}

@media (max-width: 62em) {
  #home .carousel-item {
    height: 22rem;
  }
}

@media (max-width: 40em) {
  #home .carousel-item {
    height: 15rem;
  }
  #home .carousel-caption {
    bottom: 0.5rem;
    z-index: 10;
  }
}
</style>

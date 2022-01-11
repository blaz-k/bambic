<template>
  <div id="home">
    <main>
      <!-- <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <img
              src="../assets/img/robniki/robnik1.jpg"
              class="d-block w-100"
              alt="..."
            />

            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Kovinski robniki</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">Več o tem</a>
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <img
              src="../assets/img/ograje/ograja.jpg"
              class="d-block w-100"
              alt="..."
            />

            <div class="container">
              <div class="carousel-caption">
                <h1>Kovinske ograje</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p><a class="btn btn-lg btn-primary" href="#">Več o tem</a></p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <img
              src="../assets/img/crpalke/crpalka1.jpg"
              class="d-block w-100"
              alt="..."
            />

            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Pokrovi toplotnih črpalk</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">Več o tem</a>
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <img
              src="../assets/img/smetarniki/smetarnik1.jpg"
              class="d-block w-100"
              alt="..."
            />

            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Smetarniki</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">Več o tem</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->

      <!-------------------- CAROUSEL --------------------->
      <!-- Not working correctly -->

      <!-- <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div v-for="product in products" :key="product">
            <div class="carousel-item active">
              <Carousel :carouselProduct="product" />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->
      <Carousel />

      <!-------------------- SEVICES --------------------->

      <!-- <div class="row g-4 row-cols-1 row-cols-md-4 container-fluid">
        <div v-for="service in services" :key="service">
          <Test :serviceInServices="service" />
        </div>
      </div> -->
      <div id="services">
        <h1>Storitve</h1>

        <div class="row g-4 row-cols-sm-2 p-0container-fluid">
          <div v-for="service in services" :key="service">
            <Services :serviceInServices="service" />
          </div>
        </div>
      </div>

      <div id="gallery">
        <header>
          <h1>Galerija Slik</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, porro
            tempore ut est dignissimos, ea placeat dicta in et neque quisquam
            ducimus fugit. Omnis, veniam.
          </p>
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
      <div id="dol">
        <Footer />
      </div>

      <!-- GALLERY -->

      <!-- PRODUCTS -->

      <!-- FOOTER -->
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
// CARDS TO USE IN TEMPLATE FOR IMAGES CAN BE FOUND IN FEATURES INEXAMPLES IN BOOTSTRAP
// @ is an alias to /src

export default {
  name: "Home",
  components: { Products, Services, Carousel, Test, Gallery, Footer },
  computed: {
    ...mapState(["services"]),
    ...mapState(["products"]),
    ...mapState(["photos"]),
  },
};
</script>

<style>
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
  padding-top: 3rem;
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
  height: 32rem;
}
#home .carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
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

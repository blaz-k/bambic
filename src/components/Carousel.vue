<template>
  <!-- <img :src="carouselProduct.imgUrl" class="d-block w-100" alt="..." />
  <p>{{ carouselProduct.name }}</p> -->

  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
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
        <img :src="products[0].imgUrl" class="d-block w-100" alt="..." />

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>
              {{ products[0].name }}
            </h1>
            <p>
              {{ products[0].obnova }}
            </p>
            <p>
              <router-link
                class="btn btn-secondary"
                :to="{ name: 'KovinskiRobniki' }"
                >{{ more }}</router-link
              >
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
        <img :src="products[1].imgUrl" class="d-block w-100" alt="..." />

        <div class="container">
          <div class="carousel-caption">
            <h1>{{ products[1].name }}</h1>
            <p>
              {{ products[1].obnova }}
            </p>
            <p>
              <router-link
                class="btn btn-secondary"
                :to="{ name: 'KovinskeOgraje' }"
                >{{ more }}</router-link
              >
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
        <img :src="products[3].imgUrl" class="d-block w-100" alt="..." />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>{{ products[3].name }}</h1>
            <p>
              {{ products[3].obnova }}
            </p>
            <p>
              <router-link
                class="btn btn-secondary"
                :to="{ name: 'Smetarniki' }"
                >{{ more }}</router-link
              >
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Carousel",
  props: ["carouselProduct"],
  computed: {
    ...mapState(["products"]),
  },
  data() {
    return {
      more: "Preberi več",
    };
  },
};
</script>

<style scoped>
/* #carousel h1 {
  font-size: 5rem;
  color: #868686;
  font-weight: 700;
} */
/* .btn-primary {
  background-color: #272626;
  border-radius: 0px 36px 0px 36px;
  size: auto;
} */

img {
  opacity: 0.7;
}

@media (min-width: 62em) {
  #carousel h1 {
    font-size: 3.2rem;

    color: #474646;
    font-weight: 700;
  }

  #home .carousel-caption p {
    margin-bottom: 0.25rem;
    font-size: 1.85rem;
    line-height: 1.6;
    color: white;
  }
  .btn-secondary {
    background-color: #272626;
    border-radius: 0px 36px 0px 36px;
    font-size: 1.3rem;
  }

  #home .featurette-heading {
    font-size: 50px;
    margin-top: 7rem;
  }
}

@media (max-width: 62em) {
  #carousel h1 {
    color: #474646;
    font-size: 2.7rem;
    font-weight: 700;
  }
  #home .carousel-caption p {
    margin-bottom: 0.25rem;
    font-size: 1.3rem;
    line-height: 1.2;
    color: white;
  }
  .btn-secondary {
    background-color: #272626;
    border-radius: 0px 36px 0px 36px;
    /* width: 120px !important; */

    font-size: 1.2rem;
  }

  #home .featurette-heading {
    font-size: 50px;
    margin-top: 7rem;
  }
  #home .carousel-item {
    height: 24rem;
  }
}

@media (max-width: 50em) {
  #carousel h1 {
    color: #474646;
    font-size: 2.7rem;
    font-weight: 700;
  }
  #home .carousel-caption p {
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.2;
    color: white;
  }
  .btn-secondary {
    background-color: #272626;
    border-radius: 0px 36px 0px 36px;
    /* width: 120px !important; */

    font-size: 1.2rem;
  }

  #home .featurette-heading {
    font-size: 50px;
    margin-top: 7rem;
  }
  #home .carousel-item {
    height: 24rem;
  }
}

@media (max-width: 40em) {
  #carousel h1 {
    color: #474646;
    font-size: 2.5rem;
    font-weight: 700;
  }
  #home .carousel-caption p {
    margin-bottom: 0.25rem;
    font-size: 1.1rem;
    line-height: 1;
    color: white;
  }
  .btn-secondary {
    background-color: #272626;
    border-radius: 0px 36px 0px 36px;
    /* width: 120px !important; */

    font-size: 0.7rem;
  }

  #home .featurette-heading {
    font-size: 50px;
    margin-top: 7rem;
  }
  #home .carousel-item {
    height: 24rem;
  }
}

@media (max-width: 30em) {
  #carousel h1 {
    color: #474646;
    font-size: 1.8rem;
    font-weight: 700;
  }
  #home .carousel-caption p {
    margin-bottom: 0rem;
    font-size: 0.9rem;
    line-height: 1;
    color: white;
  }
  .btn-secondary {
    background-color: #272626;
    border-radius: 0px 36px 0px 36px;
    /* width: 120px !important; */

    font-size: 0.7rem;
  }

  #home .featurette-heading {
    font-size: 50px;
    margin-top: 7rem;
  }
  #home .carousel-item {
    height: 24rem;
  }
}

@media (max-width: 20em) {
  #carousel h1 {
    color: #474646;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 4.25rem;
  }
  #home .carousel-caption p {
    margin-bottom: 0.25rem;

    color: white;
  }
  .btn-secondary {
    background-color: #272626;
    border-radius: 0px 36px 0px 36px;
    /* padding-bottom: ; */
    /* width: 120px !important; */
    font-size: 0.7rem;
  }

  #home .featurette-heading {
    font-size: 50px;
    margin-top: 7rem;
  }

  #home .carousel-item {
    height: 22rem;
  }
  #home .carousel-caption {
    bottom: 0.8rem;
    z-index: 10;
  }
  #home .carousel-caption p {
    display: none;
    /* margin-bottom: 0.25rem;
    font-size: 1.12rem;
    line-height: 1.1; */
  }
}
</style>

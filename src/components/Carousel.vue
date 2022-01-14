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
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="5"
        aria-label="Slide 6"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="6"
        aria-label="Slide 7"
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
            <h1>
              {{ products[0].name }}
            </h1>
            <p>
              {{ products[0].text }}
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'KovinskiRobniki' }"
                >Več o tem</router-link
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
        <img
          src="../assets/img/ograje/ograja.jpg"
          class="d-block w-100"
          alt="..."
        />

        <div class="container">
          <div class="carousel-caption">
            <h1>{{ products[1].name }}</h1>
            <p>
              Some representative placeholder content for the second slide of
              the carousel.
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'KovinskeOgraje' }"
                >Več o tem</router-link
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
        <img
          src="../assets/img/ograje/ograja.jpg"
          class="d-block w-100"
          alt="..."
        />

        <div class="container">
          <div class="carousel-caption">
            <h1>{{ products[2].name }}</h1>
            <p>
              Some representative placeholder content for the second slide of
              the carousel.
            </p>
            <p>
              <router-link class="btn btn-primary" :to="{ name: 'OgrajaPolzi' }"
                >Več o tem</router-link
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
        <img
          src="../assets/img/smetarniki/smetarnik1.jpg"
          class="d-block w-100"
          alt="..."
        />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>{{ products[3].name }}</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
            <p>
              <router-link class="btn btn-primary" :to="{ name: 'Smetarniki' }"
                >Več o tem</router-link
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
        <img
          src="../assets/img/crpalke/crpalka1.jpg"
          class="d-block w-100"
          alt="..."
        />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>{{ products[4].name }}</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'OkenskePolice' }"
                >Več o tem</router-link
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
        <img
          src="../assets/img/crpalke/crpalka1.jpg"
          class="d-block w-100"
          alt="..."
        />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>{{ products[5].name }}</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'PokroviToplotnih' }"
                >Več o tem</router-link
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
        <img
          src="../assets/img/crpalke/crpalka1.jpg"
          class="d-block w-100"
          alt="..."
        />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>{{ products[6].name }}</h1>
            <p>
              Some representative placeholder content for the third slide of
              this carousel.
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'DimniskeKape' }"
                >Več o tem</router-link
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
};
</script>

<style></style>

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
                class="btn btn-primary"
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
                class="btn btn-primary"
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
        <img :src="products[2].imgUrl" class="d-block w-100" alt="..." />

        <div class="container">
          <div class="carousel-caption">
            <h1>{{ products[2].name }}</h1>
            <p>
              {{ products[2].obnova }}
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'OgrajaPolzi' }"
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
                class="btn btn-primary"
                :to="{ name: 'Smetarniki' }"
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
        <img :src="products[4].imgUrl" class="d-block w-100" alt="..." />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>{{ products[4].name }}</h1>
            <p>
              {{ products[4].obnova }}
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'OkenskePolice' }"
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
        <img :src="products[5].imgUrl" class="d-block w-100" alt="..." />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>{{ products[5].name }}</h1>
            <p>
              {{ products[5].obnova }}
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'PokroviToplotnih' }"
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
        <img :src="products[6].imgUrl" class="d-block w-100" alt="..." />

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>{{ products[6].name }}</h1>
            <p>
              {{ products[6].obnova }}
            </p>
            <p>
              <router-link
                class="btn btn-primary"
                :to="{ name: 'DimniskeKape' }"
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
#carousel h1 {
  color: #868686;
  font-weight: 700;
}
.btn-primary {
  background-color: #272626;
  border-radius: 0px 36px 0px 36px;
}
</style>

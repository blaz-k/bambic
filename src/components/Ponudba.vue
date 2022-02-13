<template>
  <div class="content-wrapper">
    <div class="news-card">
      <router-link
        :to="{ name: 'KovinskiRobniki' }"
        class="news-card__card-link"
      ></router-link>
      <img
        src="../assets/img/gallery/robnik.jpg"
        alt=""
        class="news-card__image"
      />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{{ this.ponudba1 }}</h2>
        <div class="news-card__post-date"></div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            pariatur nemo tempore repellat? Ullam sed officia iure architecto
            deserunt distinctio, pariatur&hellip;
          </p>
          <a href="#" class="news-card__read-more"
            >Read more <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="news-card">
      <router-link
        :to="{ name: 'Smetarniki' }"
        class="news-card__card-link"
      ></router-link>
      <img
        src="../assets/img/gallery/Smetarnik5.jpg"
        alt=""
        class="news-card__image"
      />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">
          {{ this.ponudba2 }}
        </h2>
        <div class="news-card__post-date"></div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            obcaecati ex natus nulla rem sequi laborum quod fugit&hellip;
          </p>
          <a href="#" class="news-card__read-more"
            >Read more <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="news-card">
      <router-link
        :to="{ name: 'KovinskeOgraje' }"
        class="news-card__card-link"
      ></router-link>
      <img
        src="../assets/img/gallery/kovinska-ograja8.jpg"
        alt=""
        class="news-card__image"
      />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{{ this.ponudba3 }}</h2>
        <div class="news-card__post-date"></div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            beatae&hellip;
          </p>
          <a href="#" class="news-card__read-more"
            >Read more <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="news-card">
      <router-link
        :to="{ name: 'Ostalo' }"
        class="news-card__card-link"
      ></router-link>
      <img
        src="../assets/img/gallery/robnik15.jpg"
        alt=""
        class="news-card__image"
      />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{{ this.ponudba4 }}</h2>
        <div class="news-card__post-date"></div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            beataeLorem ipsum dolor sit amet!
          </p>
          <a href="#" class="news-card__read-more"
            >Read more <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="news-card">
      <router-link
        :to="{ name: 'Ostalo' }"
        class="news-card__card-link"
      ></router-link>
      <img
        src="../assets/img/gallery/kovinska-ograja7.jpg"
        alt=""
        class="news-card__image"
      />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{{ this.ponudba5 }}</h2>
        <div class="news-card__post-date"></div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            pariatur nemo tempore repellat? Ullam sed officia iure architecto
            deserunt distinctio&hellip;
          </p>
          <a href="#" class="news-card__read-more"
            >Read more <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="news-card">
      <router-link
        :to="{ name: 'Ostalo' }"
        class="news-card__card-link"
      ></router-link>
      <img
        src="../assets/img/gallery/toplotna8.jpg"
        alt=""
        class="news-card__image"
      />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{{ this.ponudba6 }}</h2>
        <div class="news-card__post-date"></div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            pariatur nemo tempore repellat? Ullam sed officia.
          </p>
          <a href="#" class="news-card__read-more"
            >Read more <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="news-card">
      <router-link
        :to="{ name: 'Ostalo' }"
        class="news-card__card-link"
      ></router-link>
      <img
        src="../assets/img/gallery/kapa.jpeg"
        alt=""
        class="news-card__image"
      />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{{ this.ponudba7 }}</h2>
        <div class="news-card__post-date"></div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            pariatur nemo tempore repellat? Ullam sed officia.
          </p>
          <a href="#" class="news-card__read-more"
            >Read more <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="news-card">
      <router-link
        :to="{ name: 'Ostalo' }"
        class="news-card__card-link"
      ></router-link>
      <img
        src="../assets/img/gallery/robotska-kosilnica3.jpg"
        alt=""
        class="news-card__image"
      />
      <div class="news-card__text-wrapper">
        <h2 class="news-card__title">{{ this.ponudba8 }}</h2>
        <div class="news-card__post-date"></div>
        <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            pariatur nemo tempore repellat? Ullam sed officia.
          </p>
          <a href="#" class="news-card__read-more"
            >Read more <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ponudba",
  data() {
    return {
      ponudba1: "Kovinski robniki",
      url1: "../assets/img/gallery/robnik.jpg",

      ponudba2: "Smetarniki",
      url2: "../assets/img/gallery/robnik.jpg",

      ponudba3: "Kovinske ograje",
      url3: "../assets/img/gallery/robnik.jpg",

      ponudba4: "Ograje za polže",
      url4: "../assets/img/gallery/robnik.jpg",

      ponudba5: "Okenske police",
      url5: "../assets/img/gallery/robnik.jpg",

      ponudba6: "Pokrovi toplotnih črpalk",
      url6: "../assets/img/gallery/robnik.jpg",

      ponudba7: "Dimniške kape",
      url7: "../assets/img/gallery/robnik.jpg",

      ponudba8: "Hiša za robotske kosilnice",
      url8: "../assets/img/gallery/robnik.jpg",
    };
  },
};
</script>

<style scoped>
/* @use postcss-mixins;
@use postcss-nested;
@use postcss-simple-vars;

@define-mixin atMedium {
  @media (min-width: 600px) {
    @mixin-content;
  }
}
@define-mixin atLarge {
  @media (min-width: 900px) {
    @mixin-content;
  }
}

$card-height-large-screen: 20rem;
$card-height-mobile: 12rem; */

/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
}

body {
  background-color: #555;
} */

.content-wrapper {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0.5rem;
}
.news-card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0)
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%);
  z-index: 0;
}
.news-card {
  border: 0px solid aqua;
  margin: 0.5rem;
  position: relative;
  height: 12rem;
  /* @mixin atLarge {
    height: $card-height-large-screen;
  } */
  overflow: hidden;
  border-radius: 0.5rem;
  flex: 1;
  min-width: 190px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
}
.news-card__card-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /*     background: rgba(255,0,0,.5); */
}

.news-card__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 3s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  z-index: -1;
}
.news-card__text-wrapper {
  position: absolute;
  bottom: 0rem;
  padding: 1rem;
  color: white;
  transition: background-color 1.5s ease;
}
.news-card__title {
  transition: color 1s ease;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}
.news-card__post-date {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  color: #ccc;
}
.news-card__details-wrapper {
  max-height: 0;
  opacity: 0;
  transition: max-height 1.5s ease, opacity 1s ease;
}
/* @mixin atLarge {
  &:hover &__details-wrapper {
    max-height: $card-height-large-screen;
    opacity: 1;
  }
  &:hover &__text-wrapper {
    background-color: rgba(0, 0, 0, 0.6);
  }
  &:hover &__title {
    color: yellow;
  }
  &:hover &__image {
    transform: scale(1.2);
    z-index: -1;
  }
} */
.news-card__excerpt {
  font-weight: 300;
}
.news-card__read-more {
  background: black;
  color: #bbb;
  display: block;
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  margin-top: 1rem;
  border: 1px solid #444;
  font-size: 0.8rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-decoration: none;
  width: 7rem;
  margin-left: auto;
  position: relative;
  z-index: 5;
}

/* .news-card__read-more i {
  position: relative;
  left: 0.2rem;
  color: #888;
  transition: left 0.5s ease, color 0.6s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
} */

.news-card:hover {
  transform: scale(1.05);
}
</style>

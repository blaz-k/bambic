<template>
  <div id="pokrovi-crpalk">
    <h2>{{ products[8].name }}</h2>
    <div class="">
      <div class="container mb-4 text">{{ products[8].text }}</div>
    </div>
    <hr />

    <div class="container">
      <div class="-fx-image-gal slika">
        <div class="row g-4 row-cols-1 row-cols-sm-4 container-fluid">
          <div v-for="slika in slikeKontejner" :key="slika">
            <SlikeKontejner :slika="slika" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SlikeKontejner from "./SlikeStrani/SlikeKontejner.vue";

export default {
  name: "Kontejner",
  computed: {
    ...mapState(["products"]),
    ...mapState(["slikeKontejner"]),
  },
  components: { SlikeKontejner },
};
</script>

<style scoped>
#pokrovi-crpalk .cena {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: start;
  font-size: 1.1rem;
  margin-top: 5rem;

  font-weight: 700;
  display: flex;
  justify-content: flex-start;
}
img {
  margin-top: 7rem;
}

.slika {
  margin-top: 7rem;
}

#pokrovi-crpalk {
  /* position: absolute; */
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

hr {
  background-color: rgba(255, 17, 0, 255);
  height: 6px;
  border: solid rgba(255, 17, 0, 255);
  width: 55%;
  margin: 0 auto 3rem;
}

h2 {
  text-transform: uppercase;
  color: #242424;
  margin: 40px 0 20px 0;
  text-align: center;
}

.text {
  font-size: 17px;
}
</style>

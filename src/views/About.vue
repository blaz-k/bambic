<template>
  <div id="kontakt">
    <div>
      <h1>O nas</h1>
      <hr />
    </div>
    <div class="container">
      <div class="osnovni-del bg-light p-4">
        <div class="text-content">
          <div class="">{{ text }}</div>
        </div>
      </div>
    </div>

    <div class="dol">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      text: `Naše podjetje ponuja rešitve na področju oblikovanja okolice vašega doma. Ukvarjamo se s preoblikovanjem pločevine v izdelke za vrt in dom. 
       Naše prednosti so predvsem kvaliteta, zanesljivost in cenovna dostopnost. Cilj nam je ustvariti zadovoljstvo svojih strank.`,
    };
  },
  components: {
    Footer,
  },
};
</script>
<style scoped>
.dol {
  margin-top: 17rem;
}
* {
  font-family: "Roboto Condensed", sans-serif;
  /* font-weight: 400; */
}
.osnovni-del {
  border-radius: 46px;
}
hr {
  background-color: rgb(255, 17, 0);
  height: 2px;
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

#kontakt {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 419px) {
  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    color: #272525;

    margin: 40px 0 20px 0;
    text-align: center;
  }
}
</style>

import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Kovinski robniki",
        imgUrl: require("@/assets/img/robniki/robnik1.jpg"),
        details: ["L-robniki", "T-robniki"],
        text: "Tukaj pride nek hiter opis produkta",
      },
      {
        id: 2,
        name: "Kovinske ograje",
        imgUrl: require("@/assets/img/ograje/ograja.jpg"),
        details: ["špičasta"],
        text: "Tukaj pride nek hiter opis produkta",
      },
      {
        id: 3,
        name: "Smetarniki",
        imgUrl: require("@/assets/img/smetarniki/smetarnik1.jpg"),
        details: ["okrogla, pravokotna"],
        text: "Tukaj pride nek hiter opis produkta",
      },
    ],
    services: [
      //UREDI DA BODO VSE SLIKE ISTE VELIKOSTI. NEK KVADRAT 200X200, DA BO LEPŠI IZGLED.
      {
        id: 1,
        name: "Postavitev ograj",
        img: require("@/assets/img/logo.png"),
        text: "Lahko vam postavimo ograjo",
      },

      // al dve piki al pa afna
      {
        id: 2,
        name: "Postavitev smetarnikov",
        img: require("@/assets/img/logo.png"),
        text: "Lahko vam postavimo smetarnike",
      },
      {
        id: 3,
        name: "Postavitev žlebov",
        img: require("@/assets/img/logo.png"),
        text: "Lahko vam postavimo žlebove",
      },
      {
        id: 4,
        name: "Postavitev robnikov",
        img: require("@/assets/img/logo.png"),
        text: "Lahko vam postavimo robnike",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});

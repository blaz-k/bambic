import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Kovinski robniki",
        imgUrl: "../assets/img/logo.png",
        details: ["L-robniki", "T-robniki"],
        text: "Tukaj pride nek hiter opis produkta",
      },
      {
        id: 2,
        name: "Kovinske ograje",
        imgUrl: "../urlofImage",
        details: ["špičasta"],
        text: "Tukaj pride nek hiter opis produkta",
      },
      {
        id: 3,
        name: "Smetarniki",
        imgUrl: "../urlofImage",
        details: ["okrogla, pravokotna"],
        text: "Tukaj pride nek hiter opis produkta",
      },
    ],
    services: [
      {
        id: 1,
        name: "Postavitev ograj",
        img: "../assets/img/logo.png",
        text: "Lahko vam postavimo ograjo",
      },
      {
        id: 2,
        name: "Postavitev smetarnikov",
        img: "./assets/img/logo.png",
        text: "Lahko vam postavimo smetarnike",
      },
      {
        id: 3,
        name: "Postavitev žlebov",
        img: "./img/logo.png",
        text: "Lahko vam postavimo žlebove",
      },
      {
        id: 4,
        name: "Postavitev robnikov",
        img: "logo.png",
        text: "Lahko vam postavimo robnike",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});

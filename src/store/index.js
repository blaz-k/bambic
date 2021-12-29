import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Kovinski robniki",
        imgUrl: require("@/assets/img/robniki/robnik1.jpg"),
        text: "Kovinski robniki so ena najbolj elegantnih rešitev za oblikovanje vašega vrta ali okolice. Največkrat jih uporabljamo za razmejitev okrasnega lubja in trate. Uporabljajo pa se lahko tudi za številne druge namene. Odlikujejo jih lastnosti kot so: ",
        lastnosti: [
          { lastnost: "- hitra in enostavna montaža" },
          { lastnost: "- bstojen in nerjaveč material" },
          {
            lastnost: "- možnost oblikovanja po želji (ravne linije, krivulje)",
          },
          { lastnost: "- cenovno ugodno" },
          { lastnost: "- pestra izbira oblik robnikov" },
        ],
        cena: "že od 3€/meter",
        details: [
          {
            detailName: "Osnovni robniki",
            detailText:
              "Osnovni I-robniki so tako rekoč univerzalni robniki. Uporabljajo se lahko tako za ravne linije kot tudi za krivulje-izdelavo krogov.",
            imgRobnik: require("@/assets/img/robniki/robnik3.jpg"),
          },
          {
            detailName: "L-robniki",
            detailText:
              "L-robniki so primerni za izdelavo ravnih linij in vogalov.",
            imgRobnik: require("@/assets/img/robniki/robnik3.jpg"),
          },
          {
            detailName: "L-robniki z zarezami",
            detailText:
              "L-robniki z zarezami so primerni za izdelavo ravnih linij, kot tudi krivulj ali krogov.",
            imgRobnik: require("@/assets/img/robniki/robnik3.jpg"),
          },
          {
            detailName: "T-robniki",
            detailText:
              "T-robniki so eni najbolj močnih izvedb robnikov. Primerni za ravne linije.",
            imgRobnik: require("@/assets/img/robniki/robnik3.jpg"),
          },
          {
            detailName: "Z-robniki",
            detailText: "Z-robniki so primerni za ravne linije.",
            imgRobnik: require("@/assets/img/robniki/robnik3.jpg"),
          },
        ],
      },
      {
        id: 2,
        name: "Kovinske ograje",
        imgUrl: require("@/assets/img/ograje/ograja.jpg"),
        details: [""],
        cena: "že od 6€ na tekoči meter letvice/lamele širine 10cm",
        text: "Bi radi zamenjali staro dotrajano leseno ograjo z novo iz pločevine? Brez vzdrževanja, odporna proti vsem vremenskim razmeram, zelo dolga življenska doba, estetsko dovršeno, enostavna montaža. Horizontalna ali vertikalna postavitev letvic. Na voljo več različnih barv, materialov, dimenzij ter profilov. Tudi v imitaciji lesa (dolžine po naročilu)",
      },
      {
        id: 3,
        name: "Pokrovi za toplotne črpalke",
        imgUrl: require("@/assets/img/dark-background.jpeg"),
        details: [""],
        cena: "že od 300 €",
        text: "Zaščita za zunanjo enoto toplotne črpalke ali klime. Ohišje narejeno iz aluminija. Na voljo več različnih barv in materialov.",
      },
      {
        id: 4,
        name: "Smetarniki",
        imgUrl: require("@/assets/img/smetarniki/smetarnik1.jpg"),
        details: [""],
        cena: "že od 350€/kos",
        text: "Odprt smetarnik na kolesih (ograja okoli vašega smetnjaka) ali pa klasičen z vratci. Če bi radi zakrili smetnjake na lep in eleganten način in nanj obesili morda korita za rože. vIzdelan iz ALU profilov in ALU pločevine(možno v večih barvah). Spodaj ima tudi kolesca za premikanje. Odporen na vse vremenske razmere. ",
      },
      {
        id: 5,
        name: "Zaščitna ograja proti polžem",
        imgUrl: require("@/assets/img/crpalke/crpalka1.jpg"),
        details: [
          { material: "Aluminij/Pocinkana pločevina/Inox " },
          { profileHeight: "20cm" },
          { profileLenght: "150cm (ali po želji)" },
        ],
        cena: "že od 7€/meter ",
        text: "Enostavna montaža, vogalniki priloženi. Možna postavitev tudi na visoke grede.",
      },

      {
        id: 6,
        name: "Okenske police iz pločevine",
        imgUrl: require("@/assets/img/ograje/ograja.jpg"),
        details: [
          { material: "Aluminij/Pocinkana barvana pločevina" },
          { profileHeight: "" },
          { profileLenght: "" },
        ],
        cena: "že od 5€/meter",
        text: "Po naročilu izdelane okenske police",
      },
      {
        id: 6,
        name: "Dimniške kape",
        imgUrl: require("@/assets/img/ograje/ograja.jpg"),
        details: [
          { material: "Nerjaveča pločevina" },
          { profileHeight: "" },
          { profileLenght: "" },
        ],
        cena: "že od 40€/kos",
        text: "Na voljo tudi več različnih dimenzij dimniških kap",
      },
    ],

    services: [
      //UREDI DA BODO VSE SLIKE ISTE VELIKOSTI. NEK KVADRAT 200X200, DA BO LEPŠI IZGLED.
      {
        id: 1,
        name: "Krivljenje pločevine",
        img: require("@/assets/img/crpalkabis.jpg"),
        text: "Lahko vam postavimo ograjo",
      },

      {
        id: 2,
        name: "Izdelava in prodaja kovinskih izdelkov",
        img: require("@/assets/img/ograjabis.jpg"),
        text: "Robniki, Ograje, Pokrovi, Okenske police, Dimniške kape, Smetarniki",
      },
    ],
    photos: [
      {
        id: 1,
        imgUrl: require("@/assets/img/gallery/1.jpeg"),
        imgBis: require("@/assets/img/gallery/1bis.jpeg"),
      },
      {
        id: 2,
        imgUrl: require("@/assets/img/gallery/2.jpeg"),
        imgBis: require("@/assets/img/gallery/2bis.jpeg"),
      },
      {
        id: 3,
        imgUrl: require("@/assets/img/gallery/3.jpeg"),
        imgBis: require("@/assets/img/gallery/3bis.jpeg"),
      },
      {
        id: 4,
        imgUrl: require("@/assets/img/gallery/4.jpeg"),
        imgBis: require("@/assets/img/gallery/4bis.jpeg"),
      },

      {
        id: 5,
        imgUrl: require("@/assets/img/gallery/5.jpeg"),
        imgBis: require("@/assets/img/gallery/5bis.jpeg"),
      },
      {
        id: 6,
        imgUrl: require("@/assets/img/gallery/6.jpeg"),
        imgBis: require("@/assets/img/gallery/6bis.jpeg"),
      },
      {
        id: 7,
        imgUrl: require("@/assets/img/gallery/7.jpeg"),
        imgBis: require("@/assets/img/gallery/7bis.jpeg"),
      },
      {
        id: 8,
        imgUrl: require("@/assets/img/gallery/8.jpeg"),
        imgBis: require("@/assets/img/gallery/8bis.jpeg"),
      },
      {
        id: 9,
        imgUrl: require("@/assets/img/gallery/9.jpeg"),
        imgBis: require("@/assets/img/gallery/9bis.jpeg"),
      },
      {
        id: 10,
        imgUrl: require("@/assets/img/gallery/10.jpeg"),
      },
      {
        id: 11,
        imgUrl: require("@/assets/img/gallery/11.jpeg"),
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});

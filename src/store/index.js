import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Kovinski robniki",
        imgUrl: require("@/assets/img/gallery/1.jpeg"),
        text: `Kovinski robniki so ena najbolj elegantnih rešitev za oblikovanje vašega vrta ali okolice. Največkrat jih uporabljamo za razmejitev okrasnega 
        lubja in trate. Uporabljajo pa se lahko tudi za številne druge namene. Odlikujejo jih lastnosti kot so: `,
        obnova: `Kovinski robniki so ena najbolj elegantnih rešitev za oblikovanje vašega vrta ali okolice. Največkrat jih uporabljamo za razmejitev okrasnega 
        lubja in trate. Uporabljajo pa se lahko tudi za številne druge namene.`,
        lastnosti: [
          "- hitra in enostavna montaža",
          "- obstojen in nerjaveč material",
          "- možnost oblikovanja po želji (ravne linije, krivulje)",
          "- cenovno ugodno",
          "- pestra izbira oblik robnikov",
          "- že od 3€/meter",
        ],
        cena: "že od 3€/meter",
        details: [
          {
            id: 1,
            detailName: "Osnovni robniki",
            detailText:
              "Osnovni I-robniki so tako rekoč univerzalni robniki. Uporabljajo se lahko tako za ravne linije kot tudi za krivulje-izdelavo krogov.",
            imgRobnik: require("@/assets/img/gallery/1bis.jpeg"),
          },
          {
            id: 2,

            detailName: "L-robniki",
            detailText:
              "L-robniki so primerni za izdelavo ravnih linij in vogalov.",
            imgRobnik: require("@/assets/img/gallery/2bis.jpeg"),
          },
          {
            id: 3,

            detailName: "L-robniki z zarezami",
            detailText:
              "L-robniki z zarezami so primerni za izdelavo ravnih linij, kot tudi krivulj ali krogov.",
            imgRobnik: require("@/assets/img/gallery/3bis.jpeg"),
          },
          {
            id: 4,

            detailName: "T-robniki",
            detailText:
              "T-robniki so eni najbolj močnih izvedb robnikov. Primerni za ravne linije.",
            imgRobnik: require("@/assets/img/gallery/4bis.jpeg"),
          },
          {
            id: 5,

            detailName: "Z-robniki",
            detailText: "Z-robniki so primerni za ravne linije.",
            imgRobnik: require("@/assets/img/gallery/5bis.jpeg"),
          },
        ],
      },
      {
        id: 2,
        name: "Kovinske ograje",
        imgUrl: require("@/assets/img/gallery/2.jpeg"),
        details: [""],
        cena: "že od 6€ na tekoči meter letvice/lamele širine 10cm",
        text: `Bi radi zamenjali staro dotrajano leseno ograjo z novo iz pločevine? Brez vzdrževanja, odporna proti vsem vremenskim razmeram,
         zelo dolga življenska doba, estetsko dovršeno, enostavna montaža. Horizontalna ali vertikalna postavitev letvic. Na voljo več različnih barv, 
         materialov, dimenzij ter profilov. Tudi v imitaciji lesa (dolžine po naročilu)`,
        obnova: `Brez vzdrževanja, odporna proti vsem vremenskim razmeram,
         zelo dolga življenska doba, estetsko dovršeno, enostavna montaža. Horizontalna ali vertikalna postavitev letvic. Tudi v imitaciji lesa (dolžine po naročilu)`,
      },
      {
        id: 3,
        name: "Zaščitna ograja proti polžem",
        imgUrl: require("@/assets/img/gallery/3.jpeg"),
        details: [
          { material: "Aluminij/Pocinkana pločevina/Inox " },
          { profileHeight: "20cm" },
          { profileLenght: "150cm (ali po želji)" },
        ],
        cena: "že od 7€/meter ",
        text: "Enostavna montaža, vogalniki priloženi. Možna postavitev tudi na visoke grede.",
        obnova: `Enostavna montaža, vogalniki priloženi. Možna postavitev tudi na visoke grede.`,
      },
      {
        id: 4,
        name: "Smetarniki",
        imgUrl: require("@/assets/img/gallery/4.jpeg"),

        details: [""],
        cena: "že od 350€/kos",
        text: `
        Odporen na vse vremenske razmere. Smetarnik je sestavljen iz vroče cinkanih prašno barvanih jeklenih profilov debeline 1,30 mm. Obod je iz pločevine. 
        Smetarnik ima vhodna vrata ter dvižno loputo na vrhu.`,
        lastnosti: [
          "- Večje udobje uporabe zabojnikov za odpadke.",
          "- Zaščita odpadkov pred vplivi vremenskih razmer",
          "- Na voljo več različnih modelov in barv.",
          "- CENOVNO UGODNO",
        ],
        secondText: `Ob ohranjanju funkcije selektivnega zbiranja odpadkov smetarniki ustvarjajo estetski prostor za shranjevanje odpadkov, hkrati pa ščitijo 
        zabojnike pred dežjem in soncem.

      
        `,
        obnova: `Ob ohranjanju funkcije selektivnega zbiranja odpadkov smetarniki ustvarjajo estetski prostor za shranjevanje odpadkov, hkrati pa ščitijo zabojnike pred dežjem in soncem.      `,
      },

      {
        id: 5,
        name: "Okenske police iz pločevine",
        imgUrl: require("@/assets/img/gallery/5.jpeg"),
        details: [
          { material: "Aluminij/Pocinkana barvana pločevina" },
          { profileHeight: "" },
          { profileLenght: "" },
        ],
        cena: "že od 5€/meter",
        text: "Po naročilu izdelane okenske police",
        obnova: `Po naročilu izdelane okenske police`,
      },

      {
        id: 6,
        name: "Pokrovi za toplotne črpalke",
        imgUrl: require("@/assets/img/gallery/6.jpeg"),
        details: [""],
        cena: "že od 300 €",
        text: "Zaščita za zunanjo enoto toplotne črpalke ali klime. Ohišje narejeno iz aluminija. Na voljo več različnih barv in materialov.",
        obnova: `Zaščita za zunanjo enoto toplotne črpalke ali klime. Ohišje narejeno iz aluminija. Na voljo več različnih barv in materialov.`,
      },

      {
        id: 7,
        name: "Dimniške kape",
        imgUrl: require("@/assets/img/gallery/7.jpeg"),
        details: [
          { material: "Nerjaveča pločevina" },
          { profileHeight: "" },
          { profileLenght: "" },
        ],
        cena: "že od 40€/kos",
        text: "Na voljo več različnih dimenzij",
        obnova: `Na voljo tudi več različnih dimenzij dimniških kap`,
      },
      {
        id: 8,
        name: "Hiša za robotske kosilnice",
        imgUrl: require("@/assets/img/gallery/7.jpeg"),
        details: [
          { material: "Nerjaveča pločevina" },
          { profileHeight: "" },
          { profileLenght: "" },
        ],
        cena: "že od 40€/kos",
        text: "Na voljo tudi več različnih dimenzij hisk za kosilnice",
        obnova: `Na voljo tudi več različnih dimenzij hisk za kosilnice`,
      },
    ],
    images: [
      { img: require("@/assets/img/smetarniki/smetarnik1.jpg") },
      { img: require("@/assets/img/smetarniki/smetarnik2.png") },
      { img: require("@/assets/img/smetarniki/smetarnik3.png") },
      { img: require("@/assets/img/smetarniki/smetarnik4.png") },
      { img: require("@/assets/img/smetarniki/smetarnik5.png") },
      { img: require("@/assets/img/smetarniki/smetarnik6.png") },
      { img: require("@/assets/img/smetarniki/smetarnik7.png") },
      { img: require("@/assets/img/smetarniki/smetarnik8.png") },
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
    kontakt: [
      {
        name: "Jani",
        surname: "Bambič",
        tel: "+386 (0) 41 571 155 ",
        address: "Pot na Pretovč 5",
        postalCode: "4224 Gorenja vas",
        email: "Jani.Bambic@gmail.com",
      },
    ],
  },

  mutations: {},
  actions: {},
  modules: {},
});

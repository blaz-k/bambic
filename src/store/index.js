import { createStore } from "vuex";

export default createStore({
  state: {
    ostaliRobniki: [
      {
        id: 1,
        detailName: "Osnovni robniki",
        detailText:
          "Osnovni -robniki so tako rekoč univerzalni robniki. Uporabljajo se lahko tako za ravne linije kot tudi za krivulje-izdelavo krogov.",
        imgRobnik: require("@/assets/img/gallery/11.jpeg"),
      },
      {
        id: 2,
        detailName: "l robniki",
        detailText:
          "Osnovni I-robniki so tako rekoč univerzalni robniki. Uporabljajo se lahko tako za ravne linije kot tudi za krivulje-izdelavo krogov.",
        imgRobnik: require("@/assets/img/gallery/11.jpeg"),
      },
      {
        id: 3,
        detailName: "Z robniki",
        detailText:
          "Osnovni I-robniki so tako rekoč univerzalni robniki. Uporabljajo se lahko tako za ravne linije kot tudi za krivulje-izdelavo krogov.",
        imgRobnik: require("@/assets/img/gallery/11.jpeg"),
      },
    ],
    products: [
      {
        id: 1,
        name: "Kovinski robniki",
        imgUrl: require("@/assets/img/gallery/11.jpeg"),
        text: `Kovinski robniki so ena najbolj elegantnih rešitev za oblikovanje vašega vrta ali okolice. Največkrat jih uporabljamo za razmejitev okrasnega 
        lubja in trate. Uporabljajo pa se lahko tudi za številne druge namene. Odlikujejo jih lastnosti kot so: `,
        obnova: `So ena najbolj elegantnih rešitev za oblikovanje vašega vrta ali okolice. Največkrat jih uporabljamo za razmejitev okrasnega 
        lubja in trate.`,
        lastnosti: [
          "- hitra in enostavna montaža",
          "- obstojen in nerjaveč material",
          "- možnost oblikovanja po želji (ravne linije, krivulje)",
          "- cenovno ugodno",
          "- pestra izbira oblik robnikov",
          "- že od 3€/meter",
        ],
        cena: "že od 3€/meter",
        images: [
          {
            id: 1,
            imgUrl: require("@/assets/img/gallery/11.jpeg"),
            imgBis: require("@/assets/img/gallery/11bis.jpeg"),
          },
        ],

        details: [
          {
            id: 1,
            detailName: "Osnovni robniki",
            detailText:
              "Osnovni I-robniki so tako rekoč univerzalni robniki. Uporabljajo se lahko tako za ravne linije kot tudi za krivulje-izdelavo krogov.",
            imgRobnik: require("@/assets/img/gallery/11.jpeg"),
            images: [
              {
                // id: 1,
                imgUrl: require("@/assets/img/gallery/11.jpeg"),
                imgBis: require("@/assets/img/gallery/11bis.jpeg"),
              },
            ],
          },
          {
            id: 2,

            detailName: "L-robniki",
            detailText:
              "L-robniki so primerni za izdelavo ravnih linij in vogalov.",
            imgRobnik: require("@/assets/img/gallery/11bis.jpeg"),
            images: [
              {
                // id: 1,
                imgUrl: require("@/assets/img/gallery/11.jpeg"),
                imgBis: require("@/assets/img/gallery/11bis.jpeg"),
              },
            ],
          },
          {
            id: 3,

            detailName: "L-robniki z zarezami",
            detailText:
              "L-robniki z zarezami so primerni za izdelavo ravnih linij, kot tudi krivulj ali krogov.",
            imgRobnik: require("@/assets/img/gallery/11bis.jpeg"),
            images: [
              {
                // id: 1,
                imgUrl: require("@/assets/img/gallery/11.jpeg"),
                imgBis: require("@/assets/img/gallery/11bis.jpeg"),
              },
            ],
          },
          {
            id: 4,

            detailName: "T-robniki",
            detailText:
              "T-robniki so eni najbolj močnih izvedb robnikov. Primerni za ravne linije.",
            cena: "MPC=7.5EUR/kom",
            material: "pocinkana pločevina ali aluminij",
            mere: "višina 10cm dolžina 150cm",
            imgRobnik: require("@/assets/img/gallery/11bis.jpeg"),
            images: [
              {
                // id: 1,
                imgUrl: require("@/assets/img/gallery/11.jpeg"),
                imgBis: require("@/assets/img/gallery/11bis.jpeg"),
              },
            ],
          },
          {
            id: 5,

            detailName: "Z-robniki",
            detailText: "Z-robniki so primerni za ravne linije.",
            imgRobnik: require("@/assets/img/gallery/11bis.jpeg"),
            images: [
              {
                // id: 1,
                imgUrl: require("@/assets/img/gallery/11.jpeg"),
                imgBis: require("@/assets/img/gallery/11bis.jpeg"),
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Kovinske ograje",
        imgUrl: require("@/assets/img/gallery/Smetarnik2bis.jpg"),
        details: [""],
        cena: "že od 6€ na tekoči meter letvice/lamele širine 10cm",
        text: `Bi radi zamenjali staro dotrajano leseno ograjo z novo iz pločevine? Brez vzdrževanja, odporna proti vsem vremenskim razmeram,
         zelo dolga življenska doba, estetsko dovršeno, enostavna montaža. Horizontalna ali vertikalna postavitev letvic. Na voljo več različnih barv, 
         materialov, dimenzij ter profilov. Tudi v imitaciji lesa (dolžine po naročilu)`,
        obnova: `Brez vzdrževanja, odporna proti vsem vremenskim razmeram,
         zelo dolga življenska doba, estetsko dovršeno, enostavna montaža. Horizontalna ali vertikalna postavitev letvic. Tudi v imitaciji lesa `,
      },
      {
        id: 3,
        name: "Zaščitna ograja proti polžem",
        imgUrl: require("@/assets/img/smetarniki/Smetarnik4.jpg"),
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
        imgUrl: require("@/assets/img/gallery/11.jpeg"),

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
        imgUrl: require("@/assets/img/gallery/11.jpeg"),
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
        imgUrl: require("@/assets/img/gallery/robnik1.png"),
        details: [""],
        cena: "že od 300 €",
        text: ` " Da bi zunanja enota vaše toplotne črpalke ali klime naprave izgledala kar se da lepo imamo za vas rešitev in sicer kovinski pokrov. 
        Zaščita za zunanjo enoto toplotne črpalke ali klime. Ohišje narejeno iz aluminija. Na voljo več različnih barv in materialov."`,
        obnova: `Zaščita za zunanjo enoto toplotne črpalke ali klime. Ohišje narejeno iz aluminija. Na voljo več različnih barv in materialov.`,
      },

      {
        id: 7,
        name: "Dimniške kape",
        imgUrl: require("@/assets/img/gallery/11.jpeg"),
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
        imgUrl: require("@/assets/img/gallery/11.jpeg"),
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
      // { img: require("@/assets/img/smetarniki/Smetarnik1.jpg") },
      { img: require("@/assets/img/smetarniki/Smetarnik2.jpg") },
      { img: require("@/assets/img/smetarniki/Smetarnik3.jpg") },
      { img: require("@/assets/img/smetarniki/Smetarnik4.jpg") },
      { img: require("@/assets/img/smetarniki/Smetarnik5.jpg") },
      { img: require("@/assets/img/smetarniki/Smetarnik6.jpg") },
      { img: require("@/assets/img/smetarniki/Smetarnik7.jpg") },
      { img: require("@/assets/img/smetarniki/Smetarnik8.jpg") },
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
        id: 44,
        imgUrl: require("@/assets/img/gallery/Smetarnik.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnikbis.jpg"),
      },
      {
        id: 45,
        imgUrl: require("@/assets/img/gallery/Smetarnik1.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik1bis.jpg"),
      },
      {
        id: 46,
        imgUrl: require("@/assets/img/gallery/Smetarnik2.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik2bis.jpg"),
      },
      {
        id: 47,
        imgUrl: require("@/assets/img/gallery/Smetarnik3.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik3bis.jpg"),
      },
      {
        id: 48,
        imgUrl: require("@/assets/img/gallery/Smetarnik4.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik4bis.jpg"),
      },
      {
        id: 49,
        imgUrl: require("@/assets/img/gallery/Smetarnik5.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik5bis.jpg"),
      },
      {
        id: 50,
        imgUrl: require("@/assets/img/gallery/Smetarnik6.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik6bis.jpg"),
      },
      {
        id: 51,
        imgUrl: require("@/assets/img/gallery/Smetarnik7.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik7bis.jpg"),
      },
      {
        id: 52,
        imgUrl: require("@/assets/img/gallery/Smetarnik8.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik8bis.jpg"),
      },
      {
        id: 53,
        imgUrl: require("@/assets/img/gallery/Smetarnik9.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik9bis.jpg"),
      },
      {
        id: 54,
        imgUrl: require("@/assets/img/gallery/Smetarnik10.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik10bis.jpg"),
      },
      {
        id: 55,
        imgUrl: require("@/assets/img/gallery/Smetarnik11.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik11bis.jpg"),
      },
      {
        id: 57,
        imgUrl: require("@/assets/img/gallery/Smetarnik13.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik13bis.jpg"),
      },
      {
        id: 58,
        imgUrl: require("@/assets/img/gallery/Smetarnik14.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik14bis.jpg"),
      },
      {
        id: 59,
        imgUrl: require("@/assets/img/gallery/Smetarnik15.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik15bis.jpg"),
      },
      {
        id: 60,
        imgUrl: require("@/assets/img/gallery/Smetarnik16.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik16bis.jpg"),
      },
      {
        id: 61,
        imgUrl: require("@/assets/img/gallery/Smetarnik17.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik17bis.jpg"),
      },
      // {
      //   id: 1,
      //   imgUrl: require("@/assets/img/gallery/Smetarnik16.jpg"),
      //   imgBis: require("@/assets/img/gallery/Smetarnik16bis.jpg"),
      // },

      // {
      //   id: 2,
      //   imgUrl: require("@/assets/img/gallery/Smetarnik17.jpg"),
      //   imgBis: require("@/assets/img/gallery/Smetarnik17bis.jpg"),
      // },
      {
        id: 3,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja2.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja2bis.jpg"),
      },
      {
        id: 4,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja3.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja3bis.jpg"),
      },
      {
        id: 5,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja4.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja4bis.jpg"),
      },
      {
        id: 6,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja5.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja5bis.jpg"),
      },
      {
        id: 7,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja3.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja3bis.jpg"),
      },
      {
        id: 8,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja3.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja3bis.jpg"),
      },
      {
        id: 4,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja6.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja6bis.jpg"),
      },
      {
        id: 9,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja7.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja7bis.jpg"),
      },
      {
        id: 10,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja8.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja8bis.jpg"),
      },
      {
        id: 11,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja9.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja9bis.jpg"),
      },
      {
        id: 12,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja10.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja10bis.jpg"),
      },
      {
        id: 13,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja11.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja11bis.jpg"),
      },
      {
        id: 14,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja12.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja12bis.jpg"),
      },
      {
        id: 15,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja13.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja13bis.jpg"),
      },
      {
        id: 16,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja14.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja14bis.jpg"),
      },
      {
        id: 17,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja15.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja15bis.jpg"),
      },
      {
        id: 18,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja16.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja16bis.jpg"),
      },
      {
        id: 19,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja17.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja17bis.jpg"),
      },
      {
        id: 20,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja18.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja18bis.jpg"),
      },

      {
        id: 22,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja20.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja20bis.jpg"),
      },
      {
        id: 23,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja21.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja21bis.jpg"),
      },
      {
        id: 24,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja22.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja22bis.jpg"),
      },
      {
        id: 25,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja23.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja23bis.jpg"),
      },
      {
        id: 26,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja24.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja24bis.jpg"),
      },

      {
        id: 27,
        imgUrl: require("../assets/img/gallery/robnik1.png"),
        imgBis: require("../assets/img/gallery/robnik1bis.png"),
      },
      {
        id: 28,
        imgUrl: require("@/assets/img/gallery/robnik2.png"),
        imgBis: require("@/assets/img/gallery/robnik2bis.png"),
      },
      {
        id: 29,
        imgUrl: require("@/assets/img/gallery/robnik3.jpg"),
        imgBis: require("@/assets/img/gallery/robnik3bis.jpg"),
      },
      {
        id: 30,
        imgUrl: require("@/assets/img/gallery/robnik4.jpg"),
        imgBis: require("@/assets/img/gallery/robnik4bis.jpg"),
      },
      {
        id: 31,
        imgUrl: require("@/assets/img/gallery/robnik5.jpg"),
        imgBis: require("@/assets/img/gallery/robnik5bis.jpg"),
      },
      {
        id: 32,
        imgUrl: require("@/assets/img/gallery/robnik6.jpg"),
        imgBis: require("@/assets/img/gallery/robnik6bis.jpg"),
      },
      {
        id: 33,
        imgUrl: require("@/assets/img/gallery/robnik7.jpg"),
        imgBis: require("@/assets/img/gallery/robnik7bis.jpg"),
      },
      {
        id: 34,
        imgUrl: require("@/assets/img/gallery/robnik8.jpg"),
        imgBis: require("@/assets/img/gallery/robnik8bis.jpg"),
      },
      {
        id: 35,
        imgUrl: require("@/assets/img/gallery/robnik9.jpg"),
        imgBis: require("@/assets/img/gallery/robnik9bis.jpg"),
      },
      {
        id: 36,
        imgUrl: require("@/assets/img/gallery/robnik10.jpg"),
        imgBis: require("@/assets/img/gallery/robnik10bis.jpg"),
      },
      {
        id: 37,
        imgUrl: require("@/assets/img/gallery/robnik11.jpg"),
        imgBis: require("@/assets/img/gallery/robnik11bis.jpg"),
      },
      {
        id: 38,
        imgUrl: require("@/assets/img/gallery/robnik12.jpg"),
        imgBis: require("@/assets/img/gallery/robnik12bis.jpg"),
      },
      {
        id: 39,
        imgUrl: require("@/assets/img/gallery/robnik13.jpg"),
        imgBis: require("@/assets/img/gallery/robnik13bis.jpg"),
      },
      {
        id: 40,
        imgUrl: require("@/assets/img/gallery/robnik14.jpg"),
        imgBis: require("@/assets/img/gallery/robnik14bis.jpg"),
      },
      {
        id: 41,
        imgUrl: require("@/assets/img/gallery/robnik15.jpg"),
        imgBis: require("@/assets/img/gallery/robnik15bis.jpg"),
      },
      {
        id: 42,
        imgUrl: require("@/assets/img/gallery/robotska-kosilnica.jpg"),
        imgBis: require("@/assets/img/gallery/robotska-kosilnicabis.jpg"),
      },
      {
        id: 75,
        imgUrl: require("@/assets/img/gallery/robotska-kosilnica1.jpg"),
        imgBis: require("@/assets/img/gallery/robotska-kosilnica1bis.jpg"),
      },
      {
        id: 76,
        imgUrl: require("@/assets/img/gallery/robotska-kosilnica2.jpg"),
        imgBis: require("@/assets/img/gallery/robotska-kosilnica2bis.jpg"),
      },
      {
        id: 77,
        imgUrl: require("@/assets/img/gallery/robotska-kosilnica3.jpg"),
        imgBis: require("@/assets/img/gallery/robotska-kosilnica3bis.jpg"),
      },
      {
        id: 43,
        imgUrl: require("@/assets/img/gallery/robnik.jpg"),
        imgBis: require("@/assets/img/gallery/robnikbis.jpg"),
      },

      // {
      //   id: 62,
      //   imgUrl: require("@/assets/img/gallery/Smetarnik18.jpg"),
      //   imgBis: require("@/assets/img/gallery/Smetarnik18bis.jpg"),
      // },
      {
        id: 63,
        imgUrl: require("@/assets/img/gallery/toplotna1.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna1bis.jpg"),
      },
      {
        id: 64,
        imgUrl: require("@/assets/img/gallery/toplotna2.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna2bis.jpg"),
      },
      {
        id: 65,
        imgUrl: require("@/assets/img/gallery/toplotna3.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna3bis.jpg"),
      },
      {
        id: 66,
        imgUrl: require("@/assets/img/gallery/toplotna4.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna4bis.jpg"),
      },
      {
        id: 67,
        imgUrl: require("@/assets/img/gallery/toplotna5.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna5bis.jpg"),
      },
      {
        id: 68,
        imgUrl: require("@/assets/img/gallery/toplotna6.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna6bis.jpg"),
      },
      {
        id: 69,
        imgUrl: require("@/assets/img/gallery/toplotna7.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna7bis.jpg"),
      },
      {
        id: 70,
        imgUrl: require("@/assets/img/gallery/toplotna8.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna8bis.jpg"),
      },
      {
        id: 71,
        imgUrl: require("@/assets/img/gallery/toplotna9.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna9bis.jpg"),
      },
      {
        id: 72,
        imgUrl: require("@/assets/img/gallery/toplotna10.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna10bis.jpg"),
      },
      {
        id: 73,
        imgUrl: require("@/assets/img/gallery/toplotna11.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna11bis.jpg"),
      },
      {
        id: 74,
        imgUrl: require("@/assets/img/gallery/toplotna12.jpg"),
        imgBis: require("@/assets/img/gallery/toplotna12bis.jpg"),
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

    mnenja: [
      {
        id: 1,
        name: "Nataša iz Medovod",
        kraj: "Medvod",
        besedilo: `"Tako pozitivno izkušnjo kot sem jo imela z vami za kovinske robnike je nisem imela še z nobenim izvajalcem do sedaj. 
        Hitro, zanesljivo in pa predvsem točno. Držali ste se dogovora in z odliko opravili svojo storitev."`,
      },
      {
        id: 2,
        name: "Marija iz Celja",
        kraj: "Celje",
        besedilo: `"Zelo zadovoljna z ograjo proti polžem v visokih gredah. Nič več strupov proti polžem."`,
      },
      {
        id: 3,
        name: "Branko",
        kraj: "",
        besedilo: `"Najboljši ponudnik za kovinske robnike v regiji. Velika izbira in ugodna cena."`,
      },
      {
        id: 4,
        name: "Brigita iz okolice Murske Sobote",
        kraj: "okolice Murske Sobote",
        besedilo: `"Super ste. O vas lahko povem samo pozitivno. V ponedeljek naročila, v sredo že dostava.
        Sto procentno vas bom priporočila znancem in sosedom."`,
      },
      {
        id: 5,
        name: "Marko iz Ljubljane",
        kraj: "Ljubljane",
        besedilo: `"Zahvalil bi se vam za pomoč pri izbiri vrste kovinskih robnikov za naš vrt. Poleg vsega pa ste zelo prijazni in ustrežljivi.
        Tudi dostavili ste nam jih takoj naslednji dan. Le tako naprej!"`,
      },
    ],

    slikeKovinska: [
      {
        id: 3,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja2.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja2bis.jpg"),
      },
      {
        id: 4,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja3.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja3bis.jpg"),
      },
      {
        id: 5,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja4.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja4bis.jpg"),
      },
      {
        id: 6,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja5.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja5bis.jpg"),
      },
      {
        id: 7,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja3.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja3bis.jpg"),
      },
      {
        id: 8,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja3.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja3bis.jpg"),
      },
      {
        id: 4,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja6.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja6bis.jpg"),
      },
      {
        id: 9,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja7.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja7bis.jpg"),
      },
      {
        id: 10,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja8.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja8bis.jpg"),
      },
      {
        id: 11,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja9.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja9bis.jpg"),
      },
      {
        id: 12,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja10.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja10bis.jpg"),
      },
      {
        id: 13,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja11.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja11bis.jpg"),
      },
      {
        id: 14,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja12.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja12bis.jpg"),
      },
      {
        id: 15,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja13.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja13bis.jpg"),
      },
      {
        id: 16,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja14.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja14bis.jpg"),
      },
      {
        id: 17,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja15.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja15bis.jpg"),
      },
      {
        id: 18,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja16.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja16bis.jpg"),
      },
      {
        id: 19,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja17.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja17bis.jpg"),
      },
      {
        id: 20,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja18.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja18bis.jpg"),
      },

      {
        id: 22,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja20.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja20bis.jpg"),
      },
      {
        id: 23,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja21.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja21bis.jpg"),
      },
      {
        id: 24,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja22.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja22bis.jpg"),
      },
      {
        id: 25,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja23.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja23bis.jpg"),
      },
      {
        id: 26,
        imgUrl: require("@/assets/img/gallery/kovinska-ograja24.jpg"),
        imgBis: require("@/assets/img/gallery/kovinska-ograja24bis.jpg"),
      },
    ],

    slikeRobniki: [
      {
        id: 43,
        imgUrl: require("@/assets/img/gallery/robnik.jpg"),
        imgBis: require("@/assets/img/gallery/robnikbis.jpg"),
      },
      {
        id: 27,
        imgUrl: require("../assets/img/gallery/robnik1.png"),
        imgBis: require("../assets/img/gallery/robnik1bis.png"),
      },
      {
        id: 28,
        imgUrl: require("@/assets/img/gallery/robnik2.png"),
        imgBis: require("@/assets/img/gallery/robnik2bis.png"),
      },
      {
        id: 29,
        imgUrl: require("@/assets/img/gallery/robnik3.jpg"),
        imgBis: require("@/assets/img/gallery/robnik3bis.jpg"),
      },
      {
        id: 30,
        imgUrl: require("@/assets/img/gallery/robnik4.jpg"),
        imgBis: require("@/assets/img/gallery/robnik4bis.jpg"),
      },
      {
        id: 31,
        imgUrl: require("@/assets/img/gallery/robnik5.jpg"),
        imgBis: require("@/assets/img/gallery/robnik5bis.jpg"),
      },
      {
        id: 32,
        imgUrl: require("@/assets/img/gallery/robnik6.jpg"),
        imgBis: require("@/assets/img/gallery/robnik6bis.jpg"),
      },
      {
        id: 33,
        imgUrl: require("@/assets/img/gallery/robnik7.jpg"),
        imgBis: require("@/assets/img/gallery/robnik7bis.jpg"),
      },
      {
        id: 34,
        imgUrl: require("@/assets/img/gallery/robnik8.jpg"),
        imgBis: require("@/assets/img/gallery/robnik8bis.jpg"),
      },
      {
        id: 35,
        imgUrl: require("@/assets/img/gallery/robnik9.jpg"),
        imgBis: require("@/assets/img/gallery/robnik9bis.jpg"),
      },
      {
        id: 36,
        imgUrl: require("@/assets/img/gallery/robnik10.jpg"),
        imgBis: require("@/assets/img/gallery/robnik10bis.jpg"),
      },
      {
        id: 37,
        imgUrl: require("@/assets/img/gallery/robnik11.jpg"),
        imgBis: require("@/assets/img/gallery/robnik11bis.jpg"),
      },
      {
        id: 38,
        imgUrl: require("@/assets/img/gallery/robnik12.jpg"),
        imgBis: require("@/assets/img/gallery/robnik12bis.jpg"),
      },
      {
        id: 39,
        imgUrl: require("@/assets/img/gallery/robnik13.jpg"),
        imgBis: require("@/assets/img/gallery/robnik13bis.jpg"),
      },
      {
        id: 40,
        imgUrl: require("@/assets/img/gallery/robnik14.jpg"),
        imgBis: require("@/assets/img/gallery/robnik14bis.jpg"),
      },
      {
        id: 41,
        imgUrl: require("@/assets/img/gallery/robnik15.jpg"),
        imgBis: require("@/assets/img/gallery/robnik15bis.jpg"),
      },
    ],
    slikeSmetarnik: [
      {
        id: 44,
        imgUrl: require("@/assets/img/gallery/Smetarnik.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnikbis.jpg"),
      },
      {
        id: 45,
        imgUrl: require("@/assets/img/gallery/Smetarnik1.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik1bis.jpg"),
      },
      {
        id: 46,
        imgUrl: require("@/assets/img/gallery/Smetarnik2.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik2bis.jpg"),
      },
      {
        id: 47,
        imgUrl: require("@/assets/img/gallery/Smetarnik3.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik3bis.jpg"),
      },
      {
        id: 48,
        imgUrl: require("@/assets/img/gallery/Smetarnik4.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik4bis.jpg"),
      },
      {
        id: 49,
        imgUrl: require("@/assets/img/gallery/Smetarnik5.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik5bis.jpg"),
      },
      {
        id: 50,
        imgUrl: require("@/assets/img/gallery/Smetarnik6.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik6bis.jpg"),
      },
      {
        id: 51,
        imgUrl: require("@/assets/img/gallery/Smetarnik7.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik7bis.jpg"),
      },
      {
        id: 52,
        imgUrl: require("@/assets/img/gallery/Smetarnik8.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik8bis.jpg"),
      },
      {
        id: 53,
        imgUrl: require("@/assets/img/gallery/Smetarnik9.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik9bis.jpg"),
      },
      {
        id: 54,
        imgUrl: require("@/assets/img/gallery/Smetarnik10.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik10bis.jpg"),
      },
      {
        id: 55,
        imgUrl: require("@/assets/img/gallery/Smetarnik11.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik11bis.jpg"),
      },
      {
        id: 57,
        imgUrl: require("@/assets/img/gallery/Smetarnik13.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik13bis.jpg"),
      },
      {
        id: 58,
        imgUrl: require("@/assets/img/gallery/Smetarnik14.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik14bis.jpg"),
      },
      {
        id: 59,
        imgUrl: require("@/assets/img/gallery/Smetarnik15.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik15bis.jpg"),
      },
      {
        id: 60,
        imgUrl: require("@/assets/img/gallery/Smetarnik16.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik16bis.jpg"),
      },
      {
        id: 61,
        imgUrl: require("@/assets/img/gallery/Smetarnik17.jpg"),
        imgBis: require("@/assets/img/gallery/Smetarnik17bis.jpg"),
      },
    ],
  },

  mutations: {},
  actions: {},
  modules: {},
});

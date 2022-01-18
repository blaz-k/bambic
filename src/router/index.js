import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ContactUs from "../views/ContactUs.vue";
import Test from "../views/Test.vue";
import DimniskeKape from "../views/DimniskeKape.vue";
import KovinskeOgraje from "../views/KovinskeOgraje.vue";
import KovinskiRobniki from "../views/KovinskiRobniki.vue";
import OgrajaPolzi from "../views/OgrajaPolzi.vue";
import OkenskePolice from "../views/OkenskePolice.vue";
import PokroviToplotnih from "../views/PokroviToplotnih.vue";
import Smetarniki from "../views/Smetarniki.vue";
import RobnikiDetails from "../views/RobnikiDetails.vue";
import RobotskeKosilnice from "../views/RobotskeKosilnice.vue";
import BookDetails from "../views/BookDetails.vue";
// import NoviRobnik from "../views/NoviRobnik.vue";

const routes = [
  {
    path: "/kovinski-robniki/:id",
    name: "BookDetails",
    component: BookDetails,
    props: true,
  },
  {
    path: "/kovinski-robniki/:robnikName",
    name: "RobnikiDetails",
    component: RobnikiDetails,
    props: true,
  },
  // {
  //   path: "/kovinski-robniki/:id",
  //   name: "NoviRobnik",
  //   component: NoviRobnik,
  //   props: true,
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },

  {
    path: "/kovinski-robniki",
    name: "KovinskiRobniki",
    component: KovinskiRobniki,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/kovinske-ograje",
    name: "KovinskeOgraje",
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
    component: KovinskeOgraje,
  },
  {
    path: "/ograja-za-polze",
    name: "OgrajaPolzi",
    component: OgrajaPolzi,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },

  {
    path: "/smetarniki",
    name: "Smetarniki",
    component: Smetarniki,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },

  {
    path: "/okenske-police",
    name: "OkenskePolice",
    component: OkenskePolice,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/pokrovi-toplotnih-crpalk",
    name: "PokroviToplotnih",
    component: PokroviToplotnih,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/dimniske-kape",
    name: "DimniskeKape",
    component: DimniskeKape,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/hisa-za-robotske-kosilnice",
    name: "RobotskeKosilnice",
    component: RobotskeKosilnice,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: () => import("../views/Error404.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 700);
  next();
});

export default router;

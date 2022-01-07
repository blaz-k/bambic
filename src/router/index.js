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

const routes = [
  { path: "/test", name: "Test", component: Test },

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
    component: KovinskeOgraje,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },

  {
    path: "/ograja-za-polze",
    name: "OgrajaPolzi",
    component: OgrajaPolzi,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },

  {
    path: "/smetarniki",
    name: "Smetarniki",
    component: Smetarniki,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },

  {
    path: "/okenske-police",
    name: "OkenskePolice",
    component: OkenskePolice,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },

  {
    path: "/pokrovi-toplotnih-crpalk",
    name: "PokroviToplotnih",
    component: PokroviToplotnih,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },

  {
    path: "/dimniske-kape",
    name: "DimniskeKape",
    component: DimniskeKape,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
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
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: () => import("../views/Error404.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInTopRight",
      leaveClass: "animate__animated animate__fadeOutBottomLeft",
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
  }, 300);
  next();
});

export default router;

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
  {
    path: "/",
    name: "Home",
    component: Home,
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
  { path: "/test", name: "Test", component: Test },
  { path: "/dimniske-kape", name: "DimniskeKape", component: DimniskeKape },
  {
    path: "/kovinske-ograje",
    name: "KovinskeOgraje",
    component: KovinskeOgraje,
  },
  {
    path: "/kovinski-robniki",
    name: "KovinskiRobniki",
    component: KovinskiRobniki,
  },
  { path: "/ograja-za-polze", name: "OgrajaPolzi", component: OgrajaPolzi },
  { path: "/okenske-police", name: "OkenskePolice", component: OkenskePolice },
  {
    path: "/pokrovi-toplotnih-crpalk",
    name: "PokroviToplotnih",
    component: PokroviToplotnih,
  },
  { path: "/smetarniki", name: "Smetarniki", component: Smetarniki },
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: () => import("../views/Error404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 500);
  next();
});

export default router;

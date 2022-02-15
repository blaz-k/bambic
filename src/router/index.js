import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ContactUs from "../views/ContactUs.vue";
import KovinskeOgraje from "../views/KovinskeOgraje.vue";
import KovinskiRobniki from "../views/KovinskiRobniki.vue";
import Smetarniki from "../views/Smetarniki.vue";
import RobnikiDetails from "../views/RobnikiDetails.vue";
import Ostalo from "../views/Ostalo.vue";

const routes = [
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
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
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
    path: "/kovinski-robniki/:robnikName",
    name: "RobnikiDetails",
    component: RobnikiDetails,
    props: true,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
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
    path: "/smetarniki",
    name: "Smetarniki",
    component: Smetarniki,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },

  {
    path: "/ostalo",
    name: "Ostalo",
    component: Ostalo,
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
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0 });
        }, 600);
      });
    }
  },
});

export default router;

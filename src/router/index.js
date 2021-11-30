import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eventos",
    name: "Events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/Events.vue"),
  },
  {
    path: "/despedida",
    name: "good-bye",
    component: () =>
      import(/* webpackChunkName: "good-bye" */ "../views/GoodBye.vue"),
  },
  {
    path: "/impacto",
    name: "impact",
    component: () =>
      import(/* webpackChunkName: "impact" */ "../views/Impact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/Home.vue"),
  },
];

/* eslint-disable no-unused-vars */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;

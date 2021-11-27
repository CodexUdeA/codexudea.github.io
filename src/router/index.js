import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/events",
    name: "Events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/Events.vue"),
  },
  {
    path: "/share-a-talk",
    name: "share-a-talk",
    component: () =>
      import(/* webpackChunkName: "share-a-talk" */ "../views/ShareATalk.vue"),
  },
  {
    path: "/good-bye",
    name: "good-bye",
    component: () =>
      import(/* webpackChunkName: "share-a-talk" */ "../views/GoodBye.vue"),
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

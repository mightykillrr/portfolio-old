import { createRouter, createWebHistory } from "vue-router";

import MyWorks from "../components/pages/MyWork.vue";
import TheHome from "../components/pages/TheHome.vue";
import MyLinks from "../components/pages/MyLinks.vue";
import AboutMe from "../components/pages/AboutMe.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TheHome,
  },
  {
    path: "/work",
    name: "my-works",
    component: MyWorks,
  },
  {
    path: "/link",
    name: "my-links",
    component: MyLinks,
  },
  {
    path: "/about",
    name: "about-me",
    component: AboutMe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

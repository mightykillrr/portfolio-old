import { createRouter, createWebHashHistory } from "vue-router";

import MyWorks from "../components/pages/MyWork.vue";
import TheHome from "../components/pages/TheHome.vue";
import MyLinks from "../components/pages/MyLinks.vue";
import AboutMe from "../components/pages/AboutMe.vue";

const routes = [
  {
    path: "/",
    name: "home",
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
  history: createWebHashHistory(),
  routes,
});

export default router;

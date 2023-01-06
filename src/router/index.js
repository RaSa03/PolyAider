import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Categories from "@/views/Categories.vue";
import SubjectPage from "@/views/SubjectPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories,
  },
  {
    path: "/categories/:id",
    name: "SubjectPage",
    component: SubjectPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

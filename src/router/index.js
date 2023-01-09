import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Categories from "@/views/Categories.vue";
import SubjectPage from "@/views/SubjectPage.vue";
import MainView from "@/views/MainView.vue";
import FindAnswers from "@/views/FindAnswers.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/polyaider",
    name: "polyaider",
    component: MainView,
    children: [
      {
        path: "categories",
        name: "categories",
        component: Categories,
      },
      {
        path: "categories/:id",
        name: "SubjectPage",
        component: SubjectPage,
      },
      {
        path: "categories/online-courses/:id",
        name: "FindAnswers",
        component: FindAnswers,
      },
    ],
  },

  // {
  //   path: "/categories/online-courses/:id"
  //   name: "OnlineCourseAnswers"
  // }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

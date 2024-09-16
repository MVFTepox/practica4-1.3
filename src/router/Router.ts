import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/Home.vue";
import LoginPage from "../Views/LoginPage.vue";
import RegisterPage from "../Views/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem("user")) {
          next("/LoginPage");
        } else {
          next();
        }
      },
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/RegisterPage",
      name: "RegisterPage",
      component: RegisterPage,
    },
  ],
});

export default router;

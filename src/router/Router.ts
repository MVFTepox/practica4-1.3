import { createRouter, createWebHistory } from "vue-router";
import home from "../Views/Home.vue";
import LoginPage from "../Views/LoginPage.vue";
import RegisterPage from "../Views/RegisterPage.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: home,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("user")) {
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

export default routes;

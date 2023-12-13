import { createApp } from "vue";
import Home from "./views/Home.vue";
import DashboardHome from "./views/Dashboard/DashboardHome.vue";
import LoginPage from "./views/Auth/LoginPage.vue";
import RegisterPage from "./views/Auth/RegisterPage.vue";
import Index from "./views/Blog/Index.vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from "./components/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/dashboard",
    name: "dashboardhome",
    component: DashboardHome,
  },

  {
    path: "/blog",
    name: "BlogIndex",
    component: Index,
  },

  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },

  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },

  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app");

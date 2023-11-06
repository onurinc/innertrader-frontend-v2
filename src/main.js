import { createApp } from "vue";
import Home from "./views/Home.vue";
import DashboardHome from "./views/Dashboard/DashboardHome.vue";
import Login from "./views/Auth/Login.vue";
import Register from "./views/Auth/Register.vue";
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
    name: "Login",
    component: Login,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
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

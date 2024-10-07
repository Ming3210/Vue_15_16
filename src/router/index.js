import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import Register from "../views/Register.vue";
import ContactView from "../views/ContactView.vue";
import UserDetail from "@/views/UserDetail.vue";
import Product from "@/views/Product.vue";
import ProductReview from "@/views/ProductReview.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import Dashboard from "@/views/Dashboard.vue";
import Account from "@/views/Account.vue";
import Navbar from "@/views/Navbar.vue";
import ListUser from "@/views/ListUser.vue";
import ListEmployee from "@/views/ListEmployee.vue";
import EmployeeDetail from "@/views/EmployeeDetail.vue";
import ListProject from "@/views/ListProject.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/contact", component: ContactView },
  { path: "/list-user", component: ListUser },
  { path: "/employees", component: ListEmployee },
  {
    path: "/employees/:id",
    component: EmployeeDetail,
    children: [
      {
        path: "/employees/:id/project",
        component: ListProject,
      },
    ],
  },

  {
    path: "/navbar",
    component: Navbar,
    children: [
      { path: "/navbar/dashboard", component: Dashboard },
      { path: "/navbar/account", component: Account },
      {
        path: "/navbar/product",
        component: Product,
        children: [{ path: "review", component: ProductReview }],
      },
    ],
  },
  { path: "/user/:id", component: UserDetail },
  {
    path: "/navbar/product",
    component: Product,
    children: [{ path: "review", component: ProductReview }],
  },
  { path: "/:catchAll(.*)", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

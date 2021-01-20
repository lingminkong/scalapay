import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: {
      config: {
        type: Object
      }
    }
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    props: {
      cart: {
        type: Array
      },
      config: {
        type: Object
      }
    }
  },
  {
    path: "/product/:id",
    name: "Single Product",
    component: () => import("../views/SingleProduct.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

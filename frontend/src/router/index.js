import { createWebHistory, createRouter } from "vue-router";
import Booking from "@/views/Booking.vue";
const routes = [
  {
    path: "/",
    name: "booking",
    component: () => import("@/views/HomeBooking.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/products/:id",
    name: "product.edit",
    component: () => import("@/views/ProductEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/products/add",
    name: "product.add",
    component: () => import("@/views/ProductAdd.vue"),
    props: true,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Booking.vue"),
    props: true,
  },
  {
    path: "/passed",
    name: "passed",
    component: () => import("@/views/ProductPassed.vue"),
    props: true,
  },
  {
    path: "/intro",
    name: "intro",
    component: () => import("@/views/IntroBooking.vue"),
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;

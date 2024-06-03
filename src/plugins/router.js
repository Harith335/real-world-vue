import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: () => import("@/views/EventListView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/details/:id",
    name: "details",
    props: true,
    component: () => import("@/views/EventDetails.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

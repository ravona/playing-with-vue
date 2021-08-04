import { createRouter, createWebHistory } from "vue-router";

// pages:
import HomePage from "./pages/HomePage";
import ChartsPage from "./pages/ChartsPage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/charts", component: ChartsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

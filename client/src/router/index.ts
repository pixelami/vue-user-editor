import { createRouter, createWebHistory } from "vue-router";
import UserEditorView from "../views/UserEditorView.vue";
import UserStatsView from "../views/UserStatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/user/:id?",
      name: "user",
      component: UserEditorView,
      props: true,
    },
    {
      path: "/stats",
      name: "stats",
      component: UserStatsView,
      props: true,
    },
  ],
});

export default router;

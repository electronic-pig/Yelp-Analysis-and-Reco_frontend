import { createRouter, createWebHistory } from "vue-router";
import PortalView from "@/views/PortalView.vue";
import BusinessHome from "@/views/BusinessHome.vue";
import UserHome from "@/views/UserHome.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "PortalView",
      component: PortalView,
    },
    {
      path: "/BusinessHome",
      name: "BusinessHome",
      component: BusinessHome,
    },
    {
      path: "/UserHome",
      name: "UserHome",
      component: UserHome,
    },
  ],
});

export default router;